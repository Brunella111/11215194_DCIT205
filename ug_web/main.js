// SCRIPT FOR YEAR
document.getElementById("year").innerHTML = new Date().getFullYear();



// SCRIPT FOR HAMBURGER
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


// SCRIPT FOR DARK MODE
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');



toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        header.style.background = 'white';
        header.style.color = 'black';
        header.style.transition = '1s';

    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        header.style.background = 'black';
        header.style.color = 'white';
        header.style.transition = '1s';

    }
});


// SCRIPT FOR MENU ON/OFF




// SCRIPT FOR SIGNUP

let signupForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Email:", email.value);
  console.log("Password:", password.value);
});

function onChange() {
  if (confirmPassword.value === password.value) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Passwords do not match!");
  }
}

password.addEventListener("change", onChange);
confirmPassword.addEventListener("change", onChange);
