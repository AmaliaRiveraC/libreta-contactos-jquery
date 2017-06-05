$(document).ready(function() {
  $(".modal").modal();
  
  $("#formulario-contacto").submit(function() {
    var inputNombre = $("#input-nombre");
    var inputTelefono = $("#input-telefono");
    var nombre = inputNombre.val();
    var telefono = inputTelefono.val();
  });
});