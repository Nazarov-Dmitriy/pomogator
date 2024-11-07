<template>
    <MainLayots>
        <div>
            <MyData @select="updateSelectedComponent" />
        </div>
        <div v-if="selectedComponent">
            <component :is="selectedComponent" />
        </div>
        <div v-if="!selectedComponent">
            <CabinetProfileComponent />
            <PersonalData />
        </div>
    </MainLayots>
</template>

<script setup>
import CabinetProfileComponent from '@/components/cabinet/profile/CabinetProfileComponent.vue'
import PersonalData from '@/components/cabinet/profile/PersonalData.vue'
import CabinetMaterials from '@/pages/cabinet/CabinetMaterials.vue'
import CabinetFavorites from '@/pages/cabinet/CabinetFavorites.vue'
import CabinetCertificates from '@/pages/cabinet/CabinetCertificates.vue'
import { ref } from 'vue'
import MyData from '@/components/cabinet/profile/MyData.vue'
import MainLayots from '@/layouts/MainLayots.vue'

const componentsMap = {
    данные: null,
    материалы: CabinetMaterials,
    'избранные материалы': CabinetFavorites,
    сертификаты: CabinetCertificates
}

const selectedComponent = ref(null)

const updateSelectedComponent = (selection) => {
    selectedComponent.value = componentsMap[selection] || null
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
