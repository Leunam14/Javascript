
// const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// console.log("This is going to be printed first");

// //Await
// const findAllUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     return await response.json();
// }

// const users = await findAllUsers();
// console.log(users);


const apiKey = 'XKlZqDzYDELb0C79B3oJUsZPfNruPxYi';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then ( ({ data })  => 
        { const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        })
    .catch( console.warn );
