<template>
    <section class="section__form-main">
        <h2 class="form-main__title">
            Вопросы и предложения
        </h2>
        <div class="form-content">
            <p class="form-main-text">
                Нам важно ваше мнение! Мы заинтересованы в качестве представленной на сайте информации.
            </p>
            <form
                class="form-main"
                @submit.prevent
                @keypress.enter.prevent
            >
                <div class="form-main__column-left">
                    <div class="form-item ">
                        <label
                            for="name"
                            class="form-main__label"
                            :class="{ 'error': formField.nameError }"
                        >Как вас
                            зовут?</label>
                        <div class="form-item__group">
                            <input
                                id="name"
                                v-model="formField.name"
                                type="text"
                                placeholder="Мария Иванова"
                                class="form-main-input"
                                @keypress.enter="validateField($event, 'event', 'name')"
                            >
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
                        <div
                            v-if="formField.nameError"
                            class="form-main__error"
                        >
                            <img
                                src="@/assets/icons/error.svg"
                                alt="icon"
                            >
                            <p class="form-main__error-text">
                                Поле заполненно некорректно
                            </p>
                        </div>
                    </div>
                    <div class="form-item">
                        <label
                            for="phone"
                            class="form-main__label"
                            :class="{ 'error': formField.phoneError }"
                        >Телефон</label>
                        <div class="form-item__group">
                            <input
                                id="phone"
                                v-model="formField.phone"
                                type="text"
                                placeholder="+7 (922) 123 45 67"
                                class="form-main-input"
                                @input="changePhone($event)"
                                @keypress.enter="validateField($event, 'event', 'phone')"
                            >
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
                        <div
                            v-if="formField.phoneError"
                            class="form-main__error"
                        >
                            <img
                                src="@/assets/icons/error.svg"
                                alt="icon"
                            >
                            <p class="form-main__error-text">
                                Поле заполненно некорректно
                            </p>
                        </div>
                    </div>
                    <div class="form-item form-item--email">
                        <label
                            for="email"
                            class="form-main__label"
                            :class="{ 'error': formField.emailError }"
                        >E-mail</label>
                        <div class="form-item__group">
                            <input
                                id="email"
                                v-model="formField.email"
                                type="text"
                                placeholder="mariaivanova@mail.ru"
                                class="form-main-input"
                                @input="changeEmail($event)"
                                @keypress.enter="validateField($event, 'event', 'email')"
                            >
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
                        <div
                            v-if="formField.emailError"
                            class="form-main__error"
                        >
                            <img
                                src="@/assets/icons/error.svg"
                                alt="icon"
                            >
                            <p class="form-main__error-text">
                                Поле заполненно некорректно
                            </p>
                        </div>
                    </div>
                </div>
                <div class="form-main__column-right">
                    <div class="form-item form-item--textarea">
                        <label
                            for="textarea"
                            class="form-main__label"
                            :class="{ 'error': formField.textareaError }"
                        >Ваши
                            вопросы и предложения</label>
                        <textarea
                            id="textarea"
                            v-model="formField.textarea"
                            type="text"
                            placeholder="Напишите ваш вопрос или ваше предложение."
                            class="form-main-textearea"
                            @input="changeTextarea($event)"
                        />
                        <div
                            v-if="formField.textareaError"
                            class="form-main__error"
                        >
                            <img
                                src="@/assets/icons/error.svg"
                                alt="icon"
                            >
                            <p class="form-main__error-text">
                                Поле заполненно некорректно
                            </p>
                        </div>
                    </div>
                    <div class="form-main__submit">
                        <p class="form-item__policy">
                            Нажимая на кнопку «Отправить», я соглашаюсь с <span class="form-main__policy-link">политикой
                                обработки персональных данных</span>
                        </p>
                        <BtnBackgroud
                            class="form-main__btn"
                            emit-name="form-submit"
                            @form-submit="validateForm()"
                        >
                            Отправить
                        </BtnBackgroud>
                    </div>
                </div>
                <img
                    src="@/assets/images/main/form/line.svg"
                    alt="bg-image"
                    class="form-main__bg-line"
                >
                <img
                    src="@/assets/images/main/form/line-tablet.svg"
                    alt="bg-image"
                    class="form-main__bg-line-tablet"
                >
            </form>
        </div>
    </section>
</template>
<script setup>
import { reactive } from 'vue';
import BtnBackgroud from '../btns/BtnBackgroud.vue';

const formField = reactive({
    name: '',
    phone: '',
    email: '',
    textarea: '',
    nameError: false,
    phoneError: false,
    emailError: false,
    textareaError: false,
    falidateForm: false,
})

function validateField (param, event, nameParam) {
    let target;
    if (event === 'event') {
        target = param.target.value.trim();
    }else{
        target = param.trim()
    }

    if (nameParam === 'name') {
        target.length < 3 ? formField.nameError = true : formField.nameError = false;
    }
    if (nameParam === 'phone') {
        target.length < 18 ? formField.phoneError = true : formField.phoneError = false;
    }
    if (nameParam === 'email') {
        let email_regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        !email_regexp.test(String(target).toLowerCase()) ? formField.emailError = true : formField.emailError = false;
    }
    if (nameParam === 'textarea') {
        target.length < 3 ? formField.textareaError = true : formField.textareaError = false;
    }
};

function changePhone (event) {
    let target = event.target;
    let x = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    x[1] = '+7';
    target.value = !x[3] ? x[1] + '-(' + x[2] : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    formField.phone = target.value;
};

function changeEmail (event) {
    let target = event.target;
    let x = target.value.match(/([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/);
    target.value = x ? (x[1] + x[2] + x[3] + x[4] + x[5] + x[6]) : '';
    formField.email = target.value;
};

function changeTextarea (event) {
    console.log(222);
    let target = event.target;
    event.target.scrollBy(target.scrollHeight, 100)

    if (formField.textareaError && target.value.length > 3) {
        formField.textareaError = false
    }
}

function validateForm () {
    let validateFeildArr = ['name', 'phone', 'email', 'textarea'];

    validateFeildArr.forEach(item =>{
        validateField(formField[item], 'validate', item)
    })
}

</script>
<style lang="scss">
.section__form-main {
    padding: 60px 80px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.form-main__title {
    font-family: "Kreadon-Demi";
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}

.form-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.form-main-text {
    font-size: 24px;
    line-height: 32px;
    color: $black;
    font-weight: 500;

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }
}

.form-main {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    background: $gradient-background;
    padding: 32px;
    border-radius: 24px;
    border: 2px solid $blue;
    position: relative;
    overflow: hidden;

    @media (max-width: $lg) {
        padding: 24px;
        flex-direction: column;
    }

    @media (max-width: $sm) {
        padding: 24px 16px;
        width: calc(100%);
        left: -18px;
        border-radius: 0;
    }
}

.form-main__column-left {
    display: flex;
    gap: 16px;
    max-width: 492px;
    flex-wrap: wrap;
    z-index: 1;

    @media (max-width: $lg) {
        max-width: 100%;
    }
}

.form-main__column-right {
    display: flex;
    gap: 16px;
    max-width: 600px;
    flex-wrap: wrap;
    z-index: 1;
    align-content: space-between;

    @media (max-width: $lg) {
        max-width: 100%;
    }
}

.form-item {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-content: flex-start;
}

.form-main__label {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $black;

    &.error {
        color: $primary-red
    }
}

.form-item__group {
    flex: 1 1 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.form-main-input {
    flex: 1 1 100%;
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 12px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;

    &::placeholder {
        color: $secondary;
    }
}

.form-item__icon {
    position: absolute;
    right: 16px;
}

.form-item--phone {}

.form-item--email {}


.form-item--textarea {}

.form-main-textearea {
    flex: 1 1 100%;
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 12px 56px 12px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    resize: none;
    height: 144px;
    box-sizing: border-box;

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
}

.form-main__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    height: 48px;

    @media (max-width: $lg) {
        flex: 1 1 100%;
    }

    @media (max-width: $sm) {
        flex-wrap: wrap;
        height: auto;
        justify-content: center;
    }
}

.form-item__policy {
    flex: 0 1 300px;
    font-size: 12px;
    line-height: 18px;
    color: #A8BFDC;
    color: $blue-primary;

    @media (max-width: $sm) {
        flex: 1 1 100%;
    }
}

.form-main__policy-link {
    text-decoration: underline;
    cursor: pointer;
}

.form-main__bg-line {
    position: absolute;
    width: 869px;
    height: 277px;
    z-index: 0;
    right: -237px;
    bottom: -140px;
    rotate: 166.07deg;

    @media (max-width: $lg) {
        display: none;
    }
}

.form-main__bg-line-tablet {
    display: none;

    @media (max-width: $lg) {
        position: absolute;
        display: block;
        bottom: -142px;
        left: -273px;
        rotate: 13deg;
    }

    @media (max-width: $sm) {
        display: none;
    }
}

.form-main__btn {
    @media (max-width: $sm) {
        width: 288px;
    }
}

.form-main__error {
    flex: 1 1 100%;
    display: flex;
    gap: 8px;
    align-items: center;
}

.form-main__error-text {
    font-size: 16px;
    line-height: 24px;
    color: $primary-red
}
</style>