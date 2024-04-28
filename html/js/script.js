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

// define products
let productsDom = document.querySelector(".container_home");
let cartProductDomDiv = document.querySelector(".carts-products div");
let natificationBadge = document.querySelector(".badge");
let cartProductDom = document.querySelector(".carts-products");
let displayItems = document.querySelector(".display-items");
let products = [
  {
    id: 1,
    title: "hp",
    size: "large",
    imageUrl: "img/img1.jfif",
  },
  {
    id: 2,
    title: "iphone 15pro max",
    size: "medium",
    imageUrl: "img/img2.jfif",
  },
  {
    id: 3,
    title: "rolex watch",
    size: "small",
    imageUrl: "img/img3.jfif",
  },
  {
    id: 4,
    title: "esspresso machine",
    size: "large",
    imageUrl: "img/img4.jfif",
  },
];

function drawProducts() {
  let productsItem = products.map((item) => {
    return `
    <div class="product">
    <div class="productItem">
            <img class="productItem1" src= "${item.imageUrl}" alt="image1" />
          </div>
          <div class="title_product">
            <h2>${item.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis odit tempore
            </p>
            <span> ${item.size}</span>
          </div>
          <div class="product-item-action">
            <button class="add-to-cart "  onclick="addToCart(${item.id})">Add To Cart</button>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
    `;
  });
  productsDom.innerHTML = productsItem;
}

drawProducts();

let addItemToPage = [];
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = products.find((item) => item.id === id);
    cartProductDomDiv.innerHTML += `<p> ${choosenItem.title}</p> `;

    addItemToPage = [...addItemToPage, choosenItem];
    localStorage.setItem("productInCart", JSON.stringify(addItemToPage));

    let cardProductsLength = document.querySelectorAll(".carts-products div p");
    natificationBadge.style.display = "block";
    natificationBadge.innerHTML = cardProductsLength.length;
  } else {
    window.location = "login.html";
  }
}

displayItems.addEventListener("click", () => {
  if (cartProductDomDiv.innerHTML != "") {
    if (cartProductDom.style.display == "block") {
      cartProductDom.style.display = "none";
    } else {
      cartProductDom.style.display = "block";
    }
  }
});
