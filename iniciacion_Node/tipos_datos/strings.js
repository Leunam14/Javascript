//Strings

let nombre = "Leunam";
let saludo = `Hola ${nombre}. Bienvenido`;

console.log(saludo);

//Plantillas HTML

let plantilla = `
    <html>
        <h1>Página web de ${nombre}</h1>
        <p>Esto es un párrafo</p>

    </html>
`;

console.log(plantilla);


///// Introducción de variables en html


let libros = ["Imperio final", "Elantris", "Archivo de las tormentas"];


//Obtener partes de cadenas de caracteres -> slice() substring()

let slice_string = nombre.slice(0,3);
console.log(slice_string);

slice_string = nombre.substring(0,4);
console.log(slice_string);


//Reemplazar parte del contenido de una cadena de texto

let cadena = "mi nombre es Leunam, y mi sueño es viajar a Japón.";

console.log(cadena.replace('Leunam', 'Marrom'));


//Usando la expresión regular /g (global), reemplaza todas las instancias con replace.

console.log(cadena.replace(/mi/g, 'su'));


//toLowerCase() y toUpperCase()

console.log(cadena.toUpperCase());


//Formas de concatenar dos cadenas de caracteres

let cadena2 = "Hay que ahorrar     "

console.log(cadena.concat(" ", cadena2, " (BASTANTE :( )"))


//Método trim(), elimina caracteres vacíos. tb tenemos trimStart para el inicio, y trimEnd() para el final.

console.log(cadena2.length);

console.log(cadena2.trim().length);

//Obtener la posición de una palabra dentro de una cadena de caracteres

console.log(cadena.indexOf("mi")); //Nos devuelve la primera instancia
console.log(cadena.charAt(0));
console.log(cadena.lastIndexOf("mi")); //Nos devuelve la última instancia

//Nos devuelves cuantas similitudes hay dentro de la cadena
console.log(cadena.match(/mi/g));

//Busca las similitudes dentro de includes() y devuelve true o false
console.log(cadena.includes("nombre"));