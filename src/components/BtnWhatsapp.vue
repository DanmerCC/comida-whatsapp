<template>
  <div class="btn-whatsapp" 
    :style="{width: width + 'rem', height: width + 'rem'}"
  >
      <i class="dcc-whatsapp"></i>
    </div>
</template>

<script setup>
defineProps({
    width: {
    type: Number,
    default: 3,
    },
});
</script>

<style scoped>
.btn-whatsapp {
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  background-color: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 100;
}

</style>