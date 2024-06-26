<template>
    <HeaderComponent />

    <!-- <div>
        Направления        
    </div> -->

    <section class="trends__contaner">
        <div class="trends">
            <p>Содержание</p>
            <div class="trends__list">
                <div class="trends__card" v-for="(trend, index) in trends" v-bind:key="index">
                    <img class="trends__card__img" :src=trend.imageSrc alt="trends__card IMG">
                    <div class="trends__card_info">
                        <div class="trends__card__hashtags">
                            <p>{{ trend.firstHashtag }}</p>
                            <p>{{ trend.secondHashtag }}</p>
                        </div>
                        <p class="trends__card__name">{{ trend.name }}</p>
                        <div class="trends__card_statistic">
                            <div class="trends__card__likes">
                                <img src="@/assets/icons/trends/like.svg" alt="">
                                <p>{{ trend.likes }}</p>
                            </div>
                            <div class="trends__card__view">
                                <img src="@/assets/icons/trends/eye.svg" alt="">
                                <p>{{ trend.view }}</p>
                            </div>
                            <p>Дата публикации {{ trend.publicationData }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import FooterComponent from '@/components/main/FooterComponent.vue'
import flask_big_svg from "@/assets/icons/trends/flask-big.svg"
import tube_svg from "@/assets/icons/trends/tube.svg"
import lattice_svg from "@/assets/icons/trends/lattice.svg" 
import electron_svg from "@/assets/icons/trends/electron.svg" 

</script>

<script>

export default {
    data () {
        return {
            trends: [
                { name: 'Роль информационных технологий в науке', 
                    imageSrc: flask_big_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'IT-технологии в физике: новые горизонты исследований', 
                    imageSrc: tube_svg, firstHashtag: '#статья', 
                    secondHashtag: '#физика', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Новые IT технологии в химии', 
                    imageSrc: lattice_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Робототехника: будущее уже здесь', 
                    imageSrc: electron_svg, firstHashtag: '#статья', 
                    secondHashtag: '#робототехника', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Роль информационных технологий в науке', 
                    imageSrc: flask_big_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'IT-технологии в физике: новые горизонты исследований', 
                    imageSrc: tube_svg, firstHashtag: '#статья', 
                    secondHashtag: '#физика', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Новые IT технологии в химии', 
                    imageSrc: lattice_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Робототехника: будущее уже здесь', 
                    imageSrc: electron_svg, firstHashtag: '#статья', 
                    secondHashtag: '#робототехника', publicationData: '01.05.2024',
                    likes: 100, view: 100},
                { name: 'Роль информационных технологий в науке', 
                    imageSrc: flask_big_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'IT-технологии в физике: новые горизонты исследований', 
                    imageSrc: tube_svg, firstHashtag: '#статья', 
                    secondHashtag: '#физика', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Новые IT технологии в химии', 
                    imageSrc: lattice_svg, firstHashtag: '#статья', 
                    secondHashtag: '#химия', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
                { name: 'Робототехника: будущее уже здесь', 
                    imageSrc: electron_svg, firstHashtag: '#статья', 
                    secondHashtag: '#робототехника', publicationData: '01.05.2024',
                    likes: 100, view: 100}, 
            ]
        }
    }
}
</script>

<style lang="scss">
.trend-container {
    width: 100%;
}    

.trends {
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 80px 14px 80px;
}

.trends__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
}

.trends__card {
    padding-bottom: 16px;
    border: 2px solid $blue;
    border-radius: 32px;
}

.trends__card__img {
    width: 100%;
    object-fit: cover;
    border-radius: 32px 32px 0 0
}

.trends__card_info{
    padding: 16px;
}

.trends__card__hashtags{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
}

.trends__card__name {
    width: 100%;
    padding-top: 7px;
    padding-bottom: 20px;
}

.trends__card_statistic {
    display: flex;
    justify-content: space-between;
}

.trends__card__likes {
    display: flex;
    justify-content: space-between;
}

.trends__card__view {
    display: flex;
    justify-content: space-between;
}

</style>