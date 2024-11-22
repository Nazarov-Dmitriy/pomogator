<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <label for="title" class="field__label" :class="{ error: getErrors?.author }"
                    >Автор</label
                >
                <input
                    id="title"
                    v-model="reviews.author"
                    placeholder="Иванов Михаил Дмитриевич"
                    type="text"
                    class="input !bg-none w-full p-2 rounded-md"
                    :class="{ error: getErrors?.author }"
                />
                <p v-if="getErrors?.author" class="error-text">
                    {{ getErrors?.author }}
                </p>
            </div>
            <label for="description" class="field__label" :class="{ error: getErrors?.description }"
                >Отзыв</label
            >
            <textarea
                id="description"
                v-model="reviews.description"
                placeholder="Отзыв"
                type="text"
                class="input-annotation input-annotation-textarea input !bg-none w-full p-2 rounded-md"
                :class="{ error: getErrors?.annotation }"
            />
            <p v-if="getErrors?.description" class="error-text">
                {{ getErrors?.description }}
            </p>
        </div>

        <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <label
                    for="date"
                    class="field__label flex items-center gap-1"
                    :class="{ error: getErrors?.date }"
                    >Дата
                </label>
                <VueDatePicker
                    id="date"
                    v-model="reviews.date"
                    placeholder="дд.мм.гггг"
                    locale="ru"
                    class="data-picker"
                    select-text="Выбрать"
                    cancel-text="Закрыть"
                    :enable-time-picker="false"
                    auto-apply
                    model-type="yyyy-MM-dd"
                    :class="{ error: getErrors?.date }"
                    format="dd.MM.yyyy"
                ></VueDatePicker>
                <p v-if="getErrors?.date" class="error-text">Поле не должно быть пустым</p>
            </div>
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
            <span
                class="shrink-0"
                :class="getErrors?.preview_img || reviewsError.file ? 'error-text' : ''"
                >Прикрепить файл</span
            >
            <img
                v-if="!getErrors?.preview_img && !reviewsError.file"
                class="color-red"
                src="/image/edit-news/file.svg"
                alt=""
            />
            <img v-else class="color-red" src="/image/edit-news/file-error.svg" alt="error" />
            <span v-if="reviews.file" class="truncate">{{ reviews.file.name }}</span>
        </div>
        <BtnComponent emit-name="action" class="w-fit" @action="save"> Сохранить </BtnComponent>
        <div v-if="getSuccses" style="color: green">Отзыв сохранен</div>
    </div>
</template>
<script setup>
import BtnComponent from '@/components/btns/BtnComponent.vue'
import { useReviewsStore } from '@/stores/reviewsStore'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, reactive, ref, watch } from 'vue'

const reviewsStore = useReviewsStore()
const addInputImg = ref(null)

const getSuccses = computed(() => {
    return reviewsStore.getSuccess
})

const reviews = reactive({
    description: null,
    date: null,
    author: null,
    file: null
})

const reviewsError = reactive({
    file: null,
    date: null
})

function addImg() {
    addInputImg.value.click()
}

function save() {
    const data = new FormData()
    for (const key in reviews) {
        if (reviews[key] === null) {
            data.append(key, '')
        } else {
            data.append(key, reviews[key])
        }
    }
    reviewsStore.addReviews(data)
    validate()
}

function validate() {
    !reviews.date_translation ? (reviewsError.date = true) : (reviewsError.date = false)
    !reviews.file ? (reviewsError.file = true) : (reviewsError.file = false)
}

function onFileChange(e) {
    const file = e.target.files[0]

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            reviews.file = file
        }
    } else {
        reviews.file = null
    }
}

watch(getSuccses, () => {
    for (let key in reviews) {
        reviews[key] = null
    }
})
</script>

<style lang="scss" scoped>
.input-annotation {
    padding: 12px 16px 100px 12px;
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
