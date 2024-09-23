<template>
    <div class="page">
        <div>
            <HeaderComponent />
            <div>
                <MyData @select="updateSelectedComponent" />
            </div>
            <div v-if="selectedComponent">
                <component :is="selectedComponent" />
            </div>
            <div v-if="!selectedComponent">
                <CabinetProfileComponent />
                <PersonalData />
                <FooterComponent />
            </div>
        </div>
    </div>
</template>

<script setup>
import FooterComponent from '@/components/main/FooterComponent.vue'
import CabinetProfileComponent from '@/components/cabinet/profile/CabinetProfileComponent.vue'
import PersonalData from '@/components/cabinet/profile/PersonalData.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import CabinetMaterials from '@/pages/cabinet/CabinetMaterials.vue'
import CabinetFavorites from '@/pages/cabinet/CabinetFavorites.vue'
import CabinetCertificates from '@/pages/cabinet/CabinetCertificates.vue'
import { ref } from 'vue'
import MyData from '@/components/cabinet/profile/MyData.vue'

const componentsMap = {
    данные: null,
    материалы: CabinetMaterials,
    'избранные материалы': CabinetFavorites,
    сертификаты: CabinetCertificates
}

const selectedComponent = ref(null)

const updateSelectedComponent = (selection) => {
    selectedComponent.value = componentsMap[selection] || null
    console.log('Selected Component:', selectedComponent.value)
}
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
