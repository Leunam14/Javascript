
const paper = {
    producto: 'paper',
    price: 100,
    quantity: 10,
};

const invoices = [
    {
        id: 1,
        name: 'Office',
        client: {
            name: 'Leunam',
            lastName: 'Marrom',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1,
            },
            papper,
        ]
    },
    {
        id: 2,
        name: 'Office 2',
        client: {
            name: 'Lamiel',
            lastName: 'Graham',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'gpu 17',
                price: 800,
                quantity: 1,
            },
            {
                producto: 'cpu intel',
                price: 1000,
                quantity: 10,
            },
        ]
    },
    {
        id: 3,
        name: 'Paper 2',
        client: {
            name: 'Dorothea',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 50,
                quantity: 1,
            },
            paper,
        ]
    }
];

const invoicesName = invoices.map(i => i.name);
console.log(invoices)
console.log(invoicesName)

const invoicesClient = invoices.map(i => i.client.name);

console.log(invoicesClient)

const invoiceById = invoices.find(i => i.id === 2)
console.log(invoiceById)

const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
console.log(invoiceByClientName)

const invoiceFilter = invoices.filter(i => i.id > 1)
console.log(invoiceFilter)

console.log('Delete filter')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
console.log(invoiceDeleted)

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper) )
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)
