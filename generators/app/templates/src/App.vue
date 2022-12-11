<script lang="ts" setup>
import { useApp } from './app'

useApp()
</script>

<template>
  <main class="main-app">
    <router-view />
  </main>
</template>

<style lang='scss' scoped>
.main-app {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 15px;
  background-color: #F2F3F5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
  }
}
</style>
