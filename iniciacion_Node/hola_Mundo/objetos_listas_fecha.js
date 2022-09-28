//Arrays

const lista1 = [1,"hola,", 9, true];
const lista2 = new Array (2, "hola,", 9, true);
const lista3 = new Array (3);
lista3[0] = "Soy el primer elemento";
lista3[2] = 9;
const lista4 = new Array(lista1, lista2, lista3);

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos

const movil = {
    altura: 5,
    anchura: 10,
    marca: "Xiaomi",
    isWhite: true,
    contactos: ["Leunam", "Marrom"],
    tarjeta: {
        marca: "Sandisk",
        capacidad: 64
    }
}
movil.anyo = 2018;


console.log(movil.contactos);
console.log(movil.tarjeta.marca);
console.log(movil.anyo);

//Fechas

const ahora = new Date();
const fecha = new Date("march 25 2022");
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear(); 

console.log(ahora);
console.log(fecha);
console.log(dia + "/" + mes + "/" + anyo);


