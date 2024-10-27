<template>
    <div class="screen">
        <div class="screen_header">
            <v-progress-circular
                :size="50"
                color="green"
                model-value="100"
            >
                <template v-slot:default>😃</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                color="orange"
                model-value="70"
            >
                <template v-slot:default>🍔</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                color="orange"
                model-value="50"
            >
                <template v-slot:default>💪</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                color="red"
                model-value="40"
            >
                <template v-slot:default>💊</template> 
            </v-progress-circular>
            <v-progress-circular
                :size="50"
                color="red"
                model-value="10"
            >
                <template v-slot:default>🚿</template> 
            </v-progress-circular>
        </div>
        <div class="pet">
            <v-img
                height="400"
                src="@/assets/humster.png"
            />
        </div>
        <div class="screen_action">
            <v-btn>
                🍴
            </v-btn>
            <v-btn>
                ⚽️
            </v-btn>
            <v-btn>
                🛌
            </v-btn>
            <v-btn>
                👨‍⚕️
            </v-btn>
            <v-btn>
                🧽
            </v-btn>
        </div>
    </div>
</template>

<script setup>

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