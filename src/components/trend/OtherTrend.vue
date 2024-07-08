<template>
    <div class="other-trends">
        <h2 class="other-trends__title">
            Вам могут понравиться другие направления
        </h2>
        <div class="other-trend__list">
            <div
                v-for="item in currenList"
                :key="item.name"
                class="other-trend__item"
                @mouseover="hoverElement = item.name"
                @mouseleave="hoverElement = ''"
                @click="$router.push(`/trend/${item.name}`)"
            >
                <IconOtherTrend
                    :img="item.name"
                    :hover="item.name === hoverElement ? true : false"
                />
                <p class="other-trend__subtitle">
                    {{ item.title }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import IconOtherTrend from './IconOtherTrend.vue';

const route = useRoute()
const trend = [
    {
        title: 'Химия',
        name: 'khimiya'
    },
    {
        title: 'Физика',
        name: 'fizika'
    },
    {
        title: 'Биология',
        name: 'biologiya'
    },
    {
        title: 'Робототехника',
        name: 'robototekhnika'
    },
]
const currenTrend = ref('')
const currenList = ref([])
const hoverElement = ref('')

onMounted(() => {
    currenTrend.value = route.params.name;
    getCurrentList()
})

function getCurrentList () {
    currenList.value = [];
    currenList.value = trend.filter(el => el.name !== currenTrend.value);
}

watch(
    () => route.params.name,
    () => {
        currenTrend.value = route.params.name
        getCurrentList()
    }
)
</script>
<style lang="scss">
.other-trends {
    padding: 60px 80px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}

.other-trends__title {
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.other-trend__list {
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    gap: 16px;

    @media (max-width: $md) {
        grid-template-columns: 1fr;
    }
}

.other-trend__item {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    background: $gradient-background;
    padding: 16px;
    border-radius: 32px;
    border: 2px solid $blue;

    &:hover {
        border: 2px solid $blue-primary;
        ;

        .other-trend__subtitle {
            color: $blue-primary;
        }
    }

    @media (max-width: $xl) {
       flex-direction: column;
    }
}

.other-trend__subtitle {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: $black;
}
</style>
