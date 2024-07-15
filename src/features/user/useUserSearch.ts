import { useCallback } from 'react'

import { useSearchParam } from '~/hooks/useSearchParams'

const QUERY_KEY = 'q'

const useUserSearch = () => {
	const [query, updateQuery] = useSearchParam(QUERY_KEY, { debounce: 100 })

	const onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => updateQuery(event.target.value),
		[updateQuery],
	)

	return [query, onChange] as const
}

export { useUserSearch }
