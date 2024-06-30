<script setup>
import { ref } from 'vue'
const query = ref('')

const toggleInfoBlock = ref(false)
const showDangerBlock = ref(false)

const sendMail = () => {
    if (query.value.length === 0) {
        showDangerBlock.value = !showDangerBlock.value
    } else {
        toggleInfoBlock.value = !toggleInfoBlock.value
        query.value = ''

        showDangerBlock.value = false
    }
}
</script>
<template>
    <section class="news">
        <div class="">
            <h2 class="news__title news__container">
                Актуальные новости
            </h2>
            <div class="news__cards news__container">
                <div class="news__card">
                    <div class="news__card-header">
                        <div class="news__card-img-wrapper">
                            <img
                                src="https://get.pxhere.com/photo/beach-sea-coast-sand-ocean-shore-wave-vacation-lagoon-bay-island-nikon-body-of-water-caribbean-tropics-cape-d300-polinesia-fakarava-413763.jpg"
                                alt="card img"
                                class="news__card-img"
                            >
                        </div>
                    </div>
                    <div class="news__card-body">
                        <span>#статья #химия</span>
                        <p class="news__text news__card-text">
                            Новые IT технологии в химии
                        </p>
                        <span>01.05.2024</span>
                    </div>
                </div>
                <div class="news__card">
                    <div class="news__card-header">
                        <div class="news__card-img-wrapper">
                            <img
                                src="@/images/NewsComponent/card-image2.png"
                                alt="card img"
                                class="news__card-img"
                            >
                        </div>
                    </div>
                    <div class="news__card-body">
                        <span>#статья #физика</span>
                        <p class="news__text news__card-text">
                            Новые IT технологии в химии
                        </p>
                        <span>01.05.2024</span>
                    </div>
                </div>
                <div class="news__card">
                    <div class="news__card-header">
                        <div class="news__card-img-wrapper">
                            <img
                                src="@/images/NewsComponent/card-image3.png"
                                alt="card img"
                                class="news__card-img"
                            >
                        </div>
                    </div>
                    <div class="news__card-body">
                        <span>#статья #биология</span>
                        <p class="news__text news__card-text">
                            Новые IT технологии в химии
                        </p>
                        <span>01.05.2024</span>
                    </div>
                </div>

                <div class="news__card">
                    <div class="news__card-body news__card-body--empty">
                        <p class="news__text news__card-text news__card-text--empty">
                            Переходите в блог, чтобы выбрать подходящую для вас информацию
                        </p>
                        <button class="news__card-button">
                            Подробнее
                        </button>
                        <div class="news__card-bg">
                            s
                        </div>
                    </div>
                </div>
            </div>
            <div class="news__info">
                <div class="news__info-wrapper">
                    <div class="news__text news__container">
                        Подпишитесь на рассылку, чтобы не пропустить актуальный для вас вебинар или новость дня
                    </div>
                    <form
                        class="news__form news__container"
                        @submit.prevent="sendMail"
                    >
                        <label
                            :class="{ 'invalid-text': showDangerBlock }"
                            for="news__input-id"
                        >E-mail</label>
                        <div class="news__input-wrapper">
                            <div class="input-wrapper">
                                <input
                                    id="news__input-id"
                                    v-model="query"
                                    :class="{ 'invalid-form': showDangerBlock }"
                                    class="news__form-input"
                                    type="email"
                                    placeholder="mariaivanova@mail.ru"
                                >
                                <div
                                    v-if="showDangerBlock"
                                    class="validate-danger"
                                >
                                    <div class="validate-svg">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                                fill="#F84343"
                                            />
                                        </svg>
                                    </div>
                                    <span>Поле заполненно некорректно</span>
                                </div>
                                <div class="news__input-svg">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.0057 14.6797C13.4086 15.0777 12.7151 15.2881 12 15.2881C11.285 15.2881 10.5914 15.0777 9.99431 14.6797L0.159797 8.12311C0.105234 8.08674 0.0520781 8.04881 0 8.00981V18.7534C0 19.9852 0.999609 20.9628 2.20936 20.9628H21.7906C23.0224 20.9628 24 19.9632 24 18.7534V8.00977C23.9478 8.04886 23.8945 8.08688 23.8398 8.1233L14.0057 14.6797Z"
                                            fill="#A0B1ED"
                                        />
                                        <path
                                            d="M0.939844 6.95353L10.7744 13.5101C11.1466 13.7583 11.5733 13.8824 12 13.8824C12.4267 13.8824 12.8534 13.7583 13.2256 13.5101L23.0602 6.95353C23.6487 6.56142 24 5.90517 24 5.19689C24 3.97903 23.0092 2.98828 21.7914 2.98828H2.20861C0.990797 2.98833 0 3.97908 0 5.19806C0 5.90517 0.351375 6.56142 0.939844 6.95353Z"
                                            fill="#A0B1ED"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <input
                                class="news__form-button"
                                type="submit"
                            >
                            <p class="news__text news__form-text">
                                Нажимая кнопку “Подписаться” вы соглашаетесь с
                                <a href="#"> <span>политикой обработки персональных данных</span></a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div
                v-if="toggleInfoBlock"
                class="news__success news__container"
            >
                <div class="news__success-wrapper">
                    <h2 class="news__success-title">
                        Ваши данные приняты
                    </h2>
                    <div class="news__success-svg">
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="76"
                                height="76"
                                rx="38"
                                stroke="#4360F8"
                                stroke-width="4"
                            />
                            <path
                                d="M60.3906 28.8888C60.3906 28.3201 60.18 27.7514 59.7589 27.3174C59.338 26.8838 58.7865 26.6669 58.2349 26.6666H58.2326C57.681 26.6669 57.1295 26.8838 56.7086 27.3174L36.6651 47.9683L27.406 38.4285C26.5636 37.5607 25.198 37.5607 24.3557 38.4285C23.5134 39.2964 23.5134 40.7034 24.3557 41.5712L35.14 52.6824C35.9823 53.5502 37.348 53.5502 38.1903 52.6824L59.7589 30.4601C60.18 30.0262 60.3906 29.4575 60.3906 28.8888Z"
                                fill="#4360F8"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.invalid-form {
  border: 2px solid #f84343 !important;
}

.invalid-text {
  color: #f84343;
}

.news {
  padding: 60px 0;
  background: linear-gradient(165deg, #daebff 0%, #edf5ff 100%);

  @media (max-width: 992px) {
    padding: 40px 0;
  }
  @media (max-width: 576px) {
    padding: 32px 0;
  }
}
.news__container {
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: $lg) {
    max-width: 673px;
  }

  @media (max-width: 576px) {
    max-width: 287px;
  }
}
.news__title {
  font-size: 36px;
  line-height: 117%;
  color: $blue-primary;
  margin-bottom: 32px;
  padding: 0 80px;

  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 125%;
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 16px;
  }
}
.news__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  padding: 0 80px;

  @media (max-width: $lg) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0 40px;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
  }
}
.news__card {
  border: 2px solid $blue;
  border-radius: 32px;
  background: $white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;

  span {
    color: $blue;
  }
}


.news__card-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: cover;
}

.news__card-body {
  padding: 2px 16px 16px 16px;
  position: relative;

  @media(max-width: $xl) {
    padding: 2px 14px 16px 14px ;
  }

  &--empty {
    background: $gradient-background;
    height: 100%;
  }
}


.news__card-img {
  width: 100%;
}
.news__card-text {
  margin: 20px 0;

  &--empty {
    margin-top: 55px;
  }
}

.news__card-button {
  border: 2px solid $primary-red;
  border-radius: 32px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 150%;
  color: $primary-red;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.news__card-bg {
  position: absolute;
  top: 110px;
  right: 0;
  z-index: 0;
}

.news__info {
  padding: 45px 80px;
  background: rgba(255, 255, 255, 0.5);

  gap: 48px;
  position: relative;

  @media (max-width: 992px) {
    padding: 45px 40px;
  }
  @media (max-width: 576px) {
    padding: 16px;
  }
}

.news__info-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: $lg) {
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 673px;
  }
}

.news__text {
  font-size: 24px;
  line-height: 133%;
  color: $black;

  @media(max-width: $xl){
    font-size: 20px;
    line-height: 120%;

  }

  @media (max-width: $lg) {
  }
}


.news__card-text--empty{
  margin-bottom: 32px;

  @media(max-width: $xl){
    margin-bottom: 22px;
  }

}

.news__form {
  display: grid;
  gap: 8px;
  width: 100%;
}

.news__input-wrapper {
  display: grid;
  column-gap: 48px;
  row-gap: 10px;
  grid-template-columns: 1fr auto;
  position: relative;

  @media (max-width: $lg) {
    width: 100%;
  }

  @media (max-width: $sm) {
    grid-template-columns: 1fr;
  }
}

.input-wrapper {
  width: 100%;

  @media (max-width: $sm) {
    max-width: 100%;
  }
}
.news__form-input {
  border: 2px solid #a0b1ed;
  border-radius: 32px;
  padding: 12px 16px;
  width: 100%;
  height: 24px;
  background: $white;

  &::placeholder {
    color: #a0b1ed;
  }

  &:focus {
    border: 2px solid $blue-primary;
  }

  @media (max-width: $lg) {
    width: 100%;
  }

  @media (max-width: $sm) {
    box-sizing: border-box;

    width: 100%;
    display: flex;
    padding: 22px 16px;
  }
}

.validate-svg {
  display: flex;
  flex-direction: column;
}

.validate-danger {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  color: $primary-red;
  align-items: center;
  width: max-content;
}

.news__input-svg {
  position: absolute;
  top: 14px;
  right: 167px;

  @media (max-width: $lg) {
    top: 14px;
    right: 160px;
  }

  @media (max-width: $sm) {
    right: 20px;
  }
}

.news__form-button {
  border-radius: 32px;
  padding: 12px 24px;
  background: #f84343;
  border: none;
  line-height: 150%;
  color: $white;
  cursor: pointer;
  text-align: center;
  height: max-content;

  @media (max-width: $sm) {
  }
}
.news__form-text {
  font-size: 12px;
  line-height: 150%;
  color: $black;
  grid-row: 2;
  grid-column: span 2;

  @media (max-width: $sm) {
    grid-column: span 1;
  }

  a {
    color: $black;
  }
  span {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }

  @media (max-width: $sm) {
  }
}

.news__success {
  padding: 24px 80px;

  @media(max-width: $lg){
    padding: 24px 40px;
  }
  @media(max-width: $sm){
    padding: 24px 16px;
  }
}

.news__success-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  border: 2px solid $blue-primary;
  border-radius: 32px;
  padding: 24px 0;
  @media (max-width: $sm) {
    gap: 0;
    padding: 24px;
  }
}
.news__success-title {
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: $black;
}
.news__success-svg {
}
</style>