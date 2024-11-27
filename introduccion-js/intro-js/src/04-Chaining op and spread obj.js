
const invoice = {
    id: 10,
    name: 'Office',
    date: new Date(),
    client: {
        id: 2,
        name: 'Leunam',
        lastName: 'Marrom',
        age: 30,
    },
    items:[
        {
            name: 'Keyboard',
            price: 20,
            quantity: 5
        },
        {
            name: 'Mouse',
            price: 10,
            quantity: 2
        },
        {
            name: 'Display',
            price: 180,
            quantity: 5
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        })
        return total;
    },
    greeting: function (){
        return `Hello ${this.client.name}`;
    },
};

//Spread Objects
const invoice2 = { ...invoice };

// const result = invoice == invoice2;

invoice2.id = 2;

console.log(invoice2);
console.log(invoice);

//Optional chaining operator
console.log(invoice.company?.name);

if (invoice.company?.name) {
    console.log('Found!');
} else {
    console.log('Not found');
}