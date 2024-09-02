<template>
    <div class="form">
        <slot />
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.form {
    max-width: 600px;
    padding: 40px 40px;
    background: var(--blue4);
    border-radius: 10px;
    margin: auto;
    width: 100%;


}
</style>