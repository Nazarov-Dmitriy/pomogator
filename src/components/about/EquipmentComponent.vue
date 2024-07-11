<template>
    <section class="equipment">
        <div class="equipment__container">
            <h2 class="equipment__title">Оборудование</h2>
            <p class="equipment__subtitle">
                У вас вы научитесь работать с современным IT оборудованием в разных направлениях
            </p>
            <div class="equipment__cards">
                <div class="equipment__card" v-for="(card, index) in cards" :key="index">
                    <div class="equipment__card-header">
                        <img :src="card.imgSrc" alt="" />
                    </div>
                    <div class="equipment__card-body">
                        <p>{{ card.title }}</p>
                    </div>

                    <div class="equipment__card-footer">
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
    {
        imgSrc: '/src/assets/images/about/equipment/equipment-img1.png',
        title: 'Цифровая лаборатория',
        description:
            'Комплект учебного оборудования, который включает в себя измерительный блок, интерфейс для связи с компьютером и различные датчики.'
    },
    {
        imgSrc: '/src/assets/images/about/equipment/equipment-img2.png',
        title: 'Мультисенсорные регистраторы данных',
        description:
            'Эти устройства позволяют одновременно собирать данные с нескольких датчиков, что особенно полезно при проведении комплексных экспериментов.'
    },
    {
        imgSrc: '/src/assets/images/about/equipment/equipment-img3.png',
        title: 'Специализированные датчики',
        description:
            'В зависимости от конкретной области исследования, вам могут потребоваться специализированные датчики, такие как датчики pH, температуры, влажности, давления, скорости и т.д.'
    }
])
</script>

<style scoped lang="scss">
.equipment {
    padding: 60px 80px;

    @media (max-width: $lg) {
        padding: 40px 80px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.equipment__container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.equipment__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.17;
    color: $blue-primary;
    font-family: "Kreadon-Demi";

    @media (max-width: $sm) {
        font-size: 32px;
        line-height: 1.25;
    }
}
.equipment__subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.3;
    color: $black;
    max-width: 546px;
    width: 100%;
    font-family: var(--font-family);
    font-weight: 500;

    @media (max-width: $sm) {
        font-size: 20px;
        line-height: 1.2;
    }
}

.equipment__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    scrollbar-width: none;

    @media (max-width: $xl) {
        overflow-y: scroll;
        grid-auto-flow: column;
        width: calc(100% + 80px);
    }

    @media (max-width: $sm) {
        grid-template-columns: 1fr;
        overflow: visible;
        grid-auto-flow: row;
        width: 100%;
    }
}
.equipment__card {
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
    border: 2px solid #5b94ea;

    @media (max-width: $xl) {
        width: 337px;
    }
    @media (max-width: $sm) {
        width: 100%;
    }
}
.equipment__card-header {
    aspect-ratio: 3 / 1;
    background: #5b94ea;
    border-radius: 32px 32px 0 0;

    img {
        border-radius: 32px 32px 0 0;
        width: 100%;
        height: 100%;
    }
}
.equipment__card-body {
    display: flex;
    justify-content: flex-start;
    p {
        font-weight: 500;
        font-size: 24px;
        line-height: 1.3;
        text-align: center;
        color: $white;
        background: $blue;
        box-sizing: border-box;
        width: 100%;
        padding: 16px;

        @media (max-width: $lg) {
            font-size: 20px;
        }
    }
}
.equipment__card-footer {
    border-radius: 0 0 32px 32px;
    box-sizing: border-box;
    p {
        line-height: 150%;
        padding: 28px 16px;

        @media (max-width: $lg) {
            font-size: 14px;
        }
    }
}
</style>
