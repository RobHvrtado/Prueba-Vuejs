<template>
<div class="notfound">
  <h1 class="noexiste animate__animated animate__wobble">Esta pagina no existe bro</h1>
  <img class="fotoerror" src="https://www.beastybike.co.uk/17615-large_default/aventon-mataro-midnight-white-2018.jpg" alt="" />
</div>
</template>

<script>
export default {

}
</script>

<style>
.notfound {
    background-image: url('https://image.jimcdn.com/app/cms/image/transf/none/path/s6c0188f3f2194ffd/backgroundarea/i214a6d1871130433/version/1522826819/image.jpg');
    background-size: cover;
    color:#fff;
}
.noexiste {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    animation: wobble; 
  animation-duration: 3s;

}

img{
display:block;
margin:auto;

}

</style>