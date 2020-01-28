<template>
  <div id="contact" class="px-3 py-4 text-center">
    <div class="pb-2">
      <h5>DEJANOS TUS DATOS Y TE LLAMAMOS</h5>
    </div>
    <form action="https://financegroup.com.ar/API/enviar.php" method="post">
      <div class="form-group">
        <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" name="nombre">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="inputEmail"placeholder="E-mail" name="email" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="inputTelefono" placeholder="Telefono" name="telefono" required>
      </div>
      <div class="form-group">
        <textarea class="form-control" id="textarea" rows="3" placeholder="Mensaje" name="mensaje" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary" id="submit">CONSULTAR</button>
      <small id="texto-muted" class="form-text text-left">
        *Complete todos los campos. No compartiremos tus datos</small>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {

  }
}
</script>

<style scoped>
#contact{
  background-color: rgba(71, 142, 184, 0.72);
  width: 100%;
  border-radius: 25px;
}
h5{
  color: #ffffff;
  font-size: 19px;
}
#texto-muted{
  color: #dddddd;
}
#submit{
  width: 100%;
  background-color: #a6c5d5;
  border: none;
}
#submit:hover{
  background-color: #396379;
}
</style>
