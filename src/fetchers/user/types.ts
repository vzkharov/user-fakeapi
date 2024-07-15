type Geolocation = {
	lat: string
	long: string
}

type AddressResponse = {
	geolocation: Geolocation
	city: string
	street: string
	number: number
	zipcode: string
}

type UserResponse = {
	id: number
	email: string
	phone: string
	username: string
	password: string
	address: AddressResponse
	name: {
		firstname: string
		lastname: string
	}
}

export type { Geolocation, UserResponse, AddressResponse }
