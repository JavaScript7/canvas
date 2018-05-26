import user from './user/user'

const api = {
  postLogin: '/api/auth/login',
  postLogout: '/api/logout',
  ...user
}

export default api
