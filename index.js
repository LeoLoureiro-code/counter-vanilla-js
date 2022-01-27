const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const number = document.getElementById('number')

//init number
let currentNumber = 0

const checkNumber = ()=>{
    if(currentNumber < 0){
        number.style.color = 'red'
    }else if(currentNumber > 0 ){
        number.style.color = 'green'
    }else{
        number.style.color = 'black'
    }
}

increase.addEventListener('click', () =>{
    currentNumber += 1
    number.innerHTML = currentNumber
    checkNumber()
})

decrease.addEventListener('click', () =>{
    currentNumber -= 1
    number.innerHTML = currentNumber
    checkNumber()
})

reset.addEventListener('click', () =>{
    currentNumber = 0
    number.innerHTML = currentNumber
    checkNumber()

})