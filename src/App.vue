<template>
    <router-view />
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
userStore.autoLigon()
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 100%;
}
</style>
