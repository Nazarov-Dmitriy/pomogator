<template>
    <div class="loader-container">
        <Loader
            :color="color"
            :size="size"
            class="loader"
        />
    </div>
</template>

<script>
import Loader from "vue-spinner/src/FadeLoader.vue";

export default {
    name: "LoaderComponent",
    components: {
        Loader,
    },
    data () {
        return {
            color: "#5B94EA",
            size: "24",
        };
    },
};
</script>

<style lang="scss">
.loader-container{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    background: rgba(255 , 255 , 255, .2);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>