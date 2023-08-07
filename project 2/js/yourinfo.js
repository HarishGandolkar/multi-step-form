if (typeof document !== 'undefined'){
    let Error = document.querySelectorAll('.error')
    let button = document.querySelector('.btn')
    let inputs = document.querySelectorAll('.input')
    let container = document.querySelector('.section-info')
    let links = document.querySelectorAll('.link')
    let number = document.querySelectorAll('.nav-number')


    
    button.addEventListener('click',(e)=>{
        requiredField()

        // let timeId = setTimeout(()=>{
        //     document.getElementById('userForm').reset()
        // },2000)

        // clearTimeout(timeId)
    })

    function requiredField(){
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].value === ''){
                Error[i].classList.remove('error-hidden')
                inputs[i].style.border = '1px solid hsl(354, 84%, 57%)'
            }
            else{
                Error[i].classList.add('error-hidden')
                inputs[i].style.border = '2px solid hsl(228, 100%, 84%)'
                document.querySelector('.btn').setAttribute('href','selectPlan.html')
            }
        }
    }

    function redToBlue(){
        inputs.forEach((element)=>{
            element.addEventListener('keypress',(event)=>{
                if(event.key !== ''){
                    for(let i=0;i<displayError.length;i++){
                        if(event.target.id === 'name'){
                            displayError[0].classList.add('error-hidden')
                            inputs[0].style.border = '2px solid hsl(228, 100%, 84%)'
                        }
                        else if(event.target.id === 'email'){
                            displayError[1].classList.add('error-hidden')
                            inputs[1].style.border = '2px solid hsl(228, 100%, 84%)'
                        }
                        else if(event.target.id === 'pNumber'){
                            displayError[2].classList.add('error-hidden')
                            inputs[2].style.border = '2px solid hsl(228, 100%, 84%)'
                        }
                    }
                }
            })
        })
    }

    redToBlue()
    
}



