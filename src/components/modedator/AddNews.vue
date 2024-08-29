<template>
    <div class="flex flex-col p-10 w-full gap-4">
        <h1 class="font-medium text-2xl">
            Добавить новость
        </h1>
        {{ dataNews }}
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Заголовк статьи</label>
                <input
                    v-model="dataNews.title"
                    type="text"
                    class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600"
                >
            </div>
            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Подзаголовк статьи</label>
                <input
                    v-model="dataNews.subtitle"
                    type="text"
                    class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600"
                >
            </div>
            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Категория</label>
                <DropdownComponent
                    v-model:modelValue="dataNews.category"
                    :options="category"
                    :placeholder="'Выбирите категорию'"
                />
            </div>
            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Теги</label>
                <DropdownComponent
                    v-model:modelValue="dataNews.tags"
                    :options="tags"
                    :multi="true"
                    :placeholder="'Выбирите теги'"
                />
            </div>
            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Текст статьи</label>
                <textarea
                    v-model="dataNews.article"
                    class="news__textarea"
                />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <label
                for=""
                class="text-base"
            >Картинка</label>
            <input
                type="file"
                class="text-base py-2 px-4 rounded-md border-solid border-2 border-indigo-600"
                @change="onFileChange"
            >
        </div>
        <BtnBackgroud
            class="w-fit"
            emit-name="action"
            @action="submit()"
        >
            Отправить
        </BtnBackgroud>
    </div>
</template>
<script setup>
import axiosR from '@/api/http';
import BtnBackgroud from '../btns/BtnBackgroud.vue';

import { reactive } from 'vue';
import DropdownComponent from '../dropdown/DropdownComponent.vue';

const category = [{ id: 1, name: 'Химия' }, { id: 2, name: 'Физика' }, { id: 3, name: 'Биология' }, { id: 4, name: 'Робототехника' }];

const tags = [
    { id: 1, name: 'Химия' },
    { id: 2, name: 'Физика' },
    { id: 3, name: 'Биология' },
    { id: 4, name: 'Робототехника' },
    { id: 5, name: 'Мастер-класс' },
    { id: 6, name: 'Практика' },
    { id: 7, name: 'Видео' },
    { id: 8, name: 'Статья' },
];

const dataNews = reactive({
    title: 'Статья 1',
    subtitle: 'ПОдзоголовок статьи 1',
    tags: [1, 2],
    article: `Как будет выглядеть страница с записью еще не точно. По идеи сертификат могут получить те,кто зарегистрировался на вебинар.  Мы с Настей обсуждали вопрос, нужна ли кнопка регистрации если пользователь заходит на запись вебинара. Теоретически она нужна только для того чтобы получить сертификат.  Решили, что этот вопрос решим  при верстве: Посмотрю позже или обсудим с Димой, когда доберемся до верстки этой страницы.`,
    category: 1,
    file: null
})

function onFileChange (e) {
    console.log(e.target.files);
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    dataNews.file = files[0]
}

function submit () {
    const data = new FormData();
    for (const key in dataNews) {
        data.append(key, dataNews[key])
    }

    axiosR.post('/news/add', data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.log(err);
        })
}



</script>
<style lang="scss">
.news__textarea {
    height: 500px;
    border: 1px solid $blue;
    border-radius: 10px;
    padding: 10px;
    resize: none;
}
</style>