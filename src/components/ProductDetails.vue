<template>
  <div
    class="product-details bg-blue-500 text-white p-4"
    @click.prevent.stop="$emit('click')"
  >
    <img :src="product.image" />
    <p class="text-xl">{{ formatCurrency(product.price) }}</p>
    <p>Elije una entrada</p>
    <Slider :slides="otherOptions" v-model:slideIndex="currentSlideIndex">
      <template #default="{ slide }">
        <div class="slide-item" @click="navigate()" >{{ slide }}</div>
      </template>
    </Slider>
    <slot :subitem="otherOptions[currentSlideIndex]"></slot>
  </div>
</template>

<script setup>
import Slider from "./Slider.vue";
import { computed, ref } from "vue";
import config from "../config";
const formatCurrency = ref(config.formatCurrency);
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const currentSlideIndex = ref(0);
const otherOptions = computed(() => {
  const options = ["sopa de casa", "ensalada fresca", "solterito", "ceviche"];
  return options;
});

const navigate = () => {
  currentSlideIndex.value++;
  if (currentSlideIndex.value >= otherOptions.value.length) {
    currentSlideIndex.value = 0;
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
<style scoped>
.slide-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  min-width: fit-content;
  cursor: pointer;
}
</style>
<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem;
  margin-left: 0rem;
  margin-right: 0rem;
  min-width: fit-content;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-xl {
  font-size: 1.5rem;
  margin: 0.1rem 0rem;
}

p{
  margin: 0.1rem 0rem 0rem 0rem;
}
</style>
