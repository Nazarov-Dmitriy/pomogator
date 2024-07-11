<template>
    <section class="teachers">
        <div class="teachers__container">
            <h2 class="teachers__title">Преподаватели</h2>
            <swiper
                ref="swiperRef"
                class="teachers__slider"
                :modules="modules"
                :slides-per-view="1"
                :space-between="500"
                :navigation="navigationOptions"
                @slideChange="updateActiveIndex"
            >
                <swiper-slide v-for="(teacher, index) in teachers" :key="index">
                    <div class="teachers__info">
                        <div class="teachers__info-description">
                            <div class="teachers__info-img-wrapper">
                                <img
                                    class="teachers__info-img"
                                    :src="teacher.image"
                                    :alt="`Image of ${teacher.name}`"
                                />
                            </div>
                            <div
                                class="teachers__info-description-wrapper teachers__info-description-wrapper--left"
                            >
                                <h3 class="teachers__info-title">{{ teacher.name }}</h3>
                                <p class="teachers__info-text">
                                    Направление: <span>{{ teacher.subject }}</span>
                                </p>
                            </div>
                            <div
                                class="teachers__info-description-wrapper teachers__info-description-wrapper--right"
                            >
                                <p class="teachers__info-text">Опыт работы</p>
                                <p class="teachers__info-text">{{ teacher.experience }}</p>
                                <p class="teachers__info-text">Место работы</p>
                                <p class="teachers__info-text">{{ teacher.workplace }}</p>
                                <p class="teachers__info-text">Должность</p>
                                <p class="teachers__info-text">{{ teacher.position }}</p>
                            </div>
                            <div class="teachers__info-tabs teachers__info-tabs--mobile">
                                <span
                                    class="teachers__info-tab teachers__info-tab--mobile"
                                    :class="{
                                        'teachers__info-tabs--active': activeIndex === index
                                    }"
                                    v-for="(slide, index) in teachers"
                                    :key="index"
                                >
                                </span>
                            </div>
                        </div>
                        <div class="teachers__info-topics">
                            <div class="teacher__info-slider-btn">
                                <img
                                    class="teacher__info-slider-btn teacher__info-slider-btn--left"
                                    src="@/assets/images/about/teacher/slider-button.svg"
                                    alt="slider button"
                                />
                                <img
                                    class="teacher__info-slider-btn teacher__info-slider-btn--right"
                                    src="@/assets/images/about/teacher/slider-button.svg"
                                    alt="slider button"
                                />
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Образование:</h2>
                                <p class="teachers__info-topic-text">{{ teacher.education }}</p>
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Профессиональные навыки:</h2>
                                <p class="teachers__info-topic-text">{{ teacher.skills }}</p>
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Достижения:</h2>
                                <p class="teachers__info-topic-text">{{ teacher.achievements }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="teachers__info-tabs">
                <span
                    class="teachers__info-tab"
                    :class="{ 'teachers__info-tabs--active': activeIndex === index }"
                    v-for="(slide, index) in teachers"
                    :key="index"
                >
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = ref([Navigation])

const teachers = ref([
    {
        name: 'Иванов Михаил Дмитриевич',
        subject: 'Химия',
        experience: '10 лет',
        workplace: 'Школа №10',
        position: 'Учитель химии',
        education:
            'Высшее химическое образование, курсы повышения квалификации по использованию IT-технологий в образовании',
        skills: 'Применение IT-технологий в обучении химии, разработка интерактивных заданий и тестов, организация проектной деятельности с использованием цифровых ресурсов',
        achievements:
            'Победитель конкурса «Учитель года» в номинации «Использование IT-технологий в образовании», автор методических разработок по применению IT-технологий в обучении химии',
        image: '/src/assets/images/about/teacher/teacher-hero.png'
    },
    {
        name: 'Иванов Михаил Дмитриевич',
        subject: 'Химия',
        experience: '10 лет',
        workplace: 'Школа №10',
        position: 'Преподаватель химии',
        education:
            'Высшее химическое образование, курсы повышения квалификации по использованию IT-технологий в образовании',
        skills: 'Применение IT-технологий в обучении химии, разработка интерактивных заданий и тестов, организация проектной деятельности с использованием цифровых ресурсов',
        achievements:
            'Победитель конкурса «Учитель года» в номинации «Использование IT-технологий в образовании», автор методических разработок по применению IT-технологий в обучении химии',
        image: '/src/assets/images/about/teacher/teacher-hero.png'
    },
    {
        name: 'Иванов Михаил Дмитриевич',
        subject: 'Химия',
        experience: '10 лет',
        workplace: 'Школа №10',
        position: 'Преподаватель химии',
        education:
            'Высшее химическое образование, курсы повышения квалификации по использованию IT-технологий в образовании',
        skills: 'Применение IT-технологий в обучении химии, разработка интерактивных заданий и тестов, организация проектной деятельности с использованием цифровых ресурсов',
        achievements:
            'Победитель конкурса «Учитель года» в номинации «Использование IT-технологий в образовании», автор методических разработок по применению IT-технологий в обучении химии',
        image: '/src/assets/images/about/teacher/teacher-hero.png'
    }
])
const activeIndex = ref(0)

const navigationOptions = {
    nextEl: '.teacher__info-slider-btn--right',
    prevEl: '.teacher__info-slider-btn--left'
}

function updateActiveIndex(swiper) {
    activeIndex.value = swiper.activeIndex % teachers.value.length
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.teachers__info-tab {
    border-radius: 10px;
    width: 32px;
    height: 2px;
    background: $secondary;
}

.teachers {
    padding: 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $md) {
        padding: 32px 16px;
    }

    @media (max-width: $sm) {
        padding: 32px 0;
    }
}

.teachers__container {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
.teachers__title {
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    margin-bottom: 32px;
    font-family: 'Kreadon-Demi';
    font-weight: 600;

    @media (max-width: $lg) {
        font-size: 32px;
    }
    @media (max-width: $sm) {
        padding: 0 16px;
    }
}

.teachers__info {
    padding: 0 0 24px 0;

    @media (max-width: $sm) {
        padding: 41px 0 0 0;
    }
}

.teachers__slider {
    width: 100%;
    height: calc(100% + 20px);
    overflow: visible;
}

.teachers__info-img-wrapper {
    position: absolute;
    top: 0;
    left: -22px;

    img {
        @media (max-width: $xl) {
            width: 177px;
        }
        @media (max-width: $sm) {
            width: 87px;
        }
    }

    @media (max-width: $xl) {
        top: 50%;
        transform: translate(0%, -50%);
        left: -15px;
    }

    @media (max-width: $sm) {
        z-index: 5;
        top: 2px;
        left: 10px;
    }
}

.teachers__info-description {
    display: grid;
    grid-template-columns: repeat(2, auto);
    border-radius: 1000px;
    padding: 16px 64px 16px 186px;
    background: $blue;
    margin-bottom: 39px;
    gap: 70px;
    position: relative;

    @media (max-width: $xl) {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 16px 64px 16px 177px;
        margin-bottom: 0;
    }

    @media (max-width: $sm) {
        border-radius: 0;
        padding: 0 16px;
        gap: 16px;
        margin-bottom: 24px;
    }
}

.teachers__info-description-wrapper {
    &--left {
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: space-between;

        @media (max-width: $sm) {
            gap: 0;
        }
    }

    &--right {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
        row-gap: 10px;
        align-items: center;
        width: 100%;

        @media (max-width: $sm) {
        }
    }

    &--right .teachers__info-text:nth-child(even) {
        box-sizing: border-box;
        text-align: right;
        width: auto;
        align-items: start;
        line-height: 23px;
        padding-right: 50px;

        @media (max-width: $sm) {
            padding: 0;
        }
    }

    &--right .teachers__info-text:nth-child(odd) {
        width: max-content;
        line-height: 23px;
    }
}

.teachers__info-title {
    font-size: 36px;
    line-height: 42px;
    color: $white;

    @media (max-width: $lg) {
        font-size: 32px;
    }
    @media (max-width: $sm) {
        border-radius: 1000px;
        padding: 16px;
        text-align: end;
        transform: translateY(-40px);
        background: $blue;
        font-size: 24px;
        line-height: 133%;
        padding-left: 80px;
    }
}
.teachers__info-text {
    color: $white;

    span {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }
}

.teachers__info-topics {
    padding: 0 182px 24px 182px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;

    @media (max-width: $lg) {
        padding: 0 88px 0 88px;
    }

    @media (max-width: $sm) {
        padding: 0 16px;
    }
}

.teachers__info-topic-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $blue-primary;
    margin-bottom: 8px;
    font-family: var(--second-family);
    font-weight: 600;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: $sm) {
        margin-bottom: 4px;
    }
}
.teachers__info-topic-text {
    line-height: 24px;
    color: $black;
    font-family: var(--font-family);
    font-weight: 400;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 21px;
    }
}

.teacher__info-slider-btn {
    cursor: pointer;
    display: flex;
    top: 50%;

    &--right {
        position: absolute;
        right: 0;
    }

    &--left {
        position: absolute;
        left: 0;
        transform: rotate(180deg);
    }

    @media (max-width: $sm) {
        display: none;
    }
}
.teachers__info-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: $sm) {
        display: none;
    }

    &--active {
        background: #4360f8;
    }

    &--mobile {
        display: none;
        @media (max-width: $sm) {
            display: flex;

            span {
                width: 100%;
                margin-bottom: 8px;
            }
        }
    }
}
</style>
