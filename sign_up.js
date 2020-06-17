var btn_1 =document.getElementById('btn1')
btn_1.addEventListener('click',validate_user)

var btn =document.getElementById('btn')
btn.addEventListener('click',add_user)



function add_user(){

    event.preventDefault()

    var details =JSON.parse(localStorage.getItem('user_details')) || []

    var obj={}
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    obj['user'] =username
    obj['pwd'] =password
    
    details.push(obj)
    localStorage.setItem('user_details',JSON.stringify(details))

}

function validate_user(){

    event.preventDefault()
    var uname = document.getElementById('uname').value
    var pwd = document.getElementById('pwd').value

    var details = JSON.parse(localStorage.getItem('user_details')) || []

    for(var i=0;i<details.length;i++){
       if(uname==details[i].user){
           if(pwd==details[i].pwd){
               var obj={}
               obj['user']=uname
               obj['pwd']=pwd
               localStorage.setItem('current_user',JSON.stringify(obj))
               window.location.href = "balance.html";
               break
           }
       }
    }
}