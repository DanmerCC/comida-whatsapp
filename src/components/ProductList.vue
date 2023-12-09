<script setup>
import { onMounted, ref } from "vue";
import Product from "./Product.vue";
import producst from "../../data.json";

const products = ref(producst);
</script>
<template>
  <div class="wrapper">
    <transition-group name="product">
      <Product
        v-for="prod in products"
        :product="prod"
        :key="prod.id"
        @click="$emit('select', prod)"
      ></Product>
    </transition-group>
  </div>
</template>

<style scoped>
/*** transitions resize */
.product-enter-active,
.product-leave-active {
  transition: all 0.5s;
}

.product-enter,
.product-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

/*** responsive */

/** secure wwrapper use 100% */
.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.wrapper > * {
  flex: 1 1 200px;
}

.wrapper .product {
  flex: 1 1 200px;
}
</style>
