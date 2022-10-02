//Búsqueda de valores en array
//map() .filter() .reduce()

//.map()

const array = ["Madrid", "Barcelona", "Almería", "Granada", "Murcia"]

const val = array.forEach(valor => {
    console.log(valor)
});

console.log(val)

const array2 = array.map((valor, indice) =>{
    console.log(indice) //sacamos el índice de la lista
    return `${indice}- ${valor}`;
})

console.log(array2);

//.filter()

const listaObjetos = [
    {nombre: "Leunam", edad: 28},
    {nombre: "Lucia", edad: 12},
    {nombre: "Cintia", edad: 27},
    {nombre: "Javier", edad: 33}
];

/*VERSIÓN LARGA 

const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
}) */

const personasMayores = listaObjetos.filter(obj => obj.edad >30)

console.log(personasMayores);

//Imprima la lista menos el nombre de Miguel

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);


//.reduce()
//acumulado es un valor agregado (acumulativo), que va variando a medida que se va ejecutando el bucle
//actual son los elementos de la lista

const valores = [3, 8, 56, 24, 14]
const suma = valores.reduce((acumulado, actual, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(actual);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + actual 
});

console.log(suma);