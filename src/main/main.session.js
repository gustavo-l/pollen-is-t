import { push } from 'connected-react-router'

export const session = (
    state = {
        isAuth: localStorage.getItem('token') !== null,
        token: localStorage.getItem('token')
    },
    action
) => {
    switch (action.type) {
        case '@@session/TOKEN_SET': {
            return {
                ...state,
                isAuth: true,
                token: action.payload.token
            }
        }
        case '@@session/TOKEN_CLEAR': {
            localStorage.clear()
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }

        default:
            return state
    }
}

export const tokenSelector = state => state.session.token
export const isAuthSelector = state => state.session.isAuth

export const logout = dispatch => {
    dispatch(push('/login'))
    dispatch({ type: '@@session/TOKEN_CLEAR' })
}
export const redirect = (to, dispatch) => dispatch(push(to))
