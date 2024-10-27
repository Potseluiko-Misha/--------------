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
                        <v-label>Create new pet</v-label>
                        <v-text-field placeholder="Pet name"></v-text-field>
                        <v-btn>Create</v-btn>
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
import Screen from './Screen.vue';
import { pet } from '@/store';

if(pet.name === null) {
  console.log('create new pet');

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