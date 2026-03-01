const persons = [
        {name : 'Akash', salary: 25000 , position : 'Developer'},
        {name : 'Batash', salary: 20000 , position : 'Designer'},
        {name : 'Mati', salary: 20000 , position : 'Representative'},
        {name : 'Pani', salary: 22000 , position : 'Analyst'},
        {name : 'Agun', salary: 30000 , position : 'Manager'}
]

const personM = persons.filter(p => p.name[0] === 'M' )
console.log('Person With M : ' , personM)

const salary = persons.filter(p => p.salary > 20000)
console.log(salary)