<template>
  <div class="row">
    <div class="col-md-8 section px-5">
      <MenuBot/>
    </div>
    <div class="col-md-3 ml-3 d-none d-md-block">
      <Contact/>
    </div>
  </div>
</template>

<script>
import MenuBot from '../Menu-bot';
import Contact from '../Contact';
export default {
  name: 'Home',
  components: {
    Contact,
    MenuBot
  }
}
</script>

<style scoped>
.section{
  background: url("../../assets/images/back-home.png") no-repeat;
  background-position: center center;
  background-size: contain;
}
@media (max-width: 770px) {
  .section{
    height: 68VH;
    margin-left: 20px;
    margin-right: 20px;
    background: url("../../assets/images/back-home-movil.png") no-repeat;
    background-position: center center;
    background-size: contain;
  }
}

</style>
