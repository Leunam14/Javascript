//Uso de fechas 

//Inicializar fechas

//Inicializa fecha actual
const fecha = new Date();

//Inicializa con fecha entre parentesis (anyo, mes, dia)
const fecha1 = new Date(1994, 5, 20)
console.log(fecha1)

//Fecha desde EL ORIGEN (0): 1970
// const fecha2 = new Date(0)
const fecha2 = new Date(10000000000000); //milisegundos
console.log(fecha2)

const fecha3 = new Date("June 20, 1994 15:00:30")
console.log(fecha3)

//Comparar dos fechas

console.log(fecha2 > fecha1)
console.log(fecha.getTime() === fecha3.getTime()) // Comparar las fechas de forma correcta con .getTime()

////Obtener el día, mes y el anyo de una fecha

//Obtener el día .getDate();
console.log(fecha1.getDate());

//Obtener el mes. Debemos sumar 1 porque enero empieza desde cero
console.log(fecha1.getMonth() +1);

//Obtener el año, debemos usar getFullYear()
console.log(fecha1.getFullYear())

//Mostrar una fecha en un String con toLocalDateString
console.log(fecha1);
console.log(fecha1.toLocaleDateString("en-GB"))
console.log(fecha1.toLocaleDateString("en-US"))
