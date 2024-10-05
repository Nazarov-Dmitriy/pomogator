<template>
    <div v-if="certificate">
        <div class="certificate">
            <div class="certificate__wrapper">
                <div class="certificate__main">
                    <h2 class="certificate__title">Сертификат</h2>
                    <div class="certificate__info">
                        <p class="certificate__text">Подтверждает, что</p>
                        <h2 class="certificate__student-name">
                            {{ certificate.studentData }}
                        </h2>
                        <p class="certificate__text">
                            Участвовал в вебинаре по IT технологиям для преподавателей
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
        </div>
    </div>
    <div v-else>
        <p>Данные сертификата недоступны.</p>
    </div>
</template>

<script setup>
defineProps({
    certificate: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.print-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    background: #fff;
}

.certificate {
    border: 2px solid $blue;
    border-radius: 24px;
    max-width: 416px;
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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
/* Задаем стили для отображения на весь A4 */
.certificate {
    width: 210mm;
    height: 297mm; /* A4 размер */
    padding: 20mm;
    background: white;
    border: 1px solid #ccc;
}

.certificate__main {
    /* Отрегулируйте размеры и шрифты для A4 */
    font-size: 14px;
    text-align: center;
}

.certificate__title {
    font-size: 24px;
    margin-bottom: 20px;
}

.certificate__student-name {
    font-size: 20px;
    margin: 10px 0;
}

.span-wrapper span {
    font-size: 12px;
}
</style>
