//Bucles for

//for (inicialización; condición; actualización){
/** i = i +1
 * i += 1
 * i++
 */

for (let index = 0; index < 10; index++) {

    console.log(index)   
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
    
}

//Estructura for... of

for (let valor of lista) {
    console.log(valor);
}

//Estructura forEach

lista.forEach(valor => {
    
    console.log(valor);
});

//Estructura forIn

let persona = {
    nombre: "Leunam",
    apellido: "Marrom",
    edad: 28,
    isDeveloper: true

}

let prop = "apellido";
console.log(persona[prop]);

console.log(persona.nombre);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);

}

