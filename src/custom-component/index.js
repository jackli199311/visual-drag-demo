import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VButton',
    'Group',
    'RectShape',
    'Dropdown',
    'TextField',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})