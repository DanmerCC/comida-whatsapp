<template>
  <div class="search-container">
    <input 
      type="search"
      placeholder="Buscar producto"
      v-model="search"
      @input="$emit('update:modelValue', search)"
    />
  </div>
</template>

<script setup>
import { ref , defineProps,defineEmits} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const search = ref("");

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
