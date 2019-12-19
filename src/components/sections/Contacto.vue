<template lang="html">
  <div class="row">
    <div class="col-md-4">
    </div>
    <div class="col-md-4 pt-2 pr-md-4 logo-i d-md-none">
      <h5>ATENCIÓN AL CLIENTE</h5>
        <p class="pt-md-2">
          ESCRIBANOS Y UN ASESOR SE PONDRÁ EN CONTACTO PARA INFORMARLE DE TODOS NUESTROS PLANES
          Y LOS BENEFICIOS DE LOS CUALES VA A PARTICIPAR.
        </p>
    </div>
    <div class="col-md-4 form">
      <Contact/>
    </div>
    <div class="col-md-4 pt-md-5 pr-md-4 logo-i d-none d-md-block">
      <h5>ATENCIÓN AL CLIENTE</h5>
        <p class="pt-md-2">
          ESCRIBANOS Y UN ASESOR SE PONDRÁ EN CONTACTO PARA INFORMARLE DE TODOS NUESTROS PLANES
          Y LOS BENEFICIOS DE LOS CUALES VA A PARTICIPAR.
        </p>
    </div>
  </div>
</template>

<script>
import Contact from '../Contact';
export default {
  name: 'Contacto',
  components:{
    Contact
  }
}
</script>

<style lang="css" scoped>
*{
  color:white;
}
h5{
  font-size: 18px;
}
p{
  font-size: 15px;
}
@media (min-width: 772px){
  .form{
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .logo-i{
    background: url("../../assets/images/logo-institucional.png") no-repeat;
    background-position: left bottom;
    background-size: contain;
    background-size: 340px ;
  }
}
@media (max-width: 772px){
  .form{
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
  }
}
</style>
