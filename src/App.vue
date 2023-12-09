<script setup>
import ProductList from "./components/ProductList.vue";
import FloatingButton from "./components/FloatingButton.vue";
import Searcher from "./components/Searcher.vue";
import Modal from "./components/ModalTwo.vue";
import ModalTwo from "./components/ModalTwo.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ResumeOrder from "./components/ResumeOrder.vue";
import BtnAdd from "./components/BtnAdd.vue";
import BtnWhatsapp from "./components/BtnWhatsapp.vue";
import { computed, ref,onMounted } from "vue";
const productSelected = ref(null);
const cart = ref({});
const addToCart = (product, extra = "null") => {
  if (cart.value[product.id + "-" + extra]) {
    cart.value[product.id + "-" + extra].quantity++;
  } else {
    cart.value[product.id + "-" + extra] = {
      principal: product,
      extra: extra,
      quantity: 1,
    };
  }
};

const removeFromCart = (product, extra="null") => {
  console.log(product, extra);
  if (cart.value[product.id + "-" + extra].quantity > 1) {
    cart.value[product.id + "-" + extra].quantity--;
  } else {
    delete cart.value[product.id + "-" + extra];
  }
};

const totalItems = computed(() => {
  let total = 0;
  for (const key in cart.value) {
    total += cart.value[key].quantity;
  }
  return total;
});

const showCart = ref(false);
const search = ref("");

onMounted(() => {
  console.log("mounted");
  console.log("BASE_URL",import.meta.env.VITE_BASE_URL?.toString() || "");
  console.log("WHATSAPP_NUMBER",import.meta.env.VITE_WHATSAPP_NUMBER?.toString() || "");
});
</script>

<template>
  <div class="container">
    <Searcher v-model="search" />
    <ProductList @select="productSelected = $event" />

    <transition name="modal-fade" appear>
      <ModalTwo v-if="productSelected != null" @close="productSelected = null">
        <template #title>{{ productSelected.name }} </template>
        <template #default>
          <ProductDetails
            v-if="productSelected != null"
            :product="productSelected"
            #default="{ subitem }"
          >
          <div class="options-container">
            <div class="with-80">
<BtnAdd 
                @click="addToCart(productSelected, subitem)"
              ></BtnAdd>
            </div>
            <div class="with-20">
              <BtnAdd @click="productSelected=null;showCart=true">
                Terminar de pedir
              </BtnAdd>
            </div>
          </div>
            
          </ProductDetails>
        </template>
      </ModalTwo>
    </transition>
    <FloatingButton
      @click="showCart = true"
      :number="totalItems"
      class="floating-btn"
    />
  </div>
  <Modal v-if="showCart" @close="showCart = false">
    <template #title>Carrito</template>
    <template #default>
      <ResumeOrder :cart="cart" @add="addToCart" @remove="removeFromCart" />
    </template>
  </Modal>
</template>
<style>
/**prevent childs excede witdh */
.container * {
  max-width: 100%;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  overflow-x: hidden;
}
.floating-btn {
  bottom: 1rem;
  right: 1rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 2s transform ease-in-out;
}

.options-container
{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;

}

.with-80
{
  width: 80%;
  display: flex;
  flex-direction: row;
}

.with-20
{
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
