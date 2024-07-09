<template>
    <section class="partners">
        <div class="partners__contaner">
            <h2 class="partners__header">
                Партнеры
            </h2>
            <img
                src="@/assets/icons/about/partners.svg"
                alt="partners LOGO"
                class="partners__logo"
            >
        </div>
        <img
            src="@/assets/images/about/partners-bg-line.svg"
            alt="bg-image"
            class="partners__bg-line"
        >
    </section>
</template>
<script setup>

</script>
<style lang="scss">
.partners {
    width: 100%;
    position: relative;
}

.partners__contaner {
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    @media (max-width: $lg) {
        padding: 40px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px 32px 16px;
    }
}

.partners__header {
    font-family: "Kreadon-Demi";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    padding-bottom: 32px;
    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.partners__logo {
    width: 100%;
    height: 100%;
    @media (max-width: $sm) {
        width: 635px;
        overflow: hidden;
    }
}

.partners__bg-line {
    position: absolute;
    top: 50px;
    z-index: -1;
    overflow: hidden;
    right: -450px;

    @media (max-width: $lg) {
        width: 710px;
        right: -150px;
        top: 90px;
    }

    @media (max-width: $sm) {
        width: 320px;
        right: -50px;
        top: 130px;
    }
}
</style>