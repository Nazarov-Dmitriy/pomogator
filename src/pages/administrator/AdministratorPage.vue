<template>
    <MainLayots>
        <MyData :default-select="1" @select="updateSelectedComponent" />
        <div v-if="selectedComponent">
            <component :is="selectedComponent" />
        </div>
    </MainLayots>
</template>
<script setup>
import MyData from '@/components/administarator/MyData.vue'
import ReviewsComponent from '@/components/administarator/reviews/ReviewsComponent.vue'
import UsersComponent from '@/components/administarator/users/UsersComponent.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { ref } from 'vue'

const componentsMap = {
    reviews: ReviewsComponent,
    users: UsersComponent
}

const selectedComponent = ref(null)

const updateSelectedComponent = (selection) => {
    selectedComponent.value = componentsMap[selection] || null
}
</script>
<style lang="scss"></style>
