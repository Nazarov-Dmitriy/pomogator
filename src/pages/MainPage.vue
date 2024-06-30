<template>
    <div class="main-page">
        <HeaderComponent />
        <AboutComponent />
        <TrendComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import AboutComponent from '../components/main/AboutComponent.vue'
import TrendComponent from '../components/main/TrendComponent.vue'

</script>
<style scoped lang="scss">
.main-page {
    min-height: 100vh;
}
</style>
