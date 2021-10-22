<template>
    <div class="light" style="display:inline-flex">
        <button class="btn" @click="performAction">{{ propValue }}</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        propValue: {
            type: String,
            default: '',
        },
        targetValue: {
            type: String,
            default: '',
        },
        action: {
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
        performAction() {
            if (this.action !== '') {
                const values = this.action.split(' ')
                switch (values[0].toLowerCase()) {
                    case 'api':
                        switch (values[1].toLowerCase()) {
                            case 'get':
                                this.getData(values[2])
                                break
                            case 'post':
                                this.$store.commit('updateSource', { key: this.targetValue, value: this.sendApiRequest(values[2]) })
                        }
                        break
                    default:
                        break
                }
            } else if (this.targetValue) {
                this.$store.commit('updateSource', { key: this.targetValue, value: 'test' })
            }
        },
        sendApiRequest(url) {
            console.log(this.dataSource)
            return 'Success.'
        },
        getData(url) {
            // 'https://api.coindesk.com/v1/bpi/currentprice.json'
            axios.get(url)
            .then(response => (this.$store.commit('updateSource', { key: this.targetValue, value: response })))
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
