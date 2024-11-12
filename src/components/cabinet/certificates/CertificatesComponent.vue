<template>
    <section class="certificates-section">
        <SearchPanel :is-search-visible="isSearchVisible" />
        <div class="certificates">
            <CertificateComponent
                :certificate-data="currentCertificates"
                :is-search-visible="isSearchVisible"
            />
        </div>
        <PaginationComponent
            v-if="getCertificatList"
            :perpage="6"
            :data="getCertificatList"
            @set-list="updateCurrentCertificates"
        />
    </section>
    <Teleport to="body">
        <template v-if="!isLoad">
            <Loader />
        </template>
    </Teleport>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import CertificateComponent from './CertificateComponent.vue'
import SearchPanel from '../../searchPanel/SearchPanel.vue'
import PaginationComponent from '../../pagination/PaginationComponent.vue'
import { useCertificatetore } from '@/stores/certificateStore'
import { useUserStore } from '@/stores/userStore'
import Loader from '@/components/loader/Loader.vue'

const isLoad = ref(false)
const isSearchVisible = ref(false)
const currentCertificates = ref([])
const certificateStore = useCertificatetore()
const userStore = useUserStore()

const getCertificatList = computed(() => {
    return certificateStore.getCertificatList
})

const getUser = computed(() => {
    return userStore.getUser
})

onMounted(async () => {
    if (getUser.value) {
        certificateStore.getCertificates(getUser.value.id)
    }
})

function updateCurrentCertificates(paginatedData) {
    currentCertificates.value = paginatedData
}

watch(certificateStore, () => {
    isLoad.value = true
})

watch(getUser, () => {
    certificateStore.getCertificates(getUser.value.id)
})
</script>
<style scoped lang="scss">
.certificates-section {
    padding: 60px 80px;
    box-sizing: border-box;
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
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $sm) {
        grid-template-columns: auto;
    }
}

@media print {
}
</style>
