import { cn } from '~/lib/cn'
import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props<T> = Partial<{
	as: T

	x: number | string
	y: number | string

	full: boolean
	children: never
}>

type SpacerProps<T extends As = 'div'> = MergeWithHTMLProps<T, Props<T>>

const Spacer = <T extends As = 'div'>({ x, y, as, full, style, className, ...props }: SpacerProps<T>) => {
	const Comp = as || 'div'

	return (
		<Comp
			{...props}
			style={{
				...style,
				marginTop: y,
				marginLeft: x,
			}}
			className={cn('relative select-none', full ? 'flex-1 w-full' : '', className)}
		/>
	)
}

export { Spacer }
export type { SpacerProps }
