<template>
    <div class="main-page">
        <HeaderComponent />
        <AboutComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import AboutComponent from '@/components/main/AboutComponent.vue'
</script>
<style scoped lang="scss">
.main-page {
    min-height: 100vh;
}
</style>
