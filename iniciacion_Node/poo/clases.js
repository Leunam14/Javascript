class Persona{
    nombre;//atributos
    edad;
    isDeveloper;
    //método constructor por defecto para crear una clase
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre; //declaración atributos de las clases
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() { //métodos
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

//Creamos un objeto de la clase persona
const nuevaPersona = new Persona("Leunam", 28, true) //instanciar
nuevaPersona.saludo()

//instanciar es una forma de inicializar una clase
//instanceof -> similar a typeof, pero para clases

let numero = 14
console.log(typeof(numero))

console.log(nuevaPersona instanceof Persona)//true o false de si es una instancia

//Acceciendo a los atributos

console.log(nuevaPersona.nombre);
