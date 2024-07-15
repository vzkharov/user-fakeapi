import { useState, useEffect } from 'react'

const useSimpleQuery = <D>(queryFn: (signal: AbortSignal) => Promise<D>) => {
	const [data, setData] = useState<D | null>(null)
	const [error, setError] = useState<unknown>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const controller = new AbortController()

		setError(null)
		setLoading(true)

		queryFn(controller.signal)
			.then((data) => {
				if (controller.signal.aborted) {
					return
				}

				setData(data)
			})
			.catch((_error) => {
				if (controller.signal.aborted) {
					return
				}
				setError(_error)
			})
			.finally(() => {
				if (controller.signal.aborted) {
					return
				}
				setLoading(false)
			})

		return () => {
			controller.abort()
		}
	}, [])

	return { data, error, loading }
}

export { useSimpleQuery }
