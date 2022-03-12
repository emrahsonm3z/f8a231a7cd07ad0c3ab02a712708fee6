import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'

import { ACCESS_TOKEN, API_URL } from '~/constants'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest'
}

// We can use the following function to inject the JWT token through an interceptor
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let newConfig: AxiosRequestConfig = { ...config }
  try {
    const token = ACCESS_TOKEN

    if (token != null) {
      newConfig = {
        ...newConfig,
        headers: {
          ...config.headers,
          'X-Access-Token': token
        }
      }
    }
    return newConfig
  } catch (error) {
    throw new Error('ACCESS TOKEN NOT FOUND')
  }
}

class Http {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: API_URL,
      headers
    })

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        const { response } = error
        return this.handleError(response)
      }
    )

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    let newConfig: AxiosRequestConfig = { ...config }

    if (typeof config.params !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { params, ...otherOptions } = config
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const query = queryString.stringify(params, {
        arrayFormat: 'index'
      })

      newConfig = {
        ...otherOptions,
        url: `${config.url}?${query}`
      }
    }

    return this.http.get<T, R>(url, newConfig)
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  // eslint-disable-next-line class-methods-use-this
  private handleError(error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { status } = error

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break
      }

      default: {
        // Default
        break
      }
    }

    return Promise.reject(error)
  }
}

export const request = new Http()
