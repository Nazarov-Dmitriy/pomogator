<template>
    <div class="cabinet-search-panel">
        <slot name="header" />
        <div class="cabinet-search-panel__container">
            <div class="cabinet-search-panel__hashtag">
                <div
                    v-for="item in tags"
                    :key="item.id"
                    class="cabinet-search-panel__item"
                    :class="{ active: activeTags.includes(item.id) }"
                    @click="setActiveTags(item.id)"
                >
                    <span class="cabinet-search-panel__symbol">#</span>
                    <p class="cabinet-search-panel__text">
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    tags: {
        type: Array,
        default: () => []
    },
    activeTags: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['active-tags'])

function setActiveTags(id) {
    emit('active-tags', id)
}
</script>
<style lang="scss">
.cabinet-search-panel__container {
    padding: 32px 0;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    @media (max-width: $sm) {
        padding: 0 16px;
        border-bottom: none;
        gap: 16px;
    }
}

.cabinet-search-panel__hashtag {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 1 1 100%;
    gap: 16px;

    @media (max-width: $lg) {
        gap: 16px;
    }

    @media (max-width: $sm) {
        justify-content: flex-start;
    }
}

.cabinet-search-panel__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    cursor: pointer;

    &.active {
        .cabinet-search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .cabinet-search-panel__text {
            color: $blue-primary;
        }
    }

    &:hover {
        .cabinet-search-panel__symbol {
            color: $blue-primary;
            -webkit-text-fill-color: unset;
        }

        .cabinet-search-panel__text {
            color: $blue-primary;
        }
    }

    &.active:hover {
        .cabinet-search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }
    }

    &:active {
        .cabinet-search-panel__symbol {
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .cabinet-search-panel__text {
            color: $blue-primary;
        }
    }
}

.cabinet-search-panel__symbol {
    font-family: 'Kreadon-Demi';
    font-size: 30px;
    line-height: 30px;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.cabinet-search-panel__text {
    font-size: 16px;
    line-height: 24px;
    color: $black;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>
