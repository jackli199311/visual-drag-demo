import Vue from 'vue'

const components = [
    'Image',
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