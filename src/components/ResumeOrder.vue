<template>
  <div class="container" @click.prevent.stop="null">
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Extra</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.principal.id + '-' + item.extra">
          <td>
            {{ item.principal.name }}
            <span v-if="item.extra != 'null'">({{ item.extra }})</span>
          </td>
          <td>{{ item.extra }}</td>
          <td>
            <button class="btn-add" @click="addToCart(item.principal, item.extra)">
              +
            </button>
            {{ item.quantity }}
            <button class="btn-remove" @click="remove(item.principal, item.extra)">
              -
            </button>
          </td>
          <td>{{ formatCurrency(item.principal.price) }}</td>
          <td>{{ formatCurrency(item.principal.price * item.quantity) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>{{ formatCurrency(total) }}</td>
        </tr>
      </tfoot>
    </table>
    <!--whatsapp pedido-->
    <div class="btn-whatsapp" @click="sendCartRequest(cart)">
      <i class="dcc-whatsapp"></i>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
import config from "../config";

const emit = defineEmits(["add", "remove"]);

const props = defineProps({
  cart: {
    type: Object,
    required: true,
  },
});

const formatCurrency = ref(config.formatCurrency);
const addToCart = (principal, extra) => {
  emit("add", principal, extra);
};
const remove = (principal, extra) => {
  emit("remove", principal, extra);
};

const sendCartRequest = (cart) => {
  //alert("Enviando pedido");
  let messageResume = `*Pedido*%0A *Total:* ${formatCurrency.value(
    total.value
  )}%0A *Productos:*%0A
    Detalle del pedido:%0A`;
  for (const key in cart) {
    messageResume += `${cart[key].principal.name} (${cart[key].extra}) x ${
      cart[key].quantity
    } = ${formatCurrency.value(cart[key].principal.price * cart[key].quantity)}%0A`;
  }
  messageResume += `%0A*Total:* ${formatCurrency.value(total.value)}
  %0A*Nombre:*%0A
  %0A*Dirección:*%0A
  `;
  let a = document.createElement("a");
  a.href = `https://api.whatsapp.com/send?phone=${config.whatsapp.phone}&text=${messageResume}`;
  a.target = "_blank";
  a.click();
};

const total = computed(() => {
  let total = 0;
  for (const key in props.cart) {
    total += props.cart[key].principal.price * props.cart[key].quantity;
  }
  return total;
});
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid #ccc;
}
.btn-whatsapp {
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 100;
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

.btn-remove {
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
  background-color: rgb(255, 0, 0) !important;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem;
}

.container table {
  width: 100%;
}

.container table thead {
  background-color: #ccc;
}

.container table thead th {
  padding: 0.5rem;
}

.container table tbody tr td {
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/**respoisble table */
@media (max-width: 768px) {
  .container table thead {
    display: none;
  }

  .container table tbody tr td {
    display: block;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  td {
    width: 100%;
  }
}
</style>
