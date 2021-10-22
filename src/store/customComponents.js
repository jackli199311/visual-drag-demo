export default {
    mutations: {
        updateSource(state, data) {
            if (data.key === '') {
                return
            }
            const props = data.key.split('.')
            let currState = state.custom
            for (let i = 0; i < props.length - 1; i++) {
                if (!currState[props[i]]) {
                    currState[props[i]] = {}
                } else {
                    currState = currState[props[i]]
                }
            }
            currState[props[props.length - 1]] = data.value
        },
    },
}