<template>
    <div class="contextmenu" v-show="menuShow" :style="{ top: menuTop + 'px', left: menuLeft + 'px' }">
        <ul @mouseup="handleMouseUp">
            <template v-if="curComponent">
                <template v-if="!curComponent.isLock">
                    <li @click="copy">Copy</li>
                    <li @click="paste">Paste</li>
                    <li @click="cut">Cut</li>
                    <li @click="deleteComponent">Delete</li>
                    <li @click="lock">Lock</li>
                    <li @click="topComponent">Top</li>
                    <li @click="bottomComponent">Bottom</li>
                    <li @click="upComponent">Up</li>
                    <li @click="downComponent">Down</li>
                </template>
                <li v-else @click="unlock">Unlock</li>
            </template>
            <li v-else @click="paste">Paste</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            copyData: null,
        }
    },
    computed: mapState([
        'menuTop',
        'menuLeft',
        'menuShow',
        'curComponent',
    ]),
    methods: {
        lock() {
            this.$store.commit('lock')
        },

        unlock() {
            this.$store.commit('unlock')
        },

        // 点击菜单时不取消当前组件的选中状态
        handleMouseUp() {
            this.$store.commit('setClickComponentStatus', true)
        },

        cut() {
            this.$store.commit('cut')
        },

        copy() {
            this.$store.commit('copy')
        },

        paste() {
            this.$store.commit('paste', true)
            this.$store.commit('recordSnapshot')
        },

        deleteComponent() {
            this.$store.commit('deleteComponent')
            this.$store.commit('recordSnapshot')
        },

        upComponent() {
            this.$store.commit('upComponent')
            this.$store.commit('recordSnapshot')
        },

        downComponent() {
            this.$store.commit('downComponent')
            this.$store.commit('recordSnapshot')
        },

        topComponent() {
            this.$store.commit('topComponent')
            this.$store.commit('recordSnapshot')
        },

        bottomComponent() {
            this.$store.commit('bottomComponent')
            this.$store.commit('recordSnapshot')
        },
    },
}
</script>

<style lang="scss" scoped>
.contextmenu {
    position: absolute;
    z-index: 1000;

    ul {
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        margin: 5px 0;
        padding: 6px 0;

        li {
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #606266;
            height: 34px;
            line-height: 34px;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                background-color: #f5f7fa;
            }
        }
    }
}
</style>