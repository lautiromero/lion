<template>
  <div class="container-entregas pt-2 pt-md-0">
    <div class=" px-0">
      <h5 class="font-weight-bolder">VOS TENÉS UN SUEÑO, NOSOTROS TENEMOS UN PLAN</h5>
      <span class="sub">CUMPLIMOS EN EL 2019 CON LA ENTREGA DE MÁS DE 200 AUTOS A DISTINTAS FAMILIAS DE LA REPÚBLICA ARGENTINA</span>
    </div>
    <div class="handler d-none d-md-flex justify-content-between pt-1">
      <div class="sucursal d-flex justify-content-around" v-on:click="filtrar('CÓRDOBA')">
        <div class="white-box"><img src="../../assets/provincias/cordoba.png" alt="" height="25px"></div>
        <div class="tittle">
          <span>CÓRDOBA</span>
        </div>
      </div>
      <div class="sucursal d-flex justify-content-around" v-on:click="filtrar('TUCUMÁN')">
        <div class="white-box"><img src="../../assets/provincias/tucuman.png" alt="" height="25px"></div>
        <div class="tittle">
          <span>TUCUMAN</span>
        </div>
      </div>
      <div class="sucursal d-flex justify-content-around" v-on:click="filtrar('CATAMARCA')">
        <div class="white-box"><img src="../../assets/provincias/catamarca.png" alt="" height="25px"></div>
        <div class="tittle">
          <span>CATAMARCA</span>
        </div>
      </div>
      <div class="sucursal d-flex justify-content-around" v-on:click="filtrar('LA RIOJA')">
        <div class="white-box"><img src="../../assets/provincias/larioja.png" alt="" height="25px"></div>
        <div class="tittle">
          <span>LA RIOJA</span>
        </div>
      </div>
      <div class="sucursal d-flex justify-content-around" v-on:click="filtrar('COMODORO R.')">
        <div class="white-box"><img src="../../assets/provincias/comodoro.png" alt="" height="25px"></div>
        <div class="tittle">
          <span>COMODORO R.</span>
        </div>
      </div>
    </div>
    <div class="entregas mt-2 row">
      <div class="col-md-3 mb-3" v-for="entrega in lista" v-if="provincia == entrega.sucursal || provincia === 'todas'">
        <div class="card">
          <iframe :src="entrega.enlace" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body">
            <span class="text-uppercase d-inline-block text-truncate" style="max-width: 250px;"><strong>NOMBRE:</strong> {{entrega.nombre}}</span></br>
            <span class="text-uppercase"><strong>SISTEMA:</strong> {{entrega.sistema}}</span></br>
            <span class="text-uppercase"><strong>SUCURSAL:</strong> {{entrega.sucursal}}</span>
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
    axios.get('https://financegroup.com.ar/API/entregas/index.php').then
    (response => this.lista = response.data);
  },
  name: 'Entregas',
  components: {

  },
  data(){
    return{
        lista: [],
        provincia: 'todas',
        x: ""
    }
  },
  computed: {
  },
  methods: {
    filtrar: function(prov){
      this.provincia = prov;
    },
    openModal() {
    this.modal1 = true
    },

  }
}
</script>

<style scoped>
*{
  color: white;
}
h5{
  font-size: 15px;
  margin-bottom: 1px!important;
}
.sub{
  font-size: 14px;
}
.sucursal{
  background-color: #6DA1BE;
  border-bottom: 2px solid rgba(246, 246, 246, 0.56);
  border-bottom-left-radius: 7pt;
  border-top-right-radius: 7pt;
  font-size: 13px;
  cursor: pointer;
}
.white-box{
  display: inline-flex;
  width: 30px;
  justify-content: center;
  border-bottom-left-radius: 7pt;
  border-top-right-radius: 7pt;
  /* padding: .30rem; */
  /* font-size: 14px; */
  background-color: white;
}
.tittle{
  width: 180px;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-right: .50rem ;
  padding-left: .50rem ;
}
.card{
  border: transparent;
  border-bottom:5px #2a6d93 solid;
  border-bottom-left-radius: 0;
  background-color: #6DA1BE;
}
.card-body{
  background-color: #6DA1BE;
  max-width: 294px;
}

/* The Modal (background) */
.modal1 {
 position: fixed; /* Stay in place */
 top: 0;
 left: 0;
 z-index: 1; /* Sit on top */
 width: 100%; /* Full width */
 height: 100%; /* Full height */
 overflow: hidden;
/* Fallback color */
 background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
 background-color: #fefefe;
 height: 40%;
 margin: 15% auto; /* 15% from the top and centered */
 padding: 20px;
 border: 1px solid #888;
 background-color: rgb(0,0,0);
 width: 80%; /* Could be more or less, depending on screen size */
}
.video{
  display: flex;
  justify-content: center;
  align-items: center;
}

/* The Close Button */
.close{
 color: #aaa;
 position: relative;
 margin-left: auto;
 font-size: 28px;
 font-weight: bold;
 display: inline;
}

.close:hover,
.close:focus {
 color: black;
 text-decoration: none;
 cursor: pointer;
}
@media (min-width: 770px) {
  .entregas{
    position: relative;
    max-height: 403px;
    overflow-y: scroll;
  }
}
/* AJUSTES MOVILES */
@media (max-width: 770px) {
  h5{
    font-size: 18px;
    /* margin-bottom: 1px!important; */
  }
  .sub{
    font-size: 16px;
  }

}
</style>
