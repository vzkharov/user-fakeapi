import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorComponent } from './error'
import { LoadingComponent } from './loading'
import { Component as ComponentQuery } from './component.query'
import { Component as ComponentPromise } from './component.promise'

const UserListPromise = () => (
	<ErrorBoundary fallback={<ErrorComponent />}>
		<Suspense fallback={<LoadingComponent />}>
			<ComponentPromise />
		</Suspense>
	</ErrorBoundary>
)

export { UserListPromise, ComponentQuery as UserListQuery }
