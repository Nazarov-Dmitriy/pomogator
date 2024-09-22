<template>
    <div class="page">
        <HeaderComponent />
        <component
            :is="selectedComponent"
            v-if="selectedComponent"
        />

        <DynamicComponent />
        <CabinetProfileComponent />
        <PersonalData />
        <FooterComponent />
    </div>
</template>

<script setup>
import FooterComponent from '@/components/main/FooterComponent.vue'
import CabinetProfileComponent from '@/components/cabinet/profile/CabinetProfileComponent.vue'
import PersonalData from '@/components/cabinet/profile/PersonalData.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import DynamicComponent from '@/components/cabinet/profile/DynamicComponent.vue';
</script>

<style scoped lang="scss">
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
