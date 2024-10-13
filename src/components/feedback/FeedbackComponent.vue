<template>
    <div class="news__info" :class="{ sent: isEmailSent }">
        <div v-if="!formField.validateSubscribe" class="news__info-wrapper">
            <div class="news__text news__container">
                Подпишитесь на рассылку, чтобы не пропустить актуальный для вас вебинар или новость
                дня
            </div>
            <form class="news__form news__container" @submit.prevent="sendMail">
                <label :class="{ 'invalid-text': formField.emailError }" for="news__input-id"
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
                                <img src="../../assets/icons/main/news/validate.svg" alt="" />
                            </div>
                            <span>Поле заполненно некорректно</span>
                        </div>
                    </div>
                    <BtnBackgroud class="news__form-button"> Отправить </BtnBackgroud>
                    <p class="news__text news__form-text">
                        Нажимая кнопку “Подписаться” вы соглашаетесь с
                        <a href="#"> <span>политикой обработки персональных данных</span></a>
                    </p>
                </div>
            </form>
        </div>
        <div v-if="formField.validateSubscribe" class="news__success news__container">
            <div class="news__success-wrapper">
                <h2 class="news__success-title">Ваши данные приняты</h2>
                <div class="news__success-svg">
                    <img src="../../assets/images/main/news/success.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import BtnGradient from '../btns/BtnComponent.vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { randomArticle } from '../../db/db.js'

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: null
    }
})

const isEmailSent = ref(false)

const atricleData = ref([])

const formField = reactive({
    email: '',
    emailError: false,
    validateSubscribe: false
})

onMounted(() => {
    atricle()
})

function atricle() {
    atricleData.value = randomArticle(null, 3)
}

const sendMail = () => {
    validateForm()
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
        isEmailSent.value = true
    }
}

function changeEmail(event) {
    let target = event.target
    let x = target.value.match(
        /([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

function validateForm() {
    validateField(formField.email, 'validate')
}
</script>

<style lang="scss" scoped>
.news__info {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #5b94ea;
    border-radius: 32px;
    padding: 24px;
    margin: 60px 0;
    box-sizing: border-box;
    gap: 48px;
    position: relative;

    &.sent {
        border: none;
    }

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
