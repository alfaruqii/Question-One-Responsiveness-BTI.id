<script setup lang="ts">
defineProps<{ color: string; no: string }>();
</script>

<template>
  <div
    class="w-full h-full flex items-center justify-center"
    :class="color === 'red' ? 'bg-solid-red' : 'bg-solid-blue'"
  >
    {{ no }}
  </div>
</template>
