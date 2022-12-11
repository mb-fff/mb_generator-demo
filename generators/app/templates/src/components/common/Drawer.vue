<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'

withDefaults(defineProps<{
  title: string,
  visible: boolean,
  size?: string
  close: any
}>(), {
  size: '40%'
})
</script>

<template>
  <el-drawer custom-class="com-drawer" v-model="visible" :size="size" :with-header="false" :before-close="close">
    <h2 class="title">
      <span class="close" @click="close">
        <el-icon :size="16" color="#303133">
          <ArrowLeft />
        </el-icon>
      </span>
      {{ title }}
    </h2>
    <div class="content">
      <slot></slot>
    </div>
  </el-drawer>
</template>

<style lang='scss'>
.com-drawer {
  .el-drawer__body {
    padding-top: 0;

    .title {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;

      .close {
        width: 26px;
        height: 26px;
        box-shadow: 0 0 5px #a0cfff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
    }

    .content {
      width: 100%;
      height: calc(100% - 50px);
      padding: 20px;
    }
  }
}
</style>
