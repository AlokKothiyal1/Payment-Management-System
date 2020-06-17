var btn =document.getElementById('btn')
btn.addEventListener('click',add_user)

var details =localStorage.getItem('user_details') || []

function add_user(){

    event.preventDefault()
    var obj={}
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    obj['user'] =username
    obj['pwd'] =password
    
    details.push(obj)
    console.log(obj)
    
    localStorage.setItem('user_details',JSON.stringify(details))
}
