<script setup>
import config from "../config";
import { ref } from "vue";
const formatCurrency = ref(config.formatCurrency);
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product bg-blue-500 text-white p-5" @click="$emit('click')">
    <p class="text-xl text-center">{{ product.name }}</p>
    <img :src="product.image" />
    <p class="text-xl">{{ formatCurrency(product.price) }}</p>
    <p class="text-xl">{{ product.description }}</p>
    <!--add button-->
    <span
      class="btn-add bg-green text-white text-xl p-2 rounded-full"
      @click="$emit('add')"
    >
      +
    </span>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem;
  width: 200px;
}
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
@media (min-width: 768px) {
  .product {
    max-width: 200px;
  }
}
</style>
