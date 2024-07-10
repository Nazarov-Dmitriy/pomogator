<template>
    <div
        class="article__other"
        :class="{ 'main': position == 'main' }"
    >
        <h2
            v-if="position == 'main'"
            class="article__other-title"
        >
            Вам может понравиться
        </h2>
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
                    <p class="article__other-subtitle">
                        {{ item.title }}
                    </p>
                    <p class="article__other-date">
                        {{ item.publication_date }}
                    </p>
                </div>
            </div>
            <ArticleSubcribe v-if="position !== 'main'" />
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

function article (id, trend) {
    router.push({ path: `/trend/${trend}/${id}` })
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
    background: #fff;

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

.article__other-subtitle {
    font-size: 24px;
    line-height: 32px;
    color: black;
}

.article__other-date {
    line-height: 24px;
    color: $blue;
}

.article__other.main {
    display: flex;
    gap: 32px;
    flex-direction: column;
    padding: 60px 80px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }


    .article__other-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @media (max-width: $xxl) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: $lg) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: $md) {
            grid-template-columns: 1fr;
        }
    }

    .article__other-item {
        @media (max-width: $xxl) {
            &:nth-last-child(1) {
                display: none;
            }
        }

        @media (max-width: $lg) {
            &:nth-last-child(1) {
                display: block;
            }
        }

        @media (max-width: $md) {
            &:nth-last-child(1) {
                display: none;
            }
        }
    }

    .article__other-contnent {
        flex-grow: 1;
    }

    .article__other-subtitle {
        flex-grow: 1;

        @media (max-width: $xl) {
            font-size: 20px;
            line-height: 24px;
        }
    }

    .article__other-date {
        @media (max-width: $xl) {
            font-size: 14px;
            line-height: 20px;
        }
    }

    .article__other-tag {
        @media (max-width: $xl) {
            font-size: 14px;
            line-height: 20px;
        }
    }

    .article__other-title {
        font-family: "Kreadon-Demi";
        font-size: 36px;
        line-height: 42px;
        color: $blue-primary;

        @media (max-width: $lg) {
            font-size: 32px;
            line-height: 40px;
        }
    }
}
</style>