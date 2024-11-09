const billAmount = document.getElementById('billInput')
const peopleAmount = document.getElementById('peopleInput')
const tipPerPerson = document.getElementById('tipAmount')
const totalPerPerson = document.getElementById('totalAmount')
const tips = document.querySelectorAll('.btn')
const tipCustom = document.getElementById('custom')
const resetBtn = document.getElementById('reset')
const btnMain = document.getElementById('btn3')
const errorElement = document.getElementById('error')


billAmount.addEventListener('input', billAmountFun)
peopleAmount.addEventListener('input', peopleAmountFun)
tips.forEach(function(val){
    val.addEventListener('click', handleClick)
})
tipCustom.addEventListener('input', tipInputFun)
resetBtn.addEventListener('click', reset)


tipPerPerson.innerHTML = '$' + (0.0).toFixed(2)
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2)

let billVlaue = 0.0
let peopleValue = 1
let tipValue = 0.15

function billAmountFun(){
    billVlaue = parseFloat(billAmount.value)
    
    calcTip()
}

function peopleAmountFun(){
    peopleValue = peopleAmount.value
    if(peopleValue < 1){
        let message = []
        message.push("Can't be zero")
        peopleAmount.classList.add('error')
        errorElement.innerHTML = message.join(', ')
        errorElement.style.display = 'block'

        
    }else{
        peopleAmount.classList.remove('error')
        errorElement.style.display = 'none'
        calcTip()
    }
    
    
}
function handleClick(e){
    tips.forEach(function(val){
        val.classList.remove('active')
        if(e.target.innerHTML == val.innerHTML){
            val.classList.add('active')
            tipValue = parseFloat(val.innerHTML) / 100
        }
        
    })
    calcTip()
}
function calcTip(){
    if(peopleValue >= 1){
        let tipAmount = (billVlaue * tipValue) / peopleValue

        let total = (billVlaue / peopleValue) + tipAmount
        console.log(total)
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
        totalPerPerson.innerHTML = "$" +  total.toFixed(2)
    }
}
function tipInputFun(){
    tipValue = parseFloat(tipCustom.value / 100)

    tips.forEach(function(val){
        val.classList.remove('active')
    })
    calcTip()
}
function reset(){
    tips.forEach(function(val){
        if(val.classList.contains('active')){
            val.classList.remove('active')
        }else{
            btnMain.classList.add('active')
        }
    })
    billAmount.value = ''
    peopleAmount.value = ''
    tipPerPerson.innerHTML = '$' + (0.0).toFixed(2)
    totalPerPerson.innerHTML = '$' + (0.0).toFixed(2)
}