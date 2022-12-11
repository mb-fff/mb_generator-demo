import httpLogin from '@/api/httpLogin'
import { Storage } from './storage'

const storageS = new Storage('session')

// 判断用户是否登陆
const remoteLogin = async () => {
  const res = await httpLogin.remoteLogin({})
  // 登陆成功
  setSession(res)
}
// 向网关发起认证，获取用户信息
const getUserInfo = async (params: any) => {
  const res = await httpLogin.getUserInfo(params)
  setSession(res)
}
// 缓存用户信息
const setSession = (session: any) => {
  // 缓存
  storageS.set('sessionData', session)
  // 跳转地址
  location.href = location.href.split('?code=')[0]
}
// 登录校验
export const isAuth = async () => {
  // 判断当前url中是否携带code值，该code值用于向网关发起认证请求
  const href = location.href

  if (href.includes('code')) {
    const codes = href.split('?code=')

    const params = {

    }

    getUserInfo(params)
  } else {
    // 无code，判断是否登录
    remoteLogin()
  }
}
// 跳转登录页
export const jumpLogin = (response: any) => {
  localStorage.clear()
  sessionStorage.clear()

  const redirectUri = ''

  // window.location.href = redirectUri
}
// 退出登陆
export const logout = async () => {
  const { loginNo } = storageS.get('sessionData')
  const res = await httpLogin.oauth2Out({ loginNo })
  if (res.status === '1') {
    const uri = res.authserverUrl + '?redirect_uri=' + location.href
    location.href = uri
    localStorage.clear()
    sessionStorage.clear()
  } else {
    localStorage.clear()
    sessionStorage.clear()
    location.reload()
  }
}
