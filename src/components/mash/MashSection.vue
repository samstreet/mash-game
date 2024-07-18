<script setup lang="ts">
import type { CarProperty } from '@/types/CarProperty'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { PersonProperty } from '@/types/PersonProperty'
import AnimatedStrikethrough from '@/components/elements/AnimatedStrikethrough.vue'

defineProps<{
  sectionTitle: string
  options: JobProperty[] | CarProperty[] | PersonProperty[] | KidsProperty[]
}>()
</script>

<template>
  <div class="bg-white m-8 p-2 rounded-lg shadow-md">
    <h1 class="text-xl font-bold tracking-tight text-black sm:text-2xl text-left text-black my-4">
      {{ sectionTitle }}
    </h1>
    <ul class="text-left text-black">
      <li v-for="(option, key) in options" :key="key">
        <AnimatedStrikethrough
          :text="option.value"
          :is-available="option.isAvailable"
        ></AnimatedStrikethrough>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
