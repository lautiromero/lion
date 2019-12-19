<template>
  <div class="d-md-flex d-none justify-content-around align-items-center"
   :class="{homebtn : ruta === '/'}" id="cont-menu-bot">
    <div class="bot-item overflow-hidden " :class="{active : ruta === '/sucursales'}">
      <div class="white-box bg-white d-inline">
        <i class="fa fa-map-marked-alt"></i>
      </div>
      <router-link to="/sucursales">SUCURSALES</router-link>
    </div>
    <div class="bot-item overflow-hidden " :class="{active : ruta === '/entregas'}">
      <div class="white-box bg-white d-inline">
        <i class="fa fa-car"></i>
      </div>
      <router-link to="/entregas">ENTREGAS</router-link>
    </div>
    <div class="bot-item overflow-hidden " :class="{active : ruta === '/novedades'}">
      <div class="white-box bg-white d-inline">
        <i class="fa fa-comments"></i>
      </div>
      <router-link to="/novedades">NOVEDADES</router-link>
    </div>
    <div class="bot-item overflow-hidden " :class="{active : ruta === '/promociones'}">
      <div class="white-box bg-white d-inline">
        <i class="fa fa-bullhorn"></i>
      </div>
      <router-link to="/promociones">PROMOCIONES</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBot',
  components: {

  },
  computed: {
    ruta(){
      return this.$route.path
    }
  }
}
</script>

<style scoped>
#cont-menu-bot{
  height: 100%;
}
.bot-item{
  background-color: #6DA1BE;
  border: 1px solid rgba(246, 246, 246, 0.56);
  padding-top: .10rem ;
  padding-bottom: .10rem ;
  padding-right: .25rem ;
  border-bottom-left-radius: 6pt;
  border-top-right-radius: 6pt;
  font-size: 13px;

}
.white-box{
  border-bottom-left-radius: 7pt;
  border-top-right-radius: 7pt;
  /* font-size: 11px; */
  padding: .40rem;
  font-size: 14px;
}
svg{
  color:#7FA4BF!important;
}
a{
  color:white;
}
a:hover{
  text-decoration: none;
  color:white;
}
.active{
  background-color: rgba(255, 255, 255, 0.36);
}
.dfa{
  display: flex;
  justify-content: center;
  align-items: center;
}
.homebtn .bot-item{
  background-color: #ecd02d;
}
</style>
