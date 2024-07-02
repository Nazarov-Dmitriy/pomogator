<template>
    <div class="page">
        <HeaderComponent />
        <TrendAbout />
        <SearchPanel class="trend__search-panel" />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TrendAbout from '../components/trend/TrendAbout.vue';
import SearchPanel from '../components/searchPanel/SearchPanel.vue';



</script>
<style scoped lang="scss">
.page {
    min-height: 100vh;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
}

.trend__search-panel{
    padding: 60px 80px 64px 80px ;
    box-sizing: border-box;
    z-index: 2;
    position: relative;

    @media (max-width: $lg) {
        padding: 8px 40px 32px 40px ;
    }

    @media (max-width: $sm) {
        padding: 24px 0px 32px 0px ;
    }
}

</style>
