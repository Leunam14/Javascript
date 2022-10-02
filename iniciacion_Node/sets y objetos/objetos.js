//Objetos

const objeto = {
    id: 4,
    nombre: "Juan",
    apellido: "Fernández",
    isDeveloper: true,
    libros_favoritos: ["La fundación", "Bodas de sangre"],
    "4-juegos": [1, 2, 3, 4]//Usa comillas para poner un carácter numérico o guiones
}

console.log(objeto["4-juegos"])

//Para acceder a propiedades del objeto a través de una variable
const propiedad = "isDeveloper";
console.log(objeto[propiedad]);

//Como replicar objetos

const objeto2 = objeto;

console.log(objeto2);

objeto2.nombre = "Leunam";

//Cuando definimos un objeto, a partir de otro, si modificamos la copia del objeto, tb se modifica el original (esto no pasa con valores primitivos, pero si con objetos)

console.log(objeto2.nombre); //Cuidado con esto
console.log(objeto.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1)
console.log(val2)

//Para poder realizar la modificación de un objeto duplicado en una variable, debemos usar la propagación

const objeto3 = {...objeto};
objeto3.nombre = "Laura";

console.log(objeto.nombre)
console.log(objeto3.nombre)

//Como ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "TED", anyo: 2012},
    {titulo: "Titanica", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004}
]

//método .sort() -> Muta el valor de la lista original. Ordenar listas

listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)

