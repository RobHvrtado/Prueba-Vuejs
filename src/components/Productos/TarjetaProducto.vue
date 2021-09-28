<template>
  <div class="container card" style="width: 18rem">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body">
      <h6>{{ producto.nombre }}</h6>
    </div>
    <ul class="list-group">
      <li class="list-group-item">Categoria: {{ producto.categoria }}</li>
      <li class="list-group-item">Peso: {{ producto.peso }}</li>
      <li class="list-group-item">Precio: ${{ producto.precio }}</li>
      <li class="list-group-item">Descuento:
        {{ producto.oferta ? `${producto.descuento}% off` : 'Sin descuento' }}
      </li>
    </ul>
    <div>
      <button class="btn btn-danger btn-sm m-2" 
             @click="agregarProductoAlCarrito">Agregar al carrito</button>
      </div>
  </div>
</template>

<script>



export default {
  props: {
    producto: { type: Object, required: true }
  },
  methods: {
    agregarProductoAlCarrito() {
      this.$store.dispatch('carrito/agregarProducto', this.producto) // se hace de esta manera al estar en su propia 
    }
  }
}
</script>

<style>
.card {
   font-family: 'Oswald', sans-serif;
   
   
}

</style>