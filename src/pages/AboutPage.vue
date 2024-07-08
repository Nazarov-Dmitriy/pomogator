<template>
    <div class="page">
        <HeaderComponent />
        <TeacherComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TeacherComponent from '../components/about/TeacherComponent.vue';


</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
