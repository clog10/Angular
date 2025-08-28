import { calculateISV, type Product } from './06-function-destructuring';


const shopingCart: Product[] = [
    { description: 'Nokia A1', price: 150 },
    { description: 'iPad Air', price: 350 },
    { description: 'Samsung Galaxy', price: 450 },
];


const [ total, isv ] = calculateISV( shopingCart );

console.log('Total: ', total);
console.log('ISV: ', isv);