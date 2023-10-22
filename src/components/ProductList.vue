<script setup>
import { ref } from "vue";
import Product from "./Product.vue";

const products = ref([
  {
    id: 1,
    name: "Lomo saltado",
    price: 10,
    image: "/assets/images/lomosaltado.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Arroz con pollo",
    price: 10,
    image: "/assets/images/arroz_con_pollo.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Chaufa amazonico",
    price: 28,
    image: "/assets/images/chaufa_amazonico.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }, {
    id: 1,
    name: "Lomo saltado",
    price: 10,
    image: "/assets/images/lomosaltado.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Arroz con pollo",
    price: 10,
    image: "/assets/images/arroz_con_pollo.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Chaufa amazonico",
    price: 28,
    image: "/assets/images/chaufa_amazonico.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    name: "Lomo saltado",
    price: 10,
    image: "/assets/images/lomosaltado.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Arroz con pollo",
    price: 10,
    image: "/assets/images/arroz_con_pollo.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Chaufa amazonico",
    price: 28,
    image: "/assets/images/chaufa_amazonico.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    name: "Lomo saltado",
    price: 10,
    image: "/assets/images/lomosaltado.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Arroz con pollo",
    price: 10,
    image: "/assets/images/arroz_con_pollo.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Chaufa amazonico",
    price: 28,
    image: "/assets/images/chaufa_amazonico.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    name: "Lomo saltado",
    price: 10,
    image: "/assets/images/lomosaltado.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Arroz con pollo",
    price: 10,
    image: "/assets/images/arroz_con_pollo.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Chaufa amazonico",
    price: 28,
    image: "/assets/images/chaufa_amazonico.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);
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
