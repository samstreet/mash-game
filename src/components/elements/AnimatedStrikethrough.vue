<!-- src/components/AnimatedStrikethrough.vue -->
<template>
  <div class="relative inline-block">
    <span class="strikethrough-text">{{ text }}</span>
    <span v-if="!isAvailable" class="strikethrough-animation"></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string | number
  isAvailable: boolean
}>()
</script>

<style scoped>
.strikethrough-text {
  position: relative;
  z-index: 10;
}

.strikethrough-animation {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: red; /* Customize the color as needed */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease-in-out;
}

.strikethrough-text + .strikethrough-animation {
  transform: scaleX(1);
}
</style>
