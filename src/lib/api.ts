import { createFetch, type FetchOptions } from '~/lib/fetch'

const fetchFakeStore = createFetch('https://fakestoreapi.com')

/**
 * @future add other api...
 */

export { fetchFakeStore }
export type { FetchOptions }
