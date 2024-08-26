<script setup lang="ts">
import Box from "./Box.vue";
</script>

<template>
  <div class="min-h-screen p-3 text-white text-center">
    <div class="bg-black min-h-screen p-2 grid grid-rows-4 gap-4">
      <!-- Row 1 -->
      <div class="grid grid-rows-3 sm:grid-rows-2 gap-4">
        <div
          class="bg-solid-blue flex items-center justify-center sm:col-span-2 row-span-3 sm:row-span-1"
        >
          1
        </div>
        <Box color="blue" no="2" />
        <Box color="blue" no="3" />
      </div>
      <!-- Row 2 -->
      <div
        class="grid grid-rows-3 sm:grid-rows-1 grid-cols-1 row-span-3 sm:grid-cols-3 gap-4"
      >
        <!-- Left Section -->
        <div
          class="grid grid-cols-3 gap-4 sm:col-span-2 row-span-2 sm:row-span-1"
        >
          <div class="bg-solid-blue col-span-3 ow-span-2 p-2">
            <div class="bg-black h-full p-1">
              <Box color="red" no="4" />
            </div>
          </div>
          <Box color="blue" no="5" />
          <Box color="blue" no="6" />
          <Box color="blue" no="7" />
        </div>
        <!-- Right Section -->
        <div class="bg-solid-blue grid grid-cols-3 sm:grid-cols-1 gap-4 p-2">
          <div class="bg-black h-full p-2 flex items-center justify-center">
            <Box color="red" no="8" />
          </div>
          <div class="bg-black h-full p-2 flex items-center justify-center">
            <Box color="red" no="9" />
          </div>
          <div class="bg-black h-full p-2 flex items-center justify-center">
            <Box color="red" no="10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
