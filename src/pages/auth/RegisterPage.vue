<template>
    <MainLayots>
        <FormComponent class="login flex flex-col items-center gap-4">
            <h2 class="title">
                Регистрация
            </h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-col w-full gap-2">
                    <label for="login">Логин</label>
                    <input
                        id="login"
                        v-model="registerForm.login"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="name">Имя</label>
                    <input
                        id="name"
                        v-model="registerForm.name"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="surname">Фамилия</label>
                    <input
                        id="surname"
                        v-model="registerForm.surname"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="patronymic">Отчество</label>
                    <input
                        id="patronymic"
                        v-model="registerForm.patronymic"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        v-model="registerForm.email"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password">Пароль</label>
                    <input
                        id="password"
                        v-model="registerForm.password"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
            </div>
            <BtnComponent
                emit-name="action"
                @action="Register()"
            >
                Зарегистрироватся
            </BtnComponent>
        </FormComponent>
    </MainLayots>
</template>
<script setup>
import MainLayots from '@/layouts/MainLayots.vue';
import FormComponent from '@/components/form/FormComponent.vue';
import BtnComponent from '@/components/btns/BtnComponent.vue';
import { reactive } from 'vue';
import axiosR from '@/api/http';

const registerForm = reactive({
    login: 'Пользователь 1',
    password: '12345',
    name: 'Иван',
    surname: 'Нестеров',
    patronymic : 'Сергевич',
    email: 'invite@mail.ru'
})


function Register (){
    console.log(222);
    let data={
        login: registerForm.login,
        password: registerForm.password,
        name: registerForm.name,
        surname: registerForm.surname,
        patronymic : registerForm.patronymic,
        email: registerForm.email
    }

    axiosR.post('/register', data)
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);          
        })    
}

</script>
<style lang="scss"></style>