import React from 'react'
import { Routes } from './main.routes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout, redirect, isAuthSelector } from '../main/main.session.reducer'
import { show } from 'redux-modal'
// import ModalCustom from '../common/components/modal/modal.component'

let Main = () => (
    <div>
        <div>
            <Routes />
        </div>
    </div>
)

export default withRouter(Main)
