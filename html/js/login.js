let username = document.querySelector("#username");
let password = document.querySelector("#password");
let signInBtn = document.querySelector("#sign_in");
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
// let logout = document.querySelector("#logout");
// let logoutUser = document.querySelector("#logout_user");

signInBtn.addEventListener("click", signin);

function signin(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert(" Please Enter data");
  } else {
    if (getUser.trim() && getPassword) {
      window.location = "index.html";
    } else {
      console.log("SomeThing is Wrong ..");
    }
  }
}
