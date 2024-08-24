<template>
    <div class="page">
        <CabinetHeader />
        <CertificatesComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import FooterComponent from '../components/main/FooterComponent.vue'
import CabinetHeader from '../components/cabinet/header/CabinetHeader.vue'
import CertificatesComponent from '../components/cabinet/certificates/CertificatesComponent.vue'
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}

.certificates {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
</style>
