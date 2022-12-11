import { provide } from 'vue'
import { useUserStore } from '@/store/user'
import { Storage } from '@/utils/storage'
import dayjs from 'dayjs'

export const useApp = () => {
  const storageS = new Storage('session')
  const userStore = useUserStore()

  const session = storageS.get('sessionData')
  const username = session?.staffCode || 'meibo'

  userStore.setUserInfo({
    username,
    ip: '127.0.0.1',
    loginTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  })

  provide('session', session)
}