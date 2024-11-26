<template>
    <section class="teachers">
        <div class="teachers__container">
            <h2 class="teachers__title">Преподаватели</h2>
            <swiper
                ref="swiperRef"
                class="teachers__slider"
                :modules="modules"
                :slides-per-view="1"
                :space-between="500"
                :navigation="navigationOptions"
                @slide-change="updateActiveIndex"
            >
                <swiper-slide v-for="(teacher, index) in teachers" :key="index">
                    <div class="teachers__info">
                        <div class="teachers__info-description">
                            <div class="teachers__info-img-wrapper">
                                <img
                                    class="teachers__info-img"
                                    :src="teacher.image"
                                    :alt="`Image of ${teacher.name}`"
                                />
                            </div>
                            <div
                                class="teachers__info-description-wrapper teachers__info-description-wrapper--left"
                            >
                                <h3 class="teachers__info-title">
                                    {{ teacher.name }}
                                </h3>
                                <p class="teachers__info-text">
                                    Направление: <span>{{ teacher.subject }}</span>
                                </p>
                            </div>
                            <div
                                class="teachers__info-description-wrapper teachers__info-description-wrapper--right"
                            >
                                <p class="teachers__info-text">Опыт работы</p>
                                <p class="teachers__info-text">
                                    {{ teacher.experience }}
                                </p>
                                <p class="teachers__info-text">Место работы</p>
                                <p class="teachers__info-text">
                                    {{ teacher.workplace }}
                                </p>
                                <p class="teachers__info-text">Должность</p>
                                <p class="teachers__info-text">
                                    {{ teacher.position }}
                                </p>
                            </div>
                            <div class="teachers__info-tabs teachers__info-tabs--mobile">
                                <span
                                    v-for="(slide, index) in teachers"
                                    :key="index"
                                    class="teachers__info-tab teachers__info-tab--mobile"
                                    :class="{
                                        'teachers__info-tabs--active': activeIndex === index
                                    }"
                                />
                            </div>
                        </div>
                        <div class="teachers__info-topics">
                            <div class="teacher__info-slider-btn">
                                <img
                                    class="teacher__info-slider-btn teacher__info-slider-btn--left"
                                    src="@/assets/images/about/teacher/slider-button.svg"
                                    alt="slider button"
                                />
                                <img
                                    class="teacher__info-slider-btn teacher__info-slider-btn--right"
                                    src="@/assets/images/about/teacher/slider-button.svg"
                                    alt="slider button"
                                />
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Образование:</h2>
                                <p class="teachers__info-topic-text">
                                    {{ teacher.education }}
                                </p>
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Профессиональные навыки:</h2>
                                <p class="teachers__info-topic-text">
                                    {{ teacher.skills }}
                                </p>
                            </div>
                            <div class="teachers__info-topic">
                                <h2 class="teachers__info-topic-title">Достижения:</h2>
                                <p class="teachers__info-topic-text">
                                    {{ teacher.achievements }}
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="teachers__info-tabs">
                <span
                    v-for="(slide, index) in teachers"
                    :key="index"
                    class="teachers__info-tab"
                    :class="{ 'teachers__info-tabs--active': activeIndex === index }"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = ref([Navigation])

const teachers = ref([
    {
        name: 'Безбородова Лидия Васильевна',
        subject: 'Физика',
        experience: '50 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Преподаватель физики',
        education:
            'высшее, Курганский Государственный педагогический институт, специальность физика Курсы: «Проектная деятельность в информационной образовательной среде 21 века», «Использование современного учебного оборудования в центрах образования естественно-научной и технологической направленности «Точки роста».',
        skills: 'применение IT-технологий в обучении физике, организация проектной деятельности с использованием цифровых ресурсов «Точки роста».',
        achievements:
            'Отличник народного просвещения РФ. Автор методической работы «Проектная деятельность на уроке и внеклассных занятиях как эффективное средство формирования естественнонаучной и функциональной грамотности обучающихся».',
        image: '/image/about/teacher/teacherPhoto1.jpg'
    },
    {
        name: 'Брылёва Лариса Михайловна',
        subject: 'Биология, география',
        experience: '35 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Преподаватель химии',
        education: `высшее, Челябинский ордена «Знак Почета» педагогический институт.1989 г, специальность география-биология
`,
        skills: `Использование различных цифровых инструментов виртуальных лабораторий и эффективное применение их в образовательном процессе
`,
        achievements: `Победитель конкурса лучших учителей Российской Федерации. Автор методической работы «География Кетовского района».
`,
        image: '/image/about/teacher/teacherPhoto2.jpg'
    },
    {
        name: 'Бухтоярова Оксана Юрьевна',
        subject: 'Биология',
        experience: '21 год',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Преподаватель биологии',
        education: `высшее, Курганский государственный университет, специальность биология
`,
        skills: `Использование цифровых микроскопов и цифровых лабораторий в образовательном процессе и проектной деятельности

`,
        achievements: `Руководитель проектной работы - призера всероссийского конкурса «Большие вызовы», автор методических разработок по использованию цифровых микроскопов в исследовательской деятельности школьников
`,
        image: '/image/about/teacher/teacherPhoto3.jpg'
    },
    {
        name: 'Ермишева Елена Васильевна',
        subject: 'Химия, биология',
        experience: '34 года',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Преподаватель химии,биологии',
        education: `высшее, Иркутский государственный педагогический институт, учитель биологии и химии.
`,
        skills: `Организация проектной деятельности с использованием цифровых ресурсов Точки роста, применение эксперимента с использованием цифрового оборудования и IT - технологий во внеурочной деятельности по химии.

`,
        achievements: `Разработчик тематических тестов и интерактивных заданий для подготовки к ГИА по химии 

`,
        image: '/image/about/teacher/teacherPhoto4.jpg'
    },
    {
        name: 'Кобченко Ирина Ивановна',
        subject: 'Член команды проекта',
        experience: '35 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Член команды проекта',
        education: `высшее, Курганский государственный университет - филология; Академия труда и социальных отношений - менеджмент в образовании .

`,
        skills: `разработка и реализация проектов по применению информационных технологий в проектной и исследовательской деятельности, организация работы Точки роста, внедрение виртуальных цифровых лабораторий в образовательный процесс.
`,
        achievements: `Член команды по разработке проекта конкурса «Современные образовательные технологии - 2023», полуфиналист конкурса «Флагманы образования. Школа», победитель Всероссийского грантового проекта "Движение первых", лауреат регионального этапа конкурса «Учитель года», победитель конкурса лучших учителей Российской Федерации, призер регионального этапа конкурса "Фестиваль педагогического мастерства 2024" в номинации "Лучшая команда". Почетный работник воспитания и просвещения 

`,
        image: '/image/about/teacher/teacherPhoto5.jpg'
    },
    {
        name: 'Кочегурова Юлия Николаевна',
        subject: 'Член команды проекта',
        experience: '5 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Член команды проекта',
        education: `высшее, Национальный технологический университет, менеджмент в образовании
`,
        skills: ` разработка и реализация проектов по применению информационных технологий в проектной и исследовательской деятельности, организация работы Точки роста, внедрение виртуальных цифровых лабораторий в образовательный процесс.
`,
        achievements: `Член команды по разработке проекта конкурса «Современные образовательные технологии - 2023», Победитель Всероссийского грантового проекта "Движение первых", полуфиналист конкурса «Флагманы образования. Управленец», призер регионального этапа конкурса "Фестиваль педагогического мастерства" номинация "Лучшая команда" 2024.
`,
        image: '/image/about/teacher/teacherPhoto6.jpg'
    },
    {
        name: 'Осипов Евгений Николаевич ',
        subject: 'информатики',
        experience: '16 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Учитель информатики',
        education: `высшее, Национальный технологический университет, менеджмент в образовании
`,
        skills: ` Использование конструктора LEGO MINDSTORMS NXT в дополнительном образовании, программирование беспилотных летательных аппаратов, программирование робототехники.

`,
        achievements: `Лауреат регионального этапа конкурса «Учитель года», 
призер Всероссийского конкурса проектов научно-технического творчества молодежи, призёр фестиваля медиа – уроков.
`,
        image: '/image/about/teacher/teacherPhoto7.jpg'
    },
    {
        name: 'Стефаник Юлия Викторовна ',
        subject: 'Руководитель проекта ',
        experience: '19 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Руководитель проекта',
        education: `высшее, ФГБОУ ВПО «Курганский государственный университет», менеджмент в образовании 

`,
        skills: ` разработка и реализация проектов по применению информационных технологий в образовательном процессе, информатизации процессов управления школой
`,
        achievements: `Финалист конкурса «Современные образовательные технологии - 2023», полуфиналист конкурса «Флагманы образования. Управленец», полуфиналист конкурса «Флагманы образования. Школа», победитель Всероссийского грантового проекта "Движение первых», призер регионального этапа конкурса "Фестиваль педагогического мастерства 2024" в номинации "Лучшая команда". Отмечена Благодарностью Министерства просвещения РФ за инновационные подходы в образовании и воспитании.
`,
        image: '/image/about/teacher/teacherPhoto8.jpg'
    },
    {
        name: 'Сухарев Александр Юрьевич ',
        subject: 'Информатика',
        experience: '15 лет',
        workplace: 'МБОУ «Кетовская СОШ имени контр-адмирала Иванова В.Ф.»',
        position: 'Учитель информатики высшей квалификационной категории',
        education: `высшее, Курганский государственный университет учитель физики и информатики, дополнительные образовательные программы "Образовательная робототехника на базе наборов VEX"; "Олимпиадное программирование",
`,
        skills: ` Квалифицированный консультант в области развития цифровой грамотности населения (цифровой куратор).
Применение IT-технологий в обучении информатике, разработка интерактивных заданий, активное внедрение игровых обучающих методик при изучении отдельных тем с использованием цифровых образовательных ресурсов. Программирование беспилотных летательных аппаратов.
`,
        achievements: `Учитель-инноватор, призёр фестиваля педагогического мастерства в номинации "Учитель-мастер", призёр фестиваля медиа - уроков, организатор и руководитель областной профильной смены "Инженеры будущего", эксперт в чемпионате JuniorSkills по компетенции "Мобильная робототехника", лауреат молодёжной премии за высокие достижения в профессиональной деятельности.
`,
        image: '/image/about/teacher/teacherPhoto9.jpg'
    }
])

const activeIndex = ref(0)

const navigationOptions = {
    nextEl: '.teacher__info-slider-btn--right',
    prevEl: '.teacher__info-slider-btn--left'
}

function updateActiveIndex(swiper) {
    activeIndex.value = swiper.activeIndex % teachers.value.length
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.teachers__info-tab {
    border-radius: 10px;
    width: 32px;
    height: 2px;
    background: $secondary;
}

.teachers {
    padding: 60px 80px;
    box-sizing: border-box;

    @media (max-width: $lg) {
        padding: 40px;
    }

    @media (max-width: $md) {
        padding: 32px 16px;
    }

    @media (max-width: $sm) {
        padding: 32px 0;
    }
}

.teachers__container {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
.teachers__title {
    font-size: 36px;
    line-height: 42px;
    color: $blue-primary;
    margin-bottom: 32px;
    font-family: 'Kreadon-Demi';
    font-weight: 600;

    @media (max-width: $lg) {
        font-size: 32px;
        line-height: 40px;
    }
    @media (max-width: $sm) {
        padding: 0 16px;
    }
}

.teachers__info {
    padding: 0 0 24px 0;

    @media (max-width: $sm) {
        padding: 41px 0 0 0;
    }
}

.teachers__slider {
    width: 100%;
    height: calc(100% + 20px);
    overflow: visible;
}

.teachers__info-img-wrapper {
    position: absolute;
    top: 0;
    left: -22px;

    img {
        border-radius: 100%;
        border: 2px solid #5b94ea;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        max-width: 200px;
        @media (max-width: $xl) {
            width: 177px;
        }
        @media (max-width: $sm) {
            width: 87px;
        }
    }

    @media (max-width: $xl) {
        top: 50%;
        transform: translate(0%, -50%);
        left: -15px;
    }

    @media (max-width: $sm) {
        z-index: 5;
        top: 2px;
        left: 10px;
    }
}

.teachers__info-description {
    display: grid;
    grid-template-columns: repeat(2, auto);
    border-radius: 1000px;
    padding: 16px 64px 16px 186px;
    background: $blue;
    margin-bottom: 39px;
    gap: 70px;
    position: relative;

    @media (max-width: $xl) {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 16px 64px 16px 177px;
        margin-bottom: 0;
    }

    @media (max-width: $sm) {
        border-radius: 0;
        padding: 0 16px;
        gap: 16px;
        margin-bottom: 24px;
    }
}

.teachers__info-description-wrapper {
    &--left {
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: space-between;

        @media (max-width: $sm) {
            gap: 0;
        }
    }

    &--right {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
        row-gap: 10px;
        align-items: center;
        width: 100%;

        @media (max-width: $sm) {
        }
    }

    &--right .teachers__info-text:nth-child(even) {
        box-sizing: border-box;
        text-align: right;
        width: auto;
        align-items: start;
        line-height: 23px;
        padding-right: 50px;

        @media (max-width: $sm) {
            padding: 0;
        }
    }

    &--right .teachers__info-text:nth-child(odd) {
        width: max-content;
        line-height: 23px;
    }
}

.teachers__info-title {
    font-size: 36px;
    line-height: 42px;
    color: $white;

    @media (max-width: $lg) {
        font-size: 32px;
    }
    @media (max-width: $sm) {
        border-radius: 1000px;
        padding: 16px;
        text-align: end;
        transform: translateY(-40px);
        background: $blue;
        font-size: 24px;
        line-height: 133%;
        padding-left: 80px;
    }
}
.teachers__info-text {
    color: $white;

    span {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }
}

.teachers__info-topics {
    padding: 0 182px 24px 182px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;

    @media (max-width: $lg) {
        padding: 0 88px 0 88px;
    }

    @media (max-width: $sm) {
        padding: 0 16px;
    }
}

.teachers__info-topic-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: $blue-primary;
    margin-bottom: 8px;
    font-family: var(--second-family);

    @media (max-width: $lg) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: $sm) {
        margin-bottom: 4px;
    }
}
.teachers__info-topic-text {
    line-height: 24px;
    color: $black;
    font-family: var(--font-family);
    font-weight: 400;

    @media (max-width: $lg) {
        font-size: 14px;
        line-height: 21px;
    }
}

.teacher__info-slider-btn {
    cursor: pointer;
    display: flex;
    top: 50%;

    &--right {
        position: absolute;
        right: 0;
    }

    &--left {
        position: absolute;
        left: 0;
        transform: rotate(180deg);
    }

    @media (max-width: $sm) {
        display: none;
    }
}
.teachers__info-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: $sm) {
        display: none;
    }

    &--active {
        background: #4360f8;
    }

    &--mobile {
        display: none;
        @media (max-width: $sm) {
            display: flex;

            span {
                width: 100%;
                margin-bottom: 8px;
            }
        }
    }
}
</style>
