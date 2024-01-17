function signup(e){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    

    var user = {
        email: email,
        password: password,
    };
    
    if (email === "" || password === "") {
        alert("Enter your details please!");
      } else {
         var json = JSON.stringify(user);
        localStorage.setItem(email, json);
        alert('Your details have been saved');
        window.location = "login.html";
        alert('You can logIn now!');
      }
  
//login function

}

function goToPage(page_name){
    let user = localStorage.getItem('user');
    if(!user){
      window.location.href="login.html";
      return;
    }
    window.location.href=page_name;
}

function logged(page_name){
    let user = localStorage.getItem('user');
    if(!user){
      window.location.href="login.html";
      return;
    }
    alert("You are logged in!");
}

// addEventListener("DOMContentLoaded", (Event) =>{
//     let user = localStorage.getItem('user');
//     if(!user){
//       window.location.href="login.html";
//       return;
//     }
//     // alert("You are logged in!");
// })


function login(e){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var copyright = document.getElementById('copyright');

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);

    if(email == "" && password == ""){
        alert("enter your email and password");
    }else if(user == null){
        alert('signup');
        
    } else if(email == data.email && password == data.password){
        alert('welcome');
        localStorage.setItem('user',email);
        window.location.href="index.html";
        
     } else if(email != data.email){
       alert('user not found!');
    } 
    else if(password != data.password){
        alert('wrong password');
    }else{
        console('err');
    }

}


// logout function

function logout(){
        alert("you have logged out!");
        localStorage.removeItem('user');
        window.location = "login.html";
       

}