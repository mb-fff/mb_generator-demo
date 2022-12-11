<script lang="ts" setup>

withDefaults(defineProps<{
  modelVisible: boolean,
  modelTitle: string,
  width?: string
  hasFooter?: boolean
}>(), {
  width: '25%',
  hasFooter: true
})

const $emit = defineEmits<{
  (e: 'submit'): void
  (e: 'close'): void
}>()

const close = () => {
  $emit('close')
}
</script>

<template>
  <el-dialog class="com-model" v-model="modelVisible" :title="modelTitle" :width="width" :before-close="close"
    :draggable="true">
    <slot></slot>
    <template v-if="hasFooter" #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="$emit('submit')">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang='scss'>

</style>
