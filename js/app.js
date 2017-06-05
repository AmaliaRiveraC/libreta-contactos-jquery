(function () {

  var $inputNombre = $("#input-nombre");
  var $inputTelefono = $("#input-telefono");
  
  
  var cargarPagina = function () {
    $(".modal").modal();

    $("#formulario-contacto").submit(agregarContacto);
    $inputNombre.keyup(validarContacto);
    $inputTelefono.keyup(validarContacto);
  };

  var agregarContacto = function (e) {
    e.preventDefault();
    var nombre = $inputNombre.val();
    var telefono = $inputTelefono.val();
    var $contenedorContactos = $("#publicar-contactos");

    /* Crear elementos con DOM html al publicar contacto */

    var $nuevoContacto = $("<article />", {
      "class": "card-panel hoverable"
    });
    var $nombreContacto = $("<h4 />");
    var $eliminarContacto = $("<button type='button' />");
    var $iconoEliminar = $("<i />", {
      "class": "material-icons"
    });
    var $numeroContacto = $("<p />");

    $eliminarContacto.addClass("btn right");
    $iconoEliminar.text("delete");
    $eliminarContacto.click(eliminar);

    /* Asignando valores y elementos*/
    $eliminarContacto.append($iconoEliminar);
    $nombreContacto.text(nombre);
    $numeroContacto.text(telefono);

    $nuevoContacto.append($nombreContacto);
    $nuevoContacto.append($eliminarContacto);
    $nuevoContacto.append($numeroContacto);

    $contenedorContactos.prepend($nuevoContacto);


    /* Limpiando valores de formulario*/
    $inputNombre.val(" ");
    $inputTelefono.val(" ");
    $("#modal1").css("display", "none");
    
  };


  var validarContacto = function () {
    var $agregarContacto = $("#agregar-contacto");

    if ($(this).val().trim().length > 0) {
      $agregarContacto.removeAttr("disabled");
    } else {
      $agregarContacto.attr("disabled", true);

    }
  };

  var eliminar = function () {
    $(this).parent().remove();
  };




  $(document).ready(cargarPagina);
})();
