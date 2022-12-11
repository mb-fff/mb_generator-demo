<script lang="ts" setup>
import { ITitle } from '@/types/index'
import { useCommonPage } from './index'

const { back, conditionRef, contentRef, contentHeight, contentHeightStyle } = useCommonPage()

const props = defineProps<{
  titles: Array<ITitle>
}>()
</script>

<template>
  <h2 class="ep-app-header">
    <div class="l">
      <template v-for="(t, i) in titles" :key="t.name">
        <span class="title-item" @click="back(t.path)">{{ t.name }}</span>
        <span v-if="i !== titles.length - 1">></span>
      </template>
    </div>
    <div class="r">
      <slot name="headerR"></slot>
    </div>
  </h2>
  <div class="ep-app-condition" ref="conditionRef">
    <slot name="condition">

    </slot>
  </div>
  <div class="ep-app-content" ref="contentRef" :style="{ minHeight: contentHeightStyle }">
    <slot name="content" :height="contentHeight">

    </slot>
  </div>
</template>

<style lang='scss' scoped>
.ep-app-header {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background-color: #fff;
  border-bottom: 1px solid #EBEEF5;
  font-size: 15px;
  font-weight: normal;
  display: flex;
  position: relative;

  .l {
    width: 50%;
    display: flex;
    align-items: center;

    .title-item {
      margin: 0 5px;

      &:first-child {
        position: relative;

        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          top: 4px;
          left: -6px;
          width: 2px;
          height: 13px;
          background-color: #409EFF;
        }
      }

      &:not(&:last-child) {
        &:hover {
          cursor: pointer;
          font-weight: bolder;
        }
      }
    }
  }

  .r {
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.ep-app-condition {
  width: 100%;
  background-color: #fff;
}

.ep-app-content {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  position: relative;
  padding: 20px 20px 10px;
}
</style>
