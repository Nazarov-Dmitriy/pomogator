<template>
    <section class="webinar">
        <p class="article__back" @click="$router.go(-1)">&#8592; Вернуться в "Вебинар"</p>
        <div
            class="webinar__wrapper"
            :class="isSubsribe || props.webinar?.status == 'completed' ? 'full' : ''"
        >
            <div class="webinar__info">
                <h2 class="webinar__title">
                    {{ props.webinar?.title }}
                </h2>
                <div class="webinar__info-wrapper">
                    <p class="webinar__date">
                        Дата и время проведения
                        <span>{{ getDateTranslation }} </span>
                    </p>
                    <div class="webinar__tags">
                        <div
                            v-for="item in props.webinar?.tags"
                            :key="item"
                            class="article__tag-item"
                        >
                            <span class="article__tag-symbol">#</span>
                            <p class="article__tag-text">
                                {{ getTag(item) }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="webinar__line-bg" />
                <p class="webinar__description">
                    {{ props.webinar?.annotation }}
                </p>
            </div>
            <div v-if="!isSubsribe && props.webinar?.status !== 'completed'" class="webinar__card">
                <div class="webinar__card-bg webinar__card-bg--tablet">
                    <img src="/image/webinar/currentWebinar/webinar-bg-tablet.svg" alt="lines" />
                </div>
                <div class="webinar__card-bg webinar__card-bg--mobile">
                    <img src="/image/webinar/currentWebinar/webinar-bg-tablet.svg" alt="lines" />
                </div>
                <div class="webinar__card-text">
                    <h2 class="webinar__card-title">
                        Зарегистрируйтесь на вебинар, чтобы стать участником.
                    </h2>
                    <p class="webinar__card-subtitle">Вам придет напоминание о вебинаре</p>
                </div>
                <div class="webinar__btn-wrapper">
                    <BtnBackgroud
                        v-if="!user"
                        emit-name="form-submit"
                        @form-submit="$router.push('/auth/login')"
                        >Войти</BtnBackgroud
                    >
                    <BtnBackgroud v-else emit-name="submit" @submit="setSubscribe()"
                        >Зарегистрироваться на вебинар</BtnBackgroud
                    >
                </div>
            </div>
        </div>

        <div class="webinar__line-bg mt-10" />
        <BtnBackgroud
            v-if="showBtnCertificate && !isUserCertificat && webinar.status == 'completed'"
            emit-name="action"
            class="w-fit mt-5"
            @action="setUserSertificat"
        >
            Получить сертификат</BtnBackgroud
        >
    </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import BtnBackgroud from '../btns/BtnBackgroud.vue'
import { useNewsStore } from '@/stores/newsStore'
import { useWebinarStore } from '@/stores/webinarStore'
import { timezones } from '@/utils/timeZone'
import { TZDate } from '@date-fns/tz'
import { format } from 'date-fns'
import { useCertificatetore } from '@/stores/certificateStore'

const props = defineProps({
    webinar: {
        type: Object,
        default: () => {}
    },
    user: {
        type: Object,
        default: () => {}
    },
    subscribe: {
        type: Boolean
    },
    showBtnCertificate: {
        type: Boolean
    },
    isUserCertificat: {
        type: Boolean,
        default: null
    }
})

const newsStore = useNewsStore()
const webinarStore = useWebinarStore()
const certificateStore = useCertificatetore()
const isSubsribe = ref(null)
const selectedTz = ref(1)

const activeTz = computed(() => timezones[selectedTz.value])

const getTags = computed(() => {
    return newsStore.getTags
})

function setUserSertificat() {
    certificateStore.setCertificatUser({
        user_id: props.user.id,
        webinar_id: props.webinar.id
    })
}

const getDateTranslation = computed(() => {
    if (props.webinar?.date_translation) {
        let new_date = new TZDate(new Date(props.webinar?.date_translation), activeTz.value.tz)
        return props.webinar.status === 'completed'
            ? format(new_date, 'dd.MM.yyyy')
            : format(new_date, 'dd.MM.yyyy HH:mm') + `(${activeTz.value.label})`
    } else {
        return ''
    }
})

function getTag(tag) {
    return getTags?.value.filter((el) => el.id === tag)[0]?.name
}

async function setSubscribe() {
    if (props.webinar?.id && props.user?.id) {
        let params = { webinar_id: props.webinar.id, user: props.user.id }
        let res = await webinarStore.subsribeWebinar(params)
        if (res) {
            isSubsribe.value = true
        }
    }
}

onMounted(() => {
    isSubsribe.value = props.subscribe
})

watch(
    () => props,
    () => {
        isSubsribe.value = props.subscribe
    },
    { deep: true }
)
</script>

<style lang="scss" scoped>
.webinar {
    padding: 60px 80px 0 60px;
    box-sizing: border-box;
    position: relative;

    @media (max-width: $lg) {
        padding: 60px 40px 0 40px;
    }
    @media (max-width: $sm) {
        padding: 60px 16px 0 16px;
    }
}
.article__back {
    cursor: pointer;
    position: absolute;
    top: 15px;
}
.webinar__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 1fr;
    }

    &.full {
        grid-template-columns: 1fr;
    }
}
.webinar__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.webinar__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (max-width: $lg) {
        font-size: 30px;
    }
}
.webinar__info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: $sm) {
        flex-direction: column;
        gap: 16px;
        align-items: start;
    }
}
.webinar__date {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $blue-primary;

    & span {
        display: block;
    }

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: $lg) {
        font-size: 16px;
        line-height: 1.5;
    }
}
.webinar__tags {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    & span {
        font-family: 'Kreadon-Demi';
        font-size: 30px;
        line-height: 30px;
        background: $gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    @media (max-width: $sm) {
        order: -1;
    }
}
.webinar__tags-text {
    font-size: 16px;
    line-height: 24px;
    color: $black;
}

.webinar__line-bg {
    border: 1px solid $blue;
    width: 100%;
    height: 1px;
}
.webinar__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $black;
}
.webinar__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid $blue;
    border-radius: 20px;
    padding: 32px 16px;
    box-sizing: border-box;
    position: relative;
    gap: 16px;

    @media (max-width: $lg) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        align-items: center;
    }
    @media (max-width: $sm) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
        :deep(.btn-bg__text) {
            text-align: center;
        }
    }
}

.webinar__card-bg {
    position: absolute;
    z-index: 0;

    &--tablet {
        bottom: 0;
        left: 0;
    }
    &--mobile {
        display: none;
    }

    @media (max-width: $lg) {
        display: none;
    }
}

.webinar__card-text {
    display: grid;
    gap: 16px;
}
.webinar__card-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
}
.webinar__card-subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $blue-primary;
}
.webinar__btn-wrapper {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
}

.webinar__line-bg:last-child {
    margin-top: 40px;
}
</style>
