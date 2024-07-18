<template>
  <div class="flex justify-center items-center space-x-2">
    <div class="dot bg-blue-500 w-3 h-3 rounded-full"></div>
    <div class="dot bg-blue-500 w-3 h-3 rounded-full"></div>
    <div class="dot bg-blue-500 w-3 h-3 rounded-full"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.dot {
  animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}
</style>
