<template>
    <div class="main-page">
        <HeaderComponent />
        <AboutComponent />
        <NewsComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import AboutComponent from '@/components/main/AboutComponent.vue';
import NewsComponent from '@/components/main/NewsComponent.vue';
</script>
<style scoped lang="scss">
.main-page {
    background: $gradient-background;
    font-family: "Kreadon-Demi";
    font-weight: 600;
}
</style>