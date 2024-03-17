const numbers=[
    1,
[3,[2,8,[12],9],
[5],[12,[[15]]],
[100,[23,45]]
]];

const flatenArray=(number)=>{
   return number.reduce((acc,num)=>{
         return acc.concat(Array.isArray(num)? flatenArray(num) : num)
   },[])
}
// flatenArray(numbers)

console.log(flatenArray(numbers))