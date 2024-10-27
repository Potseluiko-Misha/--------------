<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="egg">
                    <div class="spacer"></div>
                    <div v-if="pet.name" class="tg_screen">
                        <Screen/>
                    </div>
                    <div v-else class="create-new-pet">
                        <v-label class="mb-4">Create new pet</v-label>
                        <v-text-field v-model="newPetName" placeholder="Pet name"></v-text-field>
                        <v-btn @click="createPet">Create</v-btn>
                    </div>
                    <div class="tg_buttons">
                        <div class="flex between">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                        <div class="flex center">
                            <div class="circle"></div>
                        </div>
                    </div>
                    <div class="spacer"></div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Screen from './Screen.vue';
import { GAME_SPEED, pet } from '@/store';

let newPetName = ref('');


const createPet = () => {
    pet.name = newPetName;
    pet.state = {
        happiness: 100,
        hungry: 100,
        energy: 100,
        healhty: 100,
        hygiene: 100,
    }
    newPetName = '';
    startGame();
}

const startGame = () => {
    decreaseTimer();
}

const decreaseTimer = () => {
    setTimeout(() => {
        pet.decrease('happiness');
        pet.decrease('hungry');
        pet.decrease('energy');
        pet.decrease('healhty');
        pet.decrease('hygiene');
        decreaseTimer();
    }, 1000 * GAME_SPEED);
}

</script>


<style lang="scss">
.egg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: wheat;
    height: 100vh;
    aspect-ratio: 3 / 4;
    border-radius: 100% / 125% 125% 80% 80%;
    position: relative;
}
//<!-- 1024 на 1024 разрешение картинок -->

.create-new-pet {
    width: 40%;
    color: black;
    text-align: center;
}

.spacer {
    height: 20vh;
}

.tg_screen {
    width: 600px;

}

.tg_buttons {
    width: 70%;

    .flex {
        display: flex;

        &.between {
            justify-content: space-between;
        }

        &.center {
            justify-content: center;
        }
    }
    .circle {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 50%;
    }
}
</style>