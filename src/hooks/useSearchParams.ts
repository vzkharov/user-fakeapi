import debounceFn from 'lodash.debounce'
import { useState, useCallback } from 'react'

import { isNullable } from '~/utils/boolean'

type UseSearchParamOptions = {
	debounce?: number
}

const useSearchParam = (key: string, { debounce }: UseSearchParamOptions = { debounce: 100 }) => {
	const [query, setQuery] = useState(new URLSearchParams(window.location.search).get(key))

	const updateQuery = useCallback(
		debounceFn((value: unknown) => {
			const searchParams = new URLSearchParams(window.location.search)

			isNullable(value) ? searchParams.set(key, '') : searchParams.set(key, String(value))

			const newQueryString = searchParams.toString()

			window.history.pushState(null, '', `${window.location.pathname}?${newQueryString}`)

			setQuery(new URLSearchParams(window.location.search).get(key))
		}, debounce),
		[debounce],
	)

	return [query || '', updateQuery] as const
}

export { useSearchParam }
