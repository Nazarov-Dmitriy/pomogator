<template>
    <div class="edit flex flex-col w-full gap-4">
        <template v-if="getArticleAccess === 'success'">
            <h1 class="font-medium text-2xl">
                {{ pageType ? 'Редактировать новость' : 'Добавить новость' }}
            </h1>
            <div v-if="getShowPublishedBtn" class="flex gap-2 items-center">
                <input
                    id="published"
                    v-model="published"
                    type="checkbox"
                    value="false"
                    class="w-5 h-5"
                    :disabled="publishedDisabled"
                    @change="setPublished"
                />
                <label for="published">Опубликовать</label>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="title" class="field__label" :class="{ error: getErrors?.title }"
                        >Заголовок материала</label
                    >
                    <input
                        id="title"
                        v-model="dataNews.title"
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
                    <textarea
                        id="annotation"
                        v-model="dataNews.annotation"
                        placeholder="Краткое описание материала"
                        type="text"
                        class="input-annotation input-annotation-textarea input !bg-none w-full p-2 rounded-md"
                        :class="{ error: getErrors?.annotation }"
                    />
                    <p v-if="getErrors?.annotation" class="error-text">
                        {{ getErrors?.annotation }}
                    </p>
                </div>
                <div class="category flex justify-between items-start gap-4">
                    <div class="flex flex-col gap-2 w-full">
                        <label class="field__label" :class="{ error: getErrors?.category }"
                            >Категория</label
                        >
                        <DropdownComponent
                            v-model:modelValue="dataNews.category"
                            :options="getCategory"
                            :placeholder="'Выберите категорию'"
                            :error="getErrors?.category"
                        />
                        <p v-if="getErrors?.category" class="error-text">
                            {{ getErrors?.category }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label
                            class="file-dropdown field__label"
                            :class="{ error: getErrors?.tags }"
                            >Теги</label
                        >
                        <DropdownComponent
                            v-model:modelValue="dataNews.tags"
                            :options="getTags"
                            :multi="true"
                            :placeholder="'Выбирите теги'"
                            :error="!!getErrors?.tags"
                        />
                        <p v-if="getErrors?.tags" class="error-text">
                            {{ getErrors?.tags }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <label for="" class="text-base">Ссылка на источник</label>
                <input
                    v-model="dataNews.link_to_source"
                    type="text"
                    placeholder="сайт_источник.ру"
                    class="link text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="field__label" :class="{ error: getErrors?.article }"
                    >Описание материала</label
                >
                <div class="ck-editor-wrapper" :class="{ error: getErrors?.article }">
                    <ckeditor v-model="dataNews.article" :editor="editor" :config="editorConfig" />
                    <p v-if="getErrors?.article" class="error-text">
                        {{ getErrors?.article }}
                    </p>
                </div>
            </div>

            <div
                :class="{ 'file-wrapper': isArticleImage === 1 }"
                class="video-wrapper flex gap-4 justify-between items-center"
            >
                <div class="file-dropdown flex flex-col gap-2 w-full">
                    <label for="" class="text-base">Добавить</label>
                    <DropdownComponent
                        v-model:modelValue="isArticleImage"
                        :options="optionArticleImageDropdown"
                        :placeholder="'Выбирите теги'"
                    />
                </div>
                <div v-if="previewImage" class="preview-img">
                    <img :src="getPreviewPath" alt="preview" />
                </div>
                <div v-if="isArticleImage === 1" class="flex flex-col gap-2">
                    <input
                        ref="addInputImg"
                        type="file"
                        class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600 hidden"
                        @change="onFileChange"
                    />
                </div>
                <div v-if="isArticleImage === 2" class="video-input flex flex-col gap-2 w-full">
                    <label
                        for="video"
                        class="field__label"
                        :class="{ 'error-text': getErrors?.file }"
                        >Ссылка на видеоматериал</label
                    >
                    <input
                        id="video"
                        v-model="dataNews.video"
                        type="text"
                        class="link text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600"
                        placeholder="видео_материал.ру"
                        :class="{ error: getErrors?.file }"
                    />
                </div>
            </div>
            <div
                v-if="isArticleImage === 1"
                class="file-input flex gap-2 items-center"
                @click="addImg"
            >
                <span :class="{ 'error-text': getErrors?.file }">Прикрепить файл</span>
                <img v-if="!getErrors?.file" src="/image/edit-news/file.svg" alt="" />
                <img v-else class="color-red" src="/image/edit-news/file-error.svg" alt="error" />
            </div>
            <p v-if="getErrors?.file" class="error-text">
                {{ getErrors?.file }}
            </p>
            <div class="policy">
                <p class="policy__text">
                    Нажимая на кнопку «Отправить», я соглашаюсь с
                    <span>
                        <a
                            href="/documents/user_consultation_it.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            политикой обработки персональных данных</a
                        ></span
                    >
                </p>
            </div>
            <div class="btns-wrapper">
                <BtnBackgroud class="w-fit" emit-name="action" @action="submit()">
                    {{ pageType ? 'Сохранить' : 'Отправить' }}
                </BtnBackgroud>
                <BtnComponent class="cancel-btn" emit-name="action" @action="$router.go(-1)"
                    >Отменить</BtnComponent
                >
            </div>
            <div v-if="getIsSuccses" style="color: green">
                {{ pageType ? 'Статья успешно сохранена' : 'Статья успешно добавлена' }}
            </div>
        </template>
        <template v-if="getArticleAccess === 'completed_profile'">
            <div class="flex flex-col gap-4">
                <h2 class="edit__empty-profile">Для добавления статьи заполните профиль</h2>
            </div>
            <BtnComponent emit-name="action" class="w-fit" @action="$router.push('/lk/profile')">
                Перейти в профиль
            </BtnComponent>
        </template>
        <template v-if="getArticleAccess === 'login'">
            <div class="flex flex-col gap-4">
                <h2 class="edit__empty-profile">Для добавления статьи авторизуйтесь</h2>
            </div>
            <BtnComponent emit-name="action" class="w-fit" @action="$router.push('/auth/login')">
                Авторизоваться
            </BtnComponent>
        </template>
        <Teleport to="body">
            <Loader v-if="!isLoad" />
        </Teleport>
    </div>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import DropdownComponent from '../dropdown/DropdownComponent.vue'
import Loader from '@/components/loader/Loader.vue'
import coreTranslations from 'ckeditor5/translations/ru.js'
import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    Undo,
    FontSize,
    FontColor,
    Heading,
    FontBackgroundColor,
    List,
    ListProperties,
    Image,
    PictureEditing,
    ImageUpload,
    CKBox,
    CKBoxImageEdit,
    CKBoxEditing,
    LinkEditing,
    CloudServices,
    Base64UploadAdapter,
    ImageTextAlternative,
    ImageToolbar,
    ImageResize,
    ImageStyle
} from 'ckeditor5'
import 'ckeditor5/ckeditor5.css'
import { useNewsStore } from '@/stores/newsStore'
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router'
import BtnComponent from '../btns/BtnComponent.vue'

const editor = ClassicEditor
const editorConfig = {
    fontSize: {
        options: [12, 14, 16, 18, 20, 22, 24]
    },
    paragraph: {
        options: {
            classes: 'article-text'
        }
    },
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageResize',
            'imageCaption',
            'imageStyle',
            '|',
            'imageStyle:block',
            'imageStyle:inline',
            'imageStyle:side'
        ]
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            {
                model: 'heading1',
                view: { name: 'h1', classes: 'article-h1' },
                title: 'Heading 1',
                class: 'ck-heading_heading1'
            },
            {
                model: 'heading2',
                view: { name: 'h2', classes: 'article-h2' },
                title: 'Heading 2',
                class: 'ck-heading_heading2'
            },
            {
                model: 'heading3',
                view: { name: 'h3', classes: 'article-h3' },
                title: 'Heading 3',
                class: 'ck-heading_heading3    '
            }
        ]
    },
    plugins: [
        Bold,
        Essentials,
        Italic,
        Mention,
        Paragraph,
        Undo,
        FontSize,
        FontColor,
        Heading,
        FontBackgroundColor,
        List,
        ListProperties,
        Image,
        PictureEditing,
        ImageUpload,
        CKBox,
        CKBoxImageEdit,
        CKBoxEditing,
        LinkEditing,
        CloudServices,
        Base64UploadAdapter,
        ImageTextAlternative,
        ImageToolbar,
        ImageResize,
        ImageStyle
    ],
    toolbar: {
        items: [
            'undo',
            'redo',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'fontsize',
            'fontcolor',
            'fontBackgroundColor',
            '|',
            'bulletedList',
            'numberedList',
            'imageUpload',
            'ckbox'
        ],
        shouldNotGroupWhenFull: true
    },
    translations: [coreTranslations]
}

const newsStore = useNewsStore()
const userStore = useUserStore()
const route = useRoute()
const pageType = ref(null)
const published = ref(false)
const publishedDisabled = ref(false)

const getTags = computed(() => {
    return newsStore.getTags
})

const getIsSuccses = computed(() => {
    return newsStore.getIsSuccses
})

const getCategory = computed(() => {
    return newsStore.getCategory
})

const getUser = computed(() => {
    return userStore.getUser
})

const getArticle = computed(() => {
    return newsStore.getNews
})

const getErrors = computed(() => {
    return newsStore.getErrors
})

const getShowPublishedBtn = computed(() => {
    if (
        pageType.value &&
        (getUser.value.role === 'ROLE_ADMIN' || getUser.value.role === 'ROLE_MODERATOR')
    ) {
        return true
    } else {
        return false
    }
})

const getArticleAccess = computed(() => {
    if (pageType.value) {
        if (getUser.value && getArticle.value) {
            if (
                (getUser.value.id === getArticle.value.author?.id ||
                    getUser.value.role === 'ROLE_ADMIN' ||
                    getUser.value.role === 'ROLE_MODERATOR') &&
                getUser.value?.completed_profile
            ) {
                return 'success'
            } else {
                return 'completed_profile'
            }
        } else {
            return 'login'
        }
    } else {
        if (getUser.value) {
            if (getUser.value?.completed_profile) {
                return 'success'
            } else {
                return 'completed_profile'
            }
        } else {
            return 'login'
        }
    }
})

const isLoad = ref(false)
const isArticleImage = ref(1)
const previewImage = ref(null)
const addInputImg = ref(null)

const getPreviewPath = computed(() => {
    if (previewImage.value.includes('base64')) {
        return previewImage.value
    }
    return import.meta.env.VITE_SERVER_URL + previewImage.value
})

const optionArticleImageDropdown = [
    { id: 1, name: 'Изображение' },
    { id: 2, name: 'Видео' }
]

const dataNews = reactive({
    id: null,
    title: null,
    annotation: null,
    category: null,
    tags: [],
    article: '',
    file: null,
    link_to_source: null,
    video: null,
    author: null
})

onMounted(() => {
    if (getTags.value.length === 0) {
        newsStore.getTagsDb()
    } else {
        isLoad.value = true
    }

    if (pageType.value) {
        if (getUser.value?.id == getArticle.value?.author?.id) {
            dataNews.author = getUser.value?.id
        } else {
            dataNews.author = getArticle.value?.author?.id
        }
    } else {
        dataNews.author = getUser.value?.id
    }

    if (route.name === 'edit-article') {
        pageType.value = 'edit'
        getArticleDb(route.params.id)
    }
})

function onFileChange(e) {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
        dataNews.file = file
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            previewImage.value = e.target.result
        }
    } else {
        previewImage.value = null
    }
}

function addImg() {
    addInputImg.value.click()
}

async function setPublished() {
    publishedDisabled.value = true
    await newsStore.setNewsPublished(dataNews.id)
    publishedDisabled.value = false
}

function submit() {
    const data = new FormData()
    for (const key in dataNews) {
        if (dataNews[key] === null) {
            data.append(key, '')
        } else {
            data.append(key, dataNews[key])
        }
    }

    if (pageType.value) {
        newsStore.editNewstDb(data)
    } else {
        newsStore.addNewstDb(data)
    }
}

function getArticleDb(id) {
    isLoad.value = false
    newsStore.getNewsDb(id)
}

watch([getTags, getCategory], () => {
    isLoad.value = true
})

watch(getArticle, () => {
    isLoad.value = true
    published.value = getArticle.value.published
    dataNews.id = getArticle.value.id
    dataNews.title = getArticle.value.title
    dataNews.annotation = getArticle.value.annotation
    dataNews.category = getArticle.value.category
    dataNews.tags = getArticle.value.tags
    dataNews.article = getArticle.value.article
    dataNews.link_to_source = getArticle.value.link_to_source
        ? getArticle.value.link_to_source
        : null

    if (getArticle.value.file) {
        previewImage.value = getArticle.value.file
    }

    if (getArticle.value.video) {
        isArticleImage.value = 2
    }
})

watch(getUser, () => {
    if (pageType.value) {
        if (getUser.value?.id == getArticle.value?.author?.id) {
            dataNews.author = getUser.value?.id
        } else {
            dataNews.author = getArticle.value?.author?.id
        }
    } else {
        dataNews.author = getUser.value?.id
    }
})

watch(isArticleImage, (newVal) => {
    dataNews.file = null
    dataNews.video = null
    previewImage.value = null
    if (pageType.value === 'edit' && newVal === 1) {
        previewImage.value = getArticle.value.file
    } else if (pageType.value === 'edit' && newVal === 2) {
        previewImage.value = null
        dataNews.video = getArticle.value.video
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

.ck-editor-wrapper {
    :deep(.ck-toolbar__items) {
        border-bottom: 2px solid #5b94ea;
        padding: 16px;
        box-sizing: border-box;
        background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
        width: 100%;
        border-radius: 32px 32px 0 0;
    }

    :deep(.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)) {
        border-radius: 0 0 32px 32px;
        height: 500px;
        padding: 10px;
        box-sizing: border-box;
        border: 2px solid #a0b1ed;
        border-top: none;
    }

    :deep(
            .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,
            .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners
        ) {
        position: relative;
    }
    :deep(.ck.ck-editor__editable_inline) {
        border-radius: 0 0 32px 32px;
        padding: 10px;
        box-sizing: border-box;
        height: 500px;
        border-top: none;
        margin: 0 4px;
    }

    .ck {
        .ck-powered-by {
            display: none;
        }

        ul,
        ol {
            padding-inline-start: 40px;
        }
    }

    &.error {
        .ck-editor {
            border: 1px solid $primary-red;
        }
    }
}

.error :deep(.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)) {
    border: 2px solid $primary-red;
}

.article-h1 {
    font-size: 40px;
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

.ck-editor-wrapper {
    :deep(.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content) {
        border: none;
    }
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
        padding: 10px 16px;

        &:hover {
            border: 2px solid #4360f8;
        }

        @media (max-width: $lg) {
            padding: 10px 16px;
        }
    }

    :deep(.dropdown-selected-text) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: $black;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        &.dropdown-selected-text--selected {
            color: $black;
        }

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
        z-index: 99;
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

.text-base {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $black;
    font-weight: 500;
}
.link {
    border: 2px solid #a0b1ed;
    border-radius: 32px;
    padding: 12px 16px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $black;

    &::placeholder {
        color: #a0b1ed;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    }

    &:hover,
    &:active,
    &:focus {
        border: 2px solid $blue-primary;
        color: $black;

        &::placeholder {
            // color: $blue-primary;
        }
    }
}

.file-dropdown {
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
            border: 2px solid $blue-primary;
            color: $blue-primary;
        }
    }
    :deep(.dropdown-icon) {
        top: 15px;
        z-index: 999;
    }
    :deep(.option-wrapper) {
        border: 2px solid #4360f8;
        border-radius: 24px;
        top: -2px;
        width: 101%;
        color: black;
    }
    :deep(.option) {
        border: none;
        border-bottom: 1px solid #4360f8;
        &:hover {
            color: #4360f8;
        }
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
        color: $black;
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
}

.file-input {
    width: max-content;
    cursor: pointer;

    &:hover {
        & span {
            color: $blue-primary;
        }
    }
    & span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #a0b1ed;
    }
}

.input-video {
    &:hover,
    &:active,
    &:focus {
        color: $blue-primary;

        &::placeholder {
            color: $blue-primary;
        }
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

.input-annotation-textarea {
    resize: none;
    overflow: hidden;
    outline: none;
    border: 2px solid #a0b1ed;

    &:hover,
    &:active,
    &:focus {
        color: $black;
        border: 2px solid $blue-primary;
        outline: none;
    }

    @media (max-width: $lg) {
        padding: 10px 16px;
    }
}
.btns-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
    }
}
.cancel-btn {
    @media (max-width: $sm) {
        width: 100%;
    }
}
</style>
