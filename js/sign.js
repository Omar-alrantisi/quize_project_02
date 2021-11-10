const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });


         //

      const register =document.querySelector(".register");
      const popUpSign =document.getElementById("popUpSign");
      const closesign =document.getElementById("closesign");
      const trynow=document.getElementById("trynow");
      trynow.addEventListener("click",popUPRegister);
      
      register.addEventListener("click",popUPRegister);
      closesign.addEventListener("click",closePopUPRegister)

      function popUPRegister(){
    popUpSign.style.display="block";
      }

      function closePopUPRegister(){
        popUpSign.style.display="none";
      }
      
      // Sign up validation

      //formSignUp
      const formSignUp =document.getElementById("formSignUp");
      //username
      const inputUsername =document.getElementById("inputUsername");
      const inputUsernameHelp=document.getElementById("inputUsernameHelp");
      const usernameFormat = /^[a-zA-Z0-9_$\.]{5,16}$/; 
      //email
      const inputEmail =document.getElementById("inputEmail");
      const inputEmailHelp=document.getElementById("inputEmailHelp");
      const emailFormat = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
      //password
      const inputPass =document.getElementById("inputPass");
      const inputPassHelp=document.getElementById("inputPassHelp");
      const passFormat = /^[a-zA-Z0-9_$\.]{5,16}$/;
      // sign up button
      const signUp =document.getElementById("signUp");
      signUp.addEventListener("click",signUpValidation);

      function signUpValidation(){
        if(inputUsername.value==""){
          inputUsernameHelp.innerHTML="X Please enter your Username"
          inputUsernameHelp.style.color="#E08484";
        }
        else{
          if(inputUsername.value.match(usernameFormat)){
            inputUsernameHelp.innerHTML="✔ Username looks great."
            inputUsernameHelp.style.color="#5B9824";
          }

        else{
          inputUsernameHelp.innerHTML="X Invalid Username"
          inputUsernameHelp.style.color="#E08484";
        }
      }
      if(inputEmail.value==""){
        inputEmailHelp.innerHTML="X Please enter your Email"
        inputEmailHelp.style.color="#E08484";
      }
      else{
        if(inputEmail.value.match(emailFormat)){
          inputEmailHelp.innerHTML="✔ Email looks great."
          inputEmailHelp.style.color="#5B9824";
        }

      else{
        inputEmailHelp.innerHTML="X Invalid Email"
        inputEmailHelp.style.color="#E08484";
      }
    }
    if(inputPass.value==""){
      inputPassHelp.innerHTML="X Please enter your Password"
      inputPassHelp.style.color="#E08484";
    }
    else{
      if(inputPass.value.match(passFormat)){
        inputPassHelp.innerHTML="✔ Password looks great."
        inputPassHelp.style.color="#5B9824";
      }

    else{
      inputPassHelp.innerHTML="X Invalid Username"
      inputPassHelp.style.color="#E08484";
    }
  }















  if(inputUsername.value.match(usernameFormat)&&inputEmail.value.match(emailFormat)&&inputPass.value.match(passFormat)){
   
    localStorage.setItem('username', inputUsername.value);
    localStorage.setItem('email', inputEmail.value);
    localStorage.setItem('password', inputPass.value);
    formSignUp.action="\welcomepage.html"
  }
    }
















    // sign in 

    const email_sign_in =document.getElementById("email_sign_in");
    const pass_sign_in=document.getElementById("pass_sign_in");
       
    const Login=document.getElementById("Login");
     const signinhelp=document.getElementById("signinhelp");
    const storedEmail = localStorage.getItem('email');
    const storedPass = localStorage.getItem('password');
    Login.addEventListener("click",signInValidation);

    function signInValidation(){
      if(email_sign_in.value==storedEmail&&pass_sign_in.value==storedPass){
        const formSignIn=document.getElementById("formSignIn").action="\welcomepage.html";
        signinhelp.innerHTML="✔ correct Email and Password"
        signinhelp.style.color="#5B9824";
      }
      else{
        signinhelp.innerHTML="X Incorrect Email or Password"
        signinhelp.style.color="#E08484";
      }
    }
