//Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined];

//Forma convencional
for(let i = 0; i < array.length; i++ ){
    console.log(array[i]);
}

//Forma ES6 (más eficiente)

let suma = 0;
const arrayNums = [1, 78, 68, 7];

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});

console.log(suma);

//Búsqueda de un valor dentro de un array con el método .find();
//Encontrar el elemento 90 de array

const variable = array.find(valor =>{
    if(valor ===90){
        return true;
    }
})

console.log(variable);

//--------------------------------------Búsqueda dentro de objetos

const listaObjetos = [
    {nombre: "Leunam", edad: 28},
    {nombre: "Lucia", edad: 12},
    {nombre: "Cintia", edad: 27},
    {nombre: "Javier", edad: 33}
]

//Versión sencilla

/* const objeto = listaObjetos.find(o =>{
    if (o.nombre === "Leunam") {
        return true;
    }
}) */

//Versión más avanzada

/* const objeto = listaObjetos.find(o =>{
    return o.nombre === "Leunam";
}) */


//Igual pero en menos líneas
const objeto = listaObjetos.find( o => o.nombre === "Leunam");

console.log(objeto);

