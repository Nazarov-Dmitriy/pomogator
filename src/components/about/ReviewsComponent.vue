<template>
    <section class="reviews">
        <div class="reviews__container">
            <h2 class="reviews__title">
                Отзывы
            </h2>
            <div class="reviews__cards">
                <div
                    v-for="(card, index) in cards"
                    :key="index"
                    class="reviews__card"
                >
                    <div class="reviews__card-header">
                        <div class="reviews__card-header-person">
                            <div class="reviews__card-header-person-img-wrapper">
                                <img
                                    :src="getPath(card.img)"
                                    alt=""
                                >
                            </div>
                            <div class="reviews__header-info">
                                <p class="reviews__header-person-text">
                                    {{ card.name }} <span>{{ card.lastName }}</span>
                                </p>
                                <div class="reviews__card-header-date">
                                    <span>{{ card.date }}</span>
                                    <span>{{ card.dateSm }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reviews__card-footer">
                        <p class="reviews__card-footer-text">
                            {{ card.text }}
                        </p>
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
        img: 'reviews-hero1.png',
        name: 'Иванов ',
        lastName: 'Михаил Дмитриевич',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для химиков был очень полезен и информативен. Он позволил мне лучше понять, как использовать информационные технологии в преподавании химии. Особенно полезными были занятия по работе с программами для создания интерактивных уроков и презентаций. Я уверен, что эти навыки помогут мне сделать процесс обучения более интересным и эффективным'
    },
    {
        img: 'reviews-hero2.png',
        name: 'Иванова',
        lastName: 'Ирина Анатольевна',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для физиков дал мне необходимые знания и навыки для использования информационных технологий в преподавании физики. Я научился создавать интерактивные уроки, использовать программы для моделирования физических процессов и проводить виртуальные эксперименты. Это поможет мне сделать процесс обучения более наглядным и увлекательным'
    },
    {
        img: 'reviews-hero3.png',
        name: 'Смирнов',
        lastName: 'Владимир Дмитриевич',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для физиков дал мне возможность освоить новые технологии и инструменты, которые я могу использовать в своей работе. Особенно ценными были занятия по созданию виртуальных лабораторий и использованию программ для моделирования физических процессов. Эти навыки помогут мне сделать процесс обучения физике более наглядным и увлекательным'
    },
    {
        img: 'reviews-hero1.png',
        name: 'Иванов ',
        lastName: 'Михаил Дмитриевич',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для химиков был очень полезен и информативен. Он позволил мне лучше понять, как использовать информационные технологии в преподавании химии. Особенно полезными были занятия по работе с программами для создания интерактивных уроков и презентаций. Я уверен, что эти навыки помогут мне сделать процесс обучения более интересным и эффективным'
    },
    {
        img: 'reviews-hero2.png',
        name: 'Иванова',
        lastName: 'Ирина Анатольевна',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для физиков дал мне необходимые знания и навыки для использования информационных технологий в преподавании физики. Я научился создавать интерактивные уроки, использовать программы для моделирования физических процессов и проводить виртуальные эксперименты. Это поможет мне сделать процесс обучения более наглядным и увлекательным'
    },
    {
        img: 'reviews-hero3.png',
        name: 'Смирнов',
        lastName: 'Владимир Дмитриевич',
        date: '12.04.2024',
        dateSm: '12.04.24',
        text: 'Курс IT для физиков дал мне возможность освоить новые технологии и инструменты, которые я могу использовать в своей работе. Особенно ценными были занятия по созданию виртуальных лабораторий и использованию программ для моделирования физических процессов. Эти навыки помогут мне сделать процесс обучения физике более наглядным и увлекательным'
    }
])

function getPath (img) {
    return new URL('/image/reviews/' + img, import.meta.url).href
}
</script>

<style scoped lang="scss">
.reviews {
    padding: 60px 80px;
    box-sizing: border-box;
    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.reviews__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.reviews__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    font-family: 'Kreadon-Demi';
}
.reviews__cards {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 16px;
    @media (max-width: $xl) {
        grid-template-columns: repeat(2, 50%);
    }
    @media (max-width: $lg) {
        grid-template-columns: 100%;
    }
}
.reviews__card {
    border: 2px solid $blue;
    border-radius: 60px 60px 32px 32px;
}
.reviews__card-header {
    display: flex;
    justify-content: space-between;
    border-radius: 1000px;
    padding: 2px 32px 2px 2px;
    background: $blue;
    box-sizing: border-box;
}
.reviews__card-header-person {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: $lg) {
        gap: 8px;
    }
}
.reviews__header-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: $lg) {
        flex-direction: row;
    }
}
.reviews__card-header-person-info {
    display: flex;
    gap: 16px;
}
.reviews__header-person-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 1.2;
    }
    @media (max-width: $sm) {
        padding-top: 20px;
    }
    span {
        display: block;
    }
}
.reviews__card-header-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 1.4;
    }
    @media (max-width: $sm) {
    }
}
.reviews__card-header-date span:nth-child(1) {
    @media (max-width: $sm) {
        display: none;
    }
}
.reviews__card-header-date span:nth-child(2) {
    display: none;
    @media (max-width: $sm) {
        display: flex;
        transform: translate(-30px, 10px);
    }
}
.reviews__card-footer-text {
    padding: 16px;
    @media (max-width: $sm) {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>
