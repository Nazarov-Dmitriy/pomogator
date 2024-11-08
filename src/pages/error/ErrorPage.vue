<template>
    <MainLayots>
        <div class="flex items-center justify-center grow p-12 flex flex-col gap-4">
            <h1 class="nt__title">Ошибка сервера</h1>
            <BtnBackgroud emit-name="back" @back="$router.go(-1)"
                >Переазгрузить страницу</BtnBackgroud
            >
        </div>
    </MainLayots>
</template>
<script setup>
import BtnBackgroud from '@/components/btns/BtnBackgroud.vue'
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
