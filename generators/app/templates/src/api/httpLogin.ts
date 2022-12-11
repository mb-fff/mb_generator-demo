import { createAxiosByinterceptors, handleParams } from "@/utils/request"

const request = createAxiosByinterceptors()

// 判断是否登录
const remoteLogin = (params: any): Promise<any> => (
  request({ url: 'api/xxx', method: 'GET', params })
)

// 向网关进行认证，获取登录信息
const getUserInfo = (params: any): Promise<any> => (
  request({ url: 'api/xxx', method: 'GET', params })
)

// 退出登录
const oauth2Out = (data: any): Promise<any> => (
  request.post('api/xxx', data)
)

export default {
  remoteLogin,
  oauth2Out,
  getUserInfo
}
