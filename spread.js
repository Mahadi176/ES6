// const arr1 = [1,4,5,7];
// const arr2 = arr1 ;
// arr2.push(2)
// console.log(arr1)
// console.log(arr2)

const arr1 = [1,4,5,7];
const arr2 = [...arr1] ;
arr2.push(2)
console.log(arr1)
console.log(arr2)



const person = {name: 'Panda', age : 25 }
// const person2 = person;

const person2 = {...person};
person.salary = 3000;

console.log(person)
console.log(person2)