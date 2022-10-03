//Gestion errores

const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val;

    }else{
        throw new Error(`El valor introducido no es un número`)
    
    }
}

//const errorDoble = miFuncion("Hola")

//Excepción de errores
try{
    console.log("Está ejecutándose de manera correcta");
    const doble = miFuncion("Hola");
    console.log(doble);

} catch(e){
    console.error("ERROR")
    console.error(`El valor de e es: ${e}`)//la e, hace referencia al throw new Error
} finally {
    console.log("Esto se va a ejecutar siempre, tanto si hay error, como si no existe ninguno")
}


///EJEMPLO

let nombre = "Leunam" //Se podría hacer con un prompt y registrarlo en la variable
let pass = "latarara"
const login = (val1, val2) => {

    if(val1 === nombre && val2 === pass){
        return "Usuario y contraseña correctos"
    }else{
        throw new Error("Error en autentificación")
    }
}

const validar = login("Leunam", "latarara");
console.log(validar);

try {
    const validar2 = login("leunam", "tarara");//Probando el try/catch
    console.log(validar2);
} catch (e) {
    console.error(`El error es: ${e}`);

}


//Errores más comunes => InternalError, es cuando existe un problema interno, cuando se llama de forma indefinida a una funcion por ejemplo
//SyntaxError -> Error de sintaxis
//TypeError -> Fallo de tipado 
//RangeError -> Estamos tratando de acceder a elementos fuera de rango
//ReferenceError -> trata de acceder a una referencia que no existe

