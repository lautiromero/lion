<template>
  <div class="row px-md-5 container-seccion">
    <div class="col-md-5 sucursales px-3">
      <div class="" v-for="sucu, i in sucursales">
        <div class="sucursal" v-on:click="change(sucu.id)" :class="{clicked:i == clicked}"
        :style="{'background-image': 'url(' + require('../../assets/sucursales/'+i+'.png') + ')'}">
          <div class="suc-top text-center d-flex align-items-center justify-content-center flex-column">
            <p class="font-weight-bolder">{{sucu.nombre}}</p>
            <p v-if="sucu.id === 0">CASA CENTRAL</p>
          </div>
          <div class="suc-bot text-right pr-1">
            <span class="d-none d-md-block">VER MAS <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
        <div class="movil-only pb-3">
          <!-- <h5 class="font-weight-bolder">{{sucu.nombre}}</h5> -->
          <p v-html="sucu.direccion"></p>
          <p v-html="sucu.telefono"></p>
          <p v-html="sucu.horario"></p>
          <img :src="sucu.imagen" class="img-fluid" alt="" v-if="sucu.imagen != 'prox'">
        </div>
      </div>
    </div>
    <div class="col-md-4 pc-only pr-md-5">
      <h5 class="font-weight-bolder">{{titulo}}</h5>
      <p v-html="direccion"></p>
      <p v-html="telefono"></p>
      <p v-html="horario"></p>
      <img :src="imagen" class="img-fluid" alt="" v-if="imagen != 'prox'">
    </div>
    <div class="col-md-3 mapa" :style="{'background-image': 'url(' + require('../../assets/sucursales/'+mapa+'.png') + ')'}">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Sucursales',
  components: {

  },
  data: function () {
    return {
      sucursales: [
        {
          id:0,
          nombre: 'SUCURSAL CORDOBA',
          direccion: 'Victorino Rodríguez 1952, Bº Cerro de las Rosas',
          telefono: '<b>Teléfono :</b> </br>(0351) 15201-8246',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 14:00 a 18:00',
          imagen: 'https://financegroup.com.ar/API/sucursales/Cordoba.png',
          // img: '/src/assets/sucursales/1.png',
          mapa:'cordoba'
        },
        {
          id:1,
          nombre: 'SUCURSAL SAN MIGUEL DE TUCUMÁN',
          direccion: 'Las Heras 143, Bº centro',
          telefono: '<b>Teléfono Comercial:</b></br>(0381) 15302-4158',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:30 a 21:00</br>Sábado: 09:00 a 13:00',
          imagen: 'https://financegroup.com.ar/API/sucursales/Tucuman.png',
          mapa:'tucuman'
        },
        {
          id:2,
          nombre: 'SUCURSAL CONCEPCIÓN TUCUMÁN',
          direccion: 'Padre Carlos Juangorena 1610, Bº Centro',
          telefono: '<b>Teléfono Comercial:</b></br>(03865) 15260-823',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:00 a 20:30',
          imagen: 'https://financegroup.com.ar/API/sucursales/Concepcion.png',
          mapa:'tucuman'
        },
        {
          id:3,
          nombre: 'SUCURSAL CATAMARCA',
          direccion: 'Tucumán 389, Bº Centro',
          telefono: '<b>Teléfono Comercial:</b></br>(0383) 15402-8893',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:00 a 21:00</br>Sábado: 09:00 a 13:00',
          imagen: 'https://financegroup.com.ar/API/sucursales/Catamarca.png',
          mapa:'catamarca'
        },
        {
          id:4,
          nombre: 'SUCURSAL LA RIOJA',
          direccion: 'Pelagio de Luna 967, Bº Centro',
          telefono: '<b>Teléfono Comercial:</b></br>(0380) 15437-5664',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:00 a 21:00</br>Sábado: 09:00 a 13:00',
          imagen: 'https://financegroup.com.ar/API/sucursales/Larioja.png',
          mapa:'larioja'
        },
        {
          id:5,
          nombre: 'SUCURSAL COMODORO RIVADAVIA',
          direccion: 'Belgrano 987, Bº Centro',
          telefono: '<b>Teléfono Comercial:</b></br>(0297) 15426-5768',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:00 a 21:00</br>Sábado: 09:00 a 13:00',
          imagen: 'https://financegroup.com.ar/API/sucursales/Comodoro.png',
          mapa:'comodoro'
        },
        {
          id:6,
          nombre: 'SUCURSAL NEUQUÉN',
          direccion: 'Illia 44 - Local 1',
          telefono: '<b>Teléfono Comercial:</b></br>(299) 15507-7069',
          horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 17:30 a 21:00</br>Sábado:10:00 a 13:00',
          imagen: 'prox',
          mapa: 'neuquen'
        }
      ],
      titulo: 'SUCURSAL CORDOBA',
      direccion: 'Victorino Rodríguez 1952, Bº Cerro de las Rosas',
      telefono: '<b>Teléfono :</b> </br>(0351) 15201-8246',
      horario: '<b>Horario de atención:</b></br>Lunes a Viernes: 09:00 a 13:00 y 14:00 a 18:00',
      imagen: 'https://financegroup.com.ar/API/sucursales/Cordoba.png',
      mapa: 'cordoba',
      clicked: 0
    }
  },
  methods: {
    change: function(id){
      this.titulo = this.sucursales[id].nombre;
      this.direccion = this.sucursales[id].direccion;
      this.telefono = this.sucursales[id].telefono;
      this.horario = this.sucursales[id].horario;
      this.imagen = this.sucursales[id].imagen;
      this.clicked = id;
      this.mapa = this.sucursales[id].mapa;
    },
    // getImgUrl: function(id) {
    //   var images = require.context('../../assets/sucursales/', false, /\.png$/)
    //   return images('./' + id + ".png")
    // }
  }

}
</script>

<style scoped>

.viewport{
  overflow: auto;

    /* Make sure the inner div is not larger than the container
     * so that we have room to scroll.
     */
    max-height: 100%;

    /* Pick an arbitrary margin/padding that should be bigger
     * than the max width of all the scroll bars across
     * the devices you are targeting.
     * padding = -margin
     */
    margin-right: -100px;
    padding-right: 100px;
}
.sucursal{
  width: 95%;
  height: 58px;
  margin-bottom: 17px;
  padding-left: 15%;
  background: url("../../assets/sucursales/1.png") no-repeat;
  background-position: left top;
  background-size: contain;
  background-color: #7fa4c0;
  border-radius: 7px;
  cursor: pointer;
}
.suc-top{
  width: 100%;
  height: 70%;
  font-size: 16px;
  color: white;
}
.suc-bot{
  width: 100%;
  height: 10%;
  font-size: 11px;
  color: white;
}
.sucursales p{
  margin: 0!important;
  padding: 0!important;
  line-height: 1;
}
.clicked{
  width: 100%;
  border-right: 18px solid #a1c3de;
}
.mapa{
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
}
@media (min-width: 770px){
  .sucursales{
    max-height: 460px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .movil-only{
    display: none;
  }
}

@media (min-width: 1390px){
  .sucursales{
    max-height: 560px;
    overflow-y: visible;
  }
}

/* AJUSTES MOVILES */
@media (max-width:770px) {
  .container-seccion{
    margin-top: 15px;
  }
  .sucursal{
    cursor:default;
    width: 100%;
    border: none;
    padding-left: 25%;
  }
  .movil-only p{
    line-height: 1.3;
  }
  .pc-only{
    display: none;
  }
}
</style>
