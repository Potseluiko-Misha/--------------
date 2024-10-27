import { reactive } from 'vue'

export const GREEN_THRESHOLD = 70;
export const ORANGE_THRESHOLD = 40;

export const GAME_SPEED = 5;

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

type TPet = {
    name: string | null,
    state: Record<string, number>,
    isDead: boolean,
    decrease: (type: string) => void,
    increase: (type: string) => void,
}

export const pet = reactive<TPet>({
    name: null,
    state: {
        happiness: 1,
        hungry: 1,
        energy: 1,
        healhty: 1,
        hygiene: 1,
    },
    isDead: false,
    decrease(type: string) {
        let newValue = this.state[type] - getRandomInt(10);
        if (newValue <= 0) {
            newValue = 1;
        }
        this.state[type] = newValue;
    },
    increase(type: string) {
        let newValue = this.state[type] - getRandomInt(30);
        if (newValue > 100) {
            newValue = 100;
        }
    }
})