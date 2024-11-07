<template>
    <MainLayots>
        <div class="register">
            <FormComponent
                v-if="!getRigisterStepTwo"
                class="login flex flex-col items-center gap-4"
            >
                <img class="img-bg" src="/src/assets/images/main/news/news-card-bg.png" alt="" />
                <h2 class="title">Регистрация</h2>
                <div class="form-wrapper flex flex-col gap-2 w-full">
                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: registerFormError.email || getError?.email }"
                            for="email"
                            >Email</label
                        >
                        <input
                            id="email"
                            v-model="registerForm.email"
                            type="text"
                            placeholder="Введите email"
                            class="input w-full p-2 rounded-md"
                            :class="{ error: registerFormError.email || getError?.email }"
                        />
                        <p v-if="registerFormError.email" class="error-text">
                            {{ getError?.email ? getError?.email : 'Поле не должно быть пустым' }}
                        </p>
                        <p class="error-text">{{ getError?.email }}</p>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: registerFormError.password }"
                            for="password"
                            >Пароль</label
                        >
                        <div class="relative">
                            <input
                                id="password"
                                ref="inputPassword"
                                v-model="registerForm.password"
                                :type="passwordVisible ? 'text' : 'password'"
                                placeholder="Введите пароль"
                                class="input__password w-full p-2 rounded-md"
                                :class="{ error: registerFormError.password }"
                                @focus="isFocusedPassword = true"
                            />
                            <span
                                class="toggle-password-icons"
                                @mousedown.stop="togglePasswordVisibility('password')"
                            >
                                <img
                                    ref="toggleImg"
                                    :src="
                                        isFocusedPassword
                                            ? passwordVisible
                                                ? '/image/register/password-visible.svg'
                                                : '/image/register/password-invisible.svg'
                                            : '/image/register/lock.png'
                                    "
                                    alt="toggle visibility"
                                    class="icon"
                                />
                            </span>
                        </div>
                        <p v-if="registerFormError.password" class="error-text">
                            Длина пароля должна быть от 8
                        </p>
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: registerFormError.confirm }"
                            for="confirmPassword"
                            >Подтвердите пароль</label
                        >
                        <div class="relative">
                            <input
                                id="confirmPassword"
                                ref="inputConfirmPassword"
                                v-model="registerForm.confirmPassword"
                                :type="confirmPasswordVisible ? 'text' : 'password'"
                                placeholder="Повторите пароль"
                                class="input__password w-full p-2 rounded-md"
                                :class="{ error: registerFormError.confirm }"
                                @focus="isFocusedConfirmPassword = true"
                            />
                            <span
                                class="toggle-password-icons"
                                @mousedown.stop="togglePasswordVisibility('confirm')"
                            >
                                <img
                                    ref="toggleImg"
                                    :src="
                                        isFocusedConfirmPassword
                                            ? confirmPasswordVisible
                                                ? '/image/register/password-visible.svg'
                                                : '/image/register/password-invisible.svg'
                                            : '/image/register/lock.png'
                                    "
                                    alt="toggle visibility"
                                    class="icon"
                                />
                            </span>
                        </div>
                        <p v-if="registerFormError.confirm" class="error-text">
                            Пароли не совпадают
                        </p>
                    </div>

                    <div class="text-wrapper mt-4">
                        <p class="text">
                            Нажимая на кнопку «Продолжить», я соглашаюсь с
                            <span>
                                <a
                                    href="/public/documents/user_consultation_it.pdf"
                                    target="_blank"
                                >
                                    политикой обработки персональных данных</a
                                ></span
                            >
                        </p>
                    </div>
                    <div class="btn-wrapper mb-4">
                        <BtnBackgroud emit-name="form-submit" class="btn" @form-submit="register()">
                            Продолжить
                        </BtnBackgroud>
                    </div>
                    <div class="btn-wrapper">
                        <BtnComponent
                            emit-name="action"
                            class="btn"
                            @action="router.push('/auth/login')"
                        >
                            Войти в аккаунт
                        </BtnComponent>
                    </div>
                </div>
            </FormComponent>
            <FormComponent v-else class="login flex flex-col items-center gap-4">
                <h2 class="title">Личные данные</h2>
                <div class="flex flex-col gap-2 w-full items-center">
                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: getError?.surname }"
                            for="surname"
                            >Фамилия *</label
                        >
                        <input
                            id="surname"
                            v-model="registerFormInfo.surname"
                            type="text"
                            :class="{ error: getError?.surname }"
                            class="input !bg-none w-full p-2 rounded-md"
                        />
                        <p v-if="getError?.surname" class="error-text">
                            {{ getError?.surname }}
                        </p>
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <label class="field__label" :class="{ error: getError?.name }" for="name"
                            >Имя *</label
                        >
                        <input
                            id="name"
                            v-model="registerFormInfo.name"
                            type="text"
                            :class="{ error: getError?.name }"
                            class="input !bg-none w-full p-2 rounded-md"
                        />
                        <p v-if="getError?.name" class="error-text">
                            {{ getError?.name }}
                        </p>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <label for="patronymic">Отчество</label>
                        <input
                            id="patronymic"
                            v-model="registerFormInfo.patronymic"
                            type="text"
                            class="input !bg-none w-full p-2 rounded-md"
                        />
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <label for="date_birth">Дата рождения</label>
                        <input
                            id="date_birth"
                            v-model="registerFormInfo.date_birth"
                            class="input !bg-none w-full p-2 rounded-md"
                            type="date"
                        />
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: getError?.position }"
                            for="position"
                            >Должность *</label
                        >
                        <input
                            id="position"
                            v-model="registerFormInfo.position"
                            type="text"
                            class="input !bg-none w-full p-2 rounded-md"
                            :class="{ error: getError?.position }"
                        />
                        <p v-if="getError?.position" class="error-text">
                            {{ getError?.position }}
                        </p>
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <label
                            class="field__label"
                            :class="{ error: getError?.place_work }"
                            for="place_work"
                            >Место работы *</label
                        >
                        <input
                            id="place_work"
                            v-model="registerFormInfo.place_work"
                            type="text"
                            class="input !bg-none w-full p-2 rounded-md"
                            :class="{ error: getError?.place_work }"
                        />
                        <p v-if="getError?.place_work" class="error-text">
                            {{ getError?.place_work }}
                        </p>
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <label for="rank">Звание</label>
                        <input
                            id="rank"
                            v-model="registerFormInfo.rank"
                            type="text"
                            class="input !bg-none w-full p-2 rounded-md"
                        />
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <label for="phone">Телефон</label>
                        <input
                            id="phone"
                            v-model="registerFormInfo.phone"
                            type="text"
                            class="input !bg-none w-full p-2 rounded-md"
                        />
                    </div>
                    <BtnBackgroud
                        emit-name="action"
                        class="w-[200px] mt-7"
                        @action="registerInfo()"
                    >
                        Сохранить
                    </BtnBackgroud>

                    <div class="btn-wrapper w-[200px] mt-7">
                        <BtnComponent
                            emit-name="action"
                            class="btn"
                            @action="router.push('/auth/login')"
                        >
                            Войти в аккаунт
                        </BtnComponent>
                    </div>
                </div>
            </FormComponent>
        </div>
    </MainLayots>
</template>
<script setup>
import MainLayots from '@/layouts/MainLayots.vue'
import FormComponent from '@/components/form/FormComponent.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import BtnBackgroud from '@/components/btns/BtnBackgroud.vue'
import { ref, computed, reactive, watch, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const initialRegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
    validate: false
}

const initailRegisterFormError = {
    email: '',
    password: '',
    confirm: false
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

const registerForm = reactive({ ...initialRegisterForm })

const registerFormError = reactive({ ...initailRegisterFormError })
const registerFormInfo = reactive({ ...initialRegisterFormInfo })

const getError = computed(() => {
    return userStore.getError
})

const getUser = computed(() => {
    return userStore.getUser
})

const getRigisterStepTwo = computed(() => {
    return userStore.getRigisterStepTwo
})

function validateRegisterForm() {
    registerFormError.confirm =
        registerForm.confirmPassword !== registerForm.password || registerForm.password.length < 8
    registerFormError.email = registerForm.email.length === 0
    registerFormError.password = registerForm.password.length < 8
    registerForm.validate =
        !registerFormError.confirm && !registerFormError.password && !registerFormError.email
}

function result(res) {
    if (res) {
        Object.assign(registerForm, initialRegisterForm)
        Object.assign(registerFormError, initailRegisterFormError)
    }
}

function register() {
    validateRegisterForm()

    if (registerForm.validate) {
        userStore.registerUser(
            {
                email: registerForm.email,
                password: registerForm.password
            },
            result
        )
    }
}

function registerInfo() {
    userStore.registerUserInfo({ ...registerFormInfo, email: getUser.value?.email || null })
}

watch(
    getUser,
    () => {
        if (!getRigisterStepTwo.value) {
            router.push({ path: '/' })
        }
    },
    { deep: true }
)

/**
 * 
    логика для отображения трех иконок
 */

const passwordVisible = ref(false)
const confirmPasswordVisible = ref(false)
const isFocusedPassword = ref(false)
const isFocusedConfirmPassword = ref(false)
const inputPassword = ref(null)
const inputConfirmPassword = ref(null)
const toggleImg = ref(null)

function togglePasswordVisibility(type) {
    if (type === 'password') {
        passwordVisible.value = !passwordVisible.value
    } else if (type === 'confirm') {
        confirmPasswordVisible.value = !confirmPasswordVisible.value
    }
}

function clickOutside(event) {
    if (
        (inputPassword.value && !inputPassword.value.contains(event.target)) ||
        (!inputConfirmPassword.value.contains(event.target) &&
            !toggleImg.value.contains(event.target))
    ) {
        isFocusedPassword.value = false
        isFocusedConfirmPassword.value = false
    }
}

onMounted(() => {
    window.addEventListener('mousedown', clickOutside)
})

onUnmounted(() => {
    window.removeEventListener('mousedown', clickOutside)
})
</script>
<style lang="scss">
.register {
    padding: 60px 0px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.img-bg {
    position: absolute;
    right: 0;
    bottom: 0;
}

.form {
    max-width: 849px;
}

.login {
    position: relative;

    border: 2px solid #5b94ea;
    border-radius: 24px;
    padding: 32px;
    box-sizing: border-box;
    background-image: url(/src/assets/images/main/news/news-card-bg.png);
    background-repeat: no-repeat;
    background-position: right bottom;
}

.input {
    border: 2px solid #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    box-sizing: border-box;
    color: $black;
    background: url(/src/assets/icons/main/news/mail.svg);
    background-repeat: no-repeat;
    background-position: right 16px top 10px;
    background-color: #fff;

    &:hover,
    &:focus {
        border: 2px solid #4360f8;
        background-color: #fff;
    }

    &--lock {
        background-image: url(/public/image/register/lock.png);
        background-repeat: no-repeat;
        background-position: center right 16px;
    }

    &::placeholder {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #a0b1ed;
    }
}

.text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #5b94ea;

    span {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        cursor: pointer;
        position: relative;
        z-index: 5;
    }
}

.btn-wrapper {
    display: flex;
    justify-content: center;
}

.btn {
    width: max-content;
    position: relative;
    z-index: 5;
}

.toggle-password-icons {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;

    .icon {
        width: 24px;
        height: 24px;
    }
}
</style>
