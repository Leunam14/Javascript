//Importación módulos ES6

import { eleva, suma, nombre } from './modulos/matematicas.js'
// import * as moduloMatemáticas from './modulos/matematicas.js' así se importa TODO el módulo

// const sum = moduloMatematicas.suma(4, 5)

const sum = suma(4, 5)
console.log(sum)

const potencia = eleva(2, 12)
console.log(potencia)

console.log(nombre);