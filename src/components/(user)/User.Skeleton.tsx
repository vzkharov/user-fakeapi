import { memo } from 'react'

import { cn } from '~/lib/cn'
import type { StyleProps } from '~/lib/types'

import { Card } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'
import { Separator } from '~/components/ui/separator'

import styles from './styles.module.css'

const UserSkeleton = memo<StyleProps>(({ style, className }) => (
	<Card
		style={style}
		className={cn(styles.card, className)}
	>
		<div className={styles.card__header}>
			<Skeleton className={styles.user__avatar} />

			<div className="flex-1 space-y-2">
				<Skeleton className="h-4 w-1/3" />
				<Skeleton className="h-4 w-2/3" />
			</div>
		</div>

		<Separator />

		<div className={styles.card__body}>
			<Skeleton className="h-4 w-1/2" />
			<Skeleton className="h-4 w-1/3" />
			<Skeleton className="h-4 w-2/3" />
		</div>
	</Card>
))

export { UserSkeleton }
