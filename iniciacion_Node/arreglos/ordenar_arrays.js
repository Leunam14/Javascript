//Método .sort() para ordenar arreglos

const array = [2, 58, 14, 7,3 ];

console.log(array);

//El elemento a es el primer elemento del array [0], y b es el posterior [1]

//array.sort((a, b) => a - b);

array.sort((a, b) => {
    if (a < b) { //Si el primer dígito es mmenor que el primero, devuelve menos 1
        return -1 //le resta un índice a "a"
    } else {
        return +1
    }
})

console.log(array);

const listaObjetos = [
    {nombre: "Leunam", edad: 28},
    {nombre: "Lucia", edad: 12},
    {nombre: "Cintia", edad: 27},
    {nombre: "Javier", edad: 33}
];

listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else {
        return +1
    }
})

console.log(listaObjetos)