
import { findInvoiceById } from './data/invoices';

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = findInvoiceById(3);
        
//         if (result) {
//             resolve(result);
//         } else {
//             reject('error: no exists invoice with id: 3');
//         }
        
//     }, 2500);
// });

// promise.then(result => console.log(result)).catch(console.error);


findInvoiceById(3)
    .then(console.log)
    .catch(console.error);
