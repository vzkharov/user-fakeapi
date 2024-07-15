import { memo } from 'react'

import { Skeleton } from '~/components/ui/skeleton'
import { UserSkeleton } from '~/components/(user)/User.Skeleton'

import styles from './styles.module.css'

const LoadingComponent = memo(() => (
	<div className={styles.container}>
		<Skeleton className="w-full h-10" />
		<section className={styles.list}>
			{new Array(9).fill(0).map((_, idx) => (
				<UserSkeleton key={idx} />
			))}
		</section>
	</div>
))

export { LoadingComponent }
