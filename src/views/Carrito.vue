<template>

  <div class="cart" :style="{'background-image':'url(https://image.jimcdn.com/app/cms/image/transf/none/path/s6c0188f3f2194ffd/backgroundarea/i214a6d1871130433/version/1522826819/image.jpg)'}">
      <h2 class="shopcart display-3 font-weight-bold animate__animated animate__lightSpeedInLeft">Carrito de compras</h2>
       
       <div class="row">
       <button class="btn btn-danger mr-4"> Comprar</button>
       <p class="totalpagar">Total a Pagar: $:{{ $store.getters['carrito/totalTotal']}}</p>
       </div>

    <Producto v-for="(producto, $index) in 
       $store.state.carrito.todosLosProductos" 
       :key="$index" :producto="producto"  />

      <img class="banner" src="https://image.jimcdn.com/app/cms/image/transf/none/path/s6c0188f3f2194ffd/backgroundarea/i214a6d1871130433/version/1522826819/image.jpg" alt="" />
  </div>

</template>

<script>

import Producto from "../components/Carrito/Producto.vue"

export default {
  components: { Producto }
}
</script>

<style>
.cart {
  font-family: 'Oswald', sans-serif;
  justify-content: center;
  margin: 0;
}
.shopcart {
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 30px;
}

.totalpagar {
  color:#fff;
}



</style>