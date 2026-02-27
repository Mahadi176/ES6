const employee = {
    name : 'Lucas Martin',
    1 : 'Desk One',
    address : '23 Bang Street, LA',
    salary : 52000,
    position : 'Software Engineer'
}

for(const key in employee){
    const value = employee[key]
    console.log(key,value)
}