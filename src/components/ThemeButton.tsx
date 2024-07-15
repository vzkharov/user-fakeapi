import React, { memo } from 'react'

import { Theme, useTheme } from '~/providers/ThemeProvider'

import { Button } from '~/components/ui/button'
import { SunIcon, MoonIcon, type IconProps } from '~/components/ui/icons'

const ThemeButton = memo(() => {
	const { theme, toggle } = useTheme()

	const Icon = ICON_BY_THEME[theme]
	const hint = `Switch to ${theme === Theme.Light ? Theme.Dark : Theme.Light} mode`

	return (
		<Button
			size="icon"
			variant="ghost"
			title={hint}
			onClick={toggle}
			aria-label={hint}
		>
			{<Icon className="h-5 w-5" />}
		</Button>
	)
})

const ICON_BY_THEME: Record<Theme, React.FC<IconProps>> = {
	[Theme.Dark]: SunIcon,
	[Theme.Light]: MoonIcon,
}

export { ThemeButton }
