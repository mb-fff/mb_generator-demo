<script lang="ts" setup>
import { ICondition, IForm } from '@/types/index'

defineProps<{
  conditions: Array<ICondition>,
  forms: IForm
}>()

defineEmits<{
  (e: 'query'): void,
  (e: 'reset'): void
}>()

</script>

<template>
  <div class="ep-condition-wrap">
    <div class="ep-condition-item" v-for="{ prop, label, type, inputType, selOptions, placeholder='' } in conditions"
      :key="prop">
      <span class="label">{{ label }}：</span>
      <template v-if="type === 'select'">
        <el-select class="item" v-model="forms[prop]" :placeholder="placeholder">
          <el-option v-for="{ value, label } in selOptions" :key="value" :label="label" :value="value" />
        </el-select>
      </template>
      <template v-else>
        <el-input class="item" v-model="forms[prop]" :type="inputType" :placeholder="placeholder" />
      </template>
    </div>
    <div>
      <el-button type="primary" @click="$emit('query')">查询</el-button>
      <el-button @click="$emit('reset')">重置</el-button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.ep-condition-wrap {
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 20px;

  .ep-condition-item {
    height: 48px;
    display: flex;
    align-items: center;
    margin-right: 20px;

    .item {
      width: 200px;
    }
  }
}
</style>
