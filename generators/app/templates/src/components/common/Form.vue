<script lang="ts" setup>
import { ref } from 'vue'
import { IForm, ICondition } from '@/types/index'
import type { FormRules, FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

withDefaults(defineProps<{
  forms: IForm,
  formItems: Array<ICondition>,
  rules?: FormRules,
  labelWidth?: string,
  formSize?: 'large' | 'small' | 'default',
  isDisabled?: boolean
}>(), {
  labelWidth: '120px',
  formSize: 'default',
  isDisabled: false
})

defineEmits<{
  (e: 'submit'): void,
  (e: 'reset'): void
}>()

defineExpose({
  formRef
})
</script>

<template>
  <el-form ref="formRef" :model="forms" :rules="rules" :label-width="labelWidth" :size="formSize" :disabled="isDisabled"
    status-icon>
    <el-form-item :label="label" :prop="prop" :key="prop"
      v-for="{ label, prop, type, inputType, placeholder='', selOptions, selMultiple } in formItems">
      <template v-if="type === 'select'">
        <el-select class="item" v-model="forms[prop]" :multiple="selMultiple" :placeholder="placeholder">
          <el-option v-for="{ value, label } in selOptions" :key="value" :label="label" :value="value" />
        </el-select>
      </template>
      <template v-else>
        <el-input v-if="inputType === 'number'" class="item" v-model="forms[prop]" :type="inputType" min="1"
          :placeholder="placeholder" />
        <el-input v-else class="item" v-model="forms[prop]" :placeholder="placeholder" />
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="tools">
        <el-button type="primary" @click="$emit('submit', formRef)">确认</el-button>
        <el-button @click="$emit('reset', formRef)">重置</el-button>
      </slot>
    </el-form-item>
    <slot></slot>
  </el-form>
</template>

<style lang='scss' scoped>
.el-form {
  padding: 10px;

  .item {
    width: 100%;
  }
}
</style>
