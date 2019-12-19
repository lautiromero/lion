<template>
  <div class="row px-md-5 container-seccion">
    <div class="col-md-2 px-5 px-md-0 pb-3 pb-md-0">
      <img class="img-fluid" src="../../assets/images/promo-titulo.png" alt="">
    </div>
    <div class="col-md-10">
       <h4 class="font-weight-bolder">TODOS LOS MESES TENEMOS UNA PROMOCIÓN PARA VOS Y TU FAMILIA</h4>
      <div class="pr-md-5">
        <h5>ACÉRCATE A NUESTRAS SUCURSALES PARA PARTICIPAR DE LOS PREMIOS Y BENEFICIOS QUE PUEDEN GANAR</h5>
      </div>

      <div class="card my-3 pt-2 border-0 rounded-0 bg-transparent">
        <div class="row no-gutters" v-for="promo in promos">
          <div class="col-md-6">
            <img :src="promo.imagen" class="card-img rounded-0" alt="">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="text-uppercase"><strong>{{promo.titulo}}</strong></h5>
              <p class="card-text">{{promo.contenido}}</p>
            <div class="leyenda row">
              <div class="col-7 center-y">
                <p>LAS IMÁGENES PUBILCADAS EN ESTE SITIO SON DE CARACTER ILUSTRATIVO</p>
              </div>
              <div class="col-5 center-y">
                    <a class="p-2" target="_blank" href="https://www.facebook.com/FinanceGroupSA"><i class="fab fa-facebook-square"></i></a>
                    <!-- <a class="p-2" href="#"><i class="fab fa-twitter-square"></i></a> -->
                    <a class="p-2" target="_blank" href="https://www.instagram.com/financegroupok/"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async created(){
    axios.get('https://financegroup.com.ar/API/promociones/index.php').then
    (response => this.promos = response.data);
  },
  name: 'Promociones',
  components: {

  },
  data(){
    return{
        promos: []
    }
  }
}
</script>
<style scoped>
.container-seccion{
  height: 100%;
}
*{
  color:white;
}
h4{
  font-size: 18px;
}
h5{
  font-size: 16px;
}
.leyenda p{
  font-size: 10px;
  line-height: 1.2;
}
@media (min-width:770px) {
  .card{
    max-width: 88.5%;
  }
}
/* AJUSTES MOVILES */
@media (max-width: 770px) {
  .card-img{
    width: 100%;
  }
  .card-body{
    padding-left: 0;
    padding-right: 0;
  }
  .center-y{
    display: flex;
    align-items: center;
  }
  .center-y p{
    margin-bottom: 0;
  }

}
</style>
