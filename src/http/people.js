import axios from './axios'

export function getProfile (id) {
  return axios.get('/profile/' + id)
}
