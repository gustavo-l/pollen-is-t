import React from 'react'

import { Routes } from './main.routes'
import { withRouter } from 'react-router'
const Main = props => (
	<div>
		<div>
			<Routes />
		</div>
	</div>
)
export default withRouter(Main)
