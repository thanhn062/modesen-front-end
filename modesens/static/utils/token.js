import cookie from 'cookie-universal-nuxt'

export const setToken = (token) => cookie.set('token', token)