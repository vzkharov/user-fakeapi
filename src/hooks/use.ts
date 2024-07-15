enum PromiseStatus {
	ERROR = 'error',
	PENDING = 'pending',
	FULFILLED = 'success',
}

const cache = new Map()

function wrapPromise<T>(promise: Promise<T>) {
	let result: unknown
	let status = PromiseStatus.PENDING

	// eslint-disable-next-line prefer-const
	let suspender = promise.then(
		(r) => {
			status = PromiseStatus.FULFILLED
			result = r
		},
		(e) => {
			status = PromiseStatus.ERROR
			result = e
		},
	)

	return {
		read() {
			if (status === PromiseStatus.PENDING) {
				throw suspender
			} else if (status === PromiseStatus.ERROR) {
				throw result
			} else if (status === PromiseStatus.FULFILLED) {
				return result
			}
		},
	}
}

const use = <T>(promise: Promise<T>) => {
	if (!cache.has(promise)) {
		const wrappedPromise = wrapPromise<T>(promise)
		cache.set(promise, wrappedPromise)
	}

	return cache.get(promise).read() as T
}

export { use }
