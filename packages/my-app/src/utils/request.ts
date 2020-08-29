import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

instance.interceptors.request.use(
  function (config) {
    config.headers.authorization = ''
    return config
  },
  function (error) {
    throw error
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    throw error
  }
)

export default instance
