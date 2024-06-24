<template>
    <div class="main-page">
        <HeaderComponent />
        <AboutComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import AboutComponent from '@/components/main/AboutComponent.vue';
</script>
<style scoped lang="scss">
.main-page {
    background: $gradient-background;
    font-family: "Kreadon-Demi";
    font-weight: 600;
}
</style>