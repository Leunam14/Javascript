
import { heroes } from './data/heroes';
import invoices, { invoiceByClientName , papper } from './data/invoices';


const invoicesName = invoices.map(i => i.name);
console.log(invoices)
console.log(invoicesName)

const invoicesClient = invoices.map(i => i.client.name);

console.log(invoicesClient)

const invoiceById = invoices.find(i => i.id === 2)
console.log(invoiceById)

// const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
console.log('Searching by client name')
console.log(invoiceByClientName('Pepe'))

const invoiceFilter = invoices.filter(i => i.id > 1)
console.log(invoiceFilter)

console.log('Delete filter')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
console.log(invoiceDeleted)

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper) )
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)

//------------

const getHeroesById = (id) => {
    return heroes.find(heroes => heroes.id === id)
}

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner)
}

console.log(getHeroesById(2))
console.log(getHeroesByOwner('DC'))
