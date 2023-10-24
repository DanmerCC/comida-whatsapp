<template>
  <button
    @click="$emit('click')"
    :style="{
      bottom: bottom,
      right: bottom,
    }"
    :class="'over bg-white text-blue-500 p-2 rounded-md'"
  >
    <span ref="icon" class="icon-number">{{ number }}</span>
    <media src="/assets/sounds/coin.mp3" />
    <i class="fas fa-cart-plus"></i>
  </button>
</template>

<script setup>
import { defineProps, watch, ref } from "vue";
const props = defineProps({
  bottom: {
    type: String,
    default: "1rem",
  },
  right: {
    type: String,
    default: "1rem",
  },
  number: {
    type: Number,
    default: 0,
  },
});
const icon = ref(null);
watch(
  () => props.number,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      const audio = new Audio("/assets/sounds/coin.mp3");
      audio.play();
      icon.value.classList.add("icon-resalte");
      setTimeout(() => {
        icon.value.classList.remove("icon-resalte");
      }, 1000);
    }
  }
);
</script>

<style scoped>
.over{
  position: fixed;
  z-index: 11;
}
.icon-resalte {
  animation: resalte 1s ease-in-out;
  transform: scale(1.5) rotate(360deg);
  transition: all 1s ease-in-out;
}
.icon-number {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  position: fixed;
  background-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
