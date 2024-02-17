let navUser = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let userName = localStorage.getItem("username");
let logout = document.querySelector("#logout");
let logoutUser = document.querySelector("#logout_user");
let signInBlock = document.querySelector(".signin_block");
console.log(logoutUser);
if (userName) {
  links.remove();
  navUser.style.display = "block";
  userDom.innerHTML = userName;
  logout.style.display = "block";
  signInBlock.style.display = "flex";
}
logoutUser.addEventListener("click", function () {
  localStorage.clear();
  window.location = "index.html";
});
