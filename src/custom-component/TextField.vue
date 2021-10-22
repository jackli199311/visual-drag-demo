<template>
    <div class="light" style="display:inline-flex">
        <input type="text" :placeholder='propValue'>
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: String,
            default: '',
        },
        element: {
            type: Object,
        },
    },
}
</script>

<style lang="css" scoped>
@import '../../node_modules/@eds/vanilla/text-field/styles.css';
input {
    flex-grow: 1;
}
</style>