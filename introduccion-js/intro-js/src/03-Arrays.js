
const invoice = {
    id: 10,
    name: 'Compras de oficina',
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
        return `Hola ${this.client.name}`;
    },
};

console.log(`El nombre es ${invoice.client.name}`);
console.log(invoice.greeting());
console.log('Total del pedido: ' + invoice.total());