//Actividades de prueba

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompra = ["pan", "pechuga de pollo", "plátanos", "manzanas", "lechuga"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push("Aceite de girasol");
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompra.pop("Aceite de girasol");
console.log(listaCompra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculasFav = [
    {titulo: "Alien: Octavo pasajero", director: "Ridley Scott", fecha: 1979},
    {titulo: "Pulp Fiction", director: "Tarantino", fecha: 1994},
    {titulo: "Oldboy", director: "Park Chan-wook", fecha: 2003}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2000 (utilizando filter)

const peliculasPost200 = peliculasFav.filter(valor => valor.fecha > 2000);
console.log(peliculasPost200);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directoresPeliculas = peliculasFav.map((valor, indice) =>{
    console.log(indice)
    return `${indice}- ${valor.director}`;
}) 
console.log(directoresPeliculas)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulosPeliculas = peliculasFav.map((valor, indice) =>{
    console.log(indice)
    return `${indice}- ${valor.director}`;
}) 
console.log(titulosPeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const nuevasPeliculasFav = [
    {titulo: "El señor de los anillos", director: "Peter Jackson", fecha: 2001},
    {titulo: "El Padrino", director: "Francis Ford Coppola", fecha: 1972}
]

const nuevaLista = peliculasFav.concat(nuevasPeliculasFav);
console.log(nuevaLista)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const propagación = [...peliculasFav, ...nuevasPeliculasFav];
console.log(propagación)