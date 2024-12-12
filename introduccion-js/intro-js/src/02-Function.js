
// function sayHello(name, age){
//     const greeting = `Hello ${name}, you are ${age} years old`;
//     // console.log(`Hello World`);
//     return greeting;
// }

// // const result = sayHello();

// console.log(sayHello('Leunam', 30));


//LAMBDA / ARROW

const sayHello = (name, age) => `Hello ${name}, you are ${age} years old`;
const sum = (a, b) => a + b;

console.log(sayHello('Leunam', 30));
console.log(sum(12, 5));

//1
const greeting = function(lastName){
    return `Hello ${ lastName }`;
}
//2
const greeting2 = (lastName) => {
    return `Hello ${ lastName }`;
}
//3
const greeting3 = ( lastName ) => `Hello ${ lastName }`;

const getUsuarioActivo = ( nombre ) => ({uid: 'ABC567', username: nombre});

console.log( getUsuarioActivo( 'Marrom'));

console.log(greeting("Marrom"));
