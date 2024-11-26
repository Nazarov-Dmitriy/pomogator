<template>
    <section class="reviews__contaner">
        <div class="flex gap-2">
            <div class="flex gap-2">
                <input id="one" v-model="type" type="radio" value="add" />
                <label for="one">Добавить</label>
            </div>
            <div class="flex gap-2">
                <input id="two" v-model="type" type="radio" value="edit" />
                <label for="two">Редактировать</label>
            </div>
        </div>
        <AddReviewsComponent v-if="type === 'add'" />
        <EditReviewsComponent v-else />
    </section>
</template>
<script setup>
import { ref } from 'vue'
import AddReviewsComponent from './AddReviewsComponent.vue'
import EditReviewsComponent from './EditReviewsComponent.vue'

const type = ref('add')
</script>
<style lang="scss" scoped>
.reviews__contaner {
    padding: 20px 80px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: $lg) {
        padding: 20px 40px;
    }
    @media (max-width: $sm) {
        padding: 16px;
    }
}
</style>
