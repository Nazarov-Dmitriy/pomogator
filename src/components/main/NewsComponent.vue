<template>
    <section class="news">
        <div>
            <h2 class="news__title news__container">Актуальные новости</h2>
            <div class="news__cards news__container">
                <div
                    v-for="item in atricleData"
                    :key="item.id"
                    class="news__card"
                    @click="linkArticle(item.id, item.trend)"
                >
                    <div class="news__card-header">
                        <div class="news__card-img-wrapper">
                            <img :src="item.img" alt="card img" class="news__card-img" />
                        </div>
                    </div>
                    <div class="news__card-body">
                        <div class="news__card-body-tags">
                            <span v-for="(el, ind) in item.tags" :key="ind">#{{ el }}</span>
                        </div>
                        <p class="news__text news__card-text">
                            {{ item.title }}
                        </p>
                        <span>{{ item.publication_date }}</span>
                    </div>
                </div>
                <div class="news__card">
                    <div class="news__card-body news__card-body--empty">
                        <p class="news__text news__card-text news__card-text--empty">
                            Переходите в блог, чтобы выбрать подходящую для вас информацию
                        </p>
                        <BtnGradient
                            class="news__card-button"
                            emit-name="link"
                            @link="$router.push('/blog')"
                        >
                            Подробнее
                        </BtnGradient>
                        <div class="news__card-bg">
                            <img src="../../assets/images/main/news/news-card-bg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="news__info">
                <div v-if="!resultSubsribe" class="news__info-wrapper">
                    <div class="news__text news__container">
                        Подпишитесь на рассылку, чтобы не пропустить актуальный для вас вебинар или
                        новость дня
                    </div>
                    <form class="news__form news__container" @submit.prevent>
                        <label
                            :class="{ 'invalid-text': formField.emailError }"
                            for="news__input-id"
                            >E-mail</label
                        >
                        <div class="news__input-wrapper">
                            <div class="input-wrapper">
                                <input
                                    id="news__input-id"
                                    v-model="formField.emai"
                                    :class="{ 'invalid-form': formField.emailError }"
                                    class="news__form-input"
                                    placeholder="mariaivanova@mail.ru"
                                    @input="changeEmail($event)"
                                    @keypress.enter="validateField($event, 'event')"
                                />
                                <div v-if="formField.emailError" class="validate-danger">
                                    <div class="validate-svg">
                                        <img
                                            src="../../assets/icons/main/news/validate.svg"
                                            alt=""
                                        />
                                    </div>
                                    <span>Поле заполненно некорректно</span>
                                </div>
                            </div>
                            <BtnBackgroud
                                class="news__form-button"
                                emit-name="action"
                                @action="sendMail()"
                            >
                                Отправить
                            </BtnBackgroud>
                            <p class="news__text news__form-text">
                                Нажимая кнопку “Подписаться” вы соглашаетесь с
                                <a
                                    href="/documents/user_consultation_it.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >> <span>политикой обработки персональных данных</span></a
                                >
                            </p>
                        </div>
                    </form>
                </div>
                <div v-else class="news__success news__container">
                    <div class="news__success-wrapper">
                        <h2 class="news__success-title">
                            {{
                                resultSubsribe == 'added'
                                    ? 'Ваши данные приняты'
                                    : 'Вы уже подписаны'
                            }}
                        </h2>
                        <div class="news__success-svg">
                            <img src="../../assets/images/main/news/success.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import BtnGradient from '../btns/BtnComponent.vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { randomArticle } from '../../db/db.js'
import { useRouter } from 'vue-router'
import { useSubsribeStore } from '@/stores/subsribeStore'

const router = useRouter()
const atricleData = ref([])

const subsribeStore = useSubsribeStore()

const resultSubsribe = computed(() => {
    return subsribeStore.getSubscribe
})

const formField = reactive({
    email: '',
    emailError: false,
    validateSubscribe: false
})

onMounted(() => {
    atricle()
})

onUnmounted(() => {
    subsribeStore.setSubsribe()
})

function atricle() {
    atricleData.value = randomArticle(null, 3)
}

const sendMail = () => {
    validateForm()
    if (formField.validateSubscribe) {
        subsribeStore.addSubscribe(formField.email)
    }
}

function linkArticle(id, trend) {
    router.push({ path: `/trend/${trend}/${id}` })
}

function validateField(param, event) {
    formField.validateSubscribe = false
    let target
    if (event === 'event') {
        target = param.target.value.trim()
    } else {
        target = param.trim()
    }
    let email_regexp =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    !email_regexp.test(String(target).toLowerCase())
        ? (formField.emailError = true)
        : (formField.emailError = false)

    if (!formField.emailError) {
        formField.validateSubscribe = true
    }
}

function changeEmail(event) {
    let target = event.target
    let x = target.value.match(
        /([a-zA-Zа-яА-Я0-9]{1})([a-zA-Zа-яА-Я0-9._-]{0,19})([@]{0,1})([a-zA-Zа-яА-Я0-9._-]{0,10})([.]{0,1})([a-zA-Zа-яА-Я0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

function validateForm() {
    validateField(formField.email, 'validate')
}
</script>

<style scoped lang="scss">
.invalid-form {
    border: 2px solid #f84343 !important;
}

.invalid-text {
    color: #f84343;
}

.news {
    padding: 60px 0;
    background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
    height: 100%;

    @media (max-width: $lg) {
        padding: 40px 0;
    }

    @media (max-width: $sm) {
        padding: 32px 0;
    }
}

.news__container {
    max-width: 1440px;
    margin: 0 auto;
}

.news__title {
    font-size: 36px;
    line-height: 117%;
    color: $blue-primary;
    margin-bottom: 32px;
    padding: 0 80px;

    @media (max-width: 992px) {
        font-size: 32px;
        line-height: 125%;
        padding: 0 40px;
    }

    @media (max-width: 576px) {
        padding: 0 16px;
    }
}

.news__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    padding: 0 80px;

    @media (max-width: $xl) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: $lg) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        padding: 0 40px;
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 16px;
    }
}

.news__card {
    border: 2px solid $blue;
    border-radius: 32px;
    background: $white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    cursor: pointer;

    span {
        color: $blue;
    }

    &:hover {
        border-color: $blue-primary;
    }

    &:hover .news__text {
        color: $blue-primary;
    }

    &:hover .news__card-body span {
        color: $blue-primary;
    }
}

.news__card-img-wrapper {
    display: flex;
}

.news__card-body {
    padding: 2px 16px 16px 16px;
    position: relative;
    display: grid;
    grid-template-rows: auto auto 1fr;
    align-items: end;
    height: 100%;

    @media (max-width: $xl) {
        padding: 2px 14px 16px 14px;
    }

    &--empty {
        background: $gradient-background;
        height: 100%;
    }
}

.news__card-body-tags {
    display: flex;
    gap: 16px;
}

.news__card-img {
    width: 100%;
    aspect-ratio: 3 / 1;
    object-fit: cover;
}

.news__card-text {
    margin: 20px 0;

    &--empty {
        margin-top: 55px;
    }
}

.news__card-button {
    box-sizing: border-box;
    width: max-content;
    cursor: pointer;
    position: relative;
    z-index: 1;
}

.news__card-bg {
    position: absolute;
    top: 120px;
    right: 0;
    z-index: 0;

    @media (max-width: $sm) {
        top: 20px;
        right: -70px;
    }
}

.news__info {
    padding: 45px 80px;
    background: rgba(255, 255, 255, 0.5);

    gap: 48px;
    position: relative;

    @media (max-width: 992px) {
        padding: 45px 40px;
    }

    @media (max-width: 576px) {
        padding: 16px;
    }
}

.news__info-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}

.news__text {
    font-size: 24px;
    line-height: 133%;
    color: $black;

    @media (max-width: $xl) {
        font-size: 20px;
        line-height: 120%;
    }

    @media (max-width: $lg) {
    }
}

.news__card-text--empty {
    margin-bottom: 32px;
}

.news__form {
    display: grid;
    gap: 8px;
    width: 100%;
}

.news__input-wrapper {
    display: grid;
    column-gap: 16px;
    row-gap: 10px;
    grid-template-columns: 1fr auto;
    height: 48px;
    position: relative;
    height: 100%;

    @media (max-width: $lg) {
        width: 100%;
    }

    @media (max-width: $sm) {
        grid-template-columns: 1fr;
    }
}

.input-wrapper {
    width: 100%;

    @media (max-width: $sm) {
        max-width: 100%;
    }
}

.news__form-input {
    border: 2px solid #a0b1ed;
    color: #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    width: 100%;
    background: $white;
    color: $blue-primary;
    transition: 0.2s;
    background: url('/src/assets/icons/main/news/mail.svg');
    background-repeat: no-repeat;
    background-position: right 16px top 10px;
    height: 48px;
    color: $black;

    &::placeholder {
        color: #a0b1ed;
    }

    &:focus {
        border: 2px solid $blue-primary;
    }

    &:hover {
        border: 2px solid $blue-primary;
        background: url('/src/assets/icons/main/news/mail-hover.svg');
        background-repeat: no-repeat;
        background-position: right 16px top 10px;
    }

    &:active,
    &:focus {
        border: 2px solid $blue-primary;
        background: url('/src/assets/icons/main/news/mail-hover.svg');
        background-repeat: no-repeat;
        background-position: right 16px top 10px;

        &::placeholder {
            color: $blue-primary;
        }
    }

    &:hover::placeholder {
        color: $blue-primary;
    }

    @media (max-width: $lg) {
        width: 100%;
    }

    @media (max-width: $sm) {
        box-sizing: border-box;

        width: 100%;
        display: flex;
        padding: 22px 16px;
    }
}

.validate-svg {
    display: flex;
    flex-direction: column;
}

.validate-danger {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    color: $primary-red;
    align-items: center;
    width: max-content;
}

.news__input-svg {
    position: absolute;
    top: 14px;
    right: 167px;

    @media (max-width: $lg) {
        top: 14px;
        right: 160px;
    }

    @media (max-width: $sm) {
        right: 20px;
    }
}

.news__form-button {
    height: max-content;
}

.news__form-text {
    font-size: 12px;
    line-height: 150%;
    color: $black;
    grid-row: 2;
    grid-column: span 2;

    @media (max-width: $sm) {
        grid-column: span 1;
    }

    a {
        color: $black;
    }

    span {
        text-decoration: underline;
        text-decoration-skip-ink: none;
    }

    @media (max-width: $sm) {
    }
}

.news__success {
    padding: 24px 0;

    @media (max-width: $lg) {
        padding: 24px 0;
    }

    @media (max-width: $sm) {
        padding: 24px 0;
    }
}

.news__success-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    border: 2px solid $blue-primary;
    border-radius: 32px;
    padding: 24px 0;

    @media (max-width: $sm) {
        gap: 10px;
        padding: 24px;
    }
}

.news__success-title {
    font-size: 24px;
    line-height: 133%;
    text-align: center;
    color: $black;
}
</style>
