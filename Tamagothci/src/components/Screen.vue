<template>
    <div>
        <div class="screen_header">
            <v-progress-circular
                color="green"
                model-value="100"
            ></v-progress-circular>
            <v-progress-circular
                color="orange"
                model-value="70"
            ></v-progress-circular>
            <v-progress-circular
                color="orange"
                model-value="50"
            ></v-progress-circular>
            <v-progress-circular
                color="red"
                model-value="40"
            ></v-progress-circular>
            <v-progress-circular
                color="red"
                model-value="10"
            ></v-progress-circular>
        </div>
        <div class="pet"></div>
        <div class="screen_action"></div>
    </div>
</template>

<script setup>

</script>