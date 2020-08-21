/**
 * @flow
 */

import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { env } from '../config'

export class Client {
  client: any

  authHeader: ?string

  constructor(client: any) {
    this.client = client
    this.authHeader = null
  }

  async request<T>(config: AxiosRequestConfig, auth: boolean = true): Promise<AxiosResponse<T>> {
    const response = await this.client.request(auth ? { ...config, headers: this.getHeader(config) } : config)
    return response
  }

  getHeader(config: AxiosRequestConfig) {
    if (config.headers) {
      return {
        ...config.headers,
        Authorization: `Bearer ${this.authHeader}`,
      }
    }

    return {
      Authorization: `Bearer ${this.authHeader}`,
    }
  }
}

const httpClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  maxRedirects: 0,
})

// eslint-disable-next-line no-undef
if (__DEV__) {
  httpClient.interceptors.request.use(
    (config) => {
      console.log('\n\n\n ---- BEGIN Request config ---- \n\n\n')
      console.log('Method', config.method)
      console.log('Url', config.url)
      console.log('Params', JSON.stringify(config.params))
      console.log('Data', JSON.stringify(config.data))
      console.log('Headers', JSON.stringify(config.headers))

      console.log('\n\n\n ---- END Request config ---- \n\n\n')
      return config
    },
    (error) => {
      console.log(JSON.stringify(error))
      return Promise.reject(error)
    }
  )

  httpClient.interceptors.response.use(
    (response) => {
      console.log('\n\n\n ---- BEGIN Response ---- \n\n\n')

      console.log('Config', JSON.stringify(response.config.url))
      console.log('Status', JSON.stringify(response.status))
      console.log('Data', JSON.stringify(response.data))

      console.log('\n\n\n ---- END Response ---- \n\n\n')
      return response
    },
    (error) => {
      console.log('\n\n\n ---- BEGIN Error ---- \n\n\n')

      console.log('Error', JSON.stringify(error))
      // $FlowExpectedError
      if (error.response) {
        console.log('Error Response', JSON.stringify(error.response))
      }

      console.log('\n\n\n ---- END Error ---- \n\n\n')
      return Promise.reject(error)
    }
  )
}

export default new Client(httpClient)
