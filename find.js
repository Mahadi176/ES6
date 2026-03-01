const products = [
    { name : 'xiaomi', price : 12000},
    { name : 'vivo', price : 22000},
    { name : 'samsung', price : 42000},
    { name : 'apple', price : 72000},
    { name : 'htc', price : 32000}                    
 ]

 const fun = products.find(pd => pd.name[0] === 'x');
 console.log(fun)