<template>
    <MainLayots>
        <FormComponent class="login flex flex-col items-center gap-4">
            <h2 class="title">
                Войти
            </h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-col w-full gap-2">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        v-model="loginForm.email"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.email }}</p>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password">Пароль</label>
                    <input
                        id="password"
                        v-model="loginForm.password"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.password }}</p>
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
import { computed, reactive, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore();

const loginForm = reactive({
    email: '',
    password: ''
})

const user = computed(() => {
    return userStore.getUser
})

const getError = computed(() => {
    return userStore.getError
})


function Login (){    
    userStore.login({...loginForm})
}

watch(user, ()=>{
    router.push({ path: '/' });
})

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