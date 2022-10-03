//Funciones asíncronas

function miAsinc(){
    //Hace una llamada a una base de datos externa
    //Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() *2)
    
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecuttado de forma correcta")) //Se ejecuta correctamente
    .catch(() => console.error("ERROR")) //Da error en ejeución
    .finally(() => console.log("Yo me ejecuto siempre")); //Se va a ejecutar siempre, obviando si es de forma correcta o no


//Ejemplo funcional de una promesa

function duplicarPromise(value){
    if(typeof value !== Number) {
        
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
    }
    
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({//Creamos un objeto
                value,
                result: value *2
            });
        }, 0 | Math.random() * 1000);
    });
}

duplicarPromise("Hola")
    .then(obj =>{
        console.log("Inicio promesa");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin promesa")
    })
    .catch(err => console.error(err));