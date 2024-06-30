<template>
    <section class="trends__contaner">
        <div class="trends">
            <h2 class="trends__header">
                Направления
            </h2>
            <div class="trends__list">
                <div class="trends__card">
                    <div class="trends__card-name">
                        Химия
                    </div>
                    <div class="trends__card-info">
                        <ul>
                            <li>Виртуальные практикумы и лабораторные работы</li>
                            <li>Демонстрационные эксперименты</li>
                            <li>Моделирование химических процессов</li>
                            <li>Проекты и исследования</li>
                        </ul>
                        <BtnGradient class="btn__trends-card">
                            Подробнее
                        </BtnGradient>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">
                        Физика
                    </div>
                    <div class="trends__card-info">
                        <ul>
                            <li>Виртуальные практикумы и лабораторные работы</li>
                            <li>Демонстрационные эксперименты</li>
                            <li>Электронные таблицы и графики</li>
                            <li>Наглядное представление результатов экспериментов</li>
                        </ul>
                        <BtnGradient class="btn__trends-card">
                            Подробнее
                        </BtnGradient>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">
                        Биология
                    </div>
                    <div class="trends__card-info">
                        <ul>
                            <li>Виртуальные практикумы и лабораторные работы</li>
                            <li>Демонстрационные эксперименты</li>
                            <li>Предметные тестирования и диагностики</li>
                            <li>Проекты и исследования</li>
                        </ul>
                        <BtnGradient class="btn__trends-card">
                            Подробнее
                        </BtnGradient>
                    </div>
                </div>
                <div class="trends__card">
                    <div class="trends__card-name">
                        Робототехника
                    </div>
                    <div class="trends__card-info">
                        <ul>
                            <li>Конструирование и программирование роботов</li>
                            <li>VR-очки в проектах и исследованиях</li>
                            <li>3D-моделирование</li>
                            <li>Научно-техническое творчество</li>
                        </ul>
                        <BtnGradient class="btn__trends-card">
                            Подробнее
                        </BtnGradient>
                    </div>
                </div>
            </div>
            <div class="trends__proposal">
                Если не нашли на нашем сайте нужный материал, предложите свою тему по направлению или задайте вопрос
            </div>
            <BtnGradient class="btn__proposal">
                Предложить материал
            </BtnGradient>
        </div>
    </section>
</template>

<script setup>
import BtnGradient from '../btns/BtnGradient.vue';
</script>
<script>
</script>

<style lang="scss">
.trend-container {
    width: 100%;
}

.trends {
    max-width: 1440px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;

    @media (max-width: $lg) {
        padding: 40px 40px 40px 40px;
    }

    @media (max-width: $sm) {
        padding: 32px 16px 32px 16px;
    }
}

.trends__header{
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: $blue-primary;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
}

.trends__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    padding: 32px 0 32px 0;

    @media (max-width: $xl) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $sm) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.trends__card {
    border: 2px solid $blue;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}

.trends__card-name {
    background-color: $blue;
    border-radius: 28px 28px 0 0;
    padding: 16px 0 16px 0;
    text-align: center;
    color: $white;
    font-weight: 500;
    font-size: 24px;

    @media (max-width: $xl) {
        font-size: 20px;
        line-height: 24px;
    }
}

.trends__card-info {
    padding: 16px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    background: $gradient-background;
    border-radius: 0 0 32px 32px;
    height: 100%;
}

ul {
    padding-bottom: 10px;
    padding-left: 20px;
}

li {
    list-style-type: disc;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    @media (max-width: $xl) {
        font-size: 14px;
        line-height: 20px;
    }
}

.btn__trends-card {
    width: 100%;
}

.trends__proposal{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $blue;
    padding-bottom: 16px;

    @media (max-width: $xl) {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
}

.btn__proposal {
    width: 230px;
    padding: 0;
}
</style>