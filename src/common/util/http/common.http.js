import axios from 'axios'
import { Agent as HttpAgent } from 'http'
import { Agent as HttpsAgent } from 'https'

class HttpClient {
    setHeaders = token => ({
        lang: 'pt-br',
        'x-application-type': 'application/json',
        'x-access-token': token
    })

    constructor(token) {
        this.instance = axios.create({
            //60 sec timeout
            timeout: 60000,
            baseURL: ' http://api.hml.pollen.is:3000',

            //keepAlive pools and reuses TCP connections, so it's faster
            httpAgent: new HttpAgent({ keepAlive: true }),
            httpsAgent: new HttpsAgent({ keepAlive: true }),

            //follow up to 10 HTTP 3xx redirects
            maxRedirects: 10,

            //cap the maximum content length we'll accept to 50MBs, just in case
            maxContentLength: 50 * 1000 * 1000,
            headers: this.setHeaders(token)
        })
    }

    get({ url, params, token }) {
        return new Promise(async (resolve, reject) => {
            try {
                const response =
                    typeof params === 'undefined'
                        ? await this.instance.get(url, {
                              params,
                              headers: this.setHeaders(token)
                          })
                        : await this.instance.get(url, {
                              headers: this.setHeaders(token)
                          })
                resolve(response)
            } catch (err) {
                reject(err)
            }
        })
    }
    post({ url, data, token }) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await this.instance.post(url, data, {
                        headers: this.setHeaders(token)
                    })
                )
            } catch (err) {
                reject(err)
            }
        })
    }
    put({ url, data, token }) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await this.instance.put(url, data, {
                        headers: this.setHeaders(token)
                    })
                )
            } catch (err) {
                reject(err)
            }
        })
    }
    patch({ url, data, token }) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await this.instance.patch(url, data, {
                        headers: this.setHeaders(token)
                    })
                )
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const httpClient = new HttpClient(localStorage.getItem('token'))