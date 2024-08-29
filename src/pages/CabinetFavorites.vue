<template>
    <div class="page">
        <CabinetHeader />
        <FavoriteComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import FooterComponent from '../components/main/FooterComponent.vue'
import FavoriteComponent from '../components/cabinet/favorites/FavoriteComponent.vue'
import CabinetHeader from '../components/cabinet/header/CabinetHeader.vue'
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
