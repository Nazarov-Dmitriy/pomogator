<template>
    <div v-for="(certificate, index) in certificateData" :key="certificate.id">
        <div class="certificate">
            <div class="certificate__wrapper">
                <div ref="certificate" class="certificate__main">
                    <h2 class="certificate__title">Сертификат</h2>
                    <div class="certificate__info">
                        <p class="certificate__text">Подтверждает, что</p>
                        <h2 class="certificate__student-name">
                            {{ getFullName(certificate) }}
                        </h2>
                        <p class="certificate__text">
                            {{ certificate.title }}
                        </p>
                    </div>
                    <div class="certificate__main-bottom">
                        <img
                            src="/public/image/cabinet/cabinetCertificates/small-logo.svg"
                            alt=""
                        />
                        <div class="span-wrapper">
                            <span>Дата вебинара</span>
                            <span>{{ certificate.date }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="certificate__main-print" v-show="showPrintVersion">
                <h2 class="certificate__title-print">Сертификат</h2>
                <div class="certificate__info">
                    <p class="certificate__text-print">Подтверждает, что</p>
                    <h2 class="certificate__student-name-print">{{ getFullName(certificate) }}</h2>
                    <p class="certificate__text-print">
                        {{ certificate.title }}
                    </p>
                </div>

                <div class="certificate__main-bottom">
                    <img src="/public/image/cabinet/cabinetCertificates/small-logo.svg" alt="" />
                    <div class="span-wrapper span-wrapper--print">
                        <span>Дата вебинара</span>
                        <span>{{ certificate.date }}</span>
                    </div>
                </div>
            </div>

            <div class="certificate__footer">
                <h2 class="certificate__footer-title text-center">{{ certificate.title }}</h2>
                <div class="certificate__footer-bottom items-center">
                    <div class="certificate__icons items-center">
                        <img
                            src="/public/image/cabinet/cabinetCertificates/download.svg"
                            alt=""
                            @click="generatePdf(index)"
                        />
                        <img
                            src="/public/image/cabinet/cabinetCertificates/print.png"
                            alt=""
                            class="w-6 h-6"
                            @click="printPdf(index)"
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
import { ref, nextTick } from 'vue'

const props = defineProps({
    certificateData: {
        type: Array,
        default: () => []
    }
})

const element = ref(null)

const showPrintVersion = ref(false)
const pdfUrls = ref('')

const getFullName = (certificate) => {
    return `${certificate.user?.surname} ${certificate.user?.name} ${certificate.user?.patronymic}`
}
function generatePdf(index) {
    showPrintVersion.value = true

    const pdfElement = document.querySelectorAll('.certificate__main-print')[index]

    nextTick(() => {
        if (pdfElement) {
            const options = {
                margin: 0,
                filename: `certificate-${index + 1}.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            }

            html2pdf()
                .set(options)
                .from(pdfElement)
                .toPdf()
                .get('pdf')
                // .then((pdf) => {
                //     const file = pdf.output('blob')
                //     const url = URL.createObjectURL(file)
                //     pdfUrls.value = url // Сохраняем URL PDF
                //     console.log(pdfUrls.value)
                // })
                .save()
        }
    })

    nextTick(() => {
        showPrintVersion.value = false
    })
}

function printPdf(index) {
    showPrintVersion.value = true

    const pdfElement = document.querySelectorAll('.certificate__main-print')[index]

    nextTick(() => {
        if (pdfElement) {
            const options = {
                margin: 0,
                filename: `certificate-${index + 1}.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            }

            html2pdf()
                .set(options)
                .from(pdfElement)
                .toPdf()
                .output('blob')
                .then((pdfBlob) => {
                    const pdfUrl = URL.createObjectURL(pdfBlob)
                    const printWindow = window.open(pdfUrl)

                    printWindow.addEventListener('load', () => {
                        printWindow.print()
                    })
                })
        }
    })

    nextTick(() => {
        showPrintVersion.value = false
    })
}
</script>

<style lang="scss" scoped>
.certificate {
    border: 2px solid #5b94ea;
    border-radius: 24px;
    max-width: 416px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
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

.share {
    :deep(.share-menu) {
        top: -10px;
        left: -80px;
    }
}

.certificate__main-print {
    position: relative;
    width: 100%;
    height: 1050px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);
}

.certificate__title-print {
    font-family: 'Kreadon-Demi';
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: #4360f8;
    text-align: center;
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
    font-size: 40px;
    text-align: right;
    color: #4360f8;
    margin-top: 40px;
}
</style>
