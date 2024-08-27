<template>
    <div v-for="card in props.cardData" :key="card.id" class="card">
        <slot name="header">
            <!-- <div class="card__header">
            <div class="card__header-btn" @click="activeEmit">
                <img src="/public/icons/cabinet/change.svg" alt="" />
                <span>редактировать</span>
            </div>
            <div class="card__header-btn" @click="activeEmit(card.id)">
                <span>удалить</span>
                <img src="../../../assets/images/cabinet/cabinetProfile/bucket.png" alt="" />
            </div>
        </div> -->
        </slot>
        <div class="card__main">
            <img :src="card.cardImg" alt="" class="card__main-img" />
            <div class="card__main-tags-wrapper">
                <span v-for="(tag, index) in card.cardTags" :key="index">{{ tag }}</span>
            </div>
            <h2 class="card__main-title">{{ card.cardTitle }}</h2>
        </div>
        <div class="card__footer">
            <div class="card__footer-btns">
                <div class="card__footer-btn">
                    <img src="/src/assets/icons/article/like.svg" alt="" />
                    <span>{{ card.cardLikes }}</span>
                </div>
                <div class="card__footer-btn">
                    <img src="/src/assets/icons/article/show.svg" alt="" />
                    <span>{{ card.cardShow }}</span>
                </div>
            </div>
            <p class="card__footer-date">{{ card.cardDate }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardData: {
        type: Array,
        default: () => []
    },
    emitName: {
        type: String,
        default: null
    }
})

const emit = defineEmits(['deleteCard', 'changeCard'])

function activeEmit(id) {
    emit(props.emitName, id)
}
</script>

<style lang="scss" scoped>
.card {
    border: 2px solid #5b94ea;
    border-radius: 32px;
    max-width: 632px;
    width: 100%;
    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: auto;
}
.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
}
.card__header-btn {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        cursor: pointer;
    }

    &:nth-child(1) {
        color: #5b94ea;
    }
    &:nth-child(2) {
        color: #f84343;
        img {
            width: 24px;
        }
    }
}
.card__main {
    display: flex;
    flex-direction: column;
}
.card__main-img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    max-height: 213px;
    height: 100%;
}
.card__main-tags-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    padding: 16px;
    box-sizing: border-box;
    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #5b94ea;
    }
}
.card__main-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 133%;
    color: #060c1f;
    padding: 16px;
    box-sizing: border-box;
}
.card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
}
.card__footer-btns {
    display: flex;
    gap: 40px;
}
.card__footer-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #5b94ea;
    }
}
.card__footer-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #5b94ea;
}
</style>
