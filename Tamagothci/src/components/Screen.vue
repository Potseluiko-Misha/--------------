<template>
    <div class="screen">
        <div class="screen_header">
            <v-progress-circular
                :size="50"
                :color="getColorByValue(pet.state.happiness)"
                :model-value="pet.state.happiness"
            >
                <template v-slot:default>😃</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                :color="getColorByValue(pet.state.hungry)"
                :model-value="pet.state.hungry"
            >
                <template v-slot:default>🍔</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                :color="getColorByValue(pet.state.energy)"
                :model-value="pet.state.energy"
            >
                <template v-slot:default>💪</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                :color="getColorByValue(pet.state.healhty)"
                :model-value="pet.state.healhty"
            >
                <template v-slot:default>💊</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                :color="getColorByValue(pet.state.hygiene)"
                :model-value="pet.state.hygiene"
            >
                <template v-slot:default>🚿</template> 
            </v-progress-circular>
        </div>
        <div class="pet">
            <v-img
                height="400"
                :src="imageSrc"
            />
        </div>
        <div class="screen_action">
            <v-btn @click="restart()">
                RESTART
            </v-btn>
        </div>
        <div class="screen_action">
            <v-btn @click="increaeValue('hungry')">
                🍴
            </v-btn>
            <v-btn @click="increaeValue('happiness')">
                ⚽️
            </v-btn>
            <v-btn @click="increaeValue('energy')">
                🛌
            </v-btn>
            <v-btn @click="increaeValue('healhty')">
                👨‍⚕️
            </v-btn>
            <v-btn @click="increaeValue('hygiene')">
                🧽
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import { state, GREEN_THRESHOLD, ORANGE_THRESHOLD, GAME_SPEED } from '@/store'
import { computed, watch, ref } from 'vue';
import humster from '@/assets/humster.png';
import humsterHappy from '@/assets/humsterHappy.png';
import humsterNeutral from '@/assets/humsterNeutral.png';
import humsterSad from '@/assets/humsterSad.png';
import humsterSleepy from '@/assets/humsterSleepy.png';
import humsterSik from '@/assets/humsterSik.png';
import humsterEat from '@/assets/humsterEat.png';
import humsterHealing from '@/assets/humsterHealing.png';
import humsterPlaying from '@/assets/humsterPlaying.png';
import humsterSleeping from '@/assets/humsterSleeping.png';
import humsterWashing from '@/assets/humsterWashing.png';
import humsterDeath from '@/assets/humsterDeath.png';

const pet = state.pet;

let deathTimeoutId = ref(null);

const imgList = {
    init: humster,
    neutral: humsterNeutral,
    happy: humsterHappy,
    sad: humsterSad,
    sleepy: humsterSleepy,
    sik: humsterSik,
    dead: humsterDeath,
    'action-hungry': humsterEat,
    'action-healhty': humsterHealing,
    'action-happiness': humsterPlaying,
    'action-energy': humsterSleeping,
    'action-hygiene': humsterWashing,
}
 

const getColorByValue = (value) => {
    if (value > GREEN_THRESHOLD) {
        return 'green';
    } else if (value > ORANGE_THRESHOLD) {
        return 'orange';
    } else {
        return 'red';
    }
}

const imageSrc = computed(() => {

    if (pet.isDead) {
        return imgList.dead;
    }

    //check action
    if (pet.action) {
        if (imgList[pet.action]) {
            resetAction();
            return imgList[pet.action];
        }
    }

    const isHappy = Object.values(pet.state).every((value) => value >= GREEN_THRESHOLD);

    if (isHappy) {
        return imgList.happy;
    }

    if (pet.state.healhty < ORANGE_THRESHOLD) {
        return imgList.sik;
    }

    if (pet.state.energy < ORANGE_THRESHOLD) {
        return imgList.sleepy;
    }

    const isSad = Object.values(pet.state).every((value) => value <= ORANGE_THRESHOLD + 10);

    if (isSad) {
        return imgList.sad;
    }

    return imgList.neutral;
});

const deathTimer = () => {
    deathTimeoutId = setTimeout(() => {
        pet.isDead = true;
    }, 20000 * GAME_SPEED);
}

watch(pet.state, () => {
    if (pet.state.healhty === 1 ||
        pet.state.hungry === 1 ||
        pet.state.energy === 1
    ) {
        // возможно здесь нужен timer
        if (!deathTimeoutId.value) {
            deathTimer();
        }
    }
}, { deep: true });

const resetAction = () => {
    setTimeout(() => {
        pet.action = null;
    }, 1500 * GAME_SPEED);
}

const increaeValue = (type) => {
    if (deathTimeoutId){
        clearTimeout(deathTimeoutId);
    }
    pet.action = `action-${type}`;
    state.increase(type);
}



 

</script>

<style lang="scss">

.screen {
    background-color: white;
    border-radius: 16px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}

.screen_header {
    display: flex;
    justify-content: space-around;
}

.screen_action {
    display: flex;
    justify-content: space-around;
    button {
        background-color: rgb(207, 207, 207);
        font-size: 24px;
    }
}

</style>