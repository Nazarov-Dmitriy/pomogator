<template>
    <div>
        <MainLayots>
            <div v-if="!hiddenBtns" class="btn-group flex gap-4">
                <div class="flex gap-2">
                    <input id="one" v-model="type" type="radio" value="article" />
                    <label for="one">Статья</label>
                </div>
                <div class="flex gap-2">
                    <input id="two" v-model="type" type="radio" value="webinar" />
                    <label for="two">Вебинар</label>
                </div>
            </div>
            <EditNews v-if="type === 'article'" />
            <EditWebinar v-else />
        </MainLayots>
    </div>
</template>
<script setup>
import EditNews from '@/components/article/EditNews.vue'
import EditWebinar from '@/components/article/EditWebinar.vue'
import MainLayots from '@/layouts/MainLayots.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const type = ref('article')
const hiddenBtns = ref(false)
const route = useRoute()

onMounted(() => {
    if (route.name === 'edit-article') {
        hiddenBtns.value = true
    } else if (route.name === 'edit-webinar') {
        type.value = 'webinar'
        hiddenBtns.value = true
    }
})
</script>
<style lang="scss">
.btn-group {
    padding: 16px 60px 0 60px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 16px 40px 0 40px;
    }

    @media (max-width: $sm) {
        padding: 16px 16px 0;
    }
}
</style>
