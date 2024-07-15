import { memo } from 'react'

import { UsersIcon } from '~/components/ui/icons'

const EmptyComponent = memo(() => (
	<div className="flex items-center justify-center h-[45svh]">
		<div className="space-y-4 text-center">
			<UsersIcon className="mx-auto h-12 w-12" />
			<h3 className="text-2xl font-semibold">No users yet</h3>
			<p className="text-muted-foreground">
				It looks like you there are not users with this query. Why don't you
				<br className="hidden sm:block" />
				change query string or refresh page?
			</p>
		</div>
	</div>
))

export { EmptyComponent }
