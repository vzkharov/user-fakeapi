import { isNullable } from './boolean'

type QueryParams = Record<string, string | symbol | number | boolean | undefined | null>

const createQueryString = (params: QueryParams = {}) => {
	const filteredParams = Object.entries(params).filter(([, value]) => !isNullable(value))

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const paramsString = new URLSearchParams(filteredParams).toString()

	return paramsString
}

const createUri = (url: string, params: QueryParams = {}) => {
	const paramsString = createQueryString(params)
	return [url, '?', paramsString].join('')
}

export { createUri, createQueryString }
export type { QueryParams }
