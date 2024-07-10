<template>
    <div class="page">
        <HeaderComponent />
        <TeacherComponent />
        <BecomeComponent />
        <EquipmentComponent />
        <ReviewsComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TeacherComponent from '../components/about/TeacherComponent.vue';
import BecomeComponent from "../components/about/BecomeComponent.vue"
import EquipmentComponent from "../components/about/EquipmentComponent.vue"
import ReviewsComponent from '../components/about/ReviewsComponent.vue';

</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
