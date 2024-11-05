<template>
    <div>
        <div class="flex flex-col gap-2">
            {{ date }}

            <div class="flex flex-col gap-2">
                <label
                    for="date_translation"
                    class="field__label"
                    :class="{ error: getErrors?.date_translation }"
                    >Дата трансляции</label
                >
                <VueDatePicker
                    id="date_translation"
                    v-model="date"
                    placeholder="дд.мм.гггг --:--"
                    locale="ru"
                    class="data-picker"
                    select-text="Выбрать"
                    cancel-text="Закрыть"
                    auto-apply
                    :class="{ error: getErrors?.date_translation }"
                ></VueDatePicker>
                <!-- :timezone="tz" format="dd.MM.yyyy HH:mm" -->

                <p v-if="getErrors?.date_translation" class="error-text">
                    {{ getErrors?.date_translation }}
                </p>
            </div>

            <div v-if="dataWebinar.date_translation" class="tz-range-slider-wrap">
                <div>{{ getDateMoscow }}</div>
                <div>
                    <span>Timezone: {{ activeTz.tz }}</span>
                    <br />
                    <span>Offset: {{ +activeTz.offset }}</span>
                </div>
                <div>
                    <input
                        v-model="selectedTz"
                        class="tz-range-slider"
                        type="range"
                        min="0"
                        max="7"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useWebinarStore } from '@/stores/webinarStore'
import { timezones } from '@/utils/timeZone'
import { TZDate } from '@date-fns/tz'

console.log('---------')

const isLoad = ref(true)
const userStore = useUserStore()
const newsStore = useNewsStore()
const webinarStore = useWebinarStore()
const previewImage = ref(null)
const addInputImg = ref(null)
const route = useRoute()
const pageType = ref(null)
const isMscTz = ref(false)
const timezone = ref({ timezone: undefined })
const selectedTz = ref(1)

const date = ref('')
// const dataWebinar = reactive({
//     id: null,
//     title: null,
//     annotation: null,
//     tags: [],
//     preview_img: null,
//     date_translation: null,
//     video: null,
//     author: null
// })

const dataWebinar = reactive({
    id: null,
    title: 'dddddddddd',
    annotation: 'ddddddddddddd',
    tags: [1],
    preview_img: null,
    date_translation: null,
    date_translation2: null,
    date_translation3: null,
    video: 'dddddddddd',
    author: null
})
watch(selectedTz, () => {
    let new_date = new TZDate(new Date(date.value), activeTz.value.tz)
    console.log(new_date)

    dataWebinar.date_translation = new_date
    dataWebinar.date_translation2 = new_date
    dataWebinar.date_translation3 = new_date
})

watch(date, () => {
    let new_date = new TZDate(new Date(date.value), activeTz.value.tz)
    console.log(new_date)

    dataWebinar.date_translation = new_date
    dataWebinar.date_translation2 = new_date
    dataWebinar.date_translation3 = new_date
})
</script>
<style></style>
