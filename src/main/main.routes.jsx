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

const LoginForm = Loadable({
    loader: () => import('../login/login.component'),
    loading: Loading
})
const SignupForm = Loadable({
    loader: () => import('../signup/signup.component'),
    loading: Loading
})

export const Routes = () => (
    <div>
        <Switch>
            <Route path="/login" exact strict component={LoginForm} />
            <Route path="/signup" exact strict component={SignupForm} />
        </Switch>
    </div>
)
