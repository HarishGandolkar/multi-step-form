

let displayError = document.querySelectorAll('.error')
let button = document.querySelector('.btn')
let inputs = document.querySelectorAll('.input')
let container = document.querySelector('.section-info')
let links = document.querySelectorAll('.link')
let number = document.querySelectorAll('.nav-number')



function nums(number){
    return document.querySelector(`.${number}`)
 }
 
 
 links.forEach((ele)=>{
     ele.addEventListener('mouseover',(e)=>{
         active(e)
     })
     ele.addEventListener('mouseout',(e)=>{
         unActive(e)
     })
 })
 
 number.forEach((element)=>{
     element.addEventListener('mouseover',(e)=>{
         console.log(e)
         active(e)
     })
     element.addEventListener('mouseout',(e)=>{
         unActive(e)
     })
 })
 
 function active(e){
     if(e.target.id === '1' || e.target.id ==='n1'){
         nums('num1').style.backgroundColor ='hsl(206, 94%, 87%)'
         nums('num1').style.color='black'
     }
     else if(e.target.id === '2' || e.target.id ==='n2'){
         nums('num2').style.backgroundColor ='hsl(206, 94%, 87%)'
         nums('num2').style.color='black'
     }
     else if(e.target.id === '3' || e.target.id ==='n3'){
         nums('num3').style.backgroundColor ='hsl(206, 94%, 87%)'
         nums('num3').style.color='black'
     }
     else if(e.target.id === '4' || e.target.id ==='n4'){
         nums('num4').style.backgroundColor ='hsl(206, 94%, 87%)'
         nums('num4').style.color='black'
     }
 }
 
 function unActive(e){
     if(e.target.id === '1' || e.target.id ==='n1'){
         nums('num1').style.backgroundColor =''
         nums('num1').style.color=''
     }
     else if(e.target.id === '2' || e.target.id ==='n2'){
         nums('num2').style.backgroundColor =''
         nums('num2').style.color=''
     }
     else if(e.target.id === '3' || e.target.id ==='n3'){
         nums('num3').style.backgroundColor =''
         nums('num3').style.color=''
     }
     else if(e.target.id === '4' || e.target.id ==='n4'){
         nums('num4').style.backgroundColor =''
         nums('num4').style.color=''
     }
     
 }