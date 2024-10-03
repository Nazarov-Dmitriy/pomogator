<template>
    <section class="webinar-certificate">
        <div class="webinar-certificate__wrapper">
            <h2 class="webinar-certificate__title">Сертификат</h2>
            <div class="webinar-certificate__info">
                <div class="webinar-certificate__certificate">
                    <CertificateComponent :certificateData="certificateData" />
                </div>
                <p class="webinar-certificate__text">
                    После прохождения вебинара вам будет доступен сертификат о прохождении вебинара.
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import CertificateComponent from '../cabinet/certificates/CertificateComponent.vue'

const certificateData = ref([
    {
        id: 1,
        studentData: 'Иванов Иван Иванович21',
        date: '01.08.2024',
        certificateName: 'Новые IT технологии в химии'
    }
])
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
        display: flex;
        justify-content: center;
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
