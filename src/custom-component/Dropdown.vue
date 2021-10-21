<template>
    <div class="light" style="display:inline-flex">
        <div class="dropdown" data-type="click">
            <button class="btn clickable">Share report</button>
            <div class="menu">
                <div class="item">Download</div>
                <div class="item">Copy link</div>
                <div class="item">Mail to</div>
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
.v-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    width: 100%;
    height: 100%;
    font-size: 14px;
}
</style>