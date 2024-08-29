<template>
    <div class="print-container">
        <svg :viewBox="'0 0 800 600'" xmlns="http://www.w3.org/2000/svg" class="certificate__svg">
            <rect width="100%" height="100%" fill="#edf5ff" />
            <image
                href="/public/image/cabinet/cabinetCertificates/certificate-bg.svg"
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
            />

            <text x="50%" y="50px" text-anchor="middle" class="certificate__title">Сертификат</text>

            <text x="50%" y="150px" text-anchor="middle" class="certificate__student-name">
                {{ certificate.studentData }}
            </text>

            <text x="50%" y="200px" text-anchor="middle" class="certificate__text">
                Участвовал в вебинаре по IT технологиям для преподавателей
            </text>

            <text x="50%" y="300px" text-anchor="middle" class="certificate__date">
                Дата вебинара: {{ certificate.date }}
            </text>

            <text x="50%" y="550px" text-anchor="middle" class="certificate__footer-title">
                {{ certificate.certificateName }}
            </text>

            <text x="50%" y="580px" text-anchor="middle" class="certificate__data">
                {{ certificate.date }}
            </text>
        </svg>
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

<style scoped>
.print-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: #fff;
}

.certificate__svg {
    width: 100%;
    height: auto;
}

button {
    margin-top: 20px;
}
</style>
