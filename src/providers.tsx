import type { Provider } from '~/lib/types'

import { ThemeProvider } from '~/providers/ThemeProvider'

const Providers: Provider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

export { Providers }
