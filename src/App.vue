<template>
  <div :style="{'background-image':'url(https://image.jimcdn.com/app/cms/image/transf/none/path/s6c0188f3f2194ffd/backgroundarea/i214a6d1871130433/version/1522826819/image.jpg)'}">
    <Navbar />
    
    <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import Navbar from './components/App/Navbar.vue'

export default {
  name: "App",
  components: { Navbar }
}
</script>

<style scoped>
#app {
  background-image: url('https://image.jimcdn.com/app/cms/image/transf/none/path/s6c0188f3f2194ffd/backgroundarea/i214a6d1871130433/version/1522826819/image.jpg)');
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>