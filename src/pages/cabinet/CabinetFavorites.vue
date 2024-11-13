<template>
    <div class="favorite">
        <FavoriteComponent />
    </div>
</template>
<script setup>
import FavoriteComponent from '@/components/cabinet/favorites/FavoriteComponent.vue'
</script>
<style scoped lang="scss">
.favorite{
    :deep(.card-date){
        text-align: right;
    }
    :deep(.card-btns){
        @media(max-width: $lg){
            gap: 16px;
        }
    }
}
</style>
