import { useState, useEffect, useContext, createContext, useCallback } from 'react'

import type { Provider } from '~/lib/types'

enum Theme {
	Dark = 'dark',
	Light = 'light',
}

type ThemeProviderState = {
	theme: Theme
	set: (theme: Theme) => void
	toggle: () => void
}

const initialState: ThemeProviderState = {
	theme: Theme.Dark,
	set: () => null,
	toggle: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

type ThemeProviderProps = {
	defaultTheme?: Theme
	storageKey?: string
}

const ThemeProvider: Provider<ThemeProviderProps> = ({
	children,
	storageKey = 'theme',
	defaultTheme = Theme.Dark,
	...props
}) => {
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

	const set = useCallback(
		(_theme: Theme) => {
			localStorage.setItem(storageKey, _theme)
			setTheme(_theme)
		},
		[storageKey],
	)

	const toggle = useCallback(() => set(theme === Theme.Dark ? Theme.Light : Theme.Dark), [theme, set])

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove(Theme.Light, Theme.Dark)
		root.classList.add(theme)
	}, [theme])

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={{
				set,
				theme,
				toggle,
			}}
		>
			{children}
		</ThemeProviderContext.Provider>
	)
}

const useTheme = () => {
	const ctx = useContext(ThemeProviderContext)

	if (!ctx) {
		throw new Error('`useTheme` must be used within a `ThemeProvider`')
	}

	return ctx
}

export { Theme, useTheme, ThemeProvider }
