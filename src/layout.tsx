import type { ChildrenProp } from '~/lib/types'

import { Header } from './components/Header'

const Layout = ({ children }: ChildrenProp) => (
	<div className="relative mx-auto container min-h-screen flex flex-col pb-24 gap-y-4 md:gap-y-8 lg:gap-y-20">
		<Header />
		<main>{children}</main>
	</div>
)

export { Layout }
