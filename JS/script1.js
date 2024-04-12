// JavaScript code for your Online Banking application
// Add your JavaScript logic here
// You can remove or modify existing code as needed

(container = document.querySelector(".container")),
  (pwShowHide = document.querySelectorAll(".showhidepw")),
  (pwFields = document.querySelectorAll(".password")),
  (signUp = document.querySelector(".signup-link")),
  (login = document.querySelector(".login-link"));
const hamburgerMenu = document.querySelector(".hamburger-menu");
const tabs = document.querySelector(".tabs");
const hamburgerMenuLinks = document.querySelector(".hamburger-menu-links");

// Function to toggle between login and registration forms
function toggleForm(formName) {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  if (formName === "login") {
    container.style.display = "block";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    container.style.display = "block";
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    // const twoMinutes = 60, // 2 minutes in seconds
    //   display = document.querySelector("#timer");
    // startTimer(twoMinutes, display);
  }
}

hamburgerMenu.addEventListener("click", () => {
  tabs.classList.toggle("active");
  hamburgerMenuLinks.classList.toggle("active");
});

// Close navigation menu when a link is clicked
const links = document.querySelectorAll(".hamburger-menu-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    tabs.classList.remove("active");
    hamburgerMenuLinks.classList.remove("active");
  });
});

// JavaScript code to show and hide password and change icon

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

// Form validation functions
function loginvalidation() {
  let email = document.forms.loginForm.email.value;
  let password = document.forms.loginForm.password.value;
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === "" || !regEmail.test(email)) {
    alert("Please enter your Email properly.");
    document.forms.loginForm.email.focus();
    return false;
  }
  if (password === "") {
    alert("Please enter your password.");
    document.forms.loginForm.password.focus();
    return false;
  } else {
    alert("Login successful.");
    return true;
  }
}

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      window.location.reload(); // Refresh the page when timer reaches zero
    }
  }, 1000);
}

function signUpValidation() {
  let fname = document.forms.signUpForm.fname.value;
  let mname = document.forms.signUpForm.mname.value;
  let lname = document.forms.signUpForm.lname.value;
  let accno = document.forms.signUpForm.accno.value;
  let phone = document.forms.signUpForm.phone.value;
  let email = document.forms.signUpForm.email.value;
  let termCon = document.forms.signUpForm.termCon.value;
  let password = document.forms.signUpForm.password.value;
  let confirmpwd = document.forms.signUpForm.confirmpwd.value;
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regName = /\w+/g;
  let regNum = /^\d+$/;

  if (fname === "" || regName.test(fname)||(fname.length>=3&&fname.length<=20)) {
    alert("Please enter your First Name properly.");
    document.forms.signUpForm.fname.focus();
    return false;
  }
  if (mname === "" || regName.test(mname)||(mname.length>=3&&mname.length<=20)) {
    alert("Please enter your Middle Name properly.");
    document.forms.signUpForm.mname.focus();
    return false;
  }
  if (lname === "" || regName.test(lname)||(lname.length>=3&&lname.length<=20)) {
    alert("Please enter your Last Name properly.");
    document.forms.signUpForm.lname.focus();
    return false;
  }
  if (accno === "" || regNum.test(accno)||accno.length===16) {
    alert("Please enter your Account No properly.");
    document.forms.signUpForm.accno.focus();
    return false;
  }if (phone === "" || regNum.test(phone)||phone.length===10) {
    alert("Please enter your Phone Number properly.");
    document.forms.signUpForm.phone.focus();
    return false;
  }
  if (email === "" || !regEmail.test(email)||(email.length>=11&&email.length<=30)) {
    alert("Please enter your Email properly.");
    document.forms.signUpForm.email.focus();
    return false;
  }
  if (password === "" || regName.test(password)||(password.length>=8&&password.length<=20)) {
    alert("Please enter your password.");
    document.forms.signUpForm.password.focus();
    return false;
  }
  if (
    confirmpwd === "" ||
    regName.test(confirmpwd) ||
    confirmpwd !== password || (confirmpwd.length>=8&&confirmpwd.length<=20)
  ) {
    alert("Please confirm your password.");
    document.forms.signUpForm.confirmpwd.focus();
    return false;
  }
  return true;
}
