import React from 'react'

import { Routes } from './main.routes'
import { withRouter } from 'react-router'
const Main = props => (
    <div>
        <h1>Heading</h1>
        <div>
            <Routes />
        </div>
    </div>
)
export default withRouter(Main)
