<template>
    <div class="edit flex flex-col p-10 w-full gap-4">
        <template v-if="!isLoad">
            <Loader />
        </template>
        <template v-else-if="getUser?.completed_profile">
            <h1 class="font-medium text-2xl">Добавить новость</h1>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="title" class="field__label" :class="{ error: getErrors?.title }"
                        >Заголовк материала</label
                    >
                    <label for="" class="text-base"></label>
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
                    <input
                        id="annotation"
                        v-model="dataNews.annotation"
                        placeholder="Краткое описание материала"
                        type="text"
                        class="input-annotation input !bg-none w-full p-2 rounded-md"
                        :class="{ error: getErrors?.annotation }"
                    />
                    <p v-if="getErrors?.annotation" class="error-text">
                        {{ getErrors?.annotation }}
                    </p>
                </div>
                <div class="category flex justify-between items-center gap-4">
                    <div class="flex flex-col gap-2 w-full">
                        <label class="field__label" :class="{ error: getErrors?.category }"
                            >Категория</label
                        >
                        <DropdownComponent
                            v-model:modelValue="dataNews.category"
                            :options="getCategory"
                            :placeholder="'Выбирите категорию'"
                            :error="!!getErrors?.category"
                        />
                        <p v-if="getErrors?.category" class="error-text">
                            {{ getErrors?.category }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label class="field__label" :class="{ error: getErrors?.tags }">Теги</label>
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
                    <label for="" class="text-base">Теги</label>
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
                    <label for="" class="text-base hidden">Картинка</label>
                    <input
                        type="file"
                        class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600 hidden"
                        @change="onFileChange"
                        ref="addInputImg"
                    />

                    <p v-if="getErrors?.file" class="error-text">
                        {{ getErrors?.file }}
                    </p>
                </div>
                <div v-else class="video-input flex flex-col gap-2 w-full">
                    <label for="video" class="field__label" :class="{ error: getErrors?.file }"
                        >Ссылка на видеоматериал</label
                    >
                    <input
                        id="video"
                        v-model="dataNews.video"
                        type="text"
                        class="input !bg-none w-full p-2 rounded-md"
                        placeholder="видео_материал.ру"
                        :class="{ error: getErrors?.file }"
                    />
                    <p v-if="getErrors?.file" class="error-text">
                        {{ getErrors?.file }}
                    </p>
                </div>
            </div>
            <div
                v-if="isArticleImage === 1"
                @click="addImg"
                class="file-input flex gap-2 items-center"
            >
                <span>Прикрепить файл</span>
                <img src="/image/edit-news/file.svg" alt="" />
            </div>

            <div class="policy">
                <p class="policy__text">
                    Нажимая на кнопку «Отправить», я соглашаюсь с
                    <span>политикой обработки персональных данных</span>
                </p>
            </div>
            <BtnBackgroud class="w-fit" emit-name="action" @action="submit()">
                {{ pageType ? 'Сохранить' : 'Отправить' }}
            </BtnBackgroud>
            <div v-if="getIsSuccses" style="color: green">
                {{ pageType ? 'Статья успешно сохранена' : 'Статья успешно добавлена' }}
            </div>
        </template>
        <template v-else>
            <div class="flex flex-col gap-4">
                <h2 class="edit__empty-profile">Для добавление статьи заполните профиль</h2>
            </div>
            <BtnComponent emit-name="action" class="" @action="$router.push('/lk/profile')">
                Перейти в профиль
            </BtnComponent>
        </template>
    </div>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import DropdownComponent from '../dropdown/DropdownComponent.vue'
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
    ListProperties
} from 'ckeditor5'
import 'ckeditor5/ckeditor5.css'
import { useNewsStore } from '@/stores/newsStore'
import { useUserStore } from '@/stores/userStore'
import Loader from '@/components/loader/Loader.vue'
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
        ListProperties
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
            'numberedList'
        ],
        shouldNotGroupWhenFull: true
    },
    translations: [coreTranslations]
}

const newsStore = useNewsStore()
const userStore = useUserStore()
const route = useRoute()
const pageType = ref(null)

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
    newsStore.getTagsDb()
    newsStore.getCategoryDb()
    dataNews.author = getUser.value?.id
    if (route.name === 'edit-article') {
        pageType.value = 'edit'
        getArticleDb(route.params.id)
    }
})

function onFileChange(e) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
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

isLoad.value = true

watch([getTags, getCategory], () => {
    isLoad.value = true
})

watch(getArticle, () => {
    isLoad.value = true
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
    dataNews.author = getUser.value?.id
})

watch(isArticleImage, (newVal) => {
    dataNews.file = null
    dataNews.video = null
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
    @media (max-width: $sm) {
        padding: 32px 16px;
        box-sizing: border-box;
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
        padding: 0 0 700px 0;
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
        padding: 16px 0 700px 16px;
        box-sizing: border-box;
        transform: scale(0.99);

        @media (max-width: $sm) {
            transform: scale(0.97) translate(0, -11px);
        }
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

.article-h1 {
    font-size: 40px;
}

.preview-img {
    width: 300px;
    height: 300px;

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

.input-annotation {
    padding: 12px 16px 100px 12px;
}

.category {
    :deep(.dashboard__dropdown-wrapper) {
        max-width: 100%;
        width: 100%;
        border: 2px solid #a0b1ed;
        border-radius: 32px;
        padding: 12px 16px;
    }
    :deep(.dropdown-selected-text) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #a0b1ed;
    }
    :deep(.option-wrapper) {
        border: 2px solid #4360f8;
        border-radius: 24px;
        padding: 12px 0px;
        top: 0;
    }

    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
    }
}

.file-wrapper {
    max-width: 50%;
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
        padding: 12px 16px;
        box-sizing: border-box;
    }

    :deep(.option-wrapper) {
        border: 2px solid #4360f8;
        border-radius: 24px;
        padding: 12px 0px;
        top: 0;
    }
    :deep(.dropdown-selected-text) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #a0b1ed;
    }
}

.file-input {
    & span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #4360f8;
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
</style>
