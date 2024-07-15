import { createUri } from '~/utils/url'

enum FetchMethod {
	GET = 'GET',
	PUT = 'PUT',
	POST = 'POST',
	DELETE = 'DELETE',
}

type FetchOptions = Omit<RequestInit, 'body' | 'method'> & {
	body?: object | BodyInit
	method?: keyof typeof FetchMethod
	headers?: Headers

	params?: Record<string, string | number | boolean | symbol | undefined | null>
}

const fetchJSON = async <T>(
	url: string,
	{ body, method, params, headers, ...props }: FetchOptions = { method: FetchMethod.GET },
) => {
	const uri = createUri(url, params)

	const options = {
		...props,
		method,
		headers,
		body: JSON.stringify(body),
	}

	const res = await fetch(uri, options)

	if (!res.ok) {
		throw new Error('Failed to fetch data:' + JSON.stringify(options))
	}

	return res.json() as unknown as T
}

const createFetch =
	(baseUrl: string): typeof fetchJSON =>
	(path, opts) =>
		fetchJSON([baseUrl, path].join(''), opts)

export { fetchJSON, createFetch, FetchMethod }
export type { FetchOptions }
