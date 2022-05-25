$(function(){
    $("#searchlive").focus();
  });
  
  // Función que se va a encargar de eliminar la lista una vez se inserten datos
  function eliminarDatos(){
    $("#list").remove('#list');

  }

  //Función que se va a encargar de mostrar los datos del archivo json con Ajax
  function mostrarDatos() {
   
    $("#results").empty();

    $.ajax({
        type: "GET",
        url: "./nombres.json",      
        success: function(info) {
    
          var valor = $("#searchlive").val();
          
          for (var i = 0; i < info.length; i++) {
            if (info[i].name.includes(valor) + info[i].apellido.includes(valor)) {
              /* $("#results").append("<li>" + info[i].name + "</li>"); */
              $("#results").append("<b>" + info[i].name + " " + info[i].apellido + "</b><br>");

            }
          }
        }

    })
    
    }
  
    
  

