<script lang="ts" setup>
import { IPage } from '@/types'

const props = defineProps<{
  conf: IPage
}>()

const emit = defineEmits<{
  (e: 'sizeChange', val: number): void
  (e: 'currentChange', val: number): void
  (e: 'prevClick', val: number): void
  (e: 'nextClick', val: number): void
}>()

const sizeChange = (val: number) => { emit('sizeChange', val) }
const currentChange = (val: number) => { emit('currentChange', val) }
const prevClick = (val: number) => { emit('prevClick', val) }
const nextClick = (val: number) => { emit('nextClick', val) }
</script>

<template>
  <el-pagination v-model:currentPage="conf.curPage" v-model:page-size="conf.size"
    :page-sizes="conf.sizes || [5, 10, 15, 20]" large="large" layout="total, sizes, prev, pager, next, jumper"
    :total="conf.total" @current-change="currentChange" @size-change="sizeChange" @prev-click="prevClick"
    @next-click="nextClick" />
</template>

<style lang='scss' scoped>

</style>
