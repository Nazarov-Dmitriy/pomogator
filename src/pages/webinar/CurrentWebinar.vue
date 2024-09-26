<script setup lang="ts">
import FeedbackComponent from '@/components/feedback/FeedbackComponent.vue'
import WebinarCertificate from '@/components/webinar/WebinarCertificate.vue'
import WebinarHeader from '@/components/webinar/WebinarHeader.vue'
import WebinarVideo from '@/components/webinar/WebinarVideo.vue'
import MainLayots from '@/layouts/MainLayots.vue'
</script>

<template>
    <MainLayots>
        <div class="page">
            <WebinarHeader />
            <WebinarVideo />
            <WebinarCertificate />
            <FeedbackComponent />
        </div>
    </MainLayots>
</template>

<style lang="scss" scoped>
.page {
    :deep(.news__info) {
        margin-right: 80px;
        margin-left: 80px;

        @media (max-width: $lg) {
            margin-right: 40px;
            margin-left: 40px;
        }
        @media (max-width: $sm) {
            margin-right: 16px;
            margin-left: 16px;
        }
    }
}
</style>
