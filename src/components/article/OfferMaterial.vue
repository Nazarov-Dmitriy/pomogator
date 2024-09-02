<<<<<<< HEAD
<template>
    <div class="offer-material">
        <p class="offer-material__subtile">
            Не нашли нужный материал? Оставьте свои предложения.
        </p>
        <BtnBackgroud
            class="offer-material__btn"
            emit-name="offer"
            @offer="modalShow = true"
        >
            Предложить тему
        </BtnBackgroud>
    </div>
    <Teleport to="body">
        <ModalComponent
            :show="modalShow"
            @close="modalShow = false"
        />
    </Teleport>
</template>
<script setup>
import { ref } from 'vue';
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import ModalComponent from '../modal/ModalComponentFaq.vue';

const modalShow= ref(false)

</script>
<style lang="scss">
.offer-material {
    background: $gradient-background;
    width: calc(100% + 160px);
    left: -80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 80px;
    box-sizing: border-box;
    gap: 16px;

    @media (max-width: $sm) {
        gap: 20px;
        flex-direction: column;
    }
}

.offer-material__subtile {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }
}

.offer-material__btn {
    flex-shrink: 0;
}
=======
<template>
    <div class="offer-material">
        <p class="offer-material__subtile">
            Не нашли нужный материал? Оставьте свои предложения.
        </p>
        <BtnBackgroud
            class="offer-material__btn"
            emit-name="offer"
            @offer="modalShow = true"
        >
            Предложить тему
        </BtnBackgroud>
    </div>
    <Teleport to="body">
        <ModalComponent
            :show="modalShow"
            @close="modalShow = false"
        />
    </Teleport>
</template>
<script setup>
import { ref } from 'vue';
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import ModalComponent from '../modal/ModalComponent.vue';

const modalShow= ref(false)

</script>
<style lang="scss">
.offer-material {
    background: $gradient-background;
    width: calc(100% + 160px);
    left: -80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 80px;
    box-sizing: border-box;
    gap: 16px;

    @media (max-width: $sm) {
        gap: 20px;
        flex-direction: column;
    }
}

.offer-material__subtile {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }
}

.offer-material__btn {
    flex-shrink: 0;
}
>>>>>>> origin/main
</style>