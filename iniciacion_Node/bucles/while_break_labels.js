//Bucles while

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++;
}

//Bucles Do.....while

do {
    i++;
    console.log(i);

} while (i < max);



//Break, continue


let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index = 0; index < lista.length; index++) {
    
    if (lista[index] === 3){
        continue;
    }
    
    console.log(lista[index]);
    
    if (lista[index] > 5) {
        console.log("Has llegado a 5");
        break;
    }

}

//Labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while (true){
        console.log(`El numero es: ${decenas}${unidades}`)
        unidades++;
        if (unidades === 10){
            unidades = 0;
            break bucleUnidades
        }
        if (decenas === 2){
            break bucleDecenas
        }
    }
    decenas++
}

console.log("Ya hemos terminado");
