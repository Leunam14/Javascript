function suma(a, b){
    return a + b
}

/* const sumaNumeros = (valor1, valor2) => valor1 + valor2;

console.log(sumaNumeros(8,7)) */

function multiplica (a, b){
    return a * b;
}

function eleva(a, b){
    return a ** b; //Se eleva con dobles asteríscos
}

function factorial(a) {
    //factorial de 5: 5* 4 * 3 * 2 * 1
    let factorial = 1;
    for( let i = 2; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
