<template>
  <div role="alert" class="p-3 border-2 border-current rounded">
    <div v-if="title" class="font-bold">
      {{ title }}
    </div>
    <div>
      <!-- @slot Content of the alert message -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** Title of the alert message */
  title: string;
}>();
</script>
