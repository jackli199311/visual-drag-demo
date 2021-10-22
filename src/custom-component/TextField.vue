<template>
    <div class="light" style="display:inline-flex">
        <input type="text" :placeholder='propValue' v-model="inputValue" @keyup="onInput()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
        }
    },
    props: {
        propValue: {
            type: String,
            default: '',
        },
        element: {
            type: Object,
        },
        dataSource: {
            type: String,
            default: '',
        },
    },
    methods: {
        onInput() {
            this.$store.commit('updateSource', { key: this.getDataSource(), value: this.inputValue })
            console.log(this.getDataSource())
            console.log(this.$store)
        },
        getDataSource() {
            return this.$store.state.curComponent.dataSource
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