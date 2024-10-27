import { reactive } from 'vue'

export const pet = reactive({
    name: null,
    state: {
        happiness: 1,
        hungry: 1,
        energy: 1,
        healhty: 1,
        hygiene: 1,
    },
    isDead: false
})