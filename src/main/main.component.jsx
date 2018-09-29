import React from 'react'

import { Routes } from './main.routes'
import { withRouter } from 'react-router'
import { AppBar } from '../common/components/appbar/appbar.component'
const Main = props => (
    <div>
        <AppBar />
        <div>
            <Routes />
        </div>
    </div>
)
export default withRouter(Main)
