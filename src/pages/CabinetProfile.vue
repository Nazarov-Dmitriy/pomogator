<template>
    <div class="page">
        <HeaderComponent />
        <CabinetProfileComponent />
        <PersonalData />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'

import FooterComponent from '../components/main/FooterComponent.vue'
import CabinetProfileComponent from '../components/cabinet/CabinetProfileComponent.vue'
import PersonalData from '../components/cabinet/PersonalData.vue'
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
