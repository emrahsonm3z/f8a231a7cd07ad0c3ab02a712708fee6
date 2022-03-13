import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { ACCESS_TOKEN, API_URL } from '~/constants'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let newConfig: AxiosRequestConfig = { ...config }
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
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // eslint-disable-next-line no-console
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): any => {
  // eslint-disable-next-line no-console
  console.debug('[response successfully]', response)
  return response.status === 200 ? response.data : []
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // eslint-disable-next-line no-console
  console.error(`[response error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest'
}

export const request = setupInterceptorsTo(
  axios.create({
    baseURL: API_URL,
    headers
  })
)
