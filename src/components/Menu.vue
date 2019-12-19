<template>
    <div id="menu-container" class="px-md-4">
      <div class="container-fluid">
        <div class="row">

            <div class="col-4 d-md-none d-flex align-items-center pl-4" v-on:click="isHidden = !isHidden">
                <a class="burger text-white" v-show="isHidden == true">
                  <i class="fas fa-bars" ></i>
                </a>

                <a class="burger text-white" v-show="!isHidden == true">
                  <i class="fas fa-times"></i>
                </a>
            </div>


          <div class="col-4 col-md-2 text-center dfa menu-sub">
            <router-link to="/">
              <img src="../assets/logo-test.png" class="logo" alt="">
            </router-link>
          </div>
          <div class="col-md-5 menu-hide">
            <ul class="list-unstyled d-flex align-items-center" style="height:100%">
              <li :class="{active : ruta === '/'}">
                <router-link to="/">HOME</router-link>
              </li>
              <li :class="{active : ruta === '/quienes-somos'}">
                <router-link to="/quienes-somos">QUIENES SOMOS</router-link>
              </li>
              <li :class="{active : ruta === '/contacto'}">
                <router-link to="/contacto">CONTACTO</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 movil-hide">
            <ul class="list-unstyled dfa" style="height:100%">
              <li class="">
                <a class="p-2" target="_blank" href="https://www.facebook.com/FinanceGroupSA"><i class="fab fa-facebook-square"></i></a>
              </li>
              <!-- <li class="">
                <a class="p-2" href="#"><i class="fab fa-twitter-square"></i></a>
              </li> -->
              <li class="">
                <a class="p-2" target="_blank" href="https://www.instagram.com/financegroupok/"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <transition name="slide-fade">
        <div id="menu-movil" class="d-md-none" v-if="!isHidden">
          <ul class="list-unstyled" style="height:100%" v-on:click="isHidden = !isHidden">
            <li :class="{active : ruta === '/'}">
              <router-link to="/">HOME</router-link>
            </li>
            <li :class="{active : ruta === '/quienes-somos'}">
              <router-link to="/quienes-somos">QUIENES SOMOS</router-link>
            </li>
            <li :class="{active : ruta === '/contacto'}">
              <router-link to="/contacto">CONTACTO</router-link>
            </li>
            <li :class="{active : ruta === '/sucursales'}">
              <router-link to="/sucursales">SUCURSALES</router-link>
            </li>
            <li :class="{active : ruta === '/entregas'}">
              <router-link to="/entregas">ENTREGAS</router-link>
            </li>
            <li :class="{active : ruta === '/novedades'}">
              <router-link to="/novedades">NOVEDADES</router-link>
            </li>
            <li :class="{active : ruta === '/promociones'}">
              <router-link to="/promociones">PROMOCIONES</router-link>
            </li>
          </ul>
        </div>
      </transition>


    </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
      isHidden: true
    }
  },
  computed: {
    ruta(){
      return this.$route.path
    }
  }
}
</script>

<style scoped>
@media (min-width: 770px) {
  #menu-container{
    background: url("../assets/images/Header-back2.png") no-repeat;
    background-position: right bottom;
    background-size: cover;
    max-height: 66px;
    /* max-height: 85.55px; */
  }
  /* .nav-link{
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  } */
  li a {
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 66px;
    text-decoration: none;
    padding-left: 1.9em;
    padding-right: 1.9em;
  }
  li a:hover{
    background-color:#B3CADC;
  }
  .active{
    background-color:#B3CADC;
  }
  li {
    display: inline;
    height: 100%;
    max-height: 66px;
    align-items: center;
  }
  .logo{
    width: 150px;
  }
}


/* VERSION MOVIL */
#menu-movil{
  /* height: 200px; */
  width: 100%;
  top: 70px;
  z-index: 100;
  position: absolute;
  background-color: #6BA0BE;
  /* transition: all 0.6s; */
}
#menu-movil ul{
  padding-top: 15px;
}
#menu-movil li{
}
#menu-movil a{
  display: block;
  height: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 15px;
  decoration:none;
  color: white;
}
#menu-movil .active{
  background-color: rgba(255, 255, 255, 0.41);
}
#menu-movil li:hover{
  background-color: rgba(255, 255, 255, 0.67);
}



@media (max-width: 770px) {
  #menu-container{
    height: 70px;
    background-color: #7fa4c0;
    background-image: none;
  }
  .menu-sub{
    height: 70px;
  }
  .logo{
    width: 130px;
  }
  .burger{
    font-size: 40px;
    cursor: pointer;
  }
  .menu-hide{
    display: none;
  }
  .movil-hide{
    /* OCULTAR EN MOVIL */
    display: none;
  }
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}



</style>
