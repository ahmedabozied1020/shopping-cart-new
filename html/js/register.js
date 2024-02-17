let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let regiseterBtn = document.querySelector("#sign_up");

regiseterBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert(" Please Enter data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  }
  window.location = "login.html";
}
