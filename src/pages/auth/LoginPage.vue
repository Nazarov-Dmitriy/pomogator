<template>
    <MainLayots>
        <div class="login-wrapper">
            <FormComponent class="login flex flex-col items-center gap-4">
                <h2 class="title">Войти</h2>
                <div class="flex flex-col gap-2 w-full">
                    <div class="input-group flex flex-col w-full gap-2">
                        <label class="field__label" :class="{ error: getError?.email }" for="email"
                            >Email</label
                        >
                        <input
                            id="email"
                            v-model="loginForm.email"
                            type="text"
                            placeholder="mariaivanova@mail.ru"
                            class="input w-full p-2 rounded-md"
                            :class="{ error: getError?.email }"
                        />
                        <p v-if="getError?.email" class="error-text">
                            {{ getError?.email }}
                        </p>
                    </div>
                    <div class="input-group flex flex-col w-full gap-2 relative">
                        <label
                            class="field__label"
                            :class="{ error: getError?.password }"
                            for="password"
                            >Пароль</label
                        >
                        <input
                            id="password"
                            ref="inputPassword"
                            v-model="loginForm.password"
                            placeholder="Введите пароль"
                            :type="passwordVisible ? 'text' : 'password'"
                            class="input__password input--password w-full p-2 rounded-md"
                            :class="{ error: getError?.password }"
                            @mouseenter="isHovered = true"
                            @mouseleave="isHovered = false"
                            @focus="focusInput"
                        />
                        <p class="error-text">
                            {{ getError?.password }}
                        </p>
                        <span
                            ref="toggleImg"
                            class="toggle-password-icon"
                            @click.stop="togglePasswordVisibility"
                        >
                            <img
                                v-if="!isHovered"
                                :src="
                                    isFocused
                                        ? passwordVisible
                                            ? '/image/register/password-visible.svg'
                                            : '/image/register/password-invisible.svg'
                                        : '/image/register/lock.png'
                                "
                                alt="toggle visibility"
                                class="icon"
                                :class="{ error: getError?.password }"
                            />
                            <img
                                v-else
                                src="/public/image/register/hover-lock.svg "
                                alt="hovered lock"
                            />
                        </span>
                    </div>
                    <div class="text-wrapper mt-4">
                        <p class="text">
                            <a href="for-got-password"> Не помню пароль </a>
                        </p>
                    </div>
                </div>
                <BtnBackgroud emit-name="action" class="btn" @action="Login()">
                    Войти
                </BtnBackgroud>
                <BtnComponent
                    emit-name="form-submit"
                    class="btn"
                    @form-submit="$router.push('/auth/register')"
                >
                    Регистрация
                </BtnComponent>
            </FormComponent>
        </div>
    </MainLayots>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import MainLayots from '@/layouts/MainLayots.vue'
import FormComponent from '@/components/form/FormComponent.vue'
import BtnComponent from '@/components/btns/BtnComponent.vue'
import BtnBackgroud from '@/components/btns/BtnBackgroud.vue'

const router = useRouter()
const userStore = useUserStore()
const toggleImg = ref(null)
const inputPassword = ref(null)
const isHovered = ref(false)

const loginForm = reactive({
    email: '',
    password: ''
})

const passwordVisible = ref(false)
const isFocused = ref(false)

const user = computed(() => userStore.getUser)
const getError = computed(() => userStore.getError)

function Login() {
    userStore.login({ ...loginForm })
}

watch(user, () => {
    router.push({ path: '/' })
})

function togglePasswordVisibility() {
    passwordVisible.value = !passwordVisible.value
}
function focusInput() {
    isFocused.value = true
    isHovered.value = false
}
function clickOutside(event) {
    if (
        inputPassword.value &&
        !inputPassword.value.contains(event.target) &&
        !toggleImg.value.contains(event.target)
    ) {
        isFocused.value = false
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
.login-wrapper {
    padding: 60px 0px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.btn {
    max-width: 200px;
    width: 100%;

    @media (max-width: $sm) {
        max-width: 100%;
        width: 100%;
    }
}

.input {
    &.error {
        border: 2px solid $primary-red;
    }

    &:hover {
        background-image: url('../../assets/icons/main/news/mail-hover.svg');
    }
}

.input__password {
    transition: 0.2s;
    background-repeat: no-repeat;
    background-position: right 16px center;
    border: 2px solid #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    box-sizing: border-box;
    color: $black;
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

    &.error {
        border: 2px solid $primary-red;
    }
}

.toggle-password-icon {
    position: absolute;
    top: 60%;
    right: 16px;
    transform: translateY(-35%);
    cursor: pointer;

    .icon {
        width: 24px;
        height: 24px;
        &.error {
            transform: translate(0, -55%);
        }

        @media (max-width: 355px) {
            &.error {
                transform: translate(0, -125%);
            }
        }
    }

    @media (max-width: $sm) {
        // top: 61%;
    }
}

.login {
    background: $gradient-background;
    width: 100%;
    justify-content: center;
}

.title {
    font-size: 32px;
    font-family: 'Kreadon-Demi';
}
</style>
