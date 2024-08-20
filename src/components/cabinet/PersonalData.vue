<template>
    <section class="personal-data">
        <div class="personal-data__container">
            <h2 class="personal-data__title">Личные данные</h2>
            <form class="personal-data__form">
                <div class="personal-data__form-wrapper">
                    <div class="personal-data__input-group">
                        <label for="lastName" class="personal-data__label">Фамилия</label>
                        <input
                            v-model="lastName"
                            type="text"
                            id="lastName"
                            class="personal-data__input"
                            placeholder="Смирнова"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="birthDate" class="personal-data__label">Дата рождения</label>
                        <input
                            v-model="birthDate"
                            type="text"
                            id="birthDate"
                            class="personal-data__input"
                            placeholder="01.01.1990"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="email" class="personal-data__label">Email *</label>
                        <input
                            v-model="email"
                            type="text"
                            id="email"
                            class="personal-data__input"
                            placeholder="maria@mail.ru"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="firstName" class="personal-data__label">Имя *</label>
                        <input
                            v-model="firstName"
                            type="text"
                            id="firstName"
                            class="personal-data__input"
                            placeholder="Мария"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="title" class="personal-data__label">Звание</label>
                        <input
                            v-model="title"
                            type="text"
                            id="title"
                            class="personal-data__input"
                            placeholder="Педагог"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="phone" class="personal-data__label">Телефон</label>
                        <input
                            v-model="phone"
                            type="text"
                            id="phone"
                            class="personal-data__input"
                            placeholder="+7 (954) 123-45-67"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="middleName" class="personal-data__label">Отчество</label>
                        <input
                            v-model="middleName"
                            type="text"
                            id="middleName"
                            class="personal-data__input"
                            placeholder="Владимировна"
                        />
                    </div>
                    <div class="personal-data__input-group">
                        <label for="organization" class="personal-data__label">Организация</label>
                        <input
                            v-model="organization"
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
<script setup lang="ts">
import { ref, computed } from 'vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const lastName = ref('')
const birthDate = ref('')
const email = ref('')
const firstName = ref('')
const title = ref('')
const phone = ref('')
const middleName = ref('')
const organization = ref('')

const isFormValid = computed(() => {
    return email.value.trim() !== '' && firstName.value.trim() !== ''
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
