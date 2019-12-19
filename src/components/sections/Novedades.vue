<template lang="html">
<div class="contenedor px-0 px-md-4 pt-2 pt-md-0">
  <div class="row">
    <div class="col-md-7">
      <span class="text-uppercase">Deseamos que te enteres de todo lo que sucede en finance group
      y que formes parte de nuestra comunidad</span>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-6">
      <h5 class="text-weight-bold">ESTAMOS PRESENTES EN NUESTRA COMUNIDAD</h5>
      <div class="row caja pr-md-3 caja-left">
        <div class="col-md-6 px-0 pr-md-1" v-for="articulo in lista">
          <div class="card" style="">
            <!-- <a href="" data-toggle="modal" data-target="#exampleModal"><img class="card-img-top" :src="articulo.imagen" :alt="articulo.titulo"></a> -->
            <div class="img-back" :style="{'background-image': 'url(' + articulo.imagen+ ')'}">
              <a href="" data-toggle="modal" :data-target="'#modal'+articulo.id" class="link-img" :title="articulo.titulo"></a>
            </div>
            <div class="card-body">
              <h5 class="card-title text-uppercase text-truncate"><a href="" data-toggle="modal" :data-target="'#modal'+articulo.id"  :title="articulo.titulo">{{articulo.titulo}}</a></h5>
              <p class="card-text text-truncate">{{articulo.descripcion}}</p>
              <h6 class="card-subtitle text-muted">{{formated(articulo.fecha)}}</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="col-md-6 pb-3 pb-md-0">
      <h5 class="text-weight-bold">NOVEDADES DE FINANCIACIÓN</h5>
      <div class="row caja pr-md-5 pl-md-4">
        <div class="col-md-6 pb-1 px-0" v-for="imagen in novedades">
          <img :src="imagen.imagen" alt="" width="98%" height="">
        </div>
      </div>
    </div>
  </div>


<!-- Modal -->
<div class="modal fade" v-for="modal in lista" :id="'modal'+modal.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase">{{modal.titulo}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="pb-2">
          <img :src="modal.imagen" :alt="modal.titulo" class="w-100">
        </div>
        <h6>{{modal.descripcion}}</h6>
        <div class="content">
          {{modal.contenido}}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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
    axios.get('https://financegroup.com.ar/API/articulos/index.php').then
    (response => this.lista = response.data);
    axios.get('https://financegroup.com.ar/API/novedades/index.php').then
    (response => this.novedades = response.data);
  },
  name: 'Novedades',
  data (){
    return{
      lista: [],
      novedades: []
    }
  },
  methods:{
    formated: function (data){
      var fecha = data;
      var fechaAdr = fecha.substring(0, 10).split("-");
      return fechaAdr[2]+'/'+fechaAdr[1]+'/'+fechaAdr[0];
    }
  }
}
</script>

<style lang="css" scoped>
*{
  color: white;
}
.card *{
  color: rgb(38, 38, 38);
}
.card{
  border-radius: 0;
}
.card-img-top{
  border-radius: 0;
}
.card-body{
  padding: 8px;
}
.card-title{
  margin:0;
  font-size: 16px;
}
.card-subtitle{
  font-size: 12px;
}
.card-text{
  font-size: 15px;
  margin-bottom: 4px;
}
.img-back{
  width: 100%;
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
}
.link-img{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.caja-left{
  border-right: 3px white solid;
}
.modal *{
  color: rgb(38, 38, 38);
}
.modal .btn{
  color: white;
}
@media (min-width: 770px) {
  .caja{
    height: 400px;
    /* background-color: rgba(5, 4, 5, 0.42); */
    padding-left: 20px;
    padding-top: 10px;
    /* overflow-y: scroll; */
  }
}
/* AJUSTES MOVILES */
@media (max-width: 770px) {
  .caja{
    padding-left: 10px;
    padding-right: 10px;
  }
  .caja-left{
    border:none;
  }
  .card{
    margin-bottom: 10px;
  }
  h5{
    font-size: 20px;
    font-weight: bolder;
  }
}

</style>
