<template>
  <div class="test">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>
