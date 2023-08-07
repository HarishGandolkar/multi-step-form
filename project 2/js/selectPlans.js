
/************************************************/
/*CARD SELECTION*/
/************************************************/

let cards = document.querySelectorAll('.element')

cards.forEach((element)=>{

    element.addEventListener('click',(el)=>{
        console.log(el)
        if(el.target.className.includes('1')){
            selectCard(element)
            UnSelectCard(document.querySelector('.element-2'))
            UnSelectCard(document.querySelector('.element-3'))
        }
        else if(el.target.className.includes('2')){
            selectCard(element)
            UnSelectCard(document.querySelector('.element-1'))
            UnSelectCard(document.querySelector('.element-3'))
        }
        else if(el.target.className.includes('3')){
            selectCard(element)
            UnSelectCard(document.querySelector('.element-2'))
            UnSelectCard(document.querySelector('.element-1'))
        }    
    })
   
    
})

function selectCard(element){
    element.style.backgroundColor = 'hsl(231, 100%, 99%)'
    element.style.border = '1.5px solid hsl(228, 100%, 84%) '
    element.style. transform = 'translatey(-0.5rem)'
    element.style.transition = 'all 0.3s'
    document.querySelector('.btn--2').setAttribute('href','addons.html')
}

function UnSelectCard(element){
    element.style.backgroundColor = ''
    element.style.border = ''
    element.style. transform = ''
    element.style.transition = 'all 0.3s'
}

/*****************************************************/
/* MONTH AND YEAR SELECTION */
/*****************************************************/

let toggle = document.querySelector('.select')
let offer = document.querySelectorAll('.offer')


toggle.addEventListener('click',(event)=>{
    if(event.target.checked){
        
        document.querySelectorAll('.price').forEach((ele)=>{
            ele.textContent = '/yr'
        })
        document.querySelector('.year').style.color = 'hsl(213, 96%, 18%)'
        document.querySelector('.month').style.color = 'hsl(231, 11%, 63%)'
        cards.forEach((ele)=>{
            ele.style.height = '19rem'
        })
        offer.forEach((ele)=>{
            ele.classList.toggle('hidden')
        })
    
    }
    else{
        document.querySelectorAll('.price').forEach((ele)=>{
            ele.textContent = '/mo'
        })
        document.querySelector('.year').style.color = 'hsl(231, 11%, 63%)'
        document.querySelector('.month').style.color = 'hsl(213, 96%, 18%)'
        cards.forEach((ele)=>{
            ele.style.height = '17rem'
        })
        offer.forEach((ele)=>{
            ele.classList.toggle('hidden')
        })
    }
})


