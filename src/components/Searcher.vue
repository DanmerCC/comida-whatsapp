<template>
  <div class="search-container">
    <input type="search" placeholder="Buscar producto" />
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 10px;
  margin: 0.5rem;
  font-size: 1.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  min-width: 80vw;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>
