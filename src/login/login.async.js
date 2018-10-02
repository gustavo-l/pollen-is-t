import { SubmissionError } from 'redux-form'
import { httpClient } from '../common/util/http/common.http'

/**
 * ?data: todos os campos do formulário
 */

export async function login(data, dispatch) {
    try {
        alert(JSON.stringify(data))
        const response = await httpClient.post({
            url: '/auth',
            data,
            token: null
        })
        alert(JSON.stringify(response.data))
        localStorage.setItem('token', response.data.token)
        dispatch({
            type: '@@session/TOKEN_SET',
            payload: { token: localStorage.getItem('token') }
        })
    } catch (err) {
        throw new SubmissionError({
            user: 'Usuario ou senha incorretos',
            password: ' '
        })
    }
}
