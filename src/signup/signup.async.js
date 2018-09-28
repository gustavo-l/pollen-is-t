import { SubmissionError } from 'redux-form'
import { httpClient } from '../common/util/http/common.http'
export async function signup(data) {
    try {
        const { user, firstname, lastname, password, email } = data
        const response = await httpClient.post({
            url: '/user',
            data: {
                user,
                firstname,
                lastname,
                password,
                email,
                register: null,
                confirmed: false
            },
            token: null
        })
        console.log(response.data)
    } catch (err) {
        console.log(err)
        throw new SubmissionError({
            password: 'Usuario ou senha incorretos'
        })
    }
}
