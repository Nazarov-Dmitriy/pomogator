<template>
    <MainLayots>
        <MyData :default-select="1" @select="updateSelectedComponent" />
        <div v-if="selectedComponent">
            <component :is="selectedComponent" />
        </div>
    </MainLayots>
</template>
<script setup>
import ArticleList from '@/components/administarator/article/ArticleList.vue'
import MyData from '@/components/administarator/MyData.vue'
import ReviewsComponent from '@/components/administarator/reviews/ReviewsComponent.vue'
import UsersComponent from '@/components/administarator/users/UsersComponent.vue'
import WebinarList from '@/components/administarator/webinar/WebinarList.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { ref } from 'vue'

const componentsMap = {
    reviews: ReviewsComponent,
    users: UsersComponent,
    article: ArticleList,
    webinar: WebinarList
}

const selectedComponent = ref(null)

const updateSelectedComponent = (selection) => {
    selectedComponent.value = componentsMap[selection] || null
}
</script>
<style lang="scss"></style>
