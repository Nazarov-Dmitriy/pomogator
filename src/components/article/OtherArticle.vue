<template>
    <div class="article__other">
        <div class="article__other-list">
            <div
                v-for="item in props.otherAtricle"
                :key="item.id"
                class="article__other-item"
                @click="article(item.id, item.trend)"
            >
                <img
                    :src="item.img"
                    alt=""
                    class="article__other-img"
                >
                <div class="article__other-contnent">
                    <div class="article__other-tags">
                        <p
                            v-for="el in item.tags"
                            :key="el"
                            class="article__other-tag"
                        >
                            #{{ el }}
                        </p>
                    </div>
                    <p class="article__other-title">
                        {{ item.title }}
                    </p>
                    <p class="article__other-date">
                        {{ item.publication_date }}
                    </p>
                </div>
            </div>
            <ArticleSubcribe />
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import ArticleSubcribe from './ArticleSubcribe.vue';
const router = useRouter()

const props = defineProps({
    otherAtricle: {
        type: Array,
        default: () => []
    },
    position: {
        type: String,
        default: ''
    }
})

function article (id, trend){
    router.push({path :`/trend/${trend}/${id}`})
}

</script>
<style lang="scss">
.article__other {
    flex: 0 0 308px;
}

.article__other-list {
    display: flex;
    gap: 24px;
    flex-direction: column;
}

.article__other-item {
    display: flex;
    flex-direction: column;
    border: 2px solid $blue;
    border-radius: 32px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        border: 2px solid $blue-primary;

        .article__other-tag {
            color: $blue-primary;
        }

        .article__other-title {
            color: $blue-primary;
        }

        .article__other-date {
            color: $blue-primary;
        }
    }
}

.article__other-img {
    width: 100%;
    aspect-ratio: 3 / 1;
    object-fit: cover;
}

.article__other-contnent {
    padding: 8px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.article__other-tags {
    display: flex;
    gap: 16px;
}

.article__other-tag {
    font-size: 16px;
    line-height: 24px;
    color: $blue;
}

.article__other-title {
    font-size: 24px;
    line-height: 32px;
    color: black;
}

.article__other-date {
    line-height: 24px;
    color: $blue;
}
</style>