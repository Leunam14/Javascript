//Listas o arreglos

const array = [1, "Hola", 3, "Inicio", 5, 6]

//Métodos para introducir valores en nuestro array
//push para el final array
array.push("Final", 45)

console.log(array);

//Unsift lo añade al inicio del array
array.unshift(true);

console.log(array);

//Pop elimina valor al final

array.pop();
console.log(array);

//Shift elimina valor al inicio
array.shift()
console.log(array);

//Método para eliminar, modificar o añadir valores al array
//Eliminar valores .splice(índice, numValores a eliminar)
array.splice(2, 1); //Elimina a partir del índice puesto en el primer parámetro, es decir, elimina en el segundo puesto, un ÚNICO valor (segundo parámetro)
console.log(array);

//Añadir valores .splice(índice, numValores a aniadir, valores a aniadir)
array.splice(2,1,"Nuevo");
console.log(array);

//Modiicar valores .splice(índice, 1, valor)
array.splice(2, 1, "Cambiado", "Añadido extra")
console.log(array);

//Une dos listas con el método concat(array);
const lista = ["Hola", 2, false];
console.log(lista.concat(array));

const lista2 = lista.concat(array);
console.log(lista2);

//Unir listas mediante propagación
const lista3 = [...lista, ...lista2];
console.log(lista3)


//Obtener lista a partir de otra .slice()
//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
const array2 = ["hola", 1, 2, 3, true, null, "adios"];
const array3 = array2.slice(1,4)

console.log(array3);

//Con el negativo coge valores desde el final
const array4 = array2.slice(3, -2);
console.log(array4);