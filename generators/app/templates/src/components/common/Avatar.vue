<script lang="ts" setup>

withDefaults(defineProps<{
  size?: number,
  bg?: any,
  code: string
}>(), {
  size: 36,
  bg: '#868af6',
  code: 'mei'
})

</script>

<template>
  <div class="com-avatar"
    :style="{ width: size + 'px', height: size + 'px', fontSize: size / 2 + 'px', background: bg }">
    {{ code.slice(0, 1).toUpperCase() }}
  </div>
</template>

<style lang='scss' scoped>
.com-avatar {
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
}
</style>
