<template>
    <div>
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
        <div class="pet"></div>
        <div class="screen_action"></div>
    </div>
</template>

<script setup>

</script>