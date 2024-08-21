<template>
    <section class="personal-data">
        <div class="personal-data__container">
            <h2 class="personal-data__title">Личные данные</h2>
            <form class="personal-data__form" @submit.prevent="saveData">
                <div class="personal-data__form-wrapper">
                    <div class="personal-data__input-group">
                        <label for="lastName" class="personal-data__label">Фамилия *</label>
                        <input
                            v-model="formField.lastName"
                            @input="validateField('lastName')"
                            type="text"
                            id="lastName"
                            class="personal-data__input"
                            placeholder="Смирнова"
                        />
                        <span v-if="formField.lastNameError" class="error"
                            >Фамилия должна содержать минимум 3 символа</span
                        >
                    </div>
                    <div class="personal-data__input-group">
                        <label for="birthDate" class="personal-data__label">Дата рождения</label>
                        <input
                            v-model="formField.birthDate"
                            type="text"
                            id="birthDate"
                            class="personal-data__input"
                            placeholder="01.01.1990"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="email" class="personal-data__label">Email *</label>
                        <input
                            v-model="formField.email"
                            @input="changeEmail"
                            @blur="validateField('email')"
                            type="text"
                            id="email"
                            class="personal-data__input"
                            placeholder="maria@mail.ru"
                        />
                        <span v-if="formField.emailError" class="error">Некорректный email</span>
                    </div>
                    <div class="personal-data__input-group">
                        <label for="phone" class="personal-data__label">Телефон *</label>
                        <input
                            v-model="formField.phone"
                            @input="changePhone"
                            @blur="validateField('phone')"
                            type="text"
                            id="phone"
                            class="personal-data__input"
                            placeholder="+7 (954) 123-45-67"
                        />
                        <span v-if="formField.phoneError" class="error"
                            >Телефон должен содержать 11 цифр</span
                        >
                    </div>
                    <div class="personal-data__input-group">
                        <label for="firstName" class="personal-data__label">Имя *</label>
                        <input
                            v-model="formField.firstName"
                            @input="validateField('firstName')"
                            type="text"
                            id="firstName"
                            class="personal-data__input"
                            placeholder="Мария"
                        />
                        <span v-if="formField.firstNameError" class="error"
                            >Имя должно содержать минимум 3 символа</span
                        >
                    </div>
                    <div class="personal-data__input-group">
                        <label for="title" class="personal-data__label">Звание</label>
                        <input
                            v-model="formField.rank"
                            type="text"
                            id="title"
                            class="personal-data__input"
                            placeholder="Педагог"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="middleName" class="personal-data__label">Отчество</label>
                        <input
                            v-model="formField.middleName"
                            type="text"
                            id="middleName"
                            class="personal-data__input"
                            placeholder="Владимировна"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="organization" class="personal-data__label">Организация</label>
                        <input
                            v-model="formField.organization"
                            type="text"
                            id="organization"
                            class="personal-data__input"
                            placeholder="Школа №1"
                        />
                    </div>
                </div>
                <div class="personal-data__btn">
                    <BtnBackgroud :disabled="!isFormValid">Сохранить изменения</BtnBackgroud>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useProfileStore } from '/src/stores/useProfileStore'
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const store = useProfileStore()

const formField = reactive({
    lastName: store.personalData.lastName,
    firstName: store.personalData.firstName,
    phone: store.personalData.phone,
    email: store.personalData.email,
    birthDate: store.personalData.birthDate,
    rank: store.personalData.rank,
    middleName: store.personalData.middleName,
    organization: store.personalData.organization,
    lastNameError: false,
    firstNameError: false,
    middleNameError: false,
    phoneError: false,
    emailError: false,
    rankError: false
})

function saveData() {
    store.setPersonalData('lastName', formField.lastName)
    store.setPersonalData('firstName', formField.firstName)
    store.setPersonalData('phone', formField.phone)
    store.setPersonalData('email', formField.email)
    store.setPersonalData('birthDate', formField.birthDate)
    store.setPersonalData('rank', formField.rank)
    store.setPersonalData('middleName', formField.middleName)
    store.setPersonalData('organization', formField.organization)

    formField.lastName = ''
    formField.firstName = ''
    formField.phone = ''
    formField.email = ''
    formField.rank = ''
    formField.middleName = ''
    formField.organization = ''
    formField.birthDate = ''
}

function validateField(nameParam) {
    const value = formField[nameParam].trim()

    if (nameParam === 'lastName' || nameParam === 'firstName') {
        formField[`${nameParam}Error`] = value.length < 3
    }
    if (nameParam === 'phone') {
        formField.phoneError = value.replace(/\D/g, '').length < 11
    }
    if (nameParam === 'email') {
        const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        formField.emailError = !emailRegexp.test(value)
    }
}

function changePhone(event) {
    const target = event.target
    const x = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    x[1] = '+7'
    target.value = !x[3]
        ? x[1] + '-(' + x[2]
        : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
    formField.phone = target.value
}

function changeEmail(event) {
    const target = event.target
    const x = target.value.match(
        /([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

const isFormValid = computed(() => {
    const trimmedLastName = formField.lastName.trim()
    const trimmedFirstName = formField.firstName.trim()
    const trimmedMiddleName = formField.middleName.trim()
    const trimmedPhone = formField.phone.trim()
    const trimmedEmail = formField.email.trim()
    const trimmedRank = formField.rank.trim()

    return (
        trimmedLastName !== '' &&
        trimmedLastName.length >= 3 &&
        trimmedFirstName !== '' &&
        trimmedFirstName.length >= 3 &&
        trimmedMiddleName !== '' &&
        trimmedMiddleName.length >= 3 &&
        trimmedPhone !== '' &&
        trimmedPhone.length >= 3 &&
        trimmedEmail !== '' &&
        trimmedEmail.length >= 3 &&
        trimmedRank !== '' &&
        trimmedRank.length >= 3 &&
        !formField.lastNameError &&
        !formField.firstNameError &&
        !formField.emailError &&
        !formField.phoneError
    )
})
</script>

<style lang="scss" scoped>
.personal-data {
    padding: 60px 80px;
}
.personal-data__container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.personal-data__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 117%;
    color: $blue-primary;
}
.personal-data__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.personal-data__form-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    row-gap: 32px;
}
.personal-data__input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.personal-data__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: $black;
}
.personal-data__input {
    border: 2px solid #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    box-sizing: border-box;
    max-width: 416px;
    width: 100%;
    height: 48px;
    background-color: $white;
    color: $secondary;

    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: $secondary;
        padding: 0;
    }

    &:focus {
        border-color: $blue-primary;
        color: $black;
    }

    &:hover {
        border-color: $blue-primary;
    }

    &.error {
        border: 2px solid $primary-red;
    }
}
</style>
