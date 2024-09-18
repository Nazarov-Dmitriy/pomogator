<template>
    <section class="personal-data">
        <div class="personal-data__container">
            <h2 class="personal-data__title">
                Личные данные
            </h2>
            <form
                class="personal-data__form"
                @submit.prevent
            >
                <div class="personal-data__form-wrapper">
                    <div class="personal-data__input-group">
                        <label
                            for="surname"
                            class="personal-data__label"
                        >Фамилия *</label>
                        <input
                            id="surname"
                            v-model.trim="formField.surname"
                            type="text"
                            class="personal-data__input"
                            placeholder="Смирнова"
                            @input="validateField('surname')"
                        >
                        <span
                            v-if="formField.surnameError"
                            class="error"
                        >Фамилия быть пустой</span>
                    </div>
                    <div class="personal-data__input-group">
                        <label
                            for="birthDate"
                            class="personal-data__label"
                        >Дата рождения</label>
                        <input
                            id="birthDate"
                            v-model="formField.date_birth"
                            type="date"
                            class="personal-data__input"
                            placeholder="01.01.1990"
                        >
                    </div>
                    <div class="personal-data__input-group">
                        <label
                            for="rank"
                            class="personal-data__label"
                        >Звание</label>
                        <input
                            id="rank"
                            v-model.trim="formField.rank"
                            type="text"
                            class="personal-data__input"
                            placeholder="Звание"
                        >
                    </div>
                 
                    <div class="personal-data__input-group">
                        <label
                            for="name"
                            class="personal-data__label"
                        >Имя *</label>
                        <input
                            id="name"
                            v-model.trim="formField.name"
                            type="text"
                            class="personal-data__input"
                            placeholder="Мария"
                            @input="validateField('name')"
                        >
                        <span
                            v-if="formField.nameError"
                            class="error"
                        >Имя должно быть пустым</span>
                    </div>
                    <div class="personal-data__input-group">
                        <label
                            for="position"
                            class="personal-data__label"
                        >Должность *</label>
                        <input
                            id="position"
                            v-model.trim="formField.position"
                            type="text"
                            class="personal-data__input"
                            placeholder="Преподаватель"
                            @input="validateField('position')"
                        >
                        <span
                            v-if="formField.positionError"
                            class="error"
                        >Должность должна быть пустой</span>
                    </div>
                    <div class="personal-data__input-group">
                        <label
                            for="email"
                            class="personal-data__label"
                        >Email *</label>
                        <input
                            id="email"
                            v-model.trim="formField.email"
                            type="text"
                            class="personal-data__input"
                            placeholder="maria@mail.ru"
                            @input="changeEmail"
                            @blur="validateField('email')"
                        >
                        <span
                            v-if="formField.emailError"
                            class="error"
                        >Некорректный email</span>
                    </div>
                    
                    <div class="personal-data__input-group">
                        <label
                            for="patronymic"
                            class="personal-data__label"
                        >Отчество</label>
                        <input
                            id="patronymic"
                            v-model.trim="formField.patronymic"
                            type="text"
                            class="personal-data__input"
                            placeholder="Владимировна"
                        >
                    </div>
                    
                    <div class="personal-data__input-group">
                        <label
                            for="place_work"
                            class="personal-data__label"
                        >Место работы *</label>
                        <input
                            id="place_work"
                            v-model.trim="formField.place_work"
                            type="text"
                            class="personal-data__input"
                            placeholder="Школа №1"
                            @input="validateField('place_work')"
                        >
                        <span
                            v-if="formField.place_workError"
                            class="error"
                        >Место работы не должно быть пустым</span>
                    </div>

                    <div class="personal-data__input-group">
                        <label
                            for="phone"
                            class="personal-data__label"
                        >Телефон</label>
                        <input
                            id="phone"
                            v-model.trim="formField.phone"
                            type="text"
                            class="personal-data__input"
                            placeholder="+7 (954) 123-45-67"
                            @input="changePhone"
                            @blur="validateField('phone')"
                        >
                        <span
                            v-if="formField.phoneError"
                            class="error"
                        >Телефон должен содержать 11 цифр</span>
                    </div>
                </div>
                <div class="personal-data__btn">
                    <BtnBackgroud
                        :disabled="!isFormValid"
                        emit-name="action"
                        @action="saveUserInfo()"
                    >
                        Сохранить изменения
                    </BtnBackgroud>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import { useUserStore } from '@/stores/userStore';
import BtnBackgroud from '../../btns/BtnBackgroud.vue'

const userStore = useUserStore();

const getUser = computed(() => {
    return userStore.getUser
})


const formField = reactive({
    name: getUser.value?.name,
    surname:  getUser.value?.surname,
    patronymic:  getUser.value?.patronymic,
    date_birth:  getUser.value?.date_birth,
    birthDate:  getUser.value?.birthDate,
    position:  getUser.value?.position,
    place_work:  getUser.value?.place_work,
    rank:  getUser.value?.rank,
    phone:  getUser.value?.phone,
    email: getUser.value?.email,
    nameError: false,
    surnameError: false,
    positionError: false,
    emailError: false,
    place_workError: false,
    phoneError: false,
})

function saveUserInfo () {
    if( isFormValid.value){
        const userInfo = {
            name: formField.name,
            surname:  formField.surname,
            patronymic:  formField.patronymic,
            date_birth:  formField.date_birth,
            birthDate:  formField.birthDate,
            position:  formField.position,
            place_work:  formField.place_work,
            rank:  formField.rank,
            phone:  formField.phone,
            email: formField.email,
            current_email: getUser.value.email,
        }
        userStore.userUpdateInfo(userInfo)
    }
}

function validateField (nameParam, validateForm) {
    const value = formField[nameParam]   
    
    if(validateForm){
        if(nameParam.includes('Error') && formField[nameParam]){
            return false
        }

        if (nameParam === 'name' || nameParam === 'surname' || nameParam === 'position' || nameParam === 'place_work') {
            if( value?.length === 0  ||  !value) {
                return false
            }
        }

        if (nameParam === 'email') {
            const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!value || !emailRegexp.test(value)  ) 
                return false
        }
    }
    else{
        if (nameParam === 'name' || nameParam === 'surname' || nameParam === 'position' || nameParam === 'place_work') {
            formField[`${nameParam}Error`] = value.length === 0
        }

        if (nameParam === 'phone') {
            formField.phoneError = value.replace(/\D/g, '').length < 11
        }

        if (nameParam === 'email') {
            const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            formField.emailError = !emailRegexp.test(value)
        }
    }
 
}

function changePhone (event) {
    const target = event.target
    const x = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    x[1] = '+7'
    target.value = !x[3]
        ? x[1] + '-(' + x[2]
        : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
    formField.phone = target.value
}

function changeEmail (event) {
    const target = event.target
    const x = target.value.match(
        /([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

const isFormValid = computed(() => {
    let valid = true
   
    for (let key in formField){
        let validation =  validateField(key, true);        
        validation === false  ? valid =false : ""              
    }
    
    return valid
})

watch(getUser, ()=>{
    const user = {
        name: getUser.value?.name,
        surname:  getUser.value?.surname,
        patronymic:  getUser.value?.patronymic,
        date_birth:  getUser.value?.date_birth,
        birthDate:  getUser.value?.birthDate,
        position:  getUser.value?.position,
        place_work:  getUser.value?.place_work,
        rank:  getUser.value?.rank,
        phone:  getUser.value?.phone,
        email: getUser.value?.email,
    }
    Object.assign(formField, user);  
}, {deep: true})
</script>

<style lang="scss" scoped>
.personal-data {
    padding: 60px 80px;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
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

    @media (max-width: $lg) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $sm) {
        grid-template-columns: 1fr;
    }
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
    color: $black;

    @media(max-width: $lg){
        width: 100%;
        max-width: 100%;
    }

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
