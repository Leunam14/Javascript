//funciones tipo flecha y anónimas

const array = [1, 5, 6, 2, 8, 12];

const array2 = array.map(function (valor) {
    return valor*2
})

console.log(array2);

//Y ahora de tipo flecha
//Para poder acceder a una función de tipo flecha, primero hay que inicializarlas. No pasa como con las originales

const array3 = array.map((valor) => valor*2) 

console.log(array3);

const doblarValor = valor => valor*2;

console.log(doblarValor(5))//Si pusiera esto encima de la función, no iría