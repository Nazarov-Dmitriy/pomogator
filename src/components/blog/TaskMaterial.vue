<template>
    <div class="section-task-material">
        <div class="task-material__container">
            <div class="task-material__content">
                <h1 class="task-material__title">
                    Учебно-методические материалы
                </h1>
                <img
                    src="@/assets/images/main/about/img1.svg"
                    alt="image1"
                    class="task-material__image"
                >
                <img
                    src="@/assets/images/main/about/img2.svg"
                    alt="image1"
                    class="task-material__image"
                >
                <img
                    src="@/assets/images/main/about/img3.svg"
                    alt="image1"
                    class="task-material__image"
                >
            </div>
        </div>
        <img
            src="@/assets/images/trend/description/bg.svg"
            alt="bg-image"
            class="task-material__bg"
        >
    </div>
</template>
<script setup>
</script>

<style lang="scss">
.section-task-material {
    position: relative;
    background: $gradient-background;
}

.task-material__container {
    padding: 60px 80px 88px 80px;


    @media (max-width: $lg) {
        padding: 20px 40px 123px 40px;
    }

    @media (max-width: $sm) {
        padding: 16px 16px 0 16px;
    }
}

.task-material__content {
    display: flex;
}

.task-material__title {
    font-family: "Kreadon-Demi";
    font-size: 48px;
    line-height: 56px;
    width: 547px;
    z-index: 2;

    @media (max-width: $xl) {
        width: 56%;
        font-size: clamp(2rem, 2.564vw + 1.077rem, 3rem);
        line-height: clamp(2.5rem, 2.564vw + 1.577rem, 3.5rem);
    }

    @media (max-width: $lg) {
        width: 60%;
        line-height: 40px;
    }

    @media (max-width: $sm) {
        width: 100%;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 154px;
    }
}

.task-material__image {
    position: absolute;
    aspect-ratio: 1/ 1;
    z-index: 2;

    &:nth-of-type(1) {
        width: 160px;
        right: 27.2%;
        top: 13px;

        @media (max-width: $lg) {
            width: 104px;
            right: 25%;
            top: 20px;
        }

        @media (max-width: $sm) {
            width: 89px;
            right: 141px;
            top: unset;
            bottom: 55px;
        }
    }

    &:nth-of-type(2) {
        width: 120px;
        right: 10.4%;
        top: 88px;

        @media (max-width: $lg) {
            width: 78px;
            right: 5.2%;
            top: 68px;
        }

        @media (max-width: $sm) {
            width: 67px;
            top: unset;
            right: 16px;
            bottom: 50px;
}
    }

    &:nth-of-type(3) {
        width: 80px;
        right: 40.8%;
        top: 179px;

        @media (max-width: $lg) {
            width: 52px;
            right: 42.8%;
            top: 128px;
        }

        @media (max-width: $sm) {
            width: 45px;
            right: 245px;
            top: unset;
            bottom: 30px;
        }
    }
}



.task-material__bg {
    width: 101%;
    position: absolute;
    bottom: -60px;
    z-index: 0;
    left: -1px;

    @media (max-width: $lg) {
        bottom: -22px;
    }

    @media (max-width: $sm) {
        bottom: 0;
    }
}
</style>