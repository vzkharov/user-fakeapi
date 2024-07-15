import { useMemo } from 'react'

import { fetchUsers } from '~/fetchers/user'
import { useUserSearch } from '~/features/user/useUserSearch'
import { selectUserBySearchString } from '~/features/user/selectors'

import { use } from '~/hooks/use'

import { Input } from '~/components/ui/input'
import { UserCard } from '~/components/(user)/User.Card'

import { EmptyComponent } from './empty'

import styles from './styles.module.css'

const promise = fetchUsers(9)

const Component = () => {
	const data = use(promise)
	const [query, onChange] = useUserSearch()

	const filteredData = useMemo(
		() => selectUserBySearchString(data, query, ['phone', 'email', 'username', 'fullname', 'address']),
		[data, query],
	)

	return (
		<div className={styles.container}>
			<Input
				onChange={onChange}
				defaultValue={query}
			/>
			{filteredData.length ? (
				<section className={styles.list}>
					{filteredData.map((user) => (
						<UserCard
							key={user.id}
							{...user}
						/>
					))}
				</section>
			) : (
				<EmptyComponent />
			)}
		</div>
	)
}

export { Component }
