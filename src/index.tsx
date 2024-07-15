import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { Layout } from './layout'
import { Providers } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<Layout>
				<App />
			</Layout>
		</Providers>
	</React.StrictMode>,
)
