import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { ElMessage } from "element-plus"
import { jumpLogin } from "./login"

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {

  const instance = axios.create({
    timeout: 10000,
    withCredentials: true,
    responseType: 'json',
    ...config,
  })

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      const { status, data } = response

      if (status === 200) {
        return data
      } else if (status === 403) {
        jumpLogin(response)
      } else {
        ElMessage({
          showClose: true,
          message: '',
          type: 'error',
        })
        return Promise.reject(data)
      }
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 403) {
          jumpLogin(error.request.response)
        }
      }
      ElMessage({
        showClose: true,
        message: error?.response?.data?.message || "服务端异常",
        type: 'error',
      })

      return Promise.reject(error)
    }
  )

  return instance
}

export const handleParams = (data: any) => ({
  ROOT: {
    BODY: {
      ...data
    }
  }
})