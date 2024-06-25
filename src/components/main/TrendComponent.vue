<template>
    <div>
        <HeaderComponent />
    </div>

    <!-- <div>
        Направления        
    </div> -->

    <section class="trend-container">
        
        <div id="app">
            <div v-for="(item, index) in items" v-bind:key="index">
            <p>{{ item.name }}</p>
            </div>
        </div>

        
        <!-- <ul>
        <li>
        <button type="button" @click="onClickFirstPage">First</button>
        </li>
        <li>
        <button type="button" @click="onClickPreviousPage">Previous</button>
        </li>
        <li v-for="page in pages" :key="page.id">
        <button type="button" @click="onClickPage(page.id)">
        {{ page.title }}
        </button>
        </li>
        <li>
        <button type="button" @click="onClickNextPage">Next</button>
        </li>
        <li>
        <button type="button" @click="onClickLastPage">Last</button>
        </li>
        </ul> -->


        <div>
            <FooterComponent />
        </div>
    </section>
</template>
<script setup>
import HeaderComponent from '@/components/main/HeaderComponent.vue'
import FooterComponent from '@/components/main/FooterComponent.vue'

</script>

<script>

export default {
    data() {
        return {
            items: [
            { name: 'Иван', age: 30 }, 
            { name: 'Мария', age: 25 },
            { name: 'Мария', age: 25 }
            ]
        }
    }
}
</script>

<style lang="scss">
.trend-container {
    width: 100%;
    background-color: aqua
}    
</style>