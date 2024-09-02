<template>
    <section class="certificates-section">
        <CabinetTitle>Полученные сертификаты</CabinetTitle>
        <SearchPanel :isSearchVisible="isSearchVisible" />
        <div class="certificates">
            <CertificateComponent
                :certificateData="currentCertificates"
                :isSearchVisible="isSearchVisible"
            />
        </div>
        <PaginationComponent
            :perpage="6"
            :data="certificateData"
            @setList="updateCurrentCertificates"
        />
        
    </section>
</template>

<script setup>
import { ref } from 'vue'
import CertificateComponent from './CertificateComponent.vue'
import SearchPanel from '../../searchPanel/SearchPanel.vue'
import PaginationComponent from '../../pagination/PaginationComponent.vue'
import CabinetTitle from '../CabinetTitle.vue'

const isSearchVisible = ref(false)

const certificateData = ref([
    {
        id: 1,
        studentData: 'Иванов Иван Иванович',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 2,
        studentData: 'Иванов Иван Иванович',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 3,
        studentData: 'Иванов Иван Иванович',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 4,
        studentData: 'Иванов Иван Иванович',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 5,
        studentData: 'Иванов Иван Иванович',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 6,
        studentData: 'Иванов Иван Иванович6',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    },
    {
        id: 7,
        studentData: 'Иванов Иван Иванович7',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    }
])

const currentCertificates = ref([])

function updateCurrentCertificates(paginatedData) {
    currentCertificates.value = paginatedData
}
</script>
<style scoped lang="scss">
.certificates-section {
    padding: 60px 80px;
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $lg) {
        padding: 40px 16px;
    }
}
.certificates {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: repeat(2, auto);
    }

    @media (max-width: $sm) {
        grid-template-columns: auto;
    }
}

@media print {
}
</style>
