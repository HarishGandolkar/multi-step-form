
let addOns = document.querySelectorAll('.subsection')
let check =  document.querySelectorAll('.checkbox')

addOns.forEach((element)=>{
    element.addEventListener('click',(el)=>{
        element.classList.toggle('active')
        element.classList.toggle('unactive')
        if(element.className.includes('active')){
            if(el.target.className.includes(1)){
                document.querySelector('.service1').setAttribute('checked','checked')
            }
            else if(el.target.className.includes(2)){
                document.querySelector('.storage2').setAttribute('checked','checked')
            }
            else if(el.target.className.includes(3)){
                document.querySelector('.profile3').setAttribute('checked','checked')
            }
        }
        else{
            if(element.className !== 'active'){
                if(el.target.className.includes(1)){
                    document.querySelector('.service1').removeAttribute('checked')
                }
                else if(el.target.className.includes(2)){
                    document.querySelector('.storage2').removeAttribute('checked')
                }
                else if(el.target.className.includes(3)){
                    document.querySelector('.profile3').removeAttribute('checked')
                }
            }
            
        }
    })
})





// check.forEach((element)=>{
//     console.log(element)
// })


// function selectAddOns(element,el){
//     element.style.backgroundColor = 'hsl(231, 100%, 99%)'
//     element.style.border = '1.5px solid hsl(228, 100%, 84%) '
//     element.style. transform = 'translatey(-0.5rem)'
//     element.style.transition = 'all 0.3s'
//     if(el.target.className.includes(1)){
//         document.querySelector('.service1').setAttribute('checked','checked')
//     }
//     else if(el.target.className.includes(2)){
//         document.querySelector('.storage2').setAttribute('checked','checked')
//     }
//     else if(el.target.className.includes(3)){
//         document.querySelector('.profile3').setAttribute('checked','checked')
//     }
// }