$(document).ready(function() {
  $('#boton-guardar').click(function() {
    /*Captura de datos escrito en los inputs*/
    var nom = $('#nombres').val();
    var usuar = $('#usuario').val();
    var corr = $('#correo').val();
    var pass = $('#password').val();
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("nombres", nom);
    localStorage.setItem("usuario", usuar);
    localStorage.setItem("correo", corr);
    localStorage.setItem("password", pass);

    console.log(localStorage);
    /*Limpiando los campos o inputs*/
    /*
    document.getElementById("nombres").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";*/
  });

  $('#IngresoLog').click(function() {
    var usuario = $('#usuario').val();
    var password = $('#password').val();
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("password", password);
  });
});
