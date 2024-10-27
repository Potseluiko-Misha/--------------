import { reactive } from 'vue'

export const store = reactive({
    name: null,
    state: {
        happiness: 0,
        hungry: 0,
        energy: 0,
        healhty: 0,
        hygiene: 0
    },
    isDead: false
})