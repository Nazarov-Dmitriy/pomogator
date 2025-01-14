<template>
    <section class="trends__contaner">
        <div class="trends">
            <h2 class="trends__header">Направления</h2>
            <div class="trends__list">
                <div class="trends__card">
                    <div class="trends__card-name">Химия</div>
                    <div class="trends__card-info">
                        <ul class="trends__card-list">
                            <li class="trends__card-item">
                                Виртуальные практикумы и лабораторные работы
                            </li>
                            <li class="trends__card-item">Демонстрационные эксперименты</li>
                            <li class="trends__card-item">Моделирование химических процессов</li>
                            <li class="trends__card-item">Проекты и исследования</li>
                        </ul>
                        <BtnBackgroud
                            class="btn__trends-card"
                            emit-name="link"
                            @link="linkTrend(1)"
                        >
                            Подробнее
                        </BtnBackgroud>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">Физика</div>
                    <div class="trends__card-info">
                        <ul class="trends__card-list">
                            <li class="trends__card-item">
                                Виртуальные практикумы и лабораторные работы
                            </li>
                            <li class="trends__card-item">Демонстрационные эксперименты</li>
                            <li class="trends__card-item">Электронные таблицы и графики</li>
                            <li class="trends__card-item">
                                Наглядное представление результатов экспериментов
                            </li>
                        </ul>
                        <BtnBackgroud
                            class="btn__trends-card"
                            emit-name="link"
                            @link="linkTrend(2)"
                        >
                            Подробнее
                        </BtnBackgroud>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">Биология</div>
                    <div class="trends__card-info">
                        <ul class="trends__card-list">
                            <li class="trends__card-item">
                                Виртуальные практикумы и лабораторные работы
                            </li>
                            <li class="trends__card-item">Демонстрационные эксперименты</li>
                            <li class="trends__card-item">Предметные тестирования и диагностики</li>
                            <li class="trends__card-item">Проекты и исследования</li>
                        </ul>
                        <BtnBackgroud
                            class="btn__trends-card"
                            emit-name="link"
                            @link="linkTrend(3)"
                        >
                            Подробнее
                        </BtnBackgroud>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">Робототехника</div>
                    <div class="trends__card-info">
                        <ul class="trends__card-list">
                            <li class="trends__card-item">
                                Конструирование и программирование роботов
                            </li>
                            <li class="trends__card-item">VR-очки в проектах и исследованиях</li>
                            <li class="trends__card-item">3D-моделирование</li>
                            <li class="trends__card-item">Научно-техническое творчество</li>
                        </ul>
                        <BtnBackgroud
                            class="btn__trends-card"
                            emit-name="link"
                            @link="linkTrend(4)"
                        >
                            Подробнее
                        </BtnBackgroud>
                    </div>
                </div>
            </div>
            <div class="trends__proposal">
                Предложите свой материал, и мы разместим его на сайте
            </div>
            <BtnGradient
                class="btn__proposal"
                emit-name="offer"
                @offer="$router.push('/material/add')"
            >
                Предложить материал
            </BtnGradient>
        </div>
        <Teleport to="body">
            <ModalComponent :show="modalShow" @close="modalShow = false" />
        </Teleport>
    </section>
</template>

<script setup>
import { useNewsStore } from '@/stores/newsStore'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import BtnGradient from '../btns/BtnComponent.vue'
import ModalComponent from '../modal/ModalComponentFaq.vue'
import { ref } from 'vue'
import router from '@/router'
const newsStore = useNewsStore()

function linkTrend(id) {
    newsStore.setCategoryId(id)
    if (id === 1) {
        router.push('/trend/khimiya/')
        newsStore.setCategoryId(id)
    } else if (id === 2) {
        router.push('/trend/fizika')
        newsStore.setCategoryId(id)
    } else if (id === 3) {
        router.push('/trend/biologiya')
        newsStore.setCategoryId(id)
    } else if (id === 4) {
        router.push('/trend/robototekhnika')
        newsStore.setCategoryId(id)
    }
}

const modalShow = ref(false)
</script>

<style lang="scss">
.trend-container {
    width: 100%;
}

.trends {
    max-width: 1440px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px 32px 16px;
    }
}

.trends__header {
    font-family: 'Kreadon-Demi';
    font-size: 36px;
    line-height: 43px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.trends__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    padding: 32px 0 32px 0;

    @media (max-width: $xl) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $sm) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.trends__card {
    border: 2px solid $blue;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.trends__card-name {
    background-color: $blue;
    border-radius: 28px 28px 0 0;
    padding: 16px 0 16px 0;
    text-align: center;
    color: $white;
    font-weight: 500;
    font-size: 24px;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }
}

.trends__card-info {
    padding: 16px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $gradient-background;
    border-radius: 0 0 32px 32px;
    height: 100%;
    align-items: center;
}

.trends__card-list {
    padding-bottom: 10px;
    padding-left: 20px;
}

.trends__card-item {
    list-style-type: disc;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}

.btn__trends-card {
    width: 100%;
    max-width: 304px;

    @media (max-width: $lg) {
        max-width: 256px;
    }
}

.trends__proposal {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $blue;
    padding-bottom: 16px;

    @media (max-width: $xl) {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
}

.btn__proposal {
    width: 230px;
    padding: 0;
}
</style>
