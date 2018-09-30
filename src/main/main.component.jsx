import React from 'react'

import { Routes } from './main.routes'
import { withRouter } from 'react-router'
import {
	Navbar,
	Navitem,
	NavitemDropdown
} from '../common/components/navbar/navbar.component'
const Main = props => (
	<div>
		<Navbar logo="../../public/img/Pollen.svg">
			<Navitem label="Configurações" />
			<Navitem label="Ajuda" />
			<Navitem label="Loja Admin" />
			<Navitem label="Loja Comerciante" />
			<Navitem label="Cliente" />
		</Navbar>
		<div>
			<Routes />
		</div>
	</div>
)
export default withRouter(Main)
