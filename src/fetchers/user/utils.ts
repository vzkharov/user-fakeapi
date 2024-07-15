import type { User } from '~/entities/user'

import type { UserResponse } from './types'

const transformUserResponse = (userResponse: UserResponse): User => ({
	id: userResponse.id,
	email: userResponse.email,
	phone: userResponse.phone,
	username: userResponse.username,
	avatarText: userResponse.name.lastname[0] + userResponse.name.firstname[0],

	address: [userResponse.address.street, userResponse.address.city].join(', '),
	fullname: [userResponse.name.lastname, userResponse.name.firstname].join(' '),
})

export { transformUserResponse }
