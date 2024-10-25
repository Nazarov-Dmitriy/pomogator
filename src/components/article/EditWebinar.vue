<template>
    <div class="edit flex flex-col p-10 w-full gap-4">
        <template v-if="!isLoad">
            <Loader />
        </template>
        <template v-else-if="getUser?.completed_profile">
            <h1 class="font-medium text-2xl">
                {{ pageType ? 'Редактировать вебинар' : 'Добавить вебинар' }}
            </h1>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="title" class="field__label" :class="{ error: getErrors?.title }"
                        >Заголовок материала</label
                    >
                    <input
                        id="title"
                        v-model="dataWebinar.title"
                        placeholder="IT технологии"
                        type="text"
                        class="input !bg-none w-full p-2 rounded-md"
                        :class="{ error: getErrors?.title }"
                    />
                    <p v-if="getErrors?.title" class="error-text">
                        {{ getErrors?.title }}
                    </p>
                </div>
                <div class="flex flex-col gap-2">
                    <label
                        for="annotation"
                        class="field__label"
                        :class="{ error: getErrors?.annotation }"
                        >Аннотация</label
                    >
                    <input
                        id="annotation"
                        v-model="dataWebinar.annotation"
                        placeholder="Краткое описание материала"
                        type="text"
                        class="input-annotation input !bg-none w-full p-2 rounded-md"
                        :class="{ error: getErrors?.annotation }"
                    />
                    <p v-if="getErrors?.annotation" class="error-text">
                        {{ getErrors?.annotation }}
                    </p>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div class="category flex flex-col gap-2 w-full">
                        <label class="field__label" :class="{ error: getErrors?.tags }">Теги</label>
                        <DropdownComponent
                            v-model:modelValue="dataWebinar.tags"
                            :options="getTags"
                            :multi="true"
                            :placeholder="'Выбирите теги'"
                            :error="!!getErrors?.tags"
                        />
                        <p v-if="getErrors?.tags" class="error-text">
                            {{ getErrors?.tags }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label
                            for="date_translation"
                            class="field__label"
                            :class="{ error: getErrors?.date_translation }"
                            >Дата трансляции</label
                        >
                        <VueDatePicker
                            id="date_translation"
                            v-model="dataWebinar.date_translation"
                            placeholder="дд.мм.гггг --:--"
                            locale="ru"
                            class="data-picker"
                            :class="{ error: getErrors?.date_translation }"
                            select-text="Выбрать"
                            cancel-text="Закрыть"
                            model-type="dd-MM-yyyy HH:mm"
                            format="dd.MM.yyyy HH:mm"
                            utc="true"
                        ></VueDatePicker>
                        <p v-if="getErrors?.date_translation" class="error-text">
                            {{ getErrors?.date_translation }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="video" class="field__label" :class="{ error: getErrors?.video }"
                        >Ссылка на вебинар</label
                    >
                    <input
                        id="video"
                        v-model="dataWebinar.video"
                        type="text"
                        placeholder="Ссылка на вебинар"
                        class="input !bg-none w-full p-2 rounded-md"
                        :class="{ error: getErrors?.video }"
                    />
                    <p v-if="getErrors?.video" class="error-text">
                        {{ getErrors?.video }}
                    </p>
                </div>
            </div>

            <div v-if="previewImage" class="preview-img">
                <img :src="getPreviewPath" alt="preview" />
            </div>

            <div
                class="file-input flex gap-2 items-center"
                :class="{ error: getErrors?.preview_img }"
                @click="addImg"
            >
                <input
                    ref="addInputImg"
                    type="file"
                    class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600 hidden"
                    @change="onFileChange"
                />
                <span>Прикрепить файл</span>

                <img
                    v-if="!getErrors?.preview_img"
                    class="color-red"
                    src="/image/edit-news/file.svg"
                    alt=""
                />
                <img v-else class="color-red" src="/image/edit-news/file-error.svg" alt="" />
            </div>

            <p v-if="getErrors?.preview_img" class="error-text">
                {{ getErrors?.preview_img }}
            </p>

            <div class="policy">
                <p class="policy__text">
                    Нажимая на кнопку «Отправить», я соглашаюсь с
                    <span>
                        <a
                            href="/public/documents/user_consultation_it.pdf"
                            download="/public/documents/user_consultation_it.pdf"
                        >
                            политикой обработки персональных данных</a
                        >
                    </span>
                </p>
            </div>
            <BtnBackgroud class="w-fit" emit-name="action" @action="submit()">
                {{ pageType ? 'Сохранить' : 'Отправить' }}
            </BtnBackgroud>
            <div v-if="getIsSuccses" style="color: green">
                {{ pageType ? 'Вебинар успешно сохранен' : 'Вебинар успешно добавлен' }}
            </div>
        </template>
        <template v-else>
            <template v-if="getUser">
                <div class="flex flex-col gap-4">
                    <h2 class="edit__empty-profile">Для добавление вебинара заполните профиль</h2>
                </div>
                <BtnComponent
                    emit-name="action"
                    class="w-fit"
                    @action="$router.push('/lk/profile')"
                >
                    Перейти в профиль
                </BtnComponent>
            </template>
            <template v-else>
                <div class="flex flex-col gap-4">
                    <h2 class="edit__empty-profile">Для добавление вебинара авторизуйтесь</h2>
                </div>
                <BtnComponent
                    emit-name="action"
                    class="w-fit"
                    @action="$router.push('/auth/login')"
                >
                    Авторизоваться
                </BtnComponent>
            </template>
        </template>
    </div>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import BtnComponent from '../btns/BtnComponent.vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import DropdownComponent from '../dropdown/DropdownComponent.vue'
import { useUserStore } from '@/stores/userStore'
import Loader from '@/components/loader/Loader.vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useWebinarStore } from '@/stores/webinarStore'

const isLoad = ref(true)

const userStore = useUserStore()
const newsStore = useNewsStore()
const webinarStore = useWebinarStore()
const previewImage = ref(null)
const addInputImg = ref(null)
const route = useRoute()
const pageType = ref(null)

const dataWebinar = reactive({
    id: null,
    title: null,
    annotation: null,
    tags: [],
    preview_img: null,
    date_translation: null,
    video: null,
    author: null
})

const getUser = computed(() => {
    return userStore.getUser
})

const getTags = computed(() => {
    return newsStore.getTags
})

const getErrors = computed(() => {
    return webinarStore.getWebinarErrors
})

const getWebinar = computed(() => {
    return webinarStore.getWebinar
})

const getIsSuccses = computed(() => {
    return webinarStore.getIsSuccsesWebinar
})

onMounted(() => {
    newsStore.getTagsDb()
    dataWebinar.author = getUser.value?.id
    if (route.name === 'edit-webinar') {
        pageType.value = 'edit'
        getWebinarDb(route.params.id)
    }
})

function getWebinarDb(id) {
    isLoad.value = false
    webinarStore.getWebinarDb(id)
}

function addImg() {
    addInputImg.value.click()
}

function onFileChange(e) {
    const file = e.target.files[0]

    if (file && file.type.startsWith('image/')) {
        dataWebinar.preview_img = file
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            previewImage.value = e.target.result
        }
    } else {
        previewImage.value = null
    }
}

const getPreviewPath = computed(() => {
    if (previewImage.value.includes('base64')) {
        return previewImage.value
    }
    return import.meta.env.VITE_SERVER_URL + previewImage.value
})

function submit() {
    const data = new FormData()
    for (const key in dataWebinar) {
        if (dataWebinar[key] === null) {
            data.append(key, '')
        } else {
            data.append(key, dataWebinar[key])
        }
    }

    if (pageType.value) {
        webinarStore.editWebinarDb(data)
    } else {
        webinarStore.addWebinarDb(data)
    }
}

function formatDate(date) {
    let newDate
    let time = date.split(' ')[1]
    let day = date.split(' ')[0].split('.')[0]
    let month = date.split(' ')[0].split('.')[1]
    let year = date.split(' ')[0].split('.')[2]
    newDate = `${year}-${month}-${day}T${time}`
    return newDate
}

watch(getUser, () => {
    dataWebinar.author = getUser.value?.id
})

watch(getTags, () => {
    isLoad.value = true
})

watch(getWebinar, () => {
    isLoad.value = true
    dataWebinar.id = getWebinar.value.id
    dataWebinar.title = getWebinar.value.title
    dataWebinar.annotation = getWebinar.value.annotation
    dataWebinar.tags = getWebinar.value.tags
    dataWebinar.date_translation = formatDate(getWebinar.value.date_translation)
    dataWebinar.video = getWebinar.value.video

    if (getWebinar.value.preview_img) {
        previewImage.value = getWebinar.value.preview_img
    }
})
</script>
<style lang="scss" scoped>
.edit {
    padding: 16px 60px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 16px 40px;
    }

    @media (max-width: $sm) {
        padding: 16px;
    }
}

.news__textarea {
    height: 500px;
    border: 1px solid $blue;
    border-radius: 10px;
    padding: 10px;
    resize: none;
}

.error :deep(.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)) {
    border: 2px solid $primary-red;
}

.preview-img {
    max-width: 300px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.edit__empty-profile {
    font-size: 32px;
    line-height: 1.5;
    font-weight: 500;
    color: $black;
}

.error :deep(.ck-toolbar__items) {
    background: $primary-red;
    border: 2px solid $primary-red;
}
.input-annotation {
    padding: 12px 16px 100px 12px;
}

.category {
    :deep(.dashboard__dropdown-wrapper) {
        max-width: 100%;
        width: 100%;
        border: 2px solid #a0b1ed;
        border-radius: 32px;
        height: 48px;
        padding: 12px 16px;

        &:hover,
        &:active,
        &:focus {
            color: $black;
            border: 2px solid $blue-primary;

            &::placeholder {
                color: $blue-primary;
            }
        }

        @media (max-width: $lg) {
            padding: 10px 16px;
        }
    }

    :deep(.dropdown-selected-text) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #a0b1ed;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        &:hover,
        &:active,
        &:focus {
            color: $blue-primary;
        }
    }
    :deep(.option-wrapper) {
        border: 2px solid #4360f8;
        border-radius: 24px;
        top: -2px;
        width: 101%;
    }
    :deep(.dropdown-icon) {
        top: 15px;
    }
    :deep(.option) {
        border: none;
        border-bottom: 1px solid #4360f8;
        &:last-child {
            border: none;
        }
        &:first-child {
            border-top: none;
        }
    }

    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
    }
}

.file-wrapper {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    @media (max-width: $lg) {
        max-width: 100%;
        width: 100%;
        flex-direction: column;
    }
}
.video-wrapper {
    @media (max-width: $lg) {
        max-width: 100%;
        width: 100%;
        flex-direction: column;
    }
}

.link {
    border: 2px solid #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #a0b1ed;
}

.file-dropdown {
    :deep(.dashboard__dropdown-wrapper) {
        max-width: 100%;
        width: 100%;
        border: 2px solid #a0b1ed;
        border-radius: 32px;
        height: 48px;
        padding: 12px 16px;

        @media (max-width: $lg) {
            padding: 10px 16px;
        }
    }
    :deep(.dropdown-icon) {
        top: 15px;
    }
    :deep(.option-wrapper) {
        border: 2px solid #4360f8;
        border-radius: 24px;
        top: -2px;
        width: 101%;
    }
    :deep(.option) {
        border: none;
        border-bottom: 1px solid #4360f8;
        &:last-child {
            border: none;
        }
        &:first-child {
            border-top: none;
        }
    }
    :deep(.dropdown-selected-text) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #a0b1ed;
    }
}

.file-input {
    color: #a0b1ed;
    width: max-content;
    cursor: pointer;

    &:hover {
        & span {
            color: $blue-primary;
        }
    }

    &.error {
        color: $primary-red;
    }
    & span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: currentColor;
    }
}

.policy {
    &__text {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #5b94ea;
        & span {
            text-decoration: underline;
            text-decoration-skip-ink: none;
        }
    }
}

.data-picker {
    --dp-input-padding: 10px 16px;
    --dp-border-radius: 32px;
    --dp-border-color: none;
    --dp-font-size: 16px;
    --dp-text-color: #a0b1ed;
    --dp-icon-color: #a0b1ed;
    --dp-menu-min-width: 300px;
    --dp-action-row-padding: 12px 20px;

    :deep(.dp__input_wrap) {
        &:hover,
        &:active,
        &:focus {
            border: 2px solid #4360f8;
        }
    }
    :deep(.dp__pointer) {
        height: 48px;
    }

    &.error {
        :deep(.dp__input_wrap) {
            border: 2px solid $primary-red;
            border-radius: 32px;
        }
    }

    :deep(.dp__input_wrap) {
        border: 2px solid #a0b1ed;
        border-radius: 32px;
    }
}
</style>
