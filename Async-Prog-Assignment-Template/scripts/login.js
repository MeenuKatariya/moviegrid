document.querySelector("form").addEventListener("submit",loginfn)

function loginfn(){
    event.preventDefault();
    var enteremail=document.querySelector("#email").value
    var enterpassword=document.querySelector("#password").value
    var loginData=JSON.parse(localStorage.getItem("data"));
    var flag=false;
    loginData.forEach(value => {
          if(value.email==enteremail && value.password==enterpassword)
          {
                 flag=true
          }
    })
    if(flag)
    {
        alert("login succesful")
        window.location.href="index.html"
    }else{
        alert("incorrect credentials")
    }
}