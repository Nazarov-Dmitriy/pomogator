<template>
    <div
        v-for="(certificate, index) in props.certificateData"
        :key="certificate.id"
        class="certificate"
    >
        <div ref="certificateRefs" class="certificate__wrapper">
            <div class="certificate__main">
                <h2 class="certificate__title">Сертификат</h2>
                <div class="certificate__info">
                    <p class="certificate__text">Подтверждает, что</p>
                    <h2 class="certificate__student-name">{{ certificate.studentData }}</h2>
                    <p class="certificate__text">
                        Участвовал в вебинаре по IT технологиям для преподавателей
                    </p>
                </div>

                <div class="certificate__main-bottom">
                    <img src="/public/image/cabinet/cabinetCertificates/small-logo.svg" alt="" />
                    <div class="span-wrapper">
                        <span>Дата вебинара</span>
                        <span>{{ certificate.date }}</span>
                    </div>
                </div>
            </div>
            <div class="certificate__footer">
                <h2 class="certificate__footer-title">{{ certificate.certificateName }}</h2>
                <div class="certificate__footer-bottom">
                    <div class="certificate__icons">
                        <img
                            src="/public/image/cabinet/cabinetCertificates/download.svg"
                            alt=""
                            @click="downloadCertificate(certificate)"
                        />
                        <img src="/public/image/cabinet/cabinetCertificates/share.svg" alt="" />
                        <img
                            src="/public/image/cabinet/cabinetCertificates/print.png"
                            alt=""
                            @click="printCertificate(index)"
                        />
                    </div>

                    <span class="certificate__data">{{ certificate.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    certificateData: {
        type: Array,
        default: () => []
    }
})

const certificateRefs = ref([])

function downloadCertificate(certificate) {
    const link = document.createElement('a')
    link.href = certificate.downloadUrl
    link.download = `${certificate.studentData}-certificate.pdf`
    link.click()
}

function printCertificate(index) {
    const certificateElement = certificateRefs.value[index]
    if (certificateElement) {
        const printWindow = window.open('', '_blank')
        printWindow.document.write(certificateElement.outerHTML)
        printWindow.document.close()
        printWindow.focus()
        printWindow.print()
    }
}
</script>

<style lang="scss" scoped>
.certificate {
    border: 2px solid $blue;
    border-radius: 24px;
    max-width: 416px;
    width: 100%;
}
.certificate__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.certificate__main {
    border-radius: 24px 24px 0 0;
    position: relative;
    background-image: url('/public/image/cabinet/cabinetCertificates/certificate-bg.svg'),
        linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
    background-repeat: no-repeat;
    background-position: top;
}

.certificate__title {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 26px;
    line-height: 117%;
    background: linear-gradient(162deg, #f84343 0%, $blue-primary 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: 17px;
    text-align: center;
    margin-bottom: 30px;
}
.certificate__info {
    display: flex;
    flex-direction: column;
    gap: 14px;
}
.certificate__text {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: $black;
}
.certificate__student-name {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: $blue-primary;
    text-align: center;
    position: relative;
    padding: 2px;
    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 1px;
        background-color: $blue-primary;
    }
}

.certificate__main-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 58px 52px 9px 52px;
    position: relative;
    background-image: url('/public/image/cabinet/cabinetCertificates/certificate-bg-bottom.svg');
    background-repeat: no-repeat;
    background-position: 0 30px;
}

.span-wrapper {
    span {
        display: block;
        text-align: right;
        font-weight: 500;
        font-size: 5px;
        line-height: 6px;
        text-align: right;
        color: $blue-primary;
    }
}
.certificate__footer {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    position: relative;
}
.certificate__footer-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $black;
    text-align: center;
    box-sizing: border-box;
    padding: 24px 32px 0 32px;
}
.certificate__footer-bottom {
    display: flex;
    justify-content: space-between;
    padding: 0px 16px 16px 16px;
}
.certificate__icons {
    display: flex;
    gap: 36px;
    img {
        cursor: pointer;
    }
}
.certificate__data {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    text-align: right;
    color: $blue;
}
</style>
