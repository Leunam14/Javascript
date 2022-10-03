//Funciones generadoras

//Ejemplo id incremental en una base de datos

//Al ser incremental, se le añade un * al final de la palabra clave function*

function* idIncremental(){
    let id = 0;
    while(true){
        id++;        
        if(id >5){//Cuando llegue a 5 se sale 
            return
        }
        yield id; //Este yield se va a encargar de almacenar el último valor guardado para seguir incrementando el valor desde ahí

    }
}

const incremental1 = idIncremental();

console.log(incremental1.next().value)//la constante incremental1, es un objeto Generator, así que trabajamos con ella como un objeto
console.log(incremental1.next().value)//Con value sacamos el valor como con cualquier objeto
console.log(incremental1.next())
console.log(incremental1.next())
console.log(incremental1.next())
console.log(incremental1.next())





