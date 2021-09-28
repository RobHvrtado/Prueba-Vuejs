export const productosModule = {
    namespaced: true,
    state: {
      todosLosProductos: [
        {
          nombre: 'Cinelli',
          categoria: 'Carbono',
          peso: '1,7kg',
          oferta: false,
          descuento: 0,
          precio: 1000,
          stock: 10,
          imagen:
            'https://www.santafixie.com/media/catalog/product/c/i/cinelli-parallax.optical-1.jpg'
        },
        {
          nombre: '8bar',
          categoria: 'Aluminio',
          peso: '1.9kg',
          oferta: true,
          descuento: 0,
          precio: 900,
          stock: 7,
          imagen: 'https://www.santafixie.com/en/media/catalog/product/cache/de11134daf21eb47fb0fa2b1743c4c8b/c/u/cuadro-8bar-fhain-v2-rookie-2.jpg'
        },
        {
          nombre: 'DosNoventa',
          categoria: 'Aluminio/Carbono',
          peso: '1.8kg',
          oferta: false,
          descuento: 0,
          precio: 880,
          stock: 5,
          imagen:
            'https://www.santafixie.com/media/catalog/product/cache/de11134daf21eb47fb0fa2b1743c4c8b/c/u/cuadro-kuala-3.jpg'
        },
        {
          nombre: 'Aventon',
          categoria: 'Aluminio',
          peso: '1.9kg',
          oferta: true,
          descuento: 10,
          precio: 800,
          stock: 15,
          imagen: 'https://www.santafixie.com/media/catalog/product/c/u/cuadro-aventon-cordoba-2018-negro-1.jpg'
        },
        {
          nombre: 'Skream',
          categoria: 'Carbono',
          peso: '1,7kg',
          oferta: false,
          descuento: 0,
          precio: 1000,
          stock: 8,
          imagen:
            'https://images.squarespace-cdn.com/content/v1/5134e178e4b0c6fb04dfe5c5/1624797391044-F9L1NE81JD85NN0812B7/SK_Ranger+x+Theregoesmemo_Promo_03b.jpg?format=1000w'
        },
        {
          nombre: 'Constantine',
          categoria: 'Aluminio',
          peso: '1.9kg',
          oferta: true,
          descuento: 5,
          precio: 900,
          stock: 20,
          imagen: 'https://64.media.tumblr.com/2a64d791bb755d7dbb74adb62600225c/tumblr_okjt45wvV51rmdkjro1_1280.jpg'
        },
        {
          nombre: 'BLB',
          categoria: 'Aluminio',
          peso: '1.9kg',
          oferta: true,
          descuento: 0,
          precio: 990,
          stock: 11,
          imagen: 'https://www.bricklanebikes.co.uk/images/thumbs/0026343_blb-viper-frameset-army-green_625.jpeg'
        },
        {
          nombre: 'Engine 11',
          categoria: 'Aluminio',
          peso: '1.8kg',
          oferta: true,
          descuento: 0,
          precio: 880,
          stock: 14,
          imagen: 'data:image/png;base64,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'
        },
        {
          nombre: 'Leader',
          categoria: 'Carbono',
          peso: '1.6kg',
          oferta: true,
          descuento: 0,
          precio: 900,
          stock: 5,
          imagen: 'https://www.eromman.com/images/detailed/1315/leader_bikes_fixed_gear_735_white_2019.JPG'
        },
       
      ]
    },
    mutations: {
      AGREGAR_PRODUCTO(state, nuevoProducto) {
        state.todosLosProductos.push(nuevoProducto)
      }
    },
    actions: {
      crearProducto(context, producto) {
        context.commit('AGREGAR_PRODUCTO', producto)
      }
    }
  }
  
  // $store.state.productos.todosLosProductos