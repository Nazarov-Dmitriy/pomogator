<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import IconExit from '../icons/AboutComponent/IconExit.vue';
import IconQuestion from '../icons/AboutComponent/IconQuestion.vue';
import IconSheet from '../icons/AboutComponent/IconSheet.vue';
import BackgroundSvg from '../icons/AboutComponent/svg/BackgroundSvg.vue';

const cardsInfo = ref([
  {
    icon: IconSheet,
    description: 'Использование цифровых технологий в обучении'
  },
  {
    icon: IconQuestion,
    description: 'Возможность задавать вопросы лектору во время эфира'
  },
  {
    icon: IconExit,
    description: 'Все зарегистрированные пользователи получают сертификат'
  }
])

const visibleCards = ref(false)
const updateScreenWidth = () => {
  if (window.innerWidth < 768) {
    visibleCards.value = true
    console.log(visibleCards.value)
  } else {
    visibleCards.value = false
    console.log(visibleCards.value)
  }
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
  updateScreenWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<template>
  <section class="webinar">
    <div class="webinar__container">
      <div class="webinar__wrapper">
        <div class="webinar__hero">
          <img
            src="@/images/AboutComponent/webinar-hero.png"
            alt="webinar hero"
            class="webinar__hero-img"
          />
        </div>
        <div class="webinar__info">
          <h2 class="webinar__info-title">Вебинары онлайн</h2>
          <p v-show="!visibleCards" class="webinar__info-subtitle">
            Для арегистрированных пользователей есть уникальная возможность присутствовать на
            практических онлайн вебинарах с получением сертификата
          </p>
          <div v-show="!visibleCards" class="webinar__info-cards">
            <div v-for="(card, index) in cardsInfo" :key="index" class="webinar__info-card">
              <div class="webinar__info-card-icon">
                <component :is="card.icon" />
              </div>
              <p class="webinar__info-card-subtitle">{{ card.description }}</p>
            </div>
          </div>
          <div v-show="!visibleCards" class="webinar__info-button-wrap">
            <button class="webinar__info-button info-button">Регистрация</button>
          </div>
        </div>
      </div>

      <div v-show="visibleCards" class="webinar__info">
        <p class="webinar__info-subtitle">
          Для зарегистрированных пользователей есть уникальная возможность присутствовать на
          практических онлайн вебинарах с получением сертификата
        </p>
      </div>
      <div v-show="visibleCards" class="webinar__info-cards">
        <div v-for="(card, index) in cardsInfo" :key="index" class="webinar__info-card">
          <div class="webinar__info-card-icon">
            <component :is="card.icon" />
          </div>
          <p class="webinar__info-card-subtitle">{{ card.description }}</p>
        </div>
      </div>
      <div v-show="visibleCards" class="webinar__info-button-wrap">
        <button class="webinar__info-button info-button">Регистрация</button>
      </div>
    </div>
    <div class="webinar__background-svg">
     <BackgroundSvg/>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.webinar {
  border: 2px solid #f84343;
  padding: 60px 80px;
  background: $blue;
  position: relative;
  overflow: hidden;

  @media (max-width: 950px) {
    padding: 60px 30px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 378px) {
    padding: 32px 16px;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }

  @media (max-width: 420px) {
    padding: 20px 15px;
  }
}

.webinar__container {
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1440) {
    max-width: 1200px;
  }

  @media (max-width: 378px) {
    max-width: 320px;
  }
}

.webinar__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  gap: 38px;
  width: 100%;
  position: relative;

  @media (max-width: 1400px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-bottom: 10px;
  }
}

.webinar__hero {
  width: 100%;
}

.webinar__hero-img {
  width: 100%;

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.webinar__info-title {
  font-size: 48px;
  line-height: 117%;
  text-align: center;
  color: $black;
  margin-bottom: 32px;

  @media (max-width: 1100px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 117%;
  }
}

.webinar__info-subtitle {
  font-size: 24px;
  line-height: 133%;
  color: $white;
  margin-bottom: 24px;
  width: 738px;
  width: 100%;

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
  }
}
.webinar__info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    margin-bottom: 24px;
  }
}

.webinar__info-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.webinar__info-card-subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: $white;

  @media (max-width: 1100px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 143%;
  }
}

.webinar__info-button-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 5;
  @media (max-width: 378px) {
    justify-content: center;
  }
}

.info-button {
  border-radius: 32px;
  padding: 12px 24px;
  width: 152px;
  height: 48px;
  background: $primary-red;
  border: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: $white;
  cursor: pointer;
  text-align: center;

  @media (max-width: 400px) {
    width: 100%;
  }
}

.webinar__background-svg {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
}
</style>
