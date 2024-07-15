import { memo } from 'react'

import { cn } from '~/lib/cn'
import { StyleProps } from '~/lib/types'

import { MailIcon, GithubIcon, MountainIcon } from '~/components/ui/icons'

import { ThemeButton } from './ThemeButton'

const Header = memo<StyleProps>(({ style, className }) => (
	<header
		style={style}
		className={cn(
			'sticky top-0 z-50 w-full h-16 flex items-center justify-between bg-background',
			className,
		)}
	>
		<a
			href="/"
			className="flex items-center gap-2"
		>
			<MountainIcon className="h-6 w-6" />
			<span className="text-lg font-medium">vzkharov</span>
		</a>
		<div className="flex items-center gap-4">
			{[LINKS.github, LINKS.mail].map(({ id, href, title, Icon }) => (
				<a
					key={id}
					href={href}
					aria-label={title}
					className="text-muted-foreground hover:text-foreground"
				>
					<Icon className="h-5 w-5" />
				</a>
			))}

			<ThemeButton />
		</div>
	</header>
))

const LINKS = {
	github: {
		id: 'github',
		href: 'https://github.com/vzkharov/realmond#README',
		title: 'GitHub',
		Icon: GithubIcon,
	},
	mail: {
		id: 'mail',
		href: 'mailto:zakharovvadzim@gmail.com',
		title: 'Email',
		Icon: MailIcon,
	},
} as const

export { Header }
