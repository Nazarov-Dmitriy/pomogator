<template>
    <section class="profile">
        <div class="profile__bg">
            <img
                src="../../assets/images/cabinet/cabinetProfile/profile-bg.svg"
                alt="background image"
                class="profile__bg-img"
            />
        </div>
        <div class="profile__container">
            <div class="profile__wrapper">
                <div class="profile__photo">
                    <h2 class="profile__photo-title">Фотография профиля</h2>
                    <div
                        :class="{ 'profile__photo-img-empty': !hasCustomImage }"
                        class="profile__photo-img-wrapper"
                        @click="triggerFileInput"
                    >
                        <img
                            :src="profileImage"
                            class="profile__photo-img"
                            :class="{ 'profile__photo-img-empty': !hasCustomImage }"
                        />

                        <div v-if="hasCustomImage" @click.stop class="profile__photo-hover">
                            <p class="profile__photo-hover-text">Сменить фото</p>
                            <img
                                src="../../assets/images/cabinet/cabinetProfile/bucket.png"
                                alt="delete png"
                                class="profile__photo-hover-delete"
                                @click="removeImage"
                            />
                        </div>
                    </div>
                    <input
                        type="file"
                        ref="fileInput"
                        class="profile__photo-input"
                        @change="onFileChange"
                        accept="image/*"
                        style="display: none"
                    />
                </div>
                <div class="profile__change">
                    <h2 class="profile__change-title">Смена пароля</h2>
                    <form
                        @submit.prevent="checkPasswordLength"
                        @keypress.enter.prevent="checkPasswordLength"
                        class="form profile__change-form"
                    >
                        <div class="profile__change-input-group">
                            <label class="profile__change-label">Старый пароль</label>
                            <input
                                v-model="oldPassword"
                                :type="isOldPasswordVisible ? 'text' : 'password'"
                                class="profile__change-input"
                                placeholder="Введите старый пароль"
                            />
                            <img
                                v-if="oldPassword.length"
                                class="profile__change-input-img"
                                :src="
                                    isOldPasswordVisible
                                        ? '/public/image/cabinet/cabinetProfile/password-visible.svg'
                                        : '/public/image/cabinet/cabinetProfile/password-invisible.svg'
                                "
                                alt=""
                                @click="toggleOldPasswordVisibility"
                            />
                        </div>
                        <div class="profile__change-input-group">
                            <label class="profile__change-label">Новый пароль</label>
                            <input
                                v-model="newPassword"
                                :type="isNewPasswordVisible ? 'text' : 'password'"
                                class="profile__change-input"
                                placeholder="Введите новый пароль"
                            />
                            <img
                                v-if="newPassword.length"
                                class="profile__change-input-img"
                                :src="
                                    isNewPasswordVisible
                                        ? '/public/image/cabinet/cabinetProfile/password-visible.svg'
                                        : '/public/image/cabinet/cabinetProfile/password-invisible.svg'
                                "
                                alt=""
                                @click="toggleNewPasswordVisibility"
                            />
                            <div v-if="isCorrectPassword" class="error">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 13H11V15H9V13ZM9 5H11V11H9V5ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                                        fill="#383FD7"
                                    />
                                </svg>
                                <p class="error-text">
                                    Пароль должен содержать не менее 8 символов, не менее 1й
                                    заглавной и маленькой буквы латинского алфавита и цифры.
                                </p>
                            </div>
                        </div>
                        <div class="profile__change-input-group">
                            <label class="profile__change-label">Подтверждение пароля</label>
                            <input
                                v-model="repeatNewPassword"
                                :type="isRepeatedPasswordVisible ? 'text' : 'password'"
                                class="profile__change-input"
                                placeholder="Введите новый пароль еще раз"
                            />
                            <img
                                v-if="repeatNewPassword"
                                class="profile__change-input-img"
                                :src="
                                    isRepeatedPasswordVisible
                                        ? '/public/image/cabinet/cabinetProfile/password-visible.svg'
                                        : '/public/image/cabinet/cabinetProfile/password-invisible.svg'
                                "
                                alt=""
                                @click="toggleRepeatedPasswordVisibility"
                            />
                            <img
                                v-else-if="type === 'password'"
                                class="profile__change-input-img"
                                src="/public/image/cabinet/cabinetProfile/password-visible.svg"
                                alt=""
                                @click="toggleRepeatedPasswordVisibility"
                            />
                            <div v-if="isPasswordEqual" class="error">
                                <p>Пароли не совпадают</p>
                            </div>
                        </div>
                        <div class="profile__change-btn-wrap">
                            <BtnBackgroud :disabled="!isFormValid" class="profile__change-btn"
                                >Сохранить пароль</BtnBackgroud
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useProfileStore } from '/src/stores/useProfileStore'
import BtnBackgroud from '../btns/BtnBackgroud.vue'

const store = useProfileStore()

const isCorrectPassword = ref(false)
const isPasswordEqual = ref(false)
const fileInput = ref(null)

const oldPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')

const profileImage = computed(() => store.profileImage)
const hasCustomImage = computed(() => store.profileImage !== '')

const isNewPasswordVisible = ref(false)
const isOldPasswordVisible = ref(false)
const isRepeatedPasswordVisible = ref(false)

function toggleNewPasswordVisibility() {
    isNewPasswordVisible.value = !isNewPasswordVisible.value
}
function toggleOldPasswordVisibility() {
    isOldPasswordVisible.value = !isOldPasswordVisible.value
}
function toggleRepeatedPasswordVisibility() {
    isRepeatedPasswordVisible.value = !isRepeatedPasswordVisible.value
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regex.test(password)
}

function checkPasswordEqual() {
    if (newPassword.value !== repeatNewPassword.value) {
        isPasswordEqual.value = true
    } else {
        isPasswordEqual.value = false
    }
}

function checkPasswordLength() {
    if (!validatePassword(oldPassword.value)) {
        isCorrectPassword.value = true
    } else if (newPassword.value !== repeatNewPassword.value) {
        isPasswordEqual.value = true
    } else {
        isCorrectPassword.value = false
        oldPassword.value = ''
        newPassword.value = ''
        repeatNewPassword.value = ''
    }
    checkPasswordEqual()
}

const isFormValid = computed(() => {
    return (
        oldPassword.value.trim() !== '' &&
        newPassword.value.trim() !== '' &&
        repeatNewPassword.value !== ''
    )
})

function triggerFileInput() {
    fileInput.value.click()
}

function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            store.setProfileImage(e.target.result)
        }
        reader.readAsDataURL(file)
    }
}

function removeImage() {
    store.removeProfileImage()
}
</script>

<style scoped lang="scss">
.profile {
    padding: 60px 80px;
    position: relative;
    z-index: 1;
}
.profile__bg {
    position: absolute;
    top: 212px;
    left: 0;
    z-index: 0;
}
.profile__container {
    max-width: 1280px;
    margin: 0 auto;
}
.profile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.profile__photo {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.profile__photo-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s;

    &:hover {
        opacity: 1;
        background: $white;
        opacity: 0.75;
    }
}
.profile__photo-hover-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: $blue-primary;
}

.profile__photo-hover-delete {
    position: absolute;
    bottom: 24px;
}

.profile__photo-title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
.profile__photo-img-wrapper {
    width: 307px;
    height: 307px;
    cursor: pointer;
    transition: background 0.4s;
    position: relative;
    z-index: 2;
    background: url('../../../public/image/cabinet/cabinetProfile/default-img.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover {
        background: url('../../../public/image/cabinet/cabinetProfile/hover-img.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
    }
}
.profile__photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s;
    border-radius: 50%;
}
.profile__change {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.profile__change-title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.profile__change-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.profile__change-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    z-index: 2;
}

.error {
    display: flex;
    align-items: center;
    gap: 8px;
}

.error-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #383fd7;
    max-width: 307px;
    width: 100%;
}

.profile__change-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: $black;
}
.profile__change-input {
    border: 2px solid $secondary;
    border-radius: 32px;
    padding: 12px 16px;
    box-sizing: border-box;
    width: 307px;
    height: 48px;
    background-color: $white;
    color: $secondary;
    position: relative;
    // background: url('/image/cabinet/cabinetProfile/password-invisible.svg') no-repeat ;
    // background-position: calc(100% - 16px);

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

.profile__change-input-img {
    position: absolute;
    top: 43px;
    right: 10px;
    cursor: pointer;
}
.profile__change-btn {
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 2;
}
</style>
