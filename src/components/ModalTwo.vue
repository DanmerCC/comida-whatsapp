<!-- ModalComponent.vue -->
<template>
  <div class="modal-overlay" @click.prevent.stop="$emit('close')">
    <div class="modal" @click.prevent.stop>
      <div class="modal-header">
        <span class="modal-title">
        <slot name="title"></slot>
        </span>
        <span class="modal-close" @click="$emit('close')">✖</span>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("update:isOpen", false);
    },
  },
};
</script>

<style scoped>
/** position title */
.modal-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: bold;
}
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal {
  min-width: 50%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.modal-close {
  top: 10px;
  cursor: pointer;
}
.modal-content {
  padding: 4px;
  border-radius: 0 0 8px 8px;
  max-height: 80vh; /* Considerando que el header tiene una altura de 50px */
  overflow-y: scroll;
  overflow-x: hidden;
  /** color del padre pero sin transparencia */
  background-color: rgba(255, 255, 255, 1);
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 8px 8px 0 0;
}
@media screen and (max-width: 425px) {
  .modal {
    min-width: 90%;
  }
  td {
    display: block !important;
    font-size: 0.8rem;
    width: 100%;
    display: inline;
    margin-left: 2px;
    padding-left: 2px;
  }

  
}
</style>
