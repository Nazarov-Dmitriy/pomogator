<template>
    <div class="flex flex-col p-10 w-full gap-4">
        <template v-if="!isLoad">
            <Loader />              
        </template>
        <template v-else>
            <h1 class="font-medium text-2xl">
                Добавить новость
            </h1>
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
                        :options="getCategory"
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
                        :options="getTags"
                        :multi="true"
                        :placeholder="'Выбирите теги'"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <label
                    for=""
                    class="text-base"
                >Текст статьи</label>
                <ckeditor
                    v-model="dataNews.article"
                    :editor="editor"
                    :config="editorConfig"
                />
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
        </template>
    </div>
</template>
<script setup>
import BtnBackgroud from '../btns/BtnBackgroud.vue';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import DropdownComponent from '../dropdown/DropdownComponent.vue';
import coreTranslations from 'ckeditor5/translations/ru.js';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, FontSize, FontColor, Heading, FontBackgroundColor,  List,  ListProperties,   } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useNewsStore } from '@/stores/newsStore'; 
import Loader from '@/components/loader/Loader.vue';

const editor = ClassicEditor
const editorConfig = {
    fontSize: {
        options: [
            12,
            14,
            16,
            18,
            20,
            22,
            24
        ]
    },
    paragraph:{
        options:{
            classes: 'article-text'
        }
    },
 
    heading: {
        options: [
            { model: 'paragraph',  title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: { name: 'h1', classes: 'article-h1' }, title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: { name: 'h2', classes: 'article-h2' }, title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: { name: 'h3', classes: 'article-h3' }, title: 'Heading 3', class: 'ck-heading_heading3    ' }
        ]
    },
    plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo, FontSize, FontColor, Heading, FontBackgroundColor, List, ListProperties],
    toolbar: {
        items: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'fontsize', 'fontcolor', 'fontBackgroundColor', '|', 'bulletedList', 'numberedList'],
        shouldNotGroupWhenFull: true,
    },
    translations: [
        coreTranslations,
    ],
}

const newsStore = useNewsStore();

const getTags = computed(() => {
    return newsStore.getTags;
})

const getCategory = computed(() => {
    return newsStore.getCategory;
})

const isLoad = ref(false);

const dataNews = reactive({
    title: 'Статья 1',
    subtitle: 'ПОдзоголовок статьи 1',
    tags: [1, 2],
    article: `<p>Информационные технологии играют значительную роль в повышении качества образования в области химии. Они предоставляют новые возможности для обучения, развивают личность учащихся и интенсифицируют процесс обучения.</p><p>&nbsp;</p><p>Использование обучающих дисков и компьютерных технологий позволяет студентам осваивать сложные темы, такие как химическая связь и электролиз. Демонстрационный химический эксперимент остаётся важным средством для поддержания интереса к предмету, однако некоторые опасные опыты невозможно провести в аудитории.</p><p>&nbsp;</p><p>Использование обучающих дисков и компьютерных технологий позволяет студентам осваивать сложные темы, такие как химическая связь и электролиз. Демонстрационный химический эксперимент остаётся важным средством для поддержания интереса к предмету, однако некоторые опасные опыты невозможно провести в аудитории.</p><p>&nbsp;</p><p>Применение информационных технологий в химии способствует повышению мотивации студентов к исследовательской деятельности и улучшению образовательного процесса в целом.</p><p>&nbsp;</p><p>Информационные технологии открывают новые горизонты для изучения химии. Они позволяют проводить виртуальные эксперименты, моделировать химические процессы и изучать свойства веществ в безопасных условиях. Это делает обучение более доступным и интересным для студентов разных возрастов и уровней подготовки.</p><p>&nbsp;</p><p>Использование информационных технологий в химии способствует развитию критического мышления у студентов. Они учатся анализировать информацию, делать выводы и применять полученные знания на практике. Это помогает им стать более уверенными и успешными в будущей карьере.</p><p>&nbsp;</p><p>Информационные технологии также способствуют интернационализации образования. Они позволяют студентам общаться с коллегами из других стран, участвовать в международных проектах и обмениваться опытом. Это расширяет кругозор студентов и помогает им стать более открытыми и толерантными людьми.</p><p>&nbsp;</p><p>В заключение, информационные технологии играют важную роль в современном образовании. Они делают обучение химии более эффективным, интересным и доступным для всех. Благодаря им студенты получают возможность изучать химию на новом уровне и готовиться к успешной карьере в будущем.</p>`,
    category: 1,
    file: null,
    respone: null
})

onMounted(()=>{
    newsStore.getTagsDb();
    newsStore.getCategoryDb();
})

function onFileChange (e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    dataNews.file = files[0]
}

function result (response){
    console.log(response);
}

async function  submit () {
    const data = new FormData();
    for (const key in dataNews) {
        data.append(key, dataNews[key])
    }
    await newsStore.addNewstDb(data, result )
}



watch([ getTags, getCategory], () => {
    isLoad.value = true
})



</script>
<style lang="scss">
.news__textarea {
    height: 500px;
    border: 1px solid $blue;
    border-radius: 10px;
    padding: 10px;
    resize: none;
}

.ck {
    .ck-powered-by {
        display: none;
    }

    ul, ol {
        padding-inline-start: 40px;
    }
}

.article-h1{
    font-size: 40px;
}
</style>