import { useMemo } from 'react'

import { useUsers } from '~/features/user/useUsers'
import { useUserSearch } from '~/features/user/useUserSearch'
import { selectUserBySearchString } from '~/features/user/selectors'

import { Input } from '~/components/ui/input'
import { UserCard } from '~/components/(user)/User.Card'

import { ErrorComponent } from './error'
import { EmptyComponent } from './empty'
import { LoadingComponent } from './loading'

import styles from './styles.module.css'

const Component = () => {
	const { data, loading, error } = useUsers()
	const [query, onChange] = useUserSearch()

	const filteredData = useMemo(
		() =>
			data
				? selectUserBySearchString(data, query, [
						'phone',
						'email',
						'username',
						'fullname',
						'address',
					])
				: [],
		[data, query],
	)

	if (loading) {
		return <LoadingComponent />
	}

	if (error) {
		return <ErrorComponent />
	}

	return (
		<div className={styles.container}>
			<Input
				onChange={onChange}
				defaultValue={query}
			/>
			{filteredData.length ? (
				<section className={styles.list}>
					{filteredData?.map((user) => (
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
