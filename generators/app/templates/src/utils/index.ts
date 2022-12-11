import dayjs from 'dayjs'

// colors
export const bgColors = ['#8082dc', '#da7192', '#5b8ff9', '#61ddaa', '#f6bd16', '#7262fd', '#78d3f8', '#9661bc', '#ff6b3b', '#626681', '#ffc100', '#247fea', '#2bcb95', '#1d42c2', '#d64bc0']

// 获取img的url
export const getImgUrl = (url: string) => new URL(`../assets/img/${url}`, import.meta.url).href

// 生成20位随机ID
export const genId = (): string => dayjs().format('YYYYMMDDhhmmss') + Math.floor(Math.random() * 1000000)

// 1s 转 0小时0分钟1秒
export const sToTime = (time: number): string => {
  const h = Math.floor(time / 3600)
  const m = Math.floor((time - h * 3600) / 60)
  const s = time % 60
  return `${h}小时${m}分钟${s}秒`
}