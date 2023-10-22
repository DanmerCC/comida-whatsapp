<template>
  <button class="btn-add" @click="$emit('click')">
    +
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-add {
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
  place-items: center;
  color: rgb(255, 255, 255) !important;
  background-color: rgb(9, 176, 0) !important;
}

</style>
