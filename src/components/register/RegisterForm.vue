<template>
    <div class="register">
        <div class="reg-feild">
            <label
                class="reg-feild__ilabel"
                for="login"
            >Имя</label>
            <input
                id="login"
                v-model="login"
                type="text"
                class="reg-feild__input"
            >
        </div>
        <div class="reg-feild">
            <label
                class="reg-feild__ilabel"
                for="password"
            >Пароль</label>
            <input
                id="password"
                v-model="password"
                type="text"
                class="reg-feild__input"
            >
        </div>
        <div class="reg-feild">
            <label
                class="reg-feild__ilabel"
                for="role"
            >Роль</label>
            <input
                id="role"
                v-model="role"
                type="text"
                class="reg-feild__input"
            >
        </div>
        <button @click="submit">
            Отправить
        </button>
    </div>
</template>
<script setup>
import axiosR from '@/api/http';
import { ref } from 'vue';

const login = ref('dddd')
const password = ref('fffff')
const role = ref(1)


function submit () {
    let data = { login: login.value, password: password.value, role: role.value }
    axiosR.post('/register', data)
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.log(err);
        })
}
</script>
<style lang="scss">
.register {
    margin: 200px auto;
    display: flex;
    gap: 24px;
    flex-direction: column;
    width: 400px;
}
</style>