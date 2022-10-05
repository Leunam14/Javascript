const persona = {
    nombre: "Leunam",
    apellidos: "Marrom",
    isDeveloper: true,
    saludo: function(){
        console.log("Hola");
    }
}

// console.log(persona);
persona.saludo();

//Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    }
}

const nuevaPersona = creaPersona("Jose", 28, true);
const nuevaPersona2 = creaPersona("Laura", 12, false);

console.log(nuevaPersona)
console.log(nuevaPersona2)

//Uso de clases para evitar TODO el código de arriba