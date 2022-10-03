//Formas de importar/exportar módulos

//1. CommonJS - require
//2. Import ES6 - import


////PRUEBA USANDO REQUIRE


// const moduloMatematicas = require("./modulos/matematicas.js");
// console.log(moduloMatematicas);

//Otra forma de usar el require
const {factorial, suma } = require("./modulos/matematicas.js");

// const fact = moduloMatematicas.factorial(5);
const fact = factorial(5)
console.log("El factorial es " + fact)

//const sumar = moduloMatematicas.suma(5, 8);
const sumar = suma(5,8);
console.log("La suma es " + sumar);


