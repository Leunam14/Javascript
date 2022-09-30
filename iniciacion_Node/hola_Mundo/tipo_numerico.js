//Números

let a = 3.7;
let b = 4.8;

console.log(Math.round((3.7 + 4.8)*100)/100);

console.log( a + b)

let c = b * 3;

console.log(c);

//con toFixed(), conseguimos números decimales igual al número dentro del método
console.log(c.toFixed(4));

// .toPrecision() y realiza un redondeo dependiendod e los valores que coja dentro del método

console.log(c.toPrecision(3));

//Uso de casteo y parseInt y parseFloat

let num1 = '4.8';
let num2 = 17;

console.log(num1 + num2); //Error de concepto
console.log(Number(num1) + num2);
console.log(parseFloat(num1) + num2); // Lo mismo para parseInt si no es número decimal

