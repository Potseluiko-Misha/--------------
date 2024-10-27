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
                class="mb-4"
                height="400"
                src="@/assets/humster.png"
            />
        </div>
        <div class="screen_action">
            <v-button>
                🍴
            </v-button>
            <v-button>
                ⚽️
            </v-button>
            <v-button>
                🛏
            </v-button>
            <v-button>
                👨‍⚕️
            </v-button>
            <v-button>
                🧽
            </v-button>
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

</style>