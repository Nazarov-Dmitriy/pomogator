<template>
    <MainLayots>
        <div class="flex items-center justify-center grow">
            <h1 class="nt__title">Страница не найдена</h1>
        </div>
    </MainLayots>
</template>
<script setup>
import MainLayots from '@/layouts/MainLayots.vue'
</script>
<style lang="scss">
.nt__title {
    font-family: 'Kreadon-Demi';
    font-size: 48px;
    line-height: 56px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}
</style>
