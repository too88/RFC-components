import axios from 'axios'
import { BASE_API } from '~/libs/constants.ts'

const apiClient = axios.create({
  baseURL: BASE_API,
  paramsSerializer: (params) => {
    const processedParams = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => {
        return value !== undefined && value !== ''
      })
    )

    return new URLSearchParams(processedParams).toString()
  }
})

apiClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    return response?.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
