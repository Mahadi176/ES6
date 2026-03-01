const numbers = [1,2,3,4,5]

const total = numbers.reduce((sum,num) => num+sum,0)
console.log(total)