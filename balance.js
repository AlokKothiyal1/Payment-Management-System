var logout = document.getElementById('btn3')
logout.addEventListener('click',function(){window.location.href="sign_up.html"})


//Dynamically creates page to its previous state when user relogins-----------------------------------

var username = JSON.parse(localStorage.getItem('current_user')).user
console.log(username)

var balance_val = document.getElementById('balance_value')

var total_in = document.getElementById('total_in')
var total_exp =document.getElementById('total_exp')

var div_income_src = document.getElementById('income_src_block')
var div_income_amt = document.getElementById('income_amt_block')

var del_inc = document.getElementById('del_inc')
del_inc.addEventListener('click',delete_info)
var del_exp = document.getElementById('del_exp')
del_exp.addEventListener('click',delete_exp)

var div_expend_src = document.getElementById('expend_src_block')
var div_expend_amt = document.getElementById('expend_amt_block')


var user_info = JSON.parse(localStorage.getItem(username)) || [[],[]]

var total_income=0
var total_expenditure=0

for(var i=0;i<user_info[0].length;i++){

    var inc_src = document.createElement('h3')
    inc_src.textContent = user_info[0][i].income_src
    div_income_src.append(inc_src)

    var inc_amt =document.createElement('h3')
    inc_amt.textContent = user_info[0][i].income_amt
    div_income_amt.append(inc_amt)
   
    total_income += Number(user_info[0][i].income_amt)
}

for(var i=0;i<user_info[1].length;i++){

    var exp_src = document.createElement('h3')
    exp_src.textContent = user_info[1][i].expend_src
    div_expend_src.append(exp_src)

    var exp_amt = document.createElement('h3')
    exp_amt.textContent = user_info[1][i].expend_amt
    div_expend_amt.append(exp_amt)

    total_expenditure += Number(user_info[1][i].expend_amt)
}

balance_val.textContent = "$ "+(total_income -total_expenditure)
total_in.textContent="$ "+total_income
total_exp.textContent="$ "+total_expenditure



//ADD button functionality for income & Expenditure
var btn1 = document.getElementById('btn1')
btn1.addEventListener('click',income)

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click',expenditure)


//income function...........................
function income(){

    event.preventDefault()

    var user_detail = JSON.parse(localStorage.getItem(username)) || [[],[]]
    var income_src =document.getElementById('income_src')
    var income_amt = document.getElementById('income_amt')
    

    var src = document.createElement('h3')
    var amt  = document.createElement('h3')
    
    var del_btn =document.createElement('button')
    del_btn.setAttribute('class','btn btn-sm btn-outline-danger btn-block m-1')

   

    src.textContent =income_src.value
    amt.textContent =income_amt.value
    del_btn.textContent="Delete"
    //del.innerHTML = "<i class="fas fa-trash-alt"></i>"

    div_income_src.append(src)
    div_income_amt.append(amt)
    del_inc.append(del_btn)
    

    var obj={}
    obj['income_src']=income_src.value
    obj['income_amt']=income_amt.value

    user_detail[0].push(obj)
    localStorage.setItem(username,JSON.stringify(user_detail))

    total_income+=Number(income_amt.value)
    balance_val.textContent = "$ "+(total_income -total_expenditure)
    total_in.textContent="$ "+total_income
}

//expenxditure function..............................

function expenditure(){
    event.preventDefault()

    var user_detail = JSON.parse(localStorage.getItem(username)) || [[],[]]

    var expend_src =document.getElementById('expend_src')
    var expend_amt = document.getElementById('expend_amt')
    
    var del_btn =document.createElement('button')
    del_btn.setAttribute('class','btn btn-sm btn-outline-success btn-block m-1')
    

    var src = document.createElement('h3')
    var amt  = document.createElement('h3')
    
    src.textContent =expend_src.value
    amt.textContent =expend_amt.value
    del_btn.textContent="Delete"

    div_expend_src.append(src)
    div_expend_amt.append(amt)
    del_exp.append(del_btn)

    var obj={}
    obj['expend_src']=expend_src.value
    obj['expend_amt']=expend_amt.value

    user_detail[1].push(obj)

    localStorage.setItem(username,JSON.stringify(user_detail))

    total_expenditure+=Number(expend_amt.value)
    balance_val.textContent = "$ "+(total_income -total_expenditure)
    total_exp.textContent="$ "+total_expenditure
}

function delete_info(){
    console.log("hey")
}
function delete_exp(){
    console.log("hey")
}