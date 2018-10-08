import React from 'react'
import { Routes } from './main.routes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout, redirect, isAuthSelector } from '../main/main.session.reducer'
import { show } from 'redux-modal'
// import ModalCustom from '../common/components/modal/modal.component'

let Main = ({ isAuth, logout, redirect, handleOpen }) => (
    <div>
        <div>
            <Routes />
        </div>
    </div>
)
const mapStateToProps = state => ({
    isAuth: isAuthSelector(state)
})
const mapDispatchToProps = dispatch => ({
    logout: () => logout(dispatch),
    redirect: to => () => redirect(to, dispatch),
    handleOpen: name => () => dispatch(show(name))
})

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default withRouter(Main)
