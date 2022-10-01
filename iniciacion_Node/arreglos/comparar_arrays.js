//Comparar arrays

//Método .every()

const array = [4, 6, 8, 15, 97, -4, -6, 14];

const resultado = array.every(valor => {
    if (typeof valor === "number") {
        return true
    } else {
        return false
    }
})


console.log(resultado);

//Comparación listas

const array_1 = [1, 3, 5, 14];
const array_2 = [1, 3, 5, 14];

const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false // Si no son iguales los arrays, devolverá false directamente
    const resultado = array_1.every((valor, i) => valor === array_2[i]) 
        return resultado
    
}

console.log(compararArrays(array_1, array_2));

//Uso de .some() muy parecido a every()

const existe = array_1.some(valor => valor === 3)

console.log( existe)


const listaObjetos = [
    {nombre: "Leunam", edad: 28},
    {nombre: "Lucia", edad: 12},
    {nombre: "Cintia", edad: 27},
    {nombre: "Javier", edad: 33}
];

const existeLeunam = listaObjetos.some(valor => valor.nombre === "Leunam")

console.log(existeLeunam)

//Uso del .from()
//Obtener array a partir de un objeto iterable

const string = "Hola soy Leunam"

console.log(string[1]);

const array_string = Array.from(string);
console.log(array_string);


/////Otro ejemplo 


const objeto = [1, false, "hello", 15];

const arrayObjeto = Array.from(objeto);

console.log(arrayObjeto);

