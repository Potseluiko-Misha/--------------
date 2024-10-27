<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="egg">
                    <div class="tg_screen">
                        <Screen/>
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
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Screen from './Screen.vue';


</script>


<style lang="scss">
.egg {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: wheat;
    height: 100vh;
    aspect-ratio: 3 / 4;
    border-radius: 100% / 125% 125% 80% 80%;
    position: relative;
}
//<!-- 1024 на 1024 разрешение картинок -->
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