<template>
  <div role="alert">
    <div>
      <span v-if="title">{{ title }}</span>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
