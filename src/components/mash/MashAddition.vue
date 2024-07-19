<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
  title: string
}>()

const value = ref()
</script>

<template>
  <div>
    <label for="price" class="block text-sm font-medium leading-6 text-gray-900">{{ title }}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input 
        v-if="title !== 'Kids'"
        v-model="value"
        type="text"
        :name="title"
        :id="title + '_addition'"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :placeholder="title"
        @change="
          $emit(`emitChange`, {
            property: title,
            value: value
          })
        "
      /> 

      <input
        v-else
        v-model="value"
        type="number"
        :name="title"
        min="11"
        max="100"
        :id="title + '_addition'"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :placeholder="title"
        @change="
          $emit(`emitChange`, {
            property: title,
            value: value
          })
        "
      />
    </div>
  </div>
</template>
