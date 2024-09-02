<template>
    <MainLayots>
        <FormComponent class="login flex flex-col items-center gap-4">
            <h2 class="title">
                Войти
            </h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-col w-full gap-2">
                    <label for="name">Логин</label>
                    <input
                        id="name"
                        v-model="loginForm.login"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password">Пароль</label>
                    <input
                        id="password"
                        v-model="loginForm.password"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
            </div>
            <BtnComponent
                emit-name="action"
                @action="Login()"
            >
                Войти
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

const loginForm = reactive({
    login: 'dddd',
    password: 'aaaa'
})

function Login (){
    let data={
        login: loginForm.login,
        password: loginForm.password
    }

    axiosR.post('/login', data)
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);          
        })    
}

</script>
<style lang="scss">
.login {
    background: $gradient-background;
    width: 100%;
    justify-content: center;

}

.title {
    font-size: 32px;
    font-family: "Kreadon-Demi";
}
</style>