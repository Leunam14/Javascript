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
            paper,
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

const invoiceByClientName = (clientName) => {
    
    return invoices.find(i => i.client.name === clientName);
}

const invoiceById = (id) => {
    return invoices.find(i => i.id === id)
}

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceById(id);

            if (result) {
                resolve(result);
            } else {
                reject(`error: no exists invoice with id: ${id}`);
            }
        }, 2500);
    });

    return promise;
}

export {
    paper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
}