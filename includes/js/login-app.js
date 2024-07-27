let userPasswore=["admin","123456"];
let user=document.getElementById("username");
let pass=document.getElementById("password");
let login=document.querySelector(".button");
let message=document.querySelector(".message");
let eye=document.querySelector("i");
let flag=true;

// EVENT
login.addEventListener("click",loginWebsite);

// function
function loginWebsite() {
    if(user.value==userPasswore[0]&& pass.value==userPasswore[1]){
        message.classList.add("correct");
        message.textContent="نام کاربری و کلمه عبور صحیح می باشد.";
        login.setAttribute("href","account.html");
    }
    if(user.value!==userPasswore[0] && user.value>0|| pass.value!==userPasswore[1]&&pass.value>0){
        message.classList.remove("correct");
        message.classList.add("error");
        message.textContent="نام کاربری یا کلمه عبور اشتباه است.";
    }
    if(user.value==""|| pass.value==""){
        message.classList.remove("correct");
        message.classList.add("error");
        message.textContent="وارد نمودن نام کاربری و کلمه عبور الزامی می باشد.";
    }
}

// EVENT
eye.addEventListener("click",showPassword);

// function
function showPassword(){
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    if(flag){
        pass.setAttribute("type","text");
        flag=false;
    }
    else{
        pass.setAttribute("type","password");
        flag=true;
    }
}