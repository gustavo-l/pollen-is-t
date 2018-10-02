import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'
import { SecureRoute } from 'react-route-guard'
import { httpClient } from '../common/util/http/common.http'
import { store } from './main.store'
import { tokenSelector } from './main.session'

const Loading = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return (
            <div>
                <h1>carregando</h1>
            </div>
        )
    }

    // Handle the error state
    else if (error) {
        return <div>Houve um problema ao carregar a página.</div>
    } else {
        return null
    }
}

/**
 * !IMPORTANTE: SEMPRE QUE TIVER UM COMPONENTE ACESSADO POR ROTA, USAR LOADABLE PARA CODE-SPLIT
 * ? COMO ULTILIZAR LOADABLE: const Componente = Loadable({loader: () => import('MODULO'), loading: Loading})
 * *Definições de rotas
 */

const LoginForm = Loadable({
    loader: () => import('../login/login.component'),
    loading: Loading
})

const SignupForm = Loadable({
    loader: () => import('../signup/signup.component'),
    loading: Loading
})

const User = Loadable({
    loader: () => import('../user/user.component'),
    loading: Loading
})

const Home = Loadable({
    loader: () => import('../home/home.component'),
    loading: Loading
})

const Product = Loadable({
    loader: () => import('../product/product.component'),
    loading: Loading
})

/**
 * *Switch: Força apenas uma rota ser renderizada
 * *SecureRoute: Rota segura, verifica autenticação através do ?RouteGuard
 *
 */

export const Routes = () => (
    <div>
        <Switch>
            <Route path="/login" exact strict component={LoginForm} />
            <Route path="/signup" exact strict component={SignupForm} />
            <Route path="/" exact strict component={Home} />
            <SecureRoute
                exact
                strict
                path="/user"
                component={User}
                routeGuard={RouteGuard}
                redirectToPathWhenFail="/login"
            />
            <SecureRoute
                exact
                strict
                path="/product"
                component={Product}
                routeGuard={RouteGuard}
                redirectToPathWhenFail="/login"
            />
        </Switch>
    </div>
)

/**
 * ?RouteGuard: Objeto com uma propriedade principal: shouldRoute: () => Boolean | Promise<Boolean>
 * *RouteGuard: Retorna um boolean sync/async determinando se a rota é acessível
 *
 */

/**
 * @property {function}
 */
const RouteGuard = {
    /**
     * @returns {Promise<Boolean>}
     */
    shouldRoute: () =>
        new Promise(async resolve => {
            try {
                await httpClient.get({
                    url: '/verify',
                    token: tokenSelector(store.getState())
                })
                resolve(true)
            } catch (err) {
                resolve(false)
            }
        })
}
