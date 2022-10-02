/*EJERCICIOS

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const miFamilia = ["Antonio", "Consuelo", "Javi", "Leunam"];

const miSet = new Set(miFamilia);

miSet.add("Leunam");
console.log(miSet);

miSet.add("JavaScript");
console.log(miSet);

/* Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

*/

const objeto = {

    nombre: "Leunam",
    apellidos: "Marrom",
    edad: 28,
    altura: 172,
    EsDesarrolador: "Si"
}


let miEdad = objeto.edad;

/*- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const fecha = new Date();
console.log(fecha);

const fecha1 = new Date(1994, 5, 20);
console.log(fecha1);

const compararFecha = fecha.getTime() > fecha1.getTime();
console.log(compararFecha);

let dia = fecha1.getDate();
console.log(dia);

let mes = fecha1.getMonth() +1;
console.log(mes);

let anio = fecha1.getFullYear();
console.log(anio);

console.log(fecha1.toLocaleDateString("En-GB"))

