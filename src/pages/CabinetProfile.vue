<template>
    <div class="page">
        <CabinetHeader />
        <CabinetProfileComponent />
        <PersonalData />
        <FooterComponent />
    </div>
</template>
<script setup>
import FooterComponent from '../components/main/FooterComponent.vue'
import CabinetProfileComponent from '../components/cabinet/profile/CabinetProfileComponent.vue'
import PersonalData from '../components/cabinet/profile/PersonalData.vue'
import CabinetHeader from '../components/cabinet/header/CabinetHeader.vue'
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
