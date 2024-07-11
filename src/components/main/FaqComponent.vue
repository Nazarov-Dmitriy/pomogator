<template>
    <section class="faq">
        <div class="faq-container">
            <h2 class="faq__title">
                Часто задаваемые вопросы
            </h2>
            <div class="faq__content">
                <div
                    v-for="item in data"
                    :key="item.title"
                    class="faq__item"
                >
                    <div class="faq__question">
                        <div class="faq__count">
                            <p class="faq__count-text">
                                {{ getCount(item.id) }}
                            </p>
                        </div>
                        <p class="faq__question-text">
                            {{ item.title }}
                        </p>
                        <div class="faq__arrow">
                            <button
                                class="faq__arrow-btn"
                                :class="{ 'active': id === item.id }"
                                @click="id = item.id"
                            >
                                <svg
                                    class="faq__arrow-icon"
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 13L7 7L0.999999 1"
                                        stroke="#060C1F"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="faq__answer">
                        <Transition name="fade">
                            <template v-if="item.id === id">
                                <div
                                    v-if="item.id !== 3 && item.id !== 4"
                                    class="faq__answer-item"
                                >
                                    <p
                                        class="faq__answer-text"
                                    >
                                        {{ item.answer }}
                                    </p>
                                </div>
                                <div
                                    v-else-if="item.id == 3"
                                    class="faq__answer-item"
                                >
                                    <p
                                       
                                        class="faq__answer-text"
                                    >
                                        {{ item.answer }}
                                        <BtnBackgroud
                                            class="webinar__info-button"
                                            style="margin-top: 10px;"
                                        >
                                            Регистрация
                                        </BtnBackgroud>
                                    </p>
                                </div>
                                <div
                                    v-else-if="item.id == 4"
                                    class="faq__answer-item"
                                >
                                    <p
                                        class="faq__answer-text"
                                    >
                                        {{ item.answer }}
                                    </p>
                                    <BtnGradient
                                        class="btn__proposal"
                                        emit-name="offer"
                                        style="margin-top: 10px;"
                                        @offer="modalShow = true"
                                    >
                                        Предложить материал
                                    </BtnGradient>
                                </div>
                            </template>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
        <img
            src="@/assets/images/main/faq/bg-line.svg"
            alt="bg-image"
            class="faq__bg-line"
        >
        <Teleport to="body">
            <ModalComponent
                :show="modalShow"
                @close="modalShow = false"
            />
        </Teleport>
    </section>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import BtnGradient from '../btns/BtnComponent.vue';
import ModalComponent from '../modal/ModalComponent.vue';
import { ref } from 'vue';

const id = ref(null)

const data = ref([
    {
        id: 1,
        title: 'Что дает регистрация на сайте?',
        answer: 'После регистрации на сайте вы получаете доступ в личный кабинет, где открываются возможности скачать материал, участвовать в вебинаре и получить сертификат, собирать избранные материалы. '
    },
    {
        id: 2,
        title: 'Как принять участие в вебинаре и получить сертификат?',
        answer: 'Для участия в вебинаре необходимо пройти регистрацию на сайте. Сертификат появится в вашем личном кабинете автоматически.'
    },
    {
        id: 3,
        title: 'Можно ли скачать материал?',
        answer: 'Да, для бесплатного скачивания материалов необходимо пройти регистрацию на сайте.'
    },
    {
        id: 4,
        title: 'Как предложить свой материал?',
        answer: 'Предложить свой материал или вебинар вы можете тут '
    },
    {
        id: 5,
        title: 'Если прошел регистрацию на вебинар, но не получилось присоединиться во время трансляции, будет ли возможность посмотреть вебинар в записи?',
        answer: 'Запись всех вебинаров сохраняется на сайте. Все зарегистрированные на вебинар пользователи получают сертификаты.'
    },
])

function getCount (ind) {
    return ind < 10 ? '0' + (ind + 1) : ind + 1
}

</script>
<style lang="scss">
.faq {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
}

.faq-container {
    padding: 60px 80px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $lg) {
        padding: 28px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 8px 16px 32px 16px;
    }
}

.faq__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 48px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.faq__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.faq__item {
    display: flex;
    gap: 16px;

    @media (max-width: $xl) {
        flex-direction: column;
    }
}

.faq__question {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 50%;

    @media (max-width: $xl) {
        max-width: 100%;
    }
}

.faq__count {
    margin-right: 24px;
    padding: 8px;
    width: 35px;
    height: 35px;
    background-image: url(../../assets/icons/main/faq/curle.svg);
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-size: 35px 35px;
    display: flex;
    justify-content: center;
    align-items: center;


    &-text {
        background: $gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    }
}

.faq__question-text {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;

    }

    @media (max-width: $sm) {
        font-size: 16px;
    }
}

.faq__arrow {
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    margin-left: auto;
    transition: all .5s ease;


    &:has(.active) {
        transform: translateX(24px);
    }

    @media (max-width: $xl) {
        width: 32px;
        transform: rotate(-90deg);

        &:has(.active) {
            transform: rotate(90deg);
        }
    }
}

.faq__arrow-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $white;
    border: 1px solid $black;
    padding-left: 2px;

    &.active {
        background: $blue;
        border: none;

        .faq__arrow-icon path {
            stroke: $white;
        }
    }
}

.faq__answer {
    width: 100%;
    max-width: 50%;
    position: relative;

    @media (max-width: $xl) {
        max-width: 100%;
    }
}

.faq__answer-item{
    position: absolute;
    top: 0;
    padding: 24px;
    border: 2px solid $blue;
    border-radius: 32px;  
    top: 50%;
    transform: translate(0, -16px);
    background: $white;

    @media (max-width: $xl) {
        position: unset;
        transform: none;
    }

    @media (max-width: $lg) {
        padding: 16px;
    }
}


.faq__answer-text {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;  

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 24px;
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transition: opacity 0.2s ease;
}

.faq__bg-line {
    position: absolute;
    width: 100%;
    bottom: -50px;
    z-index: -1;

    @media (max-width: $lg) {
        width: 1560px;
        left: -160px;
    }

    @media (max-width: $sm) {
        display: none;
    }
}
</style>