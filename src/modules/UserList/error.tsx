import { memo } from 'react'

import { ReloadButton } from '~/components/ReloadButton'

const ErrorComponent = memo(() => (
	<div className="flex min-h-[60svh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
		<div className="mx-auto max-w-md text-center">
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				Oops, something went wrong!
			</h1>
			<p className="mt-4 text-muted-foreground">
				We're sorry, but there was an error while fetching user data. Please try again later.
			</p>
			<ReloadButton className="mt-6" />
		</div>
	</div>
))

export { ErrorComponent }
