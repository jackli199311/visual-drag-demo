export default {
    mutations: {
        updateSource(state, data) {
            if (data && data.key && data.value) {
                state.custom[data.key] = data.value
            }
        },
    },
}