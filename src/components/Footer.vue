<template>
  <div id="footer-hidden">
  <div id="container-footer" class="d-md-flex px-5 justify-content-between">
      <ul class="list-unstyled d-none d-md-flex align-items-center justify-content-around ul-footer">
        <li class="li-footer">
          <a href="tel:+54903512018246"><i class="fa fa-phone"></i> +549 0351-15201-8246</a>
        </li>
        <li class="li-footer">
          <a href="mailto:info@financegroup.com.ar"><i class="fas fa-envelope"></i> INFO@FINANCEGROUP.COM.AR</a>
        </li>
        <!-- <li class="li-footer">
          <span class="text-white small">Las imágenes publicadas en este<br> sitio son de carácter ilustrativo.</span>
        </li> -->
      </ul>
      <ul class="list-unstyled m-0 d-none d-md-flex ul-social align-items-end overflow-hidden pb-1">
        <li class="li-social">
          <a class="p-2" target="_blank" href="https://www.facebook.com/FinanceGroupSA"><i class="fab fa-facebook-square"></i></a>
        </li>
        <!-- <li class="li-social">
          <a class="p-2" href="#"><i class="fab fa-twitter-square"></i></a>
        </li> -->
        <li class="li-social">
          <a class="p-2" target="_blank" href="https://www.instagram.com/financegroupok/"><i class="fab fa-instagram"></i></a>
        </li>
      </ul>

      <!-- VERSION MOVIL -->
      <ul class="list-unstyled m-0 d-md-none d-flex justify-content-center align-items-center ul-movil">
        <li class="li-social">
          <a class="px-3" href="tel:+54903514262718"><i class="fa fa-phone"></i></a>
        </li>
        <li class="li-social">
          <a class="px-3" href="mailto:info@financegroup.com.ar"><i class="fas fa-envelope"></i></a>
        </li>
        <li class="li-social">
          <a class="px-3" target="_blank" href="https://www.facebook.com/FinanceGroupSA"><i class="fab fa-facebook-square"></i></a>
        </li>
        <!-- <li class="li-social">
          <a class="px-3" href="#"><i class="fab fa-twitter-square"></i></a>
        </li> -->
        <li class="li-social">
          <a class="px-3" target="_blank" href="https://www.instagram.com/financegroupok/"><i class="fab fa-instagram"></i></a>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {

  }
}
</script>

<style scoped>
#container-footer{
  position: fixed;
  width: 100%;
  bottom:0;
  height: 48px;
  background: url("../assets/images/footer-01.png") no-repeat;
  background-position: right top;
  background-size: cover;
}
.ul-footer{
  height: 100%;
}
.ul-social{

}
.li-footer{
  padding-left: 30px;
  padding-right: 30px;
  font-size: 15px;
}
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
#footer-hidden{
  height: 48px;
}

@media (max-width: 770px) {
  #container-footer{
    position: fixed;
    width: 100%;
    bottom:0;
    height: 48px;
    background: url("../assets/images/footer-01.png") no-repeat;
    background-position: left bottom;
    background-size: cover;

  }
  .ul-movil{
    height: 100%;
  }
  .li-social{
    font-size: 20px;
  }
}

</style>
