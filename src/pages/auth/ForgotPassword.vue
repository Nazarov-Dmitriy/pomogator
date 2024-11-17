<template>
    <MainLayots>
        <div class="for-got-password__wrapper">
            <FormComponent class="login flex flex-col items-center gap-4">
                <h2 class="title">Востановить пароль</h2>
                <div class="flex flex-col gap-2 w-full">
                    <div class="input-group flex flex-col w-full gap-2">
                        <label class="field__label" :class="{ error: getError?.email }" for="email"
                            >Email</label
                        >
                        <input
                            id="email"
                            v-model="forGotPasswordData.email"
                            type="text"
                            placeholder="mariaivanova@mail.ru"
                            class="input w-full p-2 rounded-md"
                            :class="{ error: getError?.email }"
                        />
                        <p v-if="getError?.email" class="error-text">
                            {{ getError?.email }}
                        </p>
                    </div>
                </div>
                <BtnBackgroud emit-name="action" class="btn" @action="forGotPassword()">
                    Востановить
                </BtnBackgroud>
                <div v-if="getSuccessRes" class="" style="color: green">
                    Пароль отправлен на почту
                </div>
            </FormComponent>
        </div>
    </MainLayots>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import MainLayots from '@/layouts/MainLayots.vue'
import FormComponent from '@/components/form/FormComponent.vue'
import BtnBackgroud from '@/components/btns/BtnBackgroud.vue'

const userStore = useUserStore()

const forGotPasswordData = reactive({
    email: ''
})

const getError = computed(() => userStore.getError)

const getSuccessRes = computed(() => {
    return userStore.successForGotPassword
})

function forGotPassword() {
    userStore.userForGotPassword({ ...forGotPasswordData })
}

onUnmounted(() => {
    userStore.resetSuccessRes()
})

onMounted(() => {})
</script>

<style lang="scss">
.for-got-password__wrapper {
    padding: 60px 0px;
    box-sizing: border-box;
    margin: auto 0;

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
