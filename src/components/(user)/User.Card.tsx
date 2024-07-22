import { memo, useMemo } from 'react'

import { cn } from '~/lib/cn'
import type { MergeWithHTMLProps } from '~/lib/types'

import type { User } from '~/entities/user'

import { Card } from '~/components/ui/card'
import { IconText } from '~/components/ui/icon-text'
import { Separator } from '~/components/ui/separator'
import { Avatar, AvatarFallback } from '~/components/ui/avatar'
import { PhoneIcon, LocateIcon, MailOpenIcon } from '~/components/ui/icons'

import styles from './styles.module.css'

type UserCardProps = MergeWithHTMLProps<
	'article',
	User & {
		selected?: boolean
	}
>

const UserCard = memo<UserCardProps>(({ style, className, onClick, selected = false, ...user }) => {
	const userInfo = useMemo(
		() => [
			{ Icon: MailOpenIcon, text: user.email },
			{ Icon: PhoneIcon, text: user.phone },
			{ Icon: LocateIcon, text: user.address },
		],
		[user.phone, user.email, user.address],
	)

	return (
		<Card
			style={style}
			onClick={onClick}
			className={cn(styles.card, selected ? '!border-foreground' : '', className)}
		>
			<div className={styles.card__header}>
				<Avatar className={styles.user__avatar}>
					<AvatarFallback>{user.avatarText.toUpperCase()}</AvatarFallback>
				</Avatar>

				<div className="flex-1 min-w-0">
					<h3 className={styles.user__fullname}>{user.fullname}</h3>
					<p className={styles.user__name}>@{user.username}</p>
				</div>
			</div>

			<Separator />

			<div className={styles.card__body}>
				{userInfo.map(({ text, Icon }) => (
					<IconText
						text={text}
						icon={<Icon className="h-4 w-4" />}
					/>
				))}
			</div>
		</Card>
	)
})

export { UserCard }
export type { UserCardProps }
