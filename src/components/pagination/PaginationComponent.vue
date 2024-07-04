<template>
    <div
        v-if="params.totalPage > 1"
        class="pagination__container"
    >
        <ul class="pagination-list">
            <li
                class="pagination-prev"
                :class="{ 'hidden': showPrev }"
                @click="prevPage()"
            >
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.5 23L5.5 12L17.5 1"
                        stroke="#060C1F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </li>
            <li
                class="pagination-dots--left"
                :class="{ 'active': showLeftDots }"
                @click="getStartPage"
            >
                ...
            </li>
            <li
                v-for="item in params.getListPage"
                :key="item"
                class="pagination-item h3"
                :class="{ 'active': item === params.currentPage }"
                @click="setCurrentPage(item)"
            >
                {{ item }}
            </li>
            <li
                class="pagination-dots--right"
                :class="{ 'active': showRightDots }"
                @click="getEndtPage"
            >
                ...
            </li>
            <li
                class="pagination-next"
                :class="{ 'hidden': showNext }"
                @click="nextPage()"
            >
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.5 23L19.5 12L7.5 1"
                        stroke="#060C1F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, watch } from 'vue';

const props = defineProps({
    perpage: {
        type: Number,
        default: 3
    },
    data: {
        type: Array,
        default: () => []
    },
    renderList: {
        type: Array,
        default: () => []
    },
})

const emit = defineEmits(['setList'])

const params = reactive({
    totalPage: 0,
    perPage: 3,
    currentPage: 1,
    showCountPage: 3,
    rangeCountPage: [],
    content: [],
    listPage: []
})

const showLeftDots = computed(() => {
    return params.totalPage > params.showCountPage && params.rangeCountPage[0] !== 1 ? true : false
})

const showRightDots = computed(() => {
    return params.totalPage > params.showCountPage && params.rangeCountPage[1] !== params.totalPage ? true : false
})

const showPrev = computed(() => {
    console.log(222);
    return params.currentPage == 1 ? true : false
})

const showNext = computed(() => {
    return params.currentPage === params.totalPage  ? true : false
})

onMounted(() => {
    params.perPage = props.perpage;
    getTotalPage();
    getRangeCountPage();
    getContentPage()
})

function getTotalPage () {
    params.totalPage = Math.ceil(props.data.length / params.perPage);
}

function getRangeCountPage () {
    let start;
    let end;

    if (params.showCountPage > params.totalPage) {
        start = 1;
        end = params.totalPage;
    } else {
        let halfShowCountPage = (params.showCountPage - 1) / 2;

        if (params.currentPage - halfShowCountPage <= 0) {
            start = 1;
            end = params.showCountPage
        } else if (params.currentPage - halfShowCountPage > 0 && params.currentPage + halfShowCountPage <= params.totalPage) {
            start = params.currentPage - halfShowCountPage;
            end = params.currentPage + halfShowCountPage;
        } else {
            start = params.totalPage - params.showCountPage + 1;
            end = params.totalPage;
        }
    }
    params.rangeCountPage[0] = start;
    params.rangeCountPage[1] = end;
}


function prevPage () {
    if (params.currentPage > 1) params.currentPage--
}

function nextPage () {
    if (params.currentPage < params.totalPage) params.currentPage++;
}

function getStartPage () {
    params.currentPage = 1;
}

function getEndtPage () {
    params.currentPage = params.totalPage;
}

function getListPage () {
    let arr = [];
    for (let i = params.rangeCountPage[0]; i <= params.rangeCountPage[1]; i++) {
        arr.push(i)
    }
    params.getListPage = arr
}

function setCurrentPage (page) {
    params.currentPage = page;
}

function getContentPage () {
    params.content = [];
    const startIndex = params.perPage * (params.currentPage - 1);
    const endIndex =
        startIndex + params.perPage - 1 <= props.data.length - 1
            ? startIndex + params.perPage - 1
            : props.data.length - 1;

    for (let i = startIndex; i <= endIndex; i++) {
        params.content.push(props.data[i]);
    }
    emit('setList', params.content)
}

watch(() => params.currentPage, () => {
    getRangeCountPage();
    getContentPage()
})
watch(() => params.content, () => {
    getListPage();
}, { deep: true })

watch(()=> props.data, ()=>{
    getRangeCountPage();
    getContentPage()
})
</script>
<style lang="scss">
.pagination__container {
    display: flex;
    justify-content: center;
}

.pagination-list {
    display: flex;
    align-items: center;
    gap: 16px;
}

.pagination-prev,
.pagination-next {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.pagination-prev:hover,
.pagination-next:hover {
    border-color: $blue-primary;
}

.pagination-prev:hover svg path,
.pagination-next:hover svg path {
    stroke: $blue-primary;
}

.pagination-item {
    font-size: 20px;
    line-height: 1;
    cursor: pointer;

    &.active {
        color: $blue-primary;
        text-decoration: solid underline  $blue-primary 2px;
        text-underline-offset: 4px
    }
}

.pagination-prev {
    margin-right: 16px;
}

.pagination-next {
    margin-left: 16px;
}

.pagination-prev,
.pagination-next {
    &.hidden {
        opacity: 0;
    }
}

.pagination-dots--left,
.pagination-dots--right {
    user-select: none;
    opacity: 0;
    cursor: pointer;
    color: $black;

    &.active {
        opacity: 1;
    }
}
</style>