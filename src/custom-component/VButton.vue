<template>
    <div class="light" style="display:inline-flex">
        <button class="btn">{{ propValue }}</button>
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
@import '../../node_modules/@eds/vanilla/button/styles.css';
.btn {
    flex-grow: 1;
}
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
