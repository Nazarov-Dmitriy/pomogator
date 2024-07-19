<template>
    <div class="subscribe-article">
        <p class="subscribe-article__subtile">
            Подпишитесь на рассылку, чтобы не пропустить вебинар
        </p>
        <div class="subscribe-article__block">
            <div class="subscribe-article__group">
                <div class="subscribe-article__email">
                    <label
                        for="email"
                        class="form-main__label"
                        :class="{ 'error': formField.emailError }"
                    >E-mail</label>
                    <div class="form-item__group">
                        <input
                            id="email"
                            v-model="formField.email"
                            type="text"
                            placeholder="mariaivanova@mail.ru"
                            class="form-main-input"
                            @input="changeEmail($event)"
                            @keypress.enter="validateField($event, 'event')"
                        >
                        <span class="form-item__icon">
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

                        </span>
                    </div>
                    <div
                        v-if="formField.emailError"
                        class="form-main__error"
                    >
                        <img
                            src="@/assets/icons/error.svg"
                            alt="icon"
                        >
                        <p class="form-main__error-text">
                            Поле заполненно некорректно
                        </p>
                    </div>
                </div>
                <BtnBackgroud
                    class="subscribe-article__btn"
                    @click="validateForm()"
                >
                    Подписаться
                </BtnBackgroud>
            </div>
            <div class="subscribe-article__policy">
                Нажимая кнопку “Подписаться” вы соглашаетесь с <a
                    href=""
                    class="subscribe-article__policy-link"
                >
                    политикой
                    обработки персональных данных</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import BtnBackgroud from '../btns/BtnBackgroud.vue';


const formField = reactive({
    email: '',
    emailError: false,
    textareaError: false,
    falidateSubscribe: false,
})


function validateField (param, event) {
    let target;
    if (event === 'event') {
        target = param.target.value.trim();
    } else {
        target = param.trim()
    }
    let email_regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    !email_regexp.test(String(target).toLowerCase()) ? formField.emailError = true : formField.emailError = false;

};

function changeEmail (event) {
    let target = event.target;
    let x = target.value.match(/([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/);
    target.value = x ? (x[1] + x[2] + x[3] + x[4] + x[5] + x[6]) : '';
    formField.email = target.value;
};


function validateForm () {
    validateField(formField.email, 'validate')
}

</script>
<style lang="scss" scoped>
.subscribe-article {
    padding: 16px;
    width: 100%;
    border: 2px solid $blue;
    box-sizing: border-box;
    border-radius: 32px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: #fff;

    .form-main__error-text {
        font-size: 14px;
    }

    &:hover {
        border-color: $blue-primary;

        .subscribe-article__subtile {
            color: $blue-primary;
        }

        .subscribe-article__policy,
        .subscribe-article__policy-link {
            color: $blue-primary;
        }
    }
}

.subscribe-article__subtile {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: $blue;
}

.subscribe-article__block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
}


.subscribe-article__group {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    flex-wrap: wrap;
}

.subscribe-article__email {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.subscribe-article__policy {
    font-size: 12px;
    line-height: 18px;
    color: $blue;
}

.subscribe-article__policy-link {
    text-decoration: underline;
    color: $blue;
}

.subscribe-article__btn {
    width: 100%;
}
</style>