
var username= JSON.parse(localStorage.getItem('current_user')).user
console.log(username)

var user_detail = JSON.parse(localStorage.getItem(username)) || [[],[]]





var btn1 = document.getElementById('btn1')
btn1.addEventListener('click',income)

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click',expenditure)

function income(){
    event.preventDefault()
    var income_src =document.getElementById('income_src')
    var income_amt = document.getElementById('income_amt')

    var div_income_src = document.getElementById('income_src_block')
    var div_income_amt = document.getElementById('income_amt_block')

    var src = document.createElement('h3')
    var amt  = document.createElement('h3')

    src.textContent =income_src.value
    amt.textContent =income_amt.value

    div_income_src.append(src)
    div_income_amt.append(amt)

    var obj={}
    obj['income_src']=income_src.value
    obj['income_amt']=income_amt.value

    localStorage.setItem('')

}

function expenditure(){
    event.preventDefault()
    var expend_src =document.getElementById('expend_src')
    var expend_amt = document.getElementById('expend_amt')

    var div_expend_src = document.getElementById('expend_src_block')
    var div_expend_amt = document.getElementById('expend_amt_block')

    var src = document.createElement('h3')
    var amt  = document.createElement('h3')
    
    src.textContent =expend_src.value
    amt.textContent =expend_amt.value

    div_expend_src.append(src)
    div_expend_amt.append(amt)
}