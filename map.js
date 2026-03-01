const number = [1,2,3,4]

const doubled = number.map(number => number*2)
const squared = number.map(number => number*number)
console.log(doubled)
console.log(squared)
console.log(number.length*squared.length)

const friends = ['Abed','Babed','Caved','Dabed'];

const firstLetter = friends.map(frd => frd[0]);

console.log(firstLetter)

const products = [
    { name : 'xiaomi', price : 12000},
    { name : 'vivo', price : 22000},
    { name : 'samsung', price : 42000},
    { name : 'apple', price : 72000},
    { name : 'htc', price : 32000}                    
 ]

 const price = products.map(pd => pd.price);
 console.log(price)