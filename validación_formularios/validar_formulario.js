// Ésta es la primera instrucción que se ejecutará cuando el documento esté cargado.
// Se hará una llamada a la función iniciar()
// De esta manera nos aseguramos que las asignaciones de eventos no fallarán ya que
// todos los objetos están disponibles.
//window.onload = iniciar;
//----------------------------------------------------------//
/*function iniciar(){
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar
//que se encargará de validar el formulario.
// El evento de click lo programamos en la fase de burbujeo (false).

	document.getElementById("enviar").addEventListener('click',validar);	

}*/


function validar(){
	
	var formulario = document.formulario;
	
	/*Todo los if funcionan igual, realizo el condicional de si el valor establecido como nombre es nulo,
	pues me meto dentro del if, creando un alert, estableciendo el foco en el id correspopndiente y finalmente
	llamando a la class de CSS llamada de color rojo que va a establecer las líneas de las casilla de dicho color.
	En el caso de que no sea una celda vacía, pues removerá el color rojo. Esto será en el caso de que la primera vez pusiéramos el campo vacío, entonces a la segunda, si se ha establecido un valor en dicho campo, al dejar de estar vacío se eliminaría tb la class que añade el color.*/
		if(formulario.nombre.value == ""){
			alert("El campo nombre está vacio");
			document.getElementById("nombre").focus();
			document.getElementById("nombre").classList.add('rojo');
			return false;
			
		}else{
			document.getElementById("nombre").classList.remove('rojo');
		}

		if (formulario.apellidos.value == "") {
			alert("El campo apellidos está vacio");
			document.getElementById("apellidos").focus();
			document.getElementById("apellidos").classList.add('rojo');
			return false;
			
		}else (document.getElementById("apellidos").classList.remove('rojo'))
		
		if (formulario.edad.value == ""){
			alert("El campo edad está vacio");
			document.getElementById("edad").focus();
			document.getElementById("edad").classList.add('rojo');
			return false;
			
		}else{
			document.getElementById("edad").classList.remove('rojo');
		}
		
		if (formulario.matricula.value == ""){
			alert("El campo matricula está vacio");
			document.getElementById("matricula").focus();
			document.getElementById("matricula").classList.add('rojo');
			return false;
			
		}else{
			document.getElementById("matricula").classList.remove('rojo');
			if(matricula() == false){
				return false;
			}
			
		} 
		
		if (formulario.menu.value == "Escoge uno"){
			alert("El campo provincia está vacio");
			document.getElementById("menu").focus();
			document.getElementById("menu").classList.add('rojo');
			return false;
			
		}else{
			document.getElementById("menu").classList.remove('rojo');
		}
	
	return true;
}

function matricula(){
	
	/*Esta parte si me ha costado un poco más, porque he tenido que buscar como hacer que ambos valores concordasen. Así que encontré en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
	el método test(). El cual compara una ocurrencia de la expresión regular y la palabra especificada, en este caso lo introducido en la variable palabra.*/
	
	var caracter = new RegExp ("^[0-9]{1,4}[BCDFGHJKLMNPRSTVWXYZ]{3}");
		
	var palabra = document.getElementById("matricula").value;

	if(caracter.test(palabra)){
		return true;
	}else{
		alert("Matricula incorrecta");
		return false;
		
	}
}
