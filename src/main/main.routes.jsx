import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'
import { SecureRoute } from 'react-route-guard'
import { store } from './main.store.js'

/**
 * !IMPORTANTE: SEMPRE QUE TIVER UM COMPONENTE ACESSADO POR ROTA, USAR LOADABLE PARA CODE-SPLIT
 * ? COMO ULTILIZAR LOADABLE: const Componente = Loadable({loader: () => import('MODULO'), loading: Loading})
 * *Definições de rotas
 */

const Loading = ({ error, retry }) => {
    if (error) {
        return (
            <div>
                Error! <button onClick={retry}>Retry</button>
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

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
                path="/"
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
            const { dispatch, getState } = store
            try {
                dispatch({
                    type: 'VERIFY_TOKEN',
                    payload: {
                        url: '/verify',
                        method: 'get',
                        success: () => resolve(true),
                        fail: () => resolve(false)
                    },
                    meta: {
                        api: true
                    }
                })
            } catch (err) {
                resolve(false)
            }
        })
}
