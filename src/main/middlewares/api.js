const baseUrl = 'http://api.hml.pollen.is:3000'
// const baseUrl = 'https://jsonplaceholder.typicode.com'
import axios from 'axios'

const apiSuccessAction = ({ type, data }) => ({
    type,
    payload: {
        data,
        pending: false
    }
})
const apiPendingAction = ({ type }) => ({
    type,
    payload: {
        pending: true
    }
})
const apiFailAction = ({ type, error }) => ({
    type,
    payload: { pending: false },
    error
})

export const api = ({ getState, dispatch }) => next => async action => {
    if (!action.meta || !action.meta.api) return next(action)
    else {
        next(action)
        const { url, method, params, data } = action.payload
        const { pending, success, fail } = action.payload
        try {
            dispatch(
                apiPendingAction({
                    type: `${action.type}_PENDING`
                })
            )
            if (pending) pending()
            const response = await axios({
                url: `${baseUrl}${url}`,
                method,
                params,
                data,
                headers: {
                    lang: 'pt-br',
                    'x-application-type': 'application/json',
                    'x-access-token': localStorage.getItem('token')
                }
            })
            dispatch(
                apiSuccessAction({
                    type: `${action.type}_SUCCESS`,
                    data: response
                })
            )
            if (success) success()
        } catch (error) {
            dispatch(
                apiFailAction({
                    type: `${action.type}_FAIL`,
                    error: error.response
                })
            )
            if (fail) fail()
        }
    }
}
