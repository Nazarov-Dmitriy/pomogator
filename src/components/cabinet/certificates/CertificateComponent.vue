<template>
    <div
        v-for="(certificate, index) in certificateData"
        :key="certificate.id"
        :ref="`certificate-${index}`"
        class="certificate"
    >
        <div class="certificate__wrapper">
            <div class="certificate__main">
                <h2 class="certificate__title">Сертификат</h2>
                <div class="certificate__info">
                    <p class="certificate__text">Подтверждает, что</p>
                    <h2 class="certificate__student-name">
                        {{ certificate.fullName }}
                    </h2>
                    <p class="certificate__text">
                        Участвовал в вебинаре {{ certificate.certificateName }}
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
                <h2 class="certificate__footer-title">
                    {{ certificate.certificateName }}
                </h2>
                <div class="certificate__footer-bottom">
                    <div class="certificate__icons">
                        <img
                            src="/public/image/cabinet/cabinetCertificates/download.svg"
                            alt=""
                            @click="generatePdf(index)"
                        />
                        <CertificateShare class="share" />
                        <img
                            src="/public/image/cabinet/cabinetCertificates/print.png"
                            alt=""
                            @click="generatePdf(index)"
                        />
                    </div>
                    <span class="certificate__data">{{ certificate.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import html2pdf from 'html2pdf.js'
import CertificateShare from './CertificateShare.vue'
import { watch } from 'vue'

const props = defineProps({
    certificateData: {
        type: Array,
        default: () => []
    }
})

function generatePdf(index) {
    const certificate = props.certificateData[index]

    const tempElement = document.createElement('div')
    tempElement.classList.add('certificate-pdf')

    tempElement.innerHTML = `
         <div class="certificate__main-print">
                <h2 class="certificate__title-print">Сертификат</h2>
                <div class="certificate__info">
                    <p class="certificate__text-print">Подтверждает, что</p>
                    <h2 class="certificate__student-name-print">
                        ${certificate.studentData}
                    </h2>
                    <p class="certificate__text-print">
                        Участвовал в вебинаре по IT технологиям для преподавателей
                    </p>
                </div>

                <div class="certificate__main-bottom">
                    <img src="/public/image/cabinet/cabinetCertificates/small-logo.svg" alt="" />
                    <div class="span-wrapper span-wrapper--print">
                        <span>Дата вебинара</span>
                        <span>${certificate.date}</span>
                    </div>
                </div>
            </div>
    `

    document.body.appendChild(tempElement)

    const opt = {
        margin: [0, 0, 0, 0],
        filename: `Сертификат-${index + 1}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
    }

    html2pdf()
        .from(tempElement)
        .set(opt)
        .save()
        .then(() => {
            document.body.removeChild(tempElement)
        })
        .catch((err) => {
            console.error('Ошибка генерации PDF:', err)
        })
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
    background: linear-gradient(149deg, #f84343 35%, #4360f8 70%);
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
    background-image: url('/public/image/cabinet/cabinetCertificates/pdf-certificate-bottom.png.svg');
    background-repeat: no-repeat;
    background-position: 0 0;
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
    box-sizing: border-box;
    padding: 24px 16px 0 16px;
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
    :deep(.share-menu) {
        top: 0;
    }
}
.certificate__data {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    text-align: right;
    color: $blue;
}

.share{
    :deep(.share-menu){
        top: -10px;
        left: -80px;
    }
}

.certificate__main-print {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
}

.certificate__title-print {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 80px;
    text-align: center;
    color: #4360f8;
}

.certificate__text-print {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: black;
}

.certificate__student-name-print {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 66px;
    color: #4360f8;
    text-align: center;
    position: relative;
    padding: 2px;
    margin-top: 20px;
    &::after {
        content: '';
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 1px;
        background-color: #4360f8;
    }
}

.span-wrapper--print {
    font-weight: 500;
    font-size: 24px;
    text-align: right;
    color: #4360f8;
    margin-top: 40px;
}
</style>
