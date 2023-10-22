<template>
  <slot></slot>
</template>

<script setup>
const props = defineProps({
  slide: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
