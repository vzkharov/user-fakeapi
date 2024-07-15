import { memo } from 'react'

import { Button, type ButtonProps } from '~/components/ui/button'

type ReloadButtonProps = Omit<ButtonProps, 'children' | 'onClick'>

const ReloadButton = memo<ReloadButtonProps>((props) => (
	<Button
		{...props}
		onClick={() => window.location.reload()}
	>
		Refresh
	</Button>
))

export { ReloadButton }
export type { ReloadButtonProps }
