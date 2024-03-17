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

// bubbling is default event propogation, propogation will be from child to parent, inner to outer

// to change the default propgation from child to parent, and make it parent to child=>Capturing we use by adding {capture:true}
// in capturing parent triggers first which parent is having {capture:true}
// parent who don't have {capture:true} will behave as bubbling
// when the child clicked all its parents triggers not child