<script lang="ts" setup>
import { genId } from '@/utils/index'
import { useEchart, Option } from './index'
import { nextTick, watch } from 'vue'

const { drawGraphics, genConf } = useEchart()
const cls = 'chart-' + genId()

const props = withDefaults(defineProps<{
  options: Option,
  type?: string
}>(), {
  type: 'line'
})

watch(
  () => props.options,
  newV => {
    nextTick(() => {
      drawGraphics('.' + cls, genConf(props.type)(newV))
    })
  },
  {
    deep: true,
    immediate: true
  }
)

</script>

<template>
  <div :class="cls" style="width:100%;height:100%"></div>
</template>
