<template>
    <div class="modal__form">
        <template v-if="resultSending">
            <div class="modal__form-success">
                <h2 class="news__success-title">Отправлено</h2>
                <div class="news__success-svg">
                    <img src="../../assets/images/main/news/success.svg" alt="" />
                </div>
                <button class="close-btn" @click="$emit('close')">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.92969 5L19.0718 19.1421"
                            stroke="#2E343D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <path
                            d="M5 19.4102L19.1421 5.26802"
                            stroke="#2E343D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>
        </template>
        <template v-else>
            <div class="form__header">
                <h2 class="form__title">Предложить тему материала</h2>
                <p class="form__subtitle">
                    Нам важно ваше мнение! Мы заинтересованы в качестве представленной на сайте
                    информации.
                </p>
                <button class="close-btn" @click="$emit('close')">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.92969 5L19.0718 19.1421"
                            stroke="#2E343D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <path
                            d="M5 19.4102L19.1421 5.26802"
                            stroke="#2E343D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>

            <div class="form__body">
                <form class="form-field" @submit.prevent @keypress.enter.prevent>
                    <div class="form-item form-item__name">
                        <label
                            for="name"
                            class="form-item__label"
                            :class="{ error: formField.nameError }"
                            >Как вас зовут?</label
                        >
                        <div class="form-item__group">
                            <input
                                id="name"
                                v-model="formField.name"
                                type="text"
                                placeholder="Мария Иванова"
                                class="form-item-input"
                                :class="{ error: formField.nameError }"
                                @keypress.enter="validateField($event, 'event', 'name')"
                            />
                            <span class="form-item__icon">
                                <svg
                                    width="22"
                                    height="24"
                                    viewBox="0 0 22 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.0015 12.4626C14.4301 12.4626 17.2328 9.6599 17.2328 6.2313C17.2328 2.80271 14.4301 0 11.0015 0C7.57292 0 4.77026 2.80271 4.77026 6.2313C4.77026 9.6599 7.57297 12.4626 11.0015 12.4626Z"
                                        fill="#A0B1ED"
                                    />
                                    <path
                                        d="M21.6932 17.4422C21.5299 17.034 21.3123 16.653 21.0674 16.2993C19.8157 14.4489 17.8837 13.2244 15.7069 12.9251C15.4348 12.8979 15.1355 12.9523 14.9177 13.1156C13.7749 13.9591 12.4144 14.3945 10.9994 14.3945C9.58437 14.3945 8.22384 13.9591 7.08098 13.1156C6.86327 12.9523 6.56395 12.8707 6.29186 12.9251C4.11499 13.2244 2.15582 14.4489 0.931344 16.2993C0.686448 16.653 0.46874 17.0612 0.305511 17.4422C0.223896 17.6054 0.251084 17.7959 0.332698 17.9592C0.550407 18.3401 0.82249 18.7211 1.06739 19.0476C1.44832 19.5647 1.8565 20.0272 2.3191 20.4626C2.70004 20.8435 3.13541 21.1973 3.57082 21.551C5.72046 23.1565 8.30551 24 10.9722 24C13.6388 24 16.2239 23.1564 18.3735 21.551C18.8089 21.2245 19.2443 20.8435 19.6252 20.4626C20.0606 20.0272 20.496 19.5646 20.877 19.0476C21.1491 18.6939 21.394 18.3401 21.6117 17.9592C21.7476 17.7959 21.7748 17.6054 21.6932 17.4422Z"
                                        fill="#A0B1ED"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div v-if="formField.nameError" class="form-item__error">
                            <img src="@/assets/icons/error.svg" alt="icon" />
                            <p class="form-item__error-text">Поле заполненно некорректно</p>
                        </div>
                    </div>
                    <div class="form-item form-item__phone">
                        <label
                            for="phone"
                            class="form-item__label"
                            :class="{ error: formField.phoneError }"
                            >Телефон</label
                        >
                        <div class="form-item__group">
                            <input
                                id="phone"
                                v-model="formField.phone"
                                type="text"
                                placeholder="+7 (922) 123 45 67"
                                class="form-item-input"
                                :class="{ error: formField.phoneError }"
                                @input="changePhone($event)"
                                @keypress.enter="validateField($event, 'event', 'phone')"
                            />
                            <span class="form-item__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.3707 17.6136L20.0143 14.2643C18.8157 13.0681 16.7779 13.5466 16.2984 15.1016C15.9388 16.1782 14.7401 16.7763 13.6613 16.537C11.2639 15.9389 8.02748 12.8289 7.42814 10.3169C7.06854 9.24034 7.78775 8.04418 8.86656 7.68537C10.4249 7.20691 10.9043 5.17342 9.70564 3.97726L6.34932 0.627988C5.39038 -0.209329 3.95195 -0.209329 3.11287 0.627988L0.835372 2.90071C-1.44213 5.29304 1.07511 11.6327 6.70893 17.2547C12.3428 22.8767 18.6958 25.5083 21.0932 23.1159L23.3707 20.8432C24.2098 19.8863 24.2098 18.4509 23.3707 17.6136Z"
                                        fill="#A0B1ED"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div v-if="formField.phoneError" class="form-item__error">
                            <img src="@/assets/icons/error.svg" alt="icon" />
                            <p class="form-item__error-text">Поле заполненно некорректно</p>
                        </div>
                    </div>
                    <div class="form-item form-item__email">
                        <label
                            for="email"
                            class="form-item__label"
                            :class="{ error: formField.emailError }"
                            >E-mail</label
                        >
                        <div class="form-item__group">
                            <input
                                id="email"
                                v-model="formField.email"
                                type="text"
                                placeholder="mariaivanova@mail.ru"
                                class="form-item-input"
                                :class="{ error: formField.emailError }"
                                @input="changeEmail($event)"
                                @keypress.enter="validateField($event, 'event', 'email')"
                            />
                            <span class="form-item__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.0057 14.6797C13.4086 15.0777 12.7151 15.2881 12 15.2881C11.285 15.2881 10.5914 15.0777 9.99431 14.6797L0.159797 8.12311C0.105234 8.08674 0.0520781 8.04881 0 8.00981V18.7534C0 19.9852 0.999609 20.9628 2.20936 20.9628H21.7906C23.0224 20.9628 24 19.9632 24 18.7534V8.00977C23.9478 8.04886 23.8945 8.08688 23.8398 8.1233L14.0057 14.6797Z"
                                        fill="#A0B1ED"
                                    />
                                    <path
                                        d="M0.939844 6.95353L10.7744 13.5101C11.1466 13.7583 11.5733 13.8824 12 13.8824C12.4267 13.8824 12.8534 13.7583 13.2256 13.5101L23.0602 6.95353C23.6487 6.56142 24 5.90517 24 5.19689C24 3.97903 23.0092 2.98828 21.7914 2.98828H2.20861C0.990797 2.98833 0 3.97908 0 5.19806C0 5.90517 0.351375 6.56142 0.939844 6.95353Z"
                                        fill="#A0B1ED"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div v-if="formField.emailError" class="form-item__error">
                            <img src="@/assets/icons/error.svg" alt="icon" />
                            <p class="form-item__error-text">Поле заполненно некорректно</p>
                        </div>
                    </div>
                    <div class="form-item form-item__textarea">
                        <label
                            for="textarea"
                            class="form-item__label"
                            :class="{ error: formField.questionError }"
                            >Ваши вопросы и предложения</label
                        >
                        <textarea
                            id="textarea"
                            v-model="formField.question"
                            type="text"
                            placeholder="Напишите ваш вопрос или ваше предложение."
                            class="form-item-textearea"
                            :class="{ error: formField.questionError }"
                            @input="changeTextarea($event)"
                        />
                        <div v-if="formField.questionError" class="form-item__error">
                            <img src="@/assets/icons/error.svg" alt="icon" />
                            <p class="form-item__error-text">Поле заполненно некорректно</p>
                        </div>
                    </div>
                    <div class="form-item form-item__upload">
                        <div class="flex flex-col gap-2">
                            <div>
                                <label for="upload" class="form-item__label upload flex items-end"
                                    >Прикрепить файл
                                    <svg
                                        class="upload-icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.7855 17.5809C12.8904 17.6854 12.9736 17.8096 13.0304 17.9463C13.0871 18.0831 13.1164 18.2297 13.1164 18.3777C13.1164 18.5258 13.0871 18.6724 13.0304 18.8092C12.9736 18.9459 12.8904 19.0701 12.7855 19.1746L12.2286 19.7315C11.1734 20.7867 9.74217 21.3795 8.24985 21.3795C6.75753 21.3795 5.32633 20.7867 4.2711 19.7315C3.21587 18.6762 2.62305 17.2451 2.62305 15.7527C2.62305 14.2604 3.21587 12.8292 4.2711 11.774L6.53235 9.51367C7.54624 8.49727 8.91039 7.907 10.3454 7.86378C11.7804 7.82055 13.1776 8.32764 14.2508 9.28117C14.3616 9.37966 14.4519 9.49901 14.5166 9.63241C14.5813 9.7658 14.619 9.91063 14.6277 10.0586C14.6364 10.2066 14.6159 10.3549 14.5673 10.4949C14.5187 10.635 14.443 10.7641 14.3445 10.8749C14.246 10.9857 14.1267 11.076 13.9933 11.1407C13.8599 11.2054 13.7151 11.2432 13.5671 11.2519C13.4191 11.2606 13.2708 11.24 13.1308 11.1915C12.9907 11.1429 12.8616 11.0672 12.7508 10.9687C12.1072 10.3971 11.2696 10.093 10.4092 10.1186C9.54884 10.1443 8.73078 10.4976 8.12235 11.1065L5.86297 13.364C5.22994 13.997 4.8743 14.8556 4.8743 15.7509C4.8743 16.6461 5.22994 17.5047 5.86297 18.1377C6.49601 18.7708 7.3546 19.1264 8.24985 19.1264C9.1451 19.1264 10.0037 18.7708 10.6367 18.1377L11.1936 17.5809C11.2981 17.4763 11.4222 17.3933 11.5587 17.3367C11.6953 17.28 11.8417 17.2509 11.9895 17.2509C12.1374 17.2509 12.2838 17.28 12.4203 17.3367C12.5569 17.3933 12.681 17.4763 12.7855 17.5809ZM19.7305 4.26836C18.6744 3.21475 17.2435 2.62305 15.7517 2.62305C14.2599 2.62305 12.8291 3.21475 11.773 4.26836L11.2161 4.82523C11.0048 5.03658 10.886 5.32322 10.886 5.62211C10.886 5.92099 11.0048 6.20764 11.2161 6.41898C11.4274 6.63033 11.7141 6.74906 12.013 6.74906C12.3119 6.74906 12.5985 6.63033 12.8098 6.41898L13.3667 5.86211C13.9998 5.22907 14.8583 4.87343 15.7536 4.87343C16.6489 4.87343 17.5074 5.22907 18.1405 5.86211C18.7735 6.49514 19.1291 7.35373 19.1292 8.24898C19.1292 9.14423 18.7735 10.0028 18.1405 10.6359L15.8802 12.8971C15.2712 13.5057 14.4527 13.8586 13.5921 13.8835C12.7315 13.9084 11.8939 13.6035 11.2508 13.0312C11.14 12.9327 11.0109 12.857 10.8708 12.8084C10.7307 12.7598 10.5825 12.7393 10.4345 12.748C10.2865 12.7567 10.1417 12.7944 10.0083 12.8591C9.87488 12.9238 9.75553 13.0141 9.65704 13.1249C9.55855 13.2357 9.48284 13.3648 9.43425 13.5049C9.38566 13.645 9.36513 13.7932 9.37384 13.9412C9.38254 14.0892 9.42031 14.234 9.48499 14.3674C9.54966 14.5008 9.63998 14.6202 9.75079 14.7187C10.8233 15.672 12.2195 16.1794 13.6538 16.137C15.0881 16.0947 16.452 15.5058 17.4664 14.4909L19.7277 12.2305C20.7825 11.1747 21.3753 9.74344 21.3758 8.25097C21.3763 6.7585 20.7846 5.32681 19.7305 4.27023V4.26836Z"
                                            fill="#5B94EA"
                                        />
                                    </svg>
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    hidden
                                    accept=".doc, .docx ,.pdf, .rar, .zip, .7z"
                                    @change="onFileChange"
                                />
                            </div>
                            <p v-if="formField.file" class="texp-p2">{{ formField.file?.name }}</p>
                        </div>
                    </div>
                </form>
            </div>

            <div class="form-footer">
                <div class="form-item__submit">
                    <p class="form-item__policy">
                        Нажимая на кнопку «Отправить», я соглашаюсь с
                        <span class="form-item__policy-link">
                            <a
                                href="/public/documents/user_consultation_it.pdf"
                                download="/public/documents/user_consultation_it.pdf"
                            >
                                политикой обработки персональных данных</a
                            ></span
                        >
                    </p>
                    <BtnBackgroud
                        class="form-item__btn"
                        emit-name="form-submit"
                        @form-submit="validateForm()"
                    >
                        Отправить
                    </BtnBackgroud>
                </div>
            </div>
        </template>
        <img
            src="@/assets/images/form/bg-material.svg"
            alt="bg-image"
            class="form-item__bg-line-tablet"
        />
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, computed, reactive } from 'vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { useSendMessageStore } from '@/stores/sendMessageStore'

defineEmits(['close'])
const sendMessage = useSendMessageStore()
const resultSending = computed(() => {
    return sendMessage.getStatus
})

const formField = reactive({
    name: '',
    phone: '',
    email: '',
    question: '',
    file: null,
    nameError: false,
    phoneError: false,
    emailError: false,
    questionError: false,
    falidateForm: false
})

onUnmounted(() => {
    sendMessage.setStatusNull()
})

function validateField(param, event, nameParam) {
    let target
    if (event === 'event') {
        target = param.target.value.trim()
    } else {
        target = param.trim()
    }

    if (nameParam === 'name') {
        target.length < 3 ? (formField.nameError = true) : (formField.nameError = false)
    }
    if (nameParam === 'phone') {
        target.length < 18 ? (formField.phoneError = true) : (formField.phoneError = false)
    }
    if (nameParam === 'email') {
        let email_regexp =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        !email_regexp.test(String(target).toLowerCase())
            ? (formField.emailError = true)
            : (formField.emailError = false)
    }
    if (nameParam === 'question') {
        target.length < 3 ? (formField.questionError = true) : (formField.questionError = false)
    }

    if (
        formField.emailError ||
        formField.phoneError ||
        formField.nameError ||
        formField.questionError
    ) {
        formField.falidateForm = false
    } else {
        formField.falidateForm = true
    }
}

function changePhone(event) {
    let target = event.target
    let x = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    x[1] = '+7'
    target.value = !x[3]
        ? x[1] + '-(' + x[2]
        : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
    formField.phone = target.value
}

function changeEmail(event) {
    let target = event.target
    let x = target.value.match(
        /([a-zA-Zа-яА-Я0-9]{1})([a-zA-Zа-яА-Я0-9._-]{0,19})([@]{0,1})([a-zA-Zа-яА-Я0-9._-]{0,10})([.]{0,1})([a-zA-Zа-яА-Я0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

function changeTextarea(event) {
    let target = event.target
    event.target.scrollBy(target.scrollHeight, 100)

    if (formField.questionError && target.value.length > 3) {
        formField.questionError = false
    }
}

function onFileChange(e) {
    const file = e.target.files[0]
    console.log(file)

    if (file) {
        formField.file = file
        const reader = new FileReader()
        reader.readAsDataURL(file)
    }
}

function validateForm() {
    let validateFeildArr = ['name', 'phone', 'email', 'question']

    validateFeildArr.forEach((item) => {
        validateField(formField[item], 'validate', item)
    })

    if (formField.falidateForm) {
        const data = new FormData()
        data.append('name', formField.name)
        data.append('phone', formField.phone)
        data.append('email', formField.email)
        data.append('question', formField.question)
        if (formField.file) {
            data.append('file', formField.file)
        }
        sendMessage.sendOfferMaterial(data)
    }
}

onMounted(() => {
    document.body.classList.add('no-scroll')
})
onUnmounted(() => {
    document.body.classList.remove('no-scroll')
})
</script>
<style lang="scss" scoped>
.no-scroll {
    overflow: hidden;
}

.modal__form {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: $gradient-background;
    max-height: calc(100vh - 40px);
    overflow: scroll;

    @media (max-width: $lg) {
        padding: 24px;
    }

    @media (max-width: $sm) {
        padding: 16px;
    }
}

.form__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

.form__title {
    font-family: 'Kreadon-Demi';
    font-size: 36px;
    line-height: 42px;
    color: $black;
    @media (max-width: $lg) {
        max-width: 90%;
    }
}

.form__subtitle {
    font-size: 16px;
    line-height: 24px;
    color: $blue-primary;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
}

.form__body {
    display: flex;
}

.form-field {
    display: grid;
    grid-template-columns: minmax(200px, 492px) minmax(200px, 600px);
    grid-template-areas:
        'name textarea'
        'phone textarea'
        'email textarea'
        '. upload';
    justify-content: space-between;
    gap: 16px 24px;
    width: 100%;

    @media (max-width: $lg) {
        grid-template-columns: minmax(100px, 1fr);
        grid-template-areas:
            'name'
            'phone'
            'email'
            'textarea'
            'upload';
    }
}

.form-item__name {
    grid-area: name;
}

.form-item__phone {
    grid-area: phone;
}

.form-item__email {
    grid-area: email;
}

.form-item__textarea {
    grid-area: textarea;
}

.form-item__upload {
    grid-area: upload;
}

.form-item {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-content: flex-start;
}

.form-item__label {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $black;

    &.error {
        color: $primary-red;
    }
}

.form-item__group {
    flex: 1 1 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 100px;
}

.form-item-input {
    width: 100px;
    flex: 1 1 100%;
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 10px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;
    box-sizing: border-box;

    &:hover {
        border-color: $blue-primary;
    }

    &:focus {
        border-color: $blue-primary;
        color: $black;

        & ~ .form-item__icon {
            svg path {
                fill: $blue-primary;
            }
        }
    }

    &::placeholder {
        color: $secondary;
    }

    &.error {
        border: 2px solid $primary-red;
    }
}

.form-item-input:-webkit-autofill,
.form-item-input:-webkit-autofill:hover,
.form-item-input:-webkit-autofill:focus,
.form-item-input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #ffffff inset !important;
}

.form-item-input:-webkit-autofill {
    -webkit-text-fill-color: $secondary !important;
    font-size: 16px !important;
    line-height: 1.5;
    font-family: 'Inter';
}
.form-item-input:-webkit-autofill:focus {
    -webkit-text-fill-color: $black !important;
    font-size: 16px !important;
    line-height: 1.5;
    font-family: 'Inter';
}

.form-item__icon {
    position: absolute;
    right: 16px;
}

.form-item-textearea {
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 12px 56px 12px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    resize: none;
    box-sizing: border-box;
    height: 241px;
    flex: 0 0 100%;

    &:hover {
        border-color: $blue-primary;
    }

    &:focus {
        border-color: $blue-primary;
        color: $black;
    }

    &::placeholder {
        color: $secondary;
    }

    @media (max-width: $lg) {
        height: 160px;
    }

    @media (max-width: $sm) {
        height: auto;
        min-height: 116px;
    }

    &.error {
        border: 2px solid $primary-red;
    }
}

.form-item__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    height: 48px;
    margin-top: 37px;

    @media (max-width: $lg) {
        flex: 1 1 100%;
        margin-top: 16px;
    }

    @media (max-width: $sm) {
        margin-top: 0;
        flex-wrap: wrap;
        height: auto;
        justify-content: center;
    }
}

.form-item__policy {
    flex: 0 1 300px;
    font-size: 12px;
    line-height: 18px;
    color: #a8bfdc;
    color: $blue-primary;

    @media (max-width: $sm) {
        flex: 1 1 100%;
    }
}

.form-item__policy-link {
    text-decoration: underline;
    cursor: pointer;
}

.form-item__bg-line {
    position: absolute;
    width: 869px;
    height: 277px;
    z-index: 0;
    right: -237px;
    bottom: -140px;
    rotate: 166.07deg;
}

.form-item__bg-line-tablet {
    position: absolute;
    display: block;
    bottom: -139px;
    left: -68px;
    rotate: 13deg;

    @media (max-width: $lg) {
        bottom: -189px;
    }
    @media (max-width: $sm) {
        display: none;
    }
}

.form-item__btn {
    @media (max-width: $sm) {
        width: 288px;
    }
}

.form-item__error {
    display: flex;
    gap: 8px;
    align-items: center;
}

.form-item__error-text {
    font-size: 16px;
    line-height: 24px;
    color: $primary-red;
}

.form-item__upload {
    display: flex;
    gap: 10px;

    .form-item__label.upload {
        line-height: 18px;
        color: $blue-primary;
        font-size: 12px;

        & svg {
            margin-left: 10px;
        }
    }
}

.modal__form-success {
    height: 618px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 32px;

    & .close-btn {
        right: 32px;
        top: 32px;
    }

    @media (max-width: $xxl) {
        height: 618px;
    }

    @media (max-width: $lg) {
        height: 600px;
    }

    @media (max-width: $sm) {
        height: 794px;
    }
}
</style>
