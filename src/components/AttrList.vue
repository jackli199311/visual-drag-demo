<!-- TODO: 这个页面后续将用 JSX 重构 -->
<template>
    <div class="attr-list">
        <el-form>
            <el-form-item v-for="({key,label}, index) in styleKeys" :key="index" :label="label">
                <el-color-picker v-if="key == 'borderColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'color'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'backgroundColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-select v-else-if="selectKey.includes(key)" v-model="curComponent.style[key]">
                    <template v-if="key == 'textAlign'">
                        <el-option
                            v-for="item in textAlignOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                    <template v-else-if="key == 'borderStyle'">
                        <el-option
                            v-for="item in borderStyleOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                    <template v-else>
                        <el-option
                            v-for="item in verticalAlignOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                </el-select>
                <el-input type="number" v-else v-model.number="curComponent.style[key]" />
            </el-form-item>
            <el-form-item label="Label" v-if="curComponent && !excludes.includes(curComponent.component)">
                <el-input type="textarea" v-model="curComponent.propValue" />
            </el-form-item>
            <el-form-item label="Data Source">
                <el-input type="text" v-model="curComponent.dataSource" />
            </el-form-item>
            <el-form-item label="Target" v-if="hasTargetField.includes(curComponent.component)">
                <el-input type="text" v-model="curComponent.targetValue" />
            </el-form-item>
            <el-form-item label="Action">
                <el-input type="textarea" v-model="curComponent.action" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import attrNameData from '@/utils/attrNameData'

export default {
    data() {
        return {
            excludes: ['Image', 'Group'], // 这些组件不显示内容
            hasTargetField: ['v-button'],
            textAlignOptions: [
                {
                    label: '左对齐',
                    value: 'left',
                },
                {
                    label: '居中',
                    value: 'center',
                },
                {
                    label: '右对齐',
                    value: 'right',
                },
            ],
            borderStyleOptions: [
                {
                    label: '实线',
                    value: 'solid',
                },
                {
                    label: '虚线',
                    value: 'dashed',
                },
            ],
            verticalAlignOptions: [
                {
                    label: '上对齐',
                    value: 'top',
                },
                {
                    label: '居中对齐',
                    value: 'middle',
                },
                {
                    label: '下对齐',
                    value: 'bottom',
                },
            ],
            selectKey: ['textAlign', 'borderStyle', 'verticalAlign'],
            attrNameData,
        }
    },
    computed: {
        styleKeys() {
            if (this.$store.state.curComponent) {
                const curComponentStyleKeys = Object.keys(this.$store.state.curComponent.style)
                return this.attrNameData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
}
</script>

<style lang="scss" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>
