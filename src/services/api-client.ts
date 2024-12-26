import axios from 'axios'

const apiClient = axios.create({
  baseURL: "",
  paramsSerializer: (params) => {
    const processedParams = Object.fromEntries(
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
