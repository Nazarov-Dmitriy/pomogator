<template>
    <MainLayots>
        <FormComponent
            v-if="!getRigisterStepTwo"
            class="login flex flex-col items-center gap-4"
        >
            <h2 class="title">
                Регистрация
            </h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="email"
                    >Email</label>
                    <input
                        id="email"
                        v-model="registerForm.email"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.email }}</p>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="password"
                    >Пароль</label>
                    <input
                        id="password"
                        v-model="registerForm.password"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="confirmPassword"
                    >Подтвердите пароль</label>
                    <input
                        id="confirmPassword"
                        v-model="registerForm.confirmPassword"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p v-if="registerForm.errorConfirmPassword">
                        Пароли не совпадают
                    </p>
                </div>
                <BtnComponent
                    emit-name="action"
                    @action="register()"
                >
                    Зарегистрироватся
                </BtnComponent>
            </div>
        </FormComponent>
        <FormComponent
            v-else
            class="login flex flex-col items-center gap-4"
        >
            <h2 class="title">
                Личные данные 
            </h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="surname"
                    >Фамилия *</label>
                    <input
                        id="surname"
                        v-model="registerFormInfo.surname"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.surname }}</p>
                </div>

                <div class="flex flex-col w-full gap-2">
                    <label
                        for="name"
                    >Имя * *</label>
                    <input
                        id="name"
                        v-model="registerFormInfo.name"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.name }}</p>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="patronymic"
                    >Отчество</label>
                    <input
                        id="patronymic"
                        v-model="registerFormInfo.patronymic"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="date_birth"
                    >Дата рождения</label>
                    <input
                        id="date_birth"
                        v-model="registerFormInfo.date_birth"
                        class="w-full p-2 rounded-md"
                        type="date"
                    >
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label
                        for="position"
                    >Должность *</label>
                    <input
                        id="position"
                        v-model="registerFormInfo.position"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.position }}</p>
                </div>

                <div class="flex flex-col w-full gap-2">
                    <label
                        for="place_work"
                    >Место работы *</label>
                    <input
                        id="place_work"
                        v-model="registerFormInfo.place_work"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                    <p>{{ getError?.place_wor }}</p>
                </div>

                <div class="flex flex-col w-full gap-2">
                    <label
                        for="rank"
                    >Звание</label>
                    <input
                        id="rank"
                        v-model="registerFormInfo.rank"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>

                <div class="flex flex-col w-full gap-2">
                    <label
                        for="phone"
                    >Телефон</label>
                    <input
                        id="phone"
                        v-model="registerFormInfo.phone"
                        type="text"
                        class="w-full p-2 rounded-md"
                    >
                </div>           
                <BtnComponent
                    emit-name="action"
                    @action="registerInfo()"
                >
                    Сохранить
                </BtnComponent>
            </div>
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

const initialRegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
    errorConfirmPassword: false
}
const initialRegisterFormInfo = {
    name: '',
    surname: '',
    patronymic: '',
    date_birth: '',
    position: '',
    place_work: '',
    rank: '',
    phone: '',
    completed_profile: true
}

const registerForm = reactive({...initialRegisterForm
})

const registerFormInfo = reactive({...initialRegisterFormInfo})

const getError = computed(() => {
    return userStore.getError
})

const getUser = computed(() => {
    return userStore.getUser
})

const getRigisterStepTwo = computed(() => {
    return userStore.getRigisterStepTwo
})

function result (res){    
    res && Object.assign(registerForm, initialRegisterForm);
}


function register () {
    if(registerForm.confirmPassword === registerForm.password){
        registerForm.errorConfirmPassword = false;
        userStore.registerUser( { email: registerForm.email, password: registerForm.password}, result)
    }else{
        registerForm.errorConfirmPassword = true;
    }
}

function registerInfo () {
    userStore.registerUserInfo({...registerFormInfo, email: getUser.value?.email || null})
}

watch(getUser, ()=>{
    if(!getRigisterStepTwo.value){
        router.push({ path: '/' });
    }
}, {deep: true})



</script>
<style lang="scss"></style>