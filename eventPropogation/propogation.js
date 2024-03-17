const div=document.querySelector("#div");
const para=document.querySelector("#para");
const button=document.querySelector("#btn");

div.addEventListener('click',(e)=>{
alert(`clicked ${e.currentTarget.id}`)
},{capture:true})

para.addEventListener('click',(e)=>{
alert(`clicked ${e.currentTarget.id}`)
    
})

button.addEventListener('click',(e)=>{
alert(`clicked ${e.currentTarget.id}`)
    
})