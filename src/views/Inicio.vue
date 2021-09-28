<template>
  <div class="home">
    <img class="banner" src="https://cdn.shopify.com/s/files/1/1520/2468/collections/2018_Aventon_CollectionBanner_Desktop_Mataro_001_e9dfbdf4-588f-4163-a610-7d513f59bd03.jpg?v=1534449315" alt="" />
    <h3 class="ourproductos display-3 animate__animated animate__backInDown">Nuestros Productos</h3>
    <div class="row">
      <div
        class="col-sm mb-4 mb-md-0"
        v-for="(producto, $index) in $store.state.productos.todosLosProductos"
        :key="$index"
      >
        <TarjetaProducto :producto="producto" class="mx-auto" />
      </div>
    </div>
    <div>
       <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <ul>
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li>
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></li>
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></li>
                        </ul>
                        <p style="color: #fff"> Copyright La fixie Tienda 2021.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  </div>
 
</template>

<script>
import TarjetaProducto from '../components/Productos/TarjetaProducto.vue'
export default {
  components: { TarjetaProducto }
}
</script>

<style scoped>

.ourproductos {
  font-family: 'Oswald', sans-serif;
  color: #fff;
  text-align: center;
  padding: 50px;
}

.container {
  text-align: center;
}

.banner {
  object-fit: cover;
  width: 100%;
  height:10%;
  
}
</style>