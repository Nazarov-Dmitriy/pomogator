<template>
    <div class="page">
        <HeaderComponent />
        <TasksComponent />
        <TeacherComponent />
        <EquipmentComponent />
        <BecomeComponent />
        <ReviewsComponent />
        <ContactComponent />
        <FormComponent />
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import TasksComponent from '../components/about/TasksComponent.vue'
import TeacherComponent from '../components/about/TeacherComponent.vue'
import BecomeComponent from '../components/about/BecomeComponent.vue'
import EquipmentComponent from '../components/about/EquipmentComponent.vue'
import ReviewsComponent from '../components/about/ReviewsComponent.vue'
import ContactComponent from '../components/about/ContactComponent.vue'
import FormComponent from '../components/main/FormComponent.vue'
import FooterComponent from '../components/main/FooterComponent.vue'
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
