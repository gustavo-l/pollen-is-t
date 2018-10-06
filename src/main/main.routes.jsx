import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'
import { SecureRoute } from 'react-route-guard'
import { httpClient } from '../common/util/http/common.http'
import { store } from './main.store'
import { tokenSelector } from './main.session'
import { Loading } from './main.loading'

/**
 * !IMPORTANTE: SEMPRE QUE TIVER UM COMPONENTE ACESSADO POR ROTA, USAR LOADABLE PARA CODE-SPLIT
 * ? COMO ULTILIZAR LOADABLE: const Componente = Loadable({loader: () => import('MODULO'), loading: Loading})
 * *Definições de rotas
 */

const LoginForm = Loadable({
    loader: () => import('../login/login.component'),
    loading: Loading
})

const Home = Loadable({
    loader: () => import('../home/home.component'),
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
            <SecureRoute
                exact
                strict
                path="/home"
                component={Home}
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
