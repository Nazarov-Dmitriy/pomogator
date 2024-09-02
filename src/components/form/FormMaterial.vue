<template>
    <div class="modal__form-material">
        <div class="form-material__header">
            <h2 class="form-material__title">Предложить материал</h2>
            <button class="close-btn" @click="$emit('close')">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.92969 5L19.0718 19.1421"
                        stroke="#2E343D"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M5 19.4102L19.1421 5.26802"
                        stroke="#2E343D"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
        </div>

        <div class="form-material__body">
            <form class="form-material-field" @submit.prevent @keypress.enter.prevent>
                <div class="form-materia__photo flex justify-center">
                    <img
                        class="rounded-full object-cover aspect-square"
                        :src="
                            profileStore.profileImage !== ''
                                ? profileStore.profileImage
                                : '/public/image/cabinet/cabinetProfile/default-img.png'
                        "
                        alt="ФОТО"
                        width="106px"
                    />
                </div>
                <div class="form-materia-item form-materia-item__name">
                    <label
                        for="name"
                        class="form-materia-item__label"
                        :class="{ error: formField.nameError }"
                        >Как вас зовут? *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="name"
                            :value="profileStore.personalData.firstName"
                            @input="updateName($event.target.value)"
                            type="text"
                            placeholder="Мария Иванова"
                            class="form-materia-item-input"
                            :class="{ error: formField.nameError }"
                            @keypress.enter="validateField($event, 'event', 'name')"
                        />
                    </div>

                    <div v-if="formField.nameError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__email">
                    <label
                        for="email"
                        class="form-materia-item__label"
                        :class="{ error: formField.emailError }"
                        >E-mail *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="email"
                            :value="profileStore.personalData.email"
                            type="text"
                            placeholder="mariaivanova@mail.ru"
                            class="form-materia-item-input"
                            :class="{ error: formField.emailError }"
                            @input="changeEmail($event)"
                            @keypress.enter="validateField($event, 'event', 'email')"
                        />
                    </div>
                    <div v-if="formField.emailError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__position">
                    <label
                        for="position"
                        class="form-materia-item__label"
                        :class="{ error: formField.positionError }"
                        >Должность *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="position"
                            :value="profileStore.personalData.rank"

                            type="text"
                            placeholder="Преподаватель"
                            class="form-materia-item-input"
                            :class="{ error: formField.positionError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'position')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__work">
                    <label
                        for="work"
                        class="form-materia-item__label"
                        :class="{ error: formField.workError }"
                        >Место работ *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="work"
                            :value="profileStore.personalData.phone"

                            type="text"
                            placeholder="Школа №1"
                            class="form-materia-item-input"
                            :class="{ error: formField.workError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'work')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__direction">
                    <label
                        for="direction"
                        class="form-materia-item__label"
                        :class="{ error: formField.directionError }"
                        >Направление *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="direction"
                            :value="profileStore.personalData.organization"

                            type="text"
                            placeholder="Выберите направление"
                            class="form-materia-item-input"
                            :class="{ error: formField.directionError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'direction')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__article">
                    <label
                        for="article"
                        class="form-materia-item__label"
                        :class="{ error: formField.articleError }"
                        >Название статьи *</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="article"
                            v-model="formField.article"
                            type="text"
                            placeholder="IT технологии"
                            class="form-materia-item-input"
                            :class="{ error: formField.articleError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'article')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__video">
                    <label
                        for="video"
                        class="form-materia-item__label"
                        :class="{ error: formField.videoError }"
                        >Ссылка на видеоматериал</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="video"
                            v-model="formField.video"
                            type="text"
                            placeholder="видео_материал.ру"
                            class="form-materia-item-input"
                            :class="{ error: formField.videoError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'video')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__website">
                    <label
                        for="website"
                        class="form-materia-item__label"
                        :class="{ error: formField.websiteError }"
                        >Ссылка на источник</label
                    >
                    <div class="form-materia-item__group">
                        <input
                            id="website"
                            v-model="formField.website"
                            type="text"
                            placeholder="сайт_источник.ру"
                            class="form-materia-item-input"
                            :class="{ error: formField.websiteError }"
                            @input="changePhone($event)"
                            @keypress.enter="validateField($event, 'event', 'website')"
                        />
                    </div>
                    <div v-if="formField.positionError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item form-materia-item__textarea">
                    <label
                        for="textarea"
                        class="form-materia-item__label"
                        :class="{ error: formField.textareaError }"
                        >Описание материала *</label
                    >
                    <textarea
                        id="textarea"
                        v-model="formField.textarea"
                        type="text"
                        placeholder="Напишите тему и анонс предлагаемого материала"
                        class="form-materia-item-textearea"
                        :class="{ error: formField.textareaError }"
                        @input="changeTextarea($event)"
                    />
                    <div v-if="formField.textareaError" class="form-materia-item__error">
                        <img src="@/assets/icons/error.svg" alt="icon" />
                        <p class="form-materia-item__error-text">Поле заполненно некорректно</p>
                    </div>
                </div>
                <div class="form-materia-item__upload flex flex-wrap gap-8 items-end">
                    <label for="upload" class="form-materia-item__label upload"
                        >Прикрепить файл
                        <svg
                            class="upload-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.7855 17.5809C12.8904 17.6854 12.9736 17.8096 13.0304 17.9463C13.0871 18.0831 13.1164 18.2297 13.1164 18.3777C13.1164 18.5258 13.0871 18.6724 13.0304 18.8092C12.9736 18.9459 12.8904 19.0701 12.7855 19.1746L12.2286 19.7315C11.1734 20.7867 9.74217 21.3795 8.24985 21.3795C6.75753 21.3795 5.32633 20.7867 4.2711 19.7315C3.21587 18.6762 2.62305 17.2451 2.62305 15.7527C2.62305 14.2604 3.21587 12.8292 4.2711 11.774L6.53235 9.51367C7.54624 8.49727 8.91039 7.907 10.3454 7.86378C11.7804 7.82055 13.1776 8.32764 14.2508 9.28117C14.3616 9.37966 14.4519 9.49901 14.5166 9.63241C14.5813 9.7658 14.619 9.91063 14.6277 10.0586C14.6364 10.2066 14.6159 10.3549 14.5673 10.4949C14.5187 10.635 14.443 10.7641 14.3445 10.8749C14.246 10.9857 14.1267 11.076 13.9933 11.1407C13.8599 11.2054 13.7151 11.2432 13.5671 11.2519C13.4191 11.2606 13.2708 11.24 13.1308 11.1915C12.9907 11.1429 12.8616 11.0672 12.7508 10.9687C12.1072 10.3971 11.2696 10.093 10.4092 10.1186C9.54884 10.1443 8.73078 10.4976 8.12235 11.1065L5.86297 13.364C5.22994 13.997 4.8743 14.8556 4.8743 15.7509C4.8743 16.6461 5.22994 17.5047 5.86297 18.1377C6.49601 18.7708 7.3546 19.1264 8.24985 19.1264C9.1451 19.1264 10.0037 18.7708 10.6367 18.1377L11.1936 17.5809C11.2981 17.4763 11.4222 17.3933 11.5587 17.3367C11.6953 17.28 11.8417 17.2509 11.9895 17.2509C12.1374 17.2509 12.2838 17.28 12.4203 17.3367C12.5569 17.3933 12.681 17.4763 12.7855 17.5809ZM19.7305 4.26836C18.6744 3.21475 17.2435 2.62305 15.7517 2.62305C14.2599 2.62305 12.8291 3.21475 11.773 4.26836L11.2161 4.82523C11.0048 5.03658 10.886 5.32322 10.886 5.62211C10.886 5.92099 11.0048 6.20764 11.2161 6.41898C11.4274 6.63033 11.7141 6.74906 12.013 6.74906C12.3119 6.74906 12.5985 6.63033 12.8098 6.41898L13.3667 5.86211C13.9998 5.22907 14.8583 4.87343 15.7536 4.87343C16.6489 4.87343 17.5074 5.22907 18.1405 5.86211C18.7735 6.49514 19.1291 7.35373 19.1292 8.24898C19.1292 9.14423 18.7735 10.0028 18.1405 10.6359L15.8802 12.8971C15.2712 13.5057 14.4527 13.8586 13.5921 13.8835C12.7315 13.9084 11.8939 13.6035 11.2508 13.0312C11.14 12.9327 11.0109 12.857 10.8708 12.8084C10.7307 12.7598 10.5825 12.7393 10.4345 12.748C10.2865 12.7567 10.1417 12.7944 10.0083 12.8591C9.87488 12.9238 9.75553 13.0141 9.65704 13.1249C9.55855 13.2357 9.48284 13.3648 9.43425 13.5049C9.38566 13.645 9.36513 13.7932 9.37384 13.9412C9.38254 14.0892 9.42031 14.234 9.48499 14.3674C9.54966 14.5008 9.63998 14.6202 9.75079 14.7187C10.8233 15.672 12.2195 16.1794 13.6538 16.137C15.0881 16.0947 16.452 15.5058 17.4664 14.4909L19.7277 12.2305C20.7825 11.1747 21.3753 9.74344 21.3758 8.25097C21.3763 6.7585 20.7846 5.32681 19.7305 4.27023V4.26836Z"
                                fill="#5B94EA"
                            />
                        </svg>
                    </label>
                    <input id="upload" type="file" hidden />
                </div>
            </form>
        </div>

        <div class="form-footer">
            <div class="form-materia-item__submit">
                <p class="form-materia-item__policy">
                    Нажимая на кнопку «Отправить», я соглашаюсь с
                    <span class="form-materia-item__policy-link"
                        >политикой обработки персональных данных</span
                    >
                </p>
                <BtnBackgroud
                    class="form-materia-item__btn"
                    emit-name="form-materia-submit"
                    @form-submit="validateForm()"
                >
                    Отправить
                </BtnBackgroud>
            </div>
        </div>
        <img
            src="@/assets/images/form/bg-material.svg"
            alt="bg-image"
            class="form-materia-item__bg-line-tablet"
        />
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { useProfileStore } from '@/stores/useProfileStore'

const profileStore = useProfileStore()

defineEmits(['close'])

const formField = reactive({
    name: profileStore.personalData.firstName,
    email: '',
    position: '',
    work: '',
    direction: '',
    article: '',
    video: '',
    website: '',
    textarea: '',
    nameError: false,
    emailError: false,
    positionError: false,
    workError: false,
    directionError: false,
    articleError: false,
    videoError: false,
    websiteError: false,
    textareaError: false,
    falidateForm: false
})

function validateField(param, event, nameParam) {
    let target
    if (event === 'event') {
        target = param.target.value.trim()
    } else {
        target = param.trim()
    }

    if (nameParam === 'name') {
        target.length < 3 ? (formField.nameError = true) : (formField.nameError = false)
    }
    if (nameParam === 'email') {
        let email_regexp =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        !email_regexp.test(String(target).toLowerCase())
            ? (formField.emailError = true)
            : (formField.emailError = false)
    }
    if (nameParam === 'work') {
        target.length < 3 ? (formField.workError = true) : (formField.workError = false)
    }
    if (nameParam === 'direction') {
        target.length < 3 ? (formField.directionError = true) : (formField.directionError = false)
    }
    if (nameParam === 'article') {
        target.length < 3 ? (formField.articleError = true) : (formField.articleError = false)
    }
    if (nameParam === 'video') {
        target.length < 3 ? (formField.videoError = true) : (formField.videoError = false)
    }
    if (nameParam === 'website') {
        target.length < 3 ? (formField.websiteError = true) : (formField.websiteError = false)
    }
    if (nameParam === 'textarea') {
        target.length < 3 ? (formField.textareaError = true) : (formField.textareaError = false)
    }
}

function changeEmail(event) {
    let target = event.target
    let x = target.value.match(
        /([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/
    )
    target.value = x ? x[1] + x[2] + x[3] + x[4] + x[5] + x[6] : ''
    formField.email = target.value
}

function changeTextarea(event) {
    let target = event.target
    event.target.scrollBy(target.scrollHeight, 100)

    if (formField.textareaError && target.value.length > 3) {
        formField.textareaError = false
    }
}

function validateForm() {
    let validateFeildArr = ['name', 'phone', 'email', 'textarea']

    validateFeildArr.forEach((item) => {
        validateField(formField[item], 'validate', item)
    })
}
</script>
<style lang="scss" scoped>
.modal__form-material {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: $gradient-background;
    overflow: auto;
    height: 100vh;

    @media (max-width: $lg) {
        padding: 24px;
    }

    @media (max-width: $sm) {
        padding: 16px;
    }
}

.form-material__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

.form-material__title {
    font-family: 'Kreadon-Demi';
    font-size: 36px;
    line-height: 42px;
    color: $black;
    @media (max-width: $lg) {
        max-width: 90%;
    }
}

// .form-material__subtitle {
//     font-size: 16px;
//     line-height: 24px;
//     color: $blue-primary;
// }

.close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
}

.form-material__body {
    display: flex;
}

.form-material-field {
    display: grid;
    grid-template-columns: minmax(200px, 492px) minmax(200px, 600px);
    grid-template-areas:
        'photo textarea'
        'name textarea'
        'email textarea'
        'position textarea'
        'work textarea'
        'direction textarea'
        'article textarea'
        'video textarea'
        'website upload';
    justify-content: space-between;
    gap: 16px 24px;
    width: 100%;

    @media (max-width: $lg) {
        grid-template-columns: minmax(100px, 1fr);
        grid-template-areas:
            'name'
            'phone'
            'email'
            'textarea'
            'upload';
    }
}

.form-materia__photo {
    grid-area: photo;
}

.form-materia-item__name {
    grid-area: name;
}

.form-materia-item__email {
    grid-area: email;
}

.form-materia-item__position {
    grid-area: position;
}

.form-materia-item__work {
    grid-area: work;
}

.form-materia-item__direction {
    grid-area: direction;
}

.form-materia-item__article {
    grid-area: article;
}

.form-materia-item__video {
    grid-area: video;
}

.form-materia-item__website {
    grid-area: website;
}

.form-materia-item__textarea {
    grid-area: textarea;
    height: 100%;
}

.form-materia-item__upload {
    grid-area: upload;
}

.form-materia-item {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-content: flex-start;
    z-index: 1;
}

.form-materia-item__label {
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $black;

    &.error {
        color: $primary-red;
    }
}

.form-materia-item__group {
    flex: 1 1 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 100px;
}

.form-materia-item-input {
    width: 100px;
    flex: 1 1 100%;
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 10px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;
    box-sizing: border-box;

    &:hover {
        border-color: $blue-primary;
    }

    &:focus {
        border-color: $blue-primary;
        color: $black;

        & ~ .form-item__icon {
            svg path {
                fill: $blue-primary;
            }
        }
    }

    &::placeholder {
        color: $secondary;
    }

    &.error {
        border: 2px solid $primary-red;
    }
}

.form-materia-item-input:-webkit-autofill,
.form-materia-item-input:-webkit-autofill:hover,
.form-materia-item-input:-webkit-autofill:focus,
.form-materia-item-input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #ffffff inset !important;
}

.form-materia-item-input:-webkit-autofill {
    -webkit-text-fill-color: $secondary !important;
    font-size: 16px !important;
    line-height: 1.5;
    font-family: 'Inter';
}
.form-materia-item-input:-webkit-autofill:focus {
    -webkit-text-fill-color: $black !important;
    font-size: 16px !important;
    line-height: 1.5;
    font-family: 'Inter';
}

.form-materia-item__icon {
    position: absolute;
    right: 16px;
}

.form-materia-item-textearea {
    border-radius: 32px;
    border: 2px solid $secondary;
    padding: 12px 56px 12px 16px;
    color: $secondary;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    resize: none;
    box-sizing: border-box;
    // height: 241px;
    flex: 0 0 100%;
    height: calc(100% - 32px);

    &:hover {
        border-color: $blue-primary;
    }

    &:focus {
        border-color: $blue-primary;
        color: $black;
    }

    &::placeholder {
        color: $secondary;
    }

    @media (max-width: $lg) {
        height: 160px;
    }

    @media (max-width: $sm) {
        height: auto;
        min-height: 116px;
    }

    &.error {
        border: 2px solid $primary-red;
    }
}

.form-materia-item__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    height: 48px;
    margin-top: 37px;

    @media (max-width: $lg) {
        flex: 1 1 100%;
        margin-top: 16px;
    }

    @media (max-width: $sm) {
        margin-top: 0;
        flex-wrap: wrap;
        height: auto;
        justify-content: center;
    }
}

.form-materia-item__policy {
    flex: 0 1 300px;
    font-size: 12px;
    line-height: 18px;
    color: #a8bfdc;
    color: $blue-primary;

    @media (max-width: $sm) {
        flex: 1 1 100%;
    }
}

.form-materia-item__policy-link {
    text-decoration: underline;
    cursor: pointer;
}

.form-materia-item__bg-line {
    position: absolute;
    width: 869px;
    height: 277px;
    z-index: 0;
    right: -237px;
    bottom: -140px;
    rotate: 166.07deg;
}

.form-materia-item__bg-line-tablet {
    position: absolute;
    display: block;
    bottom: -139px;
    left: -68px;
    rotate: 13deg;

    @media (max-width: $lg) {
        bottom: -189px;
    }
    @media (max-width: $sm) {
        display: none;
    }
}

.form-materia-item__btn {
    @media (max-width: $sm) {
        width: 288px;
    }
}

.form-materia-item__error {
    display: flex;
    gap: 8px;
    align-items: center;
}

.form-materia-item__error-text {
    font-size: 16px;
    line-height: 24px;
    color: $primary-red;
}

.form-materia-item__upload {
    display: flex;
    gap: 10px;

    .form-materia-item__label.upload {
        line-height: 18px;
        color: $blue-primary;
        font-size: 12px;

        & svg {
            margin-left: 10px;
        }
    }
}
</style>
