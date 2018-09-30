import { SubmissionError } from 'redux-form'
import { httpClient } from '../common/util/http/common.http'

export async function login(data) {
	try {
		alert(JSON.stringify(data))
		const response = await httpClient.post({ url: '/auth', data })
		alert(JSON.stringify(response.data))
		localStorage.setItem('token', response.data.token)
	} catch (err) {
		throw new SubmissionError({
			user: 'Usuario ou senha incorretos',
			password: ' '
		})
	}
}
