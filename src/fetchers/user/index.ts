import { fetchFakeStore, type FetchOptions } from '~/lib/api'

import type { UserResponse } from './types'
import { transformUserResponse } from './utils'

const fetchUsers = (limit?: number | string, opts?: FetchOptions) =>
	fetchFakeStore<UserResponse[]>('/users', {
		...opts,
		params: { limit },
	}).then((users) => users.map(transformUserResponse))

const fetchUserById = (id: number, opts?: FetchOptions) =>
	fetchFakeStore<UserResponse>(`/users/${id}`, opts).then(transformUserResponse)

export { fetchUsers, fetchUserById }
