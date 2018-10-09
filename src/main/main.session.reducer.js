import { push } from 'connected-react-router'
import { store } from './main.store.js'
import { createSelector } from 'reselect'
export const session = (
    state = {
        token: localStorage.getItem('token')
    },
    action
) => {
    switch (action.type) {
        case 'TOKEN_SET': {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case 'TOKEN_CLEAR': {
            return {
                ...state,
                token: null
            }
        }

        default:
            return state
    }
}

export const tokenSelector = state => state.session.token
export const isAuthSelector = createSelector(
    tokenSelector,
    token => token !== null
)
export const setToken = token => {
    localStorage.setItem('token', token)
    store.dispatch({ type: '[TOKEN] TOKEN_SET', payload: { token } })
}
export const logout = () => {
    localStorage.removeItem('token')
    store.dispatch(push('/login'))
    store.dispatch({ type: '[TOKEN] TOKEN_CLEAR' })
    store.dispatch({ type: '[TOKEN] LOGOUT' })
}
export const redirect = to => store.dispatch(push(to))
