//Uso de funciones

const nombre = "Leunam";

saludar(nombre);

function saludar(nombre){

    console.log(`Hola ${nombre}`);
}

////

let nombre2 = "Marrom"

despedir(nombre2)//Aquí no modifica la variable

function despedir(nombre){
    nombre = "Javier"
    console.log(`Adios ${nombre}`);

}

/////

let persona = {nombre: "Javier", apellidos: "Martínez"}

saludarPersona(persona);//Tb está modificando el objeto

function saludarPersona (objeto){
    objeto.apellidos = "Romera"
    console.log(`Hola ${objeto.nombre} ${objeto.apellidos}`)
}

///////

//Para poner parámetros por defecto, en el parámetro de la función, la declaramos

function imprimeNumeros (numero = 14){

    console.log(numero)
}

imprimeNumeros()//Si no pongo nada, cogerá el valor por defecto que es 14



////función suma con todos los parámetros que queramos

function suma(...parametros){    
    return parametros.reduce((a, b) => a + b)

}

const s = suma(1,14,147,248,34);

console.log(s)

function multiplicar(a = 0, b = 0){ //Scope local con todo lo que conlleva. No se puede acceder a variables creadas dentro de la función, pero si al revés
    return a*b
}

console.log(multiplicar(4,9))

