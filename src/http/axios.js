import axios from 'axios'
const http = axios.create({
  baseURL: '/api/',
  timeout: 10000
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})
export default http

// import Vue from 'vue'
// import axios from 'axios'

// const config = {
//   // baseURL: 'http://localhost:8081/reagent',
//   // timeout: 60 * 1000,
//   // withCredentials: true,
//   // changeOrigin: true
//   baseURL: '/api/',
//   timeout: 10000
// }
// const _axios = axios.create(config)
// _axios.interceptors.request.use(
//   config => {
//     const token = sessionStorage.getItem('token')
//     if (
//       Object.prototype.hasOwnProperty.call(
//         config.headers.hasOwnProperty,
//         'token'
//       ) &&
//       token
//     ) {
//       config.headers.token = token
//     }
//     return config
//   },
//   function(error) {
//     return Promise.reject(error)
//   }
// )

// _axios.interceptors.response.use(
//   response => {
//     if (response.data.status === 403) {
//       this.$message.error(Response.data.message)
//       sessionStorage.removeItem('token')
//       this.$router.push('/login')
//     } else {
//       return response
//     }
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios
//   window.axios = _axios
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios
//       }
//     },
//     $axios: {
//       get() {
//         return _axios
//       }
//     }
//   })
// }

// Vue.use(Plugin)

// export default Plugin
