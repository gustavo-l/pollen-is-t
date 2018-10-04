import React from 'react'
import Loadable from 'react-loadable'
import { Routes, Loading } from './main.routes'
import { isAuthSelector } from '../main/main.session'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Navbar, Navitem } from '../common/components/navbar/navbar.component'
import { logout, redirect } from '../main/main.session'
// import ModalCustom from '../common/components/modal/modal.component'

const ModalCustom = Loadable({
    loader: () => import('../common/components/modal/modal.component'),
    loading: Loading
})

let Main = ({ isAuth, logout, redirect }) => (
    <div>
        {isAuth ? (
            <Navbar
                logo="../../public/img/Pollen.svg"
                menu="../../public/img/Menu.svg"
            >
                <Navitem label="Usuarios" onClick={redirect('/user')} />
                <Navitem label="Produtos" onClick={redirect('/product')} />
                <Navitem label="Sair" onClick={logout} />
            </Navbar>
        ) : (
            <Navbar
                logo="../../public/img/Pollen.svg"
                menu="../../public/img/Menu.svg"
            >
                <Navitem label="Seja um florista" />
                <Navitem label="Ajuda" />
                <Navitem label="Cadastre-se" onClick={redirect('/signup')} />
                <Navitem label="Entrar" onClick={redirect('/login')} />
            </Navbar>
        )}
        <div>
            <ModalCustom />
        </div>
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
    redirect: to => () => redirect(to, dispatch)
})

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default withRouter(Main)
