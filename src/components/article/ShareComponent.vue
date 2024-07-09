<template>
    <div
        class="share"
        @click="setShow(!showMenu)"
    >
        <p class="share__text">
            Поделиться
        </p>  
        <svg
            class="share-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <linearGradient
                id="myGradientShare"
                gradientTransform="rotate(45)"
            >
                <stop
                    offset="30%"
                    stop-color="#F12424"
                />
                <stop
                    offset="100%"
                    stop-color="#4360F8"
                />
            </linearGradient>
            <path
                d="M22 11.9333L14.2222 4V8.53333C6.44444 9.66667 3.11111 15.3333 2 21C4.77778 17.0333 8.66667 15.22 14.2222 15.22V19.8667L22 11.9333Z"
                fill="#5B94EA"
            />
        </svg>


        <div
            v-if="showMenu"
            ref="menu"
            v-esc="() => setShow(false)"
            class="share-menu"
        >
            <ul class="share__list">
                <li class="share__item">
                    <a
                        :href="getTelgramLink"
                        target="_blank"
                        class="share__link"
                    >
                        <img
                            src="@/assets/icons/social/tg.svg"
                            alt="telegram"
                            class="share-icon"
                        >
                        <p class="share__link-text">Telegram</p>
                    </a>
                </li>
                <li class="share__item">
                    <a
                        :href="getVkLink"
                        target="_blank"
                        class="share__link"
                    >
                        <img
                            src="@/assets/icons/social/vk.svg"
                            alt="vcontakte"
                            class="share-icon"
                        >
                        <p class="share__link-text">вконтакте</p>
                    </a>
                </li>
                <li
                    class="share__item"
                    @click="copyText($event)"
                >
                    <img
                        src="@/assets/icons/article/copy.svg"
                        alt="copy-link"
                        class="share-icon"
                    >
                    <p class="share__link-text">
                        Копировать ссылку
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
const props = defineProps({
    article: {
        type: Array,
        default: () => []
    },
})

const showMenu = ref(false)
const menu = ref(null)


function setShow (param) {
    setTimeout(() => {
        showMenu.value = param
    })
}

const closeDropDown = (element) => {
    if (!menu.value?.contains(element.target) && showMenu.value) {
        showMenu.value = false
    }
}

function copyText (event) {
    event.preventDefault();
    navigator.clipboard.writeText(window.location.href);
}

const getTelgramLink = computed(() => {
    return `https://t.me/share/url?url=${window.location.href}&text=${props.article?.title}`;
});
const getVkLink = computed(() => {
    return `http://vk.com/share.php?url=${window.location.href}&title=${props.article?.title}&image=${props.article?.img}`;
});


onMounted(() => {
    window.addEventListener('click', closeDropDown)
})


</script>
<style lang="scss">
.share {
    display: flex;
    gap: 16px;
    align-items: center;
    flex: 1 1 100%;
    align-self: flex-start;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    cursor: pointer;
    position: relative;

    &:hover{
        color:$blue-primary;

        & svg path{
            fill: $blue-primary;
        }
    }

    &:active{
        color:$blue;

        & svg path{
            fill: url(#myGradientShare);
        }
    }
}

.share__text{
    @media (max-width: $md) {
        display: none;
    }
}

.share-icon {
    width: 24px;
    height: 24px;
}

.share-menu {
    position: absolute;
    top: 0;
    left: 171px;
    padding: 16px;
    background: $gradient-background;
    border-radius: 16px;
    min-width: 379px;
    display: flex;

    @media (max-width: $xl) {
        left: 0;
        top: 40px;
    }

    @media (max-width: $md) {
        min-width: fit-content;
    }

    @media (max-width: $sm) {
        left: -140px;
        top: 40px;
    }
}

.share__list {
    display: flex;
    gap: 30px;
    flex-shrink: 0;
}

.share__item {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.share__link {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
}

.share__link-text {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: $black;

    @media (max-width: $md) {
        display: none;
    }
}
</style>