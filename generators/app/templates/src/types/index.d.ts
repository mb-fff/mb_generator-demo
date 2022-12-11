// Charts
interface IChartOption {
  title: any
  tooltip: any
  legend: any
  grid: any
  xAxis: any
  yAxis: any
  series: any
  [k: string]: any
}

// select表单
interface ISelOption {
  value: string | number
  label: string
}

// 条件组件
interface ICondition {
  label: string
  prop: string
  type?: 'input' | 'select'
  inputType?: 'password' | 'file' | 'number' | undefined
  selOptions?: Array<ISelOption>
  selMultiple?: boolean
  placeholder?: string
}

// form表单
interface IForm {
  [k: string]: any
}

// 公共配置页 - title
interface ITitle {
  name: string
  path?: string
}

// 页码
interface IPage {
  curPage: number
  size: number
  sizes?: Array<number>
  total: number
}


export {
  IChartOption,
  ISelOption,
  ICondition,
  IForm,
  ITitle,
  IPage
}