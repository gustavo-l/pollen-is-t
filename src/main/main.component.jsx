import React from 'react'

import { Routes } from './main.routes'
import { withRouter } from 'react-router'
import { Navbar, Navitem } from '../common/components/navbar/navbar.component'
const Main = props => (
<<<<<<< HEAD
	<div>
		<div>
			<Routes />
		</div>
	</div>
=======
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
>>>>>>> 042cd61b1c52fcef4e338c769ac325ae920acbf8
)
export default withRouter(Main)
