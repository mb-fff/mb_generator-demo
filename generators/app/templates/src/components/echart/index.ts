import * as echarts from 'echarts'
import { IChartOption } from '@/types/index'

export type Option = Partial<IChartOption>

export const useEchart = () => {
  let myChart: any = null

  const drawGraphics = (select: string, options: Option) => {
    const ele = document.querySelector(select)
    if (ele === null) return
    if (myChart) {
      myChart.dispose()
    }
    myChart = echarts.init((ele as HTMLElement))
    myChart.clear()
    myChart.setOption(options)
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }

  const genConf = (type: string) => {
    switch (type) {
      case 'line':
        return lineOptions
      case 'bar':
        return barOptions
      case 'pie':
        return pieOptions
      default:
        return lineOptions
    }
  }

  return {
    drawGraphics,
    genConf
  }

}

const lineOptions = ({ title, tooltip, legend, grid, xAxis, yAxis, series }: Option) => {
  const defaultTitle = {
    padding: [20, 20],
    textStyle: {
      color: '#303133',
      fontWeight: 'normal',
      fontSize: 13
    },
    ...title
  }
  const defaultTooltip = {
    trigger: 'axis',
    ...tooltip
  }
  const defaultLegend = {
    ...legend
  }
  const defaultGrid = {
    left: '5%',
    right: '5%',
    bottom: '2%',
    containLabel: true,
    ...grid
  }
  const defaultXAxis = {
    type: 'category',
    boundaryGap: false,
    // axisLabel: {
    //   interval: 0
    // },
    ...xAxis
  }
  const defaultYAxis = {
    type: 'value',
    name: '百分比(%)',
    min: 0,
    splitLine: {
      show: false
    },
    ...yAxis
  }
  const defaultSeries = {}
  return {
    title: defaultTitle,
    tooltip: defaultTooltip,
    legend: defaultLegend,
    grid: defaultGrid,
    xAxis: defaultXAxis,
    yAxis: defaultYAxis,
    series: series || defaultSeries
  }
}

const barOptions = ({ title, tooltip, legend, grid, xAxis, yAxis, series }: Option) => {
  const defaultTitle = {
    padding: [20, 20],
    textStyle: {
      color: '#303133',
      fontWeight: 'normal',
      fontSize: 13
    },
    ...title
  }
  const defaultTooltip = {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    ...tooltip
  }
  const defaultLegend = {
    ...legend
  }
  const defaultGrid = {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    ...grid
  }
  const defaultXAxis = {
    type: 'category',
    data: [],
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      interval: 0
    },
    ...xAxis
  }
  const defaultYAxis = yAxis instanceof Array ? yAxis : {
    type: 'value',
    name: '个',
    splitLine: {
      show: false
    },
    ...yAxis
  }
  const defaultSeries = {}
  return {
    title: defaultTitle,
    tooltip: defaultTooltip,
    legend: defaultLegend,
    grid: defaultGrid,
    xAxis: defaultXAxis,
    yAxis: defaultYAxis,
    series: series || defaultSeries
  }
}

const pieOptions = ({ title, tooltip, legend, grid, series }: Option) => {
  const defaultTitle = {
    padding: [20, 20],
    textStyle: {
      color: '#303133',
      fontWeight: 'normal',
      fontSize: 13
    },
    ...title
  }
  const defaultTooltip = {
    trigger: 'item',
    ...tooltip
  }
  const defaultLegend = {
    show: false,
    ...legend
  }
  const defaultGrid = {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    ...grid
  }
  const defaultSeries = {}
  return {
    title: defaultTitle,
    tooltip: defaultTooltip,
    legend: defaultLegend,
    grid: defaultGrid,
    series: series || defaultSeries
  }
}