<template>
  <div id="app">
    <div id="menu-container">
      <Menu/>
      <div id="menu-bottom" class="d-none d-md-block">
        <MenuBot v-if="main"/>
      </div>
        <div id="bot-movil" class="d-md-none d-flex justify-content-center mx-3">
          <BotMovil/>
        </div>
    </div>

    <div id="section" class="container-fluid pt-3 ">
      <router-view></router-view>
    </div>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Menu from './components/Menu';
import MenuBot from './components/Menu-bot';
import BotMovil from './components/Bot-movil';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import Promociones from './components/sections/Promociones';
import Novedades from './components/sections/Sucursales';
import Sucursales from './components/sections/Novedades';
import Contacto from './components/sections/Contacto';

export default {
  name: 'App',
  components: {
    Menu,
    MenuBot,
    Footer,
    Home,
    Novedades,
    BotMovil
  },
  computed:{
      main(){
          return this.$route.path !== '/'
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: url("./assets/images/back-body.jpg") no-repeat;
  background-position: left bottom;
  background-size: cover;
  /* height: 100vh; */
  min-height:100%;
}
#menu-container{
  top:0;
  max-height: 101px !important;
}
#menu-bottom{
  height: 35px;
  max-width: 62%;
  padding-right: 13%!important;
  padding-left: 3% !important;
  padding-top: .8rem;
  padding-bottom: 1rem;
  background: url('./assets/images/header-bottom.png') no-repeat;
  background-position: right bottom;
  background-size: cover;
}

/* clases generales */
a{
  color:white;
}
a:hover{
  text-decoration: none;
  color:white;
}
.dfa{
  display: flex;
  justify-content: center;
  align-items: center;
}

#bot-movil{
  position: relative;
  top: 10px;
}

@media (min-width:992px){
  #app{
    min-height: 100%;
    /* max-height: 100%; */
  }
  #section{
    /* height: 100%; */
    /* min-height: 100vh; */
  }
}
@media (min-width: 1390px){
  #section{
    margin-top: 3%;
  }
}

</style>
