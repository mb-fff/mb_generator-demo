import { defineStore } from 'pinia'

interface IUser {
  username: string,
  ip: string,
  loginTime: string,
  [k: string]: any
}

interface IState {
  userInfo: IUser
}

export const useUserStore = defineStore('user', {
  state: (): IState => ({
    userInfo: {
      username: '',
      ip: '',
      loginTime: ''
    }
  }),
  getters: {

  },
  actions: {
    // 设置用户信息
    setUserInfo(userInfo: IUser) {
      this.userInfo = userInfo
    }
  }
})