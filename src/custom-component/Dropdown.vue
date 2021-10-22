<template>
    <div class="light" style="display:inline-flex">
        <div class="dropdown" data-type="click">
            <button class="btn clickable">{{propValue}}</button>
            <div class="menu">
                <div class="item">item1</div>
                <div class="item">item2</div>
                <div class="item">item3</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Dropdown } from '../../node_modules/@eds/vanilla/dropdown/Dropdown.js'

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
    mounted() {
        const dropdown = new Dropdown(this.$el)
        dropdown.init()
    },
}
</script>

<style lang="css" scoped>
@import '../../node_modules/@eds/vanilla/dropdown/styles.css';
.dropdown {
    flex-grow: 1;
}
</style>