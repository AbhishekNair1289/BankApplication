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

function signUpValidation() {
  let name = document.forms.signUpForm.name.value;
  let email = document.forms.signUpForm.email.value;
  let password = document.forms.signUpForm.password.value;
  let confirmpwd = document.forms.signUpForm.confirmpwd.value;
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regName = /\d+/g;

  if (name === "" || regName.test(name)) {
    alert("Please enter your Name properly.");
    document.forms.signUpForm.name.focus();
    return false;
  }
  if (email === "" || !regEmail.test(email)) {
    alert("Please enter your Email properly.");
    document.forms.signUpForm.email.focus();
    return false;
  }
  if (password === "" || regName.test(password)) {
    alert("Please enter your password.");
    document.forms.signUpForm.password.focus();
    return false;
  }
  if (
    confirmpwd === "" ||
    regName.test(confirmpwd) ||
    confirmpwd !== password
  ) {
    alert("Please confirm your password.");
    document.forms.signUpForm.confirmpwd.focus();
    return false;
  }
  return true;
}
