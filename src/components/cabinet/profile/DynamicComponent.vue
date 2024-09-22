<template>
    <div>
        <MyData @select="updateSelectedComponent" />
        <component 
            :is="selectedComponent" 
            v-if="selectedComponent"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MyData from '@/components/cabinet/profile/MyData.vue'
import CabinetMaterials from '@/pages/cabinet/CabinetMaterials.vue';
import CabinetFavorites from '@/pages/cabinet/CabinetFavorites.vue';
import CabinetCertificates from '@/pages/cabinet/CabinetCertificates.vue';
const componentsMap = {
    данные: null,
    материалы: CabinetMaterials,
    'избранные материалы': CabinetFavorites,
    сертификаты: CabinetCertificates,
}

const selectedComponent = ref(null)

const updateSelectedComponent = (selection) => {
    selectedComponent.value = componentsMap[selection] || null
    console.log('Selected Component:', selectedComponent.value)
}
</script>
