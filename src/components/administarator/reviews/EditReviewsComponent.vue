<template>
    <div class="flex flex-col relative">
        <div class="reviews__cards">
            <div v-for="card in getReviewsList" :key="card.id" class="reviews__card">
                <div class="reviews__card-header">
                    <div class="reviews__card-header-person">
                        <div class="relative">
                            <div class="reviews__card-header-person-img-wrapper relative">
                                <template v-if="card.id !== edit">
                                    <img
                                        :src="getPath(card.filePath)"
                                        alt="img"
                                        :class="card.id === edit && 'cursor-pointer'"
                                        @click="card.id === edit ? editImage() : ''"
                                    />
                                </template>
                                <template v-else>
                                    <img
                                        v-if="!getPreviewPath"
                                        :src="getPath(card.filePath)"
                                        alt="img"
                                        :class="card.id === edit && 'cursor-pointer'"
                                        @click="card.id === edit ? editImage() : ''"
                                    />
                                    <img
                                        v-else
                                        :src="getPreviewPath"
                                        alt="img"
                                        :class="card.id === edit && 'cursor-pointer'"
                                        @click="card.id === edit ? editImage() : ''"
                                    />
                                </template>
                            </div>
                            <img
                                v-if="card.id === edit"
                                src="@/assets/images/cabinet/cabinetProfile/edit-white.svg"
                                alt="edit"
                                class="absolute top-1 right-1 !w-5 !h-5"
                                @click="card.id === edit ? editImage() : ''"
                            />
                        </div>
                        <div class="reviews__header-info">
                            <div class="card-top gap-4 !justify-end">
                                <button
                                    class="card-top__edit p-2 px-4 bg-white rounded-xl"
                                    @click="card.id !== edit ? editReviews(card) : saveReviews()"
                                >
                                    <p>
                                        {{ card.id === edit ? 'сохранить' : 'редактировать' }}
                                    </p>
                                    <img
                                        src="@/assets/images/cabinet/cabinetProfile/edit.svg"
                                        alt="edit"
                                        class="w-5 h-5"
                                    />
                                </button>
                                <button
                                    v-if="card.id === edit"
                                    class="card-top__delete p-2 px-4 bg-white rounded-xl"
                                    @click="resetEditReviews"
                                >
                                    <p>Отменить</p>
                                </button>
                                <button
                                    v-if="card.id !== edit"
                                    class="card-top__delete p-2 px-4 bg-white rounded-xl"
                                    @click="toggleDialog(card.id)"
                                >
                                    <p>удалить</p>
                                    <img
                                        src="@/assets/images/cabinet/cabinetProfile/bucket.png"
                                        alt="delete"
                                        class="card-top__delete-img w-5 h-5"
                                    />
                                </button>
                            </div>
                            <input
                                v-if="card.id === edit"
                                id="title"
                                v-model="reviewsEdit.author"
                                :placeholder="card.author"
                                type="text"
                                class="input !bg-none w-full p-2 rounded-md"
                                :class="{ error: getErrors?.author }"
                            />
                            <p v-else class="reviews__header-person-text">
                                {{ card.author }}
                            </p>

                            <div class="reviews__card-header-date">
                                <VueDatePicker
                                    v-if="card.id === edit"
                                    id="date"
                                    v-model="reviewsEdit.date"
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
                                <span v-else>{{ card.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reviews__card-footer m-2">
                    <textarea
                        v-if="card.id === edit"
                        v-model="reviewsEdit.description"
                        type="text"
                        class="input-annotation input-annotation-textarea input !bg-none overflow-hidden resize-none w-full p-2 rounded-md w-full box-border max-w-full min-h-[200px]"
                        :class="{ error: getErrors?.annotation }"
                    />
                    <p v-else class="reviews__card-footer-text truncate">
                        {{ card.description }}
                    </p>
                </div>
            </div>
        </div>
        <input
            ref="editImg"
            type="file"
            class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600 hidden"
            @change="onFileChange"
        />
        <Teleport to="body">
            <ModalConfirm :show="modalShow" @remove="removeReviews" @close="toggleDialog(null)" />
        </Teleport>
        <Teleport to="body">
            <Loader v-if="!isLoad" />
        </Teleport>
    </div>
</template>
<script setup>
import Loader from '@/components/loader/Loader.vue'
import { useReviewsStore } from '@/stores/reviewsStore'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import ModalConfirm from './ModalConfirm.vue'

const reviewsStore = useReviewsStore()
const isLoad = ref(false)
const edit = ref(null)
const modalShow = ref(false)
const removeId = ref(null)
const previewImage = ref(null)

const getReviewsList = computed(() => {
    return reviewsStore.getReviewsList
})

const getSuccess = computed(() => {
    return reviewsStore.getSuccess
})

function toggleDialog(id) {
    modalShow.value = !modalShow.value
    id ? (removeId.value = id) : (removeId.value = null)
}

function removeReviews() {
    modalShow.value = !modalShow.value
    reviewsStore.removeReviews(removeId.value)
}

const reviewsEdit = reactive({
    description: null,
    date: null,
    author: null,
    file: null
})
const editImg = ref(null)

const getPreviewPath = computed(() => {
    if (previewImage.value?.includes('base64')) {
        return previewImage.value
    }
    return null
})

onMounted(() => {
    reviewsStore.getListDb()
})

function getPath(img) {
    return import.meta.env.VITE_SERVER_URL + img
}
function saveReviews() {
    const data = new FormData()
    for (const key in reviewsEdit) {
        if (reviewsEdit[key] === null) {
            data.append(key, '')
        } else {
            data.append(key, reviewsEdit[key])
        }
    }
    data.append('id', edit.value)
    reviewsStore.ediReviews(data)
}

function editReviews(item) {
    let date = item.date.split('-')
    edit.value = item.id
    reviewsEdit.description = item.description
    reviewsEdit.date = `${date[2]}-${date[1]}-${date[0]}`
    reviewsEdit.author = item.author
}

function resetEditReviews() {
    edit.value = null
    previewImage.value = null
    reviewsEdit.description = null
    reviewsEdit.date = null
    reviewsEdit.author = null
    reviewsEdit.file = null
}

function editImage() {
    editImg.value.click()
}

function onFileChange(e) {
    const file = e.target.files[0]
    reviewsEdit.file = file
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            previewImage.value = e.target.result
        }
    } else {
        reviewsEdit.file = null
    }
}

watch(getReviewsList, () => {
    isLoad.value = true
})

watch(getSuccess, () => {
    resetEditReviews()
    reviewsStore.getListDb()
    isLoad.value = false
})
</script>
<style lang="scss" scoped>
.reviews__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 100%;
    }
}
.reviews__card {
    border: 2px solid $blue;
    border-radius: 32px;
    min-height: 200px;
    overflow: hidden;

    @media (max-width: $sm) {
        border-radius: 32px;
    }
}
.reviews__card-header {
    display: flex;
    justify-content: space-between;
    border-radius: 0;
    padding: 2px 2px 2px 2px;
    background: $blue;
    box-sizing: border-box;

    @media (max-width: $sm) {
        padding: 8px;
        border-radius: 0;
    }
}
.reviews__card-header-person {
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: $lg) {
        gap: 8px;
    }

    @media (max-width: $sm) {
        flex-direction: column;
        align-items: start;
    }
}
.reviews__header-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.reviews__card-header-person-img-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;

    & img {
        width: 100%;
        height: 100%;
    }
}

.reviews__card-header-person-info {
    display: flex;
    gap: 16px;
}
.reviews__header-person-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 1.2;
    }
    span {
        display: block;
    }
}
.reviews__card-header-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $white;
    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 1.4;
    }
    @media (max-width: $sm) {
    }
}

.reviews__card-footer-text {
    padding: 16px;
    @media (max-width: $sm) {
        font-size: 14px;
        line-height: 20px;
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
