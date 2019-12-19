<template lang="html">
  <div class="carousel pl-4 pr-2 py-1">

    <carousel :nav="false" :dots="false" :items="2" >
      <template slot="prev"><span class="prev"><i class="fas fa-chevron-left"></i></span></template>
      <span :class="{active : ruta === '/sucursales'}" class="p-1">
        <router-link to="/sucursales">SUCURSALES</router-link>
      </span>
      <span :class="{active : ruta === '/entregas'}" class="p-1">
        <router-link to="/entregas">ENTREGAS</router-link>
      </span>
      <span :class="{active : ruta === '/novedades'}" class="p-1">
        <router-link to="/novedades">NOVEDADES</router-link>
      </span>
      <span :class="{active : ruta === '/promociones'}" class="p-1">
        <router-link to="/promociones">PROMOCIONES</router-link>
      </span>

      <template slot="next"><span class="next"><i class="fas fa-chevron-right"></i></span></template>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'BotMovil',
  components: {
    carousel
  },
  computed: {
    ruta(){
      return this.$route.path
    }
  }
}
</script>

<style lang="css" scoped>
.carousel{
  width: 100%;
  background-color: #FDDF31;
  border-radius: 15px;
}
.carousel span{
  /* padding: 2px; */
}
.prev, .next{
  position:absolute;
  z-index: 99;
  display: inline-block;
  top: 4.5px;
  color: white;
}
.next{
  right: 5px;
}
.prev{
  left: 5px;
}
a{
  color: white;
  font-size: 17px;
}
a:active{
  color:black;
  text-decoration: none;
}
a:hover{
  color:white;
  text-decoration: none;
}
.active{
  /* background-color:#B3CADC; */
  color:black;
  text-decoration: none;
}
.active:active{
  color:black;
  text-decoration: none;
}
.active:hover{
  color:white;
  text-decoration: none;
}
</style>
