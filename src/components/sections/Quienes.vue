<template>
  <div class="contenedor px-4">
    <h6>QUIENES SOMOS</h6>
    <div class="row">
      <div class="col-md-4 scroll">
        <h5>NUESTRA HISTORIA</h5>
        <p>
         FINANCE GROUP inicia en el norte de la provincia de Tucumán con nuestra primera sucursal ubicada en la calle las Heras, con el primer grupo de trabajo quienes hoy participan de la cúpula gerencial de la misma. Creando y desarrollando espacios nunca antes trabajados
         en la venta de automotores, como ser los departamentos de adjudicaciones y post entrega.
        </p>
        <p>
        A lo largo de los últimos 5 años finance group se expandió a diferentes puntos de la Argentina instalándose en Comodoro Rivadavia, La Rioja, Catamarca, San Luis, Concepción de Tucumán y próximamente Neuquén.
       </p>
       <p>          Dentro
                 de este crecimiento hemos sufrido ciertos tropiezos como la inundación en la localidad de comodoro Rivadavia en el año 2017 la cual nos hizo perder presencia comercial en el lugar.</p>

      </div>
      <div class="col-md-4 pt-md-3">
        <p>
           A pesar de estos inconvenientes, en conjunto con el departamento de adjudicación
          se cumplió con todos nuestros clientes activos en la zona. En el año 2018 tuvimos la oportunidad de volver a instalarnos en una nueva sucursal cumpliendo la promesa que siempre hicimos de volver.
        </p>
        <p>
          En
          la provincia de la rioja fuimos galardonados en dos oportunidades por Defensa del Consumidor “Mención a la Confiabilidad”.
        </p>
        <p>
         Estos logros nos han llevado a creer en nuestro servicio, decidiendo seguir expandiéndose a otras localidades de la argentina.
        </p>
      </div>
      <div class="col-md-4 logo-i">
        <h5>VISIÓN</h5>
        <p>
          Somos un grupo de jóvenes que vienen desde las bases de la venta, en estos años hemos aprendido a explotar nuestras habilidades y capacidades desde el lado del cliente.
        </p>
        <h5>VALORES</h5>
        <p>Nos
 enfocamos en brindar un servicio que realmente sea satisfactorio para todos los participantes. Con la seriedad que conlleva esta categoría de negocios y sin perder la personalización de la atención que nos caracteriza con cada uno de nuestros clientes. Llevar la
 responsabilidad al frente que sugiere poder realizar cada una de las gestiones que hacen que todo esto sea posible.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Quienes',
  components: {

  }
}
</script>

<style scoped>
.contenedor{
  height: 100%;
}
*{
  color: rgb(46, 46, 46);
}
h5{
  font-size: 17.5px;
}
h6{
  font-size: 15.5px;
}
p{
  /* font-size: 16px; */
}

@media (min-width: 992px){
  .logo-i{
    background: url("../../assets/images/logo-institucional.png") no-repeat;
    background-position: left bottom;
    background-size: contain;
    background-size: 340px ;
  }
  .scroll{
    max-height: 450px;
    /* overflow-y: scroll; */
  }
}
</style>
