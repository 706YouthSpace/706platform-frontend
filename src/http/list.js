import axios from './axios'

export function getCaptcha (phone) {
  return axios.get('/captcha/register', {
    params: {
      phoneNumber: phone
    }
  })
}

export function sendCode (code) {
  return axios.post('/captcha/validate', {
    code
  })
}

export function signUp (data) {
  return axios.post('/signup', data)
}

export function signUpPhone (data) {
  return axios.post('/signup/phone', data)
}
