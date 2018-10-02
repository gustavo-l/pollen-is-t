import { SubmissionError } from 'redux-form'
import { httpClient } from '../common/util/http/common.http'
import { push } from 'connected-react-router'
/**
 * ?data: todos os campos do formulário
 * ?dispatch: dispatch do redux, injetado pelo redux-form
 */

export async function login(data, dispatch) {
    try {
        const response = await httpClient.post({
            url: '/auth',
            data,
            token: null
        })
        localStorage.setItem('token', response.data.token)
        dispatch({
            type: '@@session/TOKEN_SET',
            payload: { token: localStorage.getItem('token') }
        })
        dispatch(push('/'))
    } catch (err) {
        throw new SubmissionError({
            user: 'Usuario ou senha incorretos',
            password: ' '
        })
    }
}
