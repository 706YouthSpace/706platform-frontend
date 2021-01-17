import axios from './axios'

export function getProfile(id) {
  return axios.get('/profile/' + id)
}
export function signIn(data) {
  return axios.post('/signin', data)
}
