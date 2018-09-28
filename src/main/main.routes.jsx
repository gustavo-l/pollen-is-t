import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'

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

const Login = Loadable({
    loader: () => import('../login/login.component'),
    loading: Loading
})

export const Routes = () => (
    <div>
        <Switch>
            <Route to="/login" component={Login} />
        </Switch>
    </div>
)
