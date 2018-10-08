import { push } from 'connected-react-router'
import { createSelector } from 'reselect'

export const session = (
    state = {
        token: localStorage.getItem('token')
    },
    action
) => {
    switch (action.type) {
        case '@@session/TOKEN_SET': {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case '@@session/TOKEN_CLEAR': {
            localStorage.clear()
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
export const logout = dispatch => {
    dispatch(push('/login'))
    dispatch({ type: '@@session/TOKEN_CLEAR' })
}
export const redirect = (to, dispatch) => dispatch(push(to))
