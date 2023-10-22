<template>
  <div class="slide-container">
    <button class="btn btn-start" @click="previousSlide">{{ backIcon }}</button>
    <transition name="slide-fade" appear>
      <slot :slide="slides[slideIndex]"></slot>
    </transition>
    <button class="btn" @click="nextSlide">{{ nextIcon }}</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const { slides } = defineProps(["slides"]);
const emit = defineEmits(["update:slideIndex"]);
const slideIndex = ref(0);

const previousSlide = () => {
  if (slideIndex.value > 0) {
    slideIndex.value--;
    emit("update:slideIndex", slideIndex.value);
  }
};

const nextSlide = () => {
  if (slideIndex.value < slides.length - 1) {
    slideIndex.value++;
    emit("update:slideIndex", slideIndex.value);
  }
};

const backIcon = "<";
const nextIcon = ">";
</script>
<style scoped>

.btn {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: transparent;
}
.slide-container {
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  width: 100%;
  overflow-x: hidden;
  padding: 4px;
  margin: 0.5rem;
  font-size: 1.5rem;
}
</style>
