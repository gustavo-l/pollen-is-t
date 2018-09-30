import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'
import { SecureRoute } from 'react-route-guard'
import { httpClient } from '../common/util/http/common.http'
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

export const Routes = () => (
    <div>
        <Switch>
            <Route path="/login" exact strict component={LoginForm} />
            <Route path="/signup" exact strict component={SignupForm} />
            <SecureRoute
                path="/user"
                component={User}
                routeGuard={RouteGuard}
                redirectToPathWhenFail="/login"
            />
        </Switch>
    </div>
)

const RouteGuard = {
    shouldRoute: () =>
        new Promise(async resolve => {
            try {
                await httpClient.get({
                    url: '/verify',
                    token: localStorage.getItem('token')
                })
                resolve(true)
            } catch (err) {
                resolve(false)
            }
        })
}

/**SecureRoute path='/users' component={UserListComponent} routeGuard={UserRouteGuard} redirectToPathWhenFail='/login'  */
