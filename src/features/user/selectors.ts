import fuzzysearch from 'fuzzysearch'

import type { User } from '~/entities/user'

const selectUserBySearchString = (users: User[], query: string, fields: (keyof User)[] = []) => {
	if (!query) {
		return users
	}

	return users.filter((_user) => {
		const queryLowerCase = query.toLocaleLowerCase()

		if (!fields.length) {
			return true
		}

		return fields.some((field) => fuzzysearch(queryLowerCase, _user[field].toString().toLocaleLowerCase()))
	})
}

export { selectUserBySearchString }
