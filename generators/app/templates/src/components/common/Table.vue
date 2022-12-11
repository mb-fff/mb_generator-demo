<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, Filters } from 'element-plus/es/components/table/src/table-column/defaults'

const tableRef = ref()

interface IFilterMethod<T> {
  (value: string, row: T, column: TableColumnCtx<T>): boolean
}

interface IHeader {
  prop: string
  label: string
  width?: string | number
  fixed?: boolean | 'left' | 'right'
  sortable?: boolean
  filters?: Filters
  filterMethod?: IFilterMethod<any>
}

withDefaults(defineProps<{
  header: Array<IHeader>
  data: Array<{ [k: string]: any }>
  stripe?: boolean
  border?: boolean
  height?: string | number
  maxHeight?: string | number
  size?: 'large' | 'default' | 'small'
  highlightCurrentRow?: boolean
  defaultSort?: { prop: string, order: "ascending" | "descending" }
  rowKey?: string
}>(), {
  size: 'large'
})

defineEmits<{
  (e: 'currentChange'): void
  (e: 'selectionChange'): void
}>()

defineExpose({
  tableRef
})
</script>

<template>
  <el-table ref="tableRef" :data="data" :stripe="stripe" :border="border" :height="height" :max-height="maxHeight"
    :size="size" :highlight-current-row="highlightCurrentRow" :default-sort="defaultSort" :row-key="rowKey"
    @current-change="$emit('currentChange')" @selection-change="$emit('selectionChange')">
    <!-- 前置插槽 -->
    <slot name="prev"></slot>
    <el-table-column v-for="{ prop, label, width, fixed, sortable, filters, filterMethod } in header" :prop="prop"
      :label="label" :width="width" :fixed="fixed" :sortable="sortable" :show-overflow-tooltip="true" :filters="filters"
      :filterMethod="filterMethod">
      <template #header="{ column }">
        <el-tooltip effect="dark" :content="column.label" placement="top">
          <span class="text">{{ column.label }}</span>
        </el-tooltip>
      </template>
      <template #default="{ row, column, $index }">
        <slot :name="prop" :row="row" :column="column" :index="$index">
          <span class="text">{{ row[prop] }}</span>
        </slot>
      </template>
    </el-table-column>
    <!-- 后置插槽 -->
    <slot name="next"></slot>
  </el-table>
</template>
    
<style lang='scss' scoped>
.el-table {
  width: 100%;

  :deep(.el-table__header-wrapper) {
    .cell {
      color: #333;
      font-weight: 400;
      white-space: nowrap;
    }
  }

  .text {
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
