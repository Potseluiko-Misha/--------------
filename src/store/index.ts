import { reactive } from 'vue'

export const GREEN_THRESHOLD = 70;
export const ORANGE_THRESHOLD = 40;

export const GAME_SPEED = 2;

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

type TPet = {
    name: string | null,
    state: Record<string, number>,
    isDead: boolean,
    action: string | null,
    score: number
}

export const state = reactive<{ pet: TPet, decrease: (type: string) => void,
    increase: (type: string) => void, score: number, }>({
    pet:{
        name: null,
        score: 0,
        state: {
            happiness: 1,
            hungry: 1,
            energy: 1,
            healhty: 1,
            hygiene: 1,
        },
        isDead: false,
        action: 'init',
    },
    score: 0,
    decrease(type: string) {
        if (this.pet.action) return
        let newValue = this.pet.state[type] - getRandomInt(10);
        if (newValue <= 0) {
            newValue = 1;
        }
        this.pet.state[type] = newValue;
    },
    increase(type: string) {
        let newValue = this.pet.state[type] + getRandomInt(30);
        if (newValue > 100) {
            newValue = 100;
        }
        this.pet.state[type] = newValue;
        this.pet.score += 1;
    }
})