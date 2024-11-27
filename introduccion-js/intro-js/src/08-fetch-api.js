
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient
    .then(response => response.json())
    .then(data => console.log(data));

console.log("This is going to be printed first");

//Await
const findAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

const users = await findAllUsers();
console.log(users);
