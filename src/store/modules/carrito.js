export const carritoModule = {
  namespaced: true, // es para considerar este modulo aparte
  state: {
    todosLosProductos: []
  },

  getters: {
    totalTotal(state) {
      return state.todosLosProductos.reduce((accumulator, producto) => {
        accumulator += producto.precio * (1 - producto.descuento / 100) * producto.cantidad
        return accumulator
      }, 0)
    }
  },
  mutations   : {
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    },
    AGREGAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos[indiceProducto].cantidad++;
    },
    QUITAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos[indiceProducto].cantidad--;
    },
    QUITAR_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos.splice(indiceProducto, 1)
    },
    RESTAR_STOCK(state, indiceProducto) {
    state.todosLosProductos[indiceProducto].stock -= 1;
    }

  },
  actions: {
    agregarProducto(context, producto) {
      const indiceDelProductoQueNecesito = context.state.todosLosProductos.findIndex
      ((productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre)

      if (indiceDelProductoQueNecesito === -1) {  // con esto que el producto al dar comprar se repita
       
        // eslint-disable-next-line no-unused-vars
        const { stock, ...nuevoProducto } = producto
        context.commit('AGREGAR_PRODUCTO', { ...nuevoProducto, cantidad: 1 })
      } 
      
      /* significa que si lo encontro */
      
      else {
        context.commit('AGREGAR_CANTIDAD_PRODUCTO', indiceDelProductoQueNecesito)
      }
      const indiceProducto = context.state.todosLosProductos.findIndex
      (todosLosProductos => todosLosProductos.nombre === producto.nombre );

      if(context.state.todosLosProductos[indiceProducto].stock > 0){
        context.commit("RESTAR_STOCK", indiceProducto);
      }
      
    },

    quitarProducto(context, producto){
      const indiceDelProductoQueNecesito = context.state.todosLosProductos.findIndex
      ((productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre) 

      

      if(indiceDelProductoQueNecesito >= 0) {
        if(context.state.todosLosProductos[indiceDelProductoQueNecesito].cantidad > 1){
          context.commit('QUITAR_CANTIDAD_PRODUCTO', indiceDelProductoQueNecesito)
        } 
        else {
          context.commit('QUITAR_PRODUCTO', indiceDelProductoQueNecesito)
        }
      } else {
        console.error('el producto no existe en el carrito de compras')
      }
    }, 

    
  }
}
