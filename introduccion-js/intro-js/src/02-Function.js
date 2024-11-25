
// function sayHello(name, age){
//     const greeting = `Hola mundo ${name}, tienes ${age} años`;
//     // console.log(`Hola mundo`);
//     return greeting;
// }

// // const result = sayHello();

// console.log(sayHello('Leunam', 30));


//LAMBDA / ARROW

const sayHello = (name, age) => `Hola ${name}, tienes ${age} años`;
const sum = (a, b) => a + b;

console.log(sayHello('Leunam', 30));
console.log(sum(12, 5));