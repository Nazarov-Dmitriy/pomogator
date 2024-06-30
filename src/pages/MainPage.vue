<template>
    <div class="main-page">
        <HeaderComponent />
        <AboutComponent />
        <ObjectiveProjectComponent />
        <FaqComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import AboutComponent from '../components/main/AboutComponent.vue';
// import ObjectiveProjectComponent from '../components/main/ObjectiveProjectComponent.vue';
import FaqComponent from '../components/main/FaqComponent.vue';


</script>
<style scoped lang="scss">
.main-page {
    min-height: 100vh;
    overflow: hidden;
}
</style>
