<template>
    <div class="page">
        <HeaderComponent />
        <AboutComponent :user="getUser" />
        <ObjectiveProjectComponent />
        <TrendComponent />
        <WebinarComponent :user="getUser" />
        <NewsComponent />
        <FaqComponent />
        <FormComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import AboutComponent from '../components/main/AboutComponent.vue'
import ObjectiveProjectComponent from '../components/main/ObjectiveProjectComponent.vue'
import FaqComponent from '../components/main/FaqComponent.vue'
import TrendComponent from '../components/main/TrendComponent.vue'
import WebinarComponent from '../components/main/WebinarComponent.vue'
import NewsComponent from '../components/main/NewsComponent.vue'
import FormComponent from '../components/main/FormComponent.vue'
import FooterComponent from '../components/main/FooterComponent.vue'
import { useUserStore } from '@/stores/userStore'
import { computed, watch } from 'vue'

const userStore = useUserStore()

const getUser = computed(() => {
    return userStore.getUser
})

watch(getUser, () => {})
</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
