import { SubmissionError } from 'redux-form'
import { httpClient } from '../common/util/http/common.http'

export async function login(data) {
	try {
		const response = await httpClient.post({
			url: '/auth',
			data,
			token: null
		})
		localStorage.setItem('token', response.data.token)
	} catch (err) {
		throw new SubmissionError({
			user: 'Usuario ou senha incorretos',
			password: ' '
		})
	}
}
