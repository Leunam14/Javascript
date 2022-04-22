$.ajax("login.php", {
    data: datosFormulario,
    type: 'post',
    })

.done(function(response) {

    if (response == "pass"){
        $('#respuesta').html('<p> Usuario autentificado </p>');
  
    }else {
        $('#respuesta').html('<p> Usuario erróneo </p>');
        }
    })
        