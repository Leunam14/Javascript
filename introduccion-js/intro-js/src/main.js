// Ternario Operator

import { heroes } from "./data/heroes";

// const average = 5.8;

// const total = (average >= 5) ? 'Success' : 'Failure';

// console.log("Total: ", total);


// const findAllUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     const ul = document.createElement('ul');

//     users.forEach(user => {
//         const li = document.createElement('li');
//         li.innerHTML = user.name;
//         ul.appendChild(li);
//     });

//     document.getElementById('root').appendChild(ul);
// }

// findAllUsers();

const getHeroesById = (id) => {
    return heroes.find(heroes => heroes.id === id)
}

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner)
}

console.log(getHeroesById(2))
console.log(getHeroesByOwner('DC'))
