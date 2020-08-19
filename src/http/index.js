import axios from 'axios'
import config from '../config'

const http = axios.create({
  baseUrl: config.babel,
  timeout: 10000
})

export default http
