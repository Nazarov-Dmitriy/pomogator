<template>
    <section class="webinar-certificate">
        <div class="webinar-certificate__wrapper">
            <h2 class="webinar-certificate__title">Сертификат</h2>
            <div class="webinar-certificate__info">
                <div class="webinar-certificate__certificate">
                    <CertificateComponent :certificate-data="certificateData" />
                </div>
                <p class="webinar-certificate__text">
                    После прохождения вебинара вам будет доступен сертификат о прохождении вебинара.
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import CertificateComponent from '../cabinet/certificates/CertificateComponent.vue'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const props = defineProps({
    webinar: {
        type: Object,
        default: () => {}
    },
    user: {
        type: Object,
        default: () => {}
    }
})

const certificateData = ref([
    {
        id: 1,
        user: {
            name: 'Иванов',
            surname: 'Иван',
            patronymic: 'Иванович'
        },
        date: format(new Date(), 'dd.MM.yyyy', { locale: ru }),
        certificateName: 'Новые IT технологии в химии'
    }
])

onMounted(() => {
    setDateWebinar()
    setUserInfo()
})

function setUserInfo() {
    if (props.user) {
        let user = props.user
        certificateData.value[0].user.name = user.name
        certificateData.value[0].user.surname = user?.surname
        certificateData.value[0].user.patronymic = user?.patronymic
    }
}

function setDateWebinar() {
    if (props.webinar) {
        certificateData.value[0].certificateName = props.webinar.title
        certificateData.value[0].date = format(new Date(), 'dd.MM.yyyy', { locale: ru })
    }
}

watch(props, () => {
    console.log(props)

    setDateWebinar()
    setUserInfo()
})
</script>
<style lang="scss" scoped>
.webinar-certificate {
    padding: 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 40px;
    }
    @media (max-width: $sm) {
        padding: 32px 16px;
    }
}
.webinar-certificate__wrapper {
    display: grid;
    gap: 32px;
}
.webinar-certificate__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
}
.webinar-certificate__info {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 16px;

    @media (max-width: $lg) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $sm) {
        grid-template-columns: 100%;
        justify-content: center;
    }
}
.webinar-certificate__certificate {
    :deep(.certificate__footer) {
        display: none;
    }
    :deep(.certificate) {
        border: none;
    }
    :deep(.certificate__main) {
        border-radius: 24px;
    }

    @media (max-width: $sm) {
        // display: flex;
        // justify-content: center;
    }
}
.webinar-certificate__text {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;

    @media (max-width: $sm) {
        text-align: center;
    }
}
</style>
