<template>
    <div class="offer-material">
        <p class="offer-material__subtile">
            Не нашли нужный материал? Оставьте свои предложения.
        </p>
        <BtnBackgroud>Предложить материал</BtnBackgroud>
    </div>
    <Teleport to="body">
        <ModalComponent
            v-if="true"
            :show="true"
        />
    </Teleport>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import ModalComponent from '../modal/ModalComponent.vue';

</script>
<style lang="scss">
    .offer-material {
        background: $gradient-background;
        width: calc(100% + 160px);
        left: -80px;
        position: relative;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 24px 80px;
        box-sizing: border-box;
}

.offer-material__subtile {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
}
</style>