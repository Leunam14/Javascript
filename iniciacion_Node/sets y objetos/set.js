//Sets o conjuntos no ordenados de valores únicos, es decir, no van a almacenar valores repetidos
//Si trabajamos con una BBDD, nos aseguramos de que no obtenemos valores duplicados

const array = [1, 2, 3, 4, 5,"hola", 1, 2, "hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

//.add() aniadir valores al set

miSet.add(9)
console.log(miSet);

//.delete() para eliminar un valor del set

miSet.delete(5)
console.log(miSet);

//.clear() elimina todos los valores del set

// miSet.clear()
// console.log(miSet);


//.has() método contiene para ver si tienes un elemento, similar includes

console.log(miSet.has("hola"));

//.size() tamaño del set -> Es una propiedad

console.log(miSet.size);

//Realizar iteración de los valores mediante un foreach()

miSet.forEach(valor => {
    console.log(valor)
})

//Así obtenemos el iterador
const iterador_miSet = miSet.values()
console.log(iterador_miSet)

//Así obtenemos un array
const array_miSet = [...miSet];
console.log(array_miSet);
console.log(array_miSet[4]);//y accedemos a ellos a través de los corchetes
