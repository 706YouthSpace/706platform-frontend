import axios from 'axios'

const http = axios.create({
  baseURL: 'api/',
  timeout: 10000
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default http
