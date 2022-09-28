// var variable; Afecta a todo el código, scope global
// let variableLet; Afecta solamente al bloque donde ha sido declarado, scope local

const constante = "Constante de tipo String";

var a = 1;

console.log(a);
console.log(constante);


a = 5;

console.log(a);
// constante = "No se puede modificar"; Nos dará error obv

let b = 3;
console.log(b);

b = 5;
console.log(b);

///////////////////


var variable = "Soy una variale VAR";

for (var index = 0; index < 3;  index++ ) {
     
    var variable = "Soy la segunda variable";
}

console.log(variable);



let variableLet = "Soy una variable LET";

for (var index = 0; index < 3;  index++ ) {
     
    let variableLet = "Soy la segunda variable LET";
    console.log(variableLet);

}

console.log(variableLet);


//////////Typeof nos dice de que es el tipo de dato


console.log(typeof variableLet);
console.log(typeof 5);
console.log(typeof a);
