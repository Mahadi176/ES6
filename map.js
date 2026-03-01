const number = [1,2,3,4]

const doubled = number.map(number => number*2)
const squared = number.map(number => number*number)
console.log(doubled)
console.log(squared)
console.log(number.length*squared.length)