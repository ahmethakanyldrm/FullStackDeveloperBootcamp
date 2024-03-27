

let products = []; // array
let shoppingCards = [];

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}
setProductToHtml();
setShoppingCardCountUsingLocalStorage();

function setProductToHtml() {
  const productsRowElement = document.getElementById("productsRow");
  productsRowElement.innerHTML = "";
  for (const index in products) {
    const product = products[index];
    const text = `
      
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                          <div class="card">
                              <div class="card-body product-image-div">
                                  <img src="${product.image}"
                                      >
                              </div>
                              <div class="card-header product-name-div">
                                  <h6 class="text-center">${product.name.substring()}</h6>
                              </div>
                              <div class="card-body text-center">
                                  <h4 class="alert alert-danger">
                                  ${product.price}
                                  </h4>
                                  <button class="btn btn-outline-dark w-100" onclick="addShoppingCard(${index})" >
                                      <i class="bi bi-cart-plus"></i>
                                      Add Shopping Card</button>
                              </div>
                          </div>
          
                      </div>
          
          
          `;

    if (productsRowElement !== null) {
      productsRowElement.innerHTML += text; // innerHTML sıfırdan siler ve tekrar yazar
    }
  }
}

function save(event) {
  event.preventDefault();
  const nameElement = document.getElementById("name");
  const priceElement = document.getElementById("price");
  const imageElement = document.getElementById("image");

  const product = {
    name: nameElement.value,
    price: priceElement.value,
    image: imageElement.value
  };

  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  nameElement.value = "";
  priceElement.value = "";
  imageElement.value = "";

  const closeButtonEl = document.getElementById("addProductModalCloseButton");

  closeButtonEl.click();

  setProductToHtml();
   const toastOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-bottom-right"
   };
  
  toastr.options = toastOptions;
  toastr.success("Product add is successful");
}


function addShoppingCard(index) {
  
  const product = products[index];
  shoppingCards.push(product);

  localStorage.setItem("shoppingCards", JSON.stringify(shoppingCards));

  setShoppingCardCountUsingLocalStorage();
  

}


function setShoppingCardCountUsingLocalStorage() {

  let cards = [];

  if (localStorage.getItem("shoppingCards")){
    cards = JSON.parse(localStorage.getItem("shoppingCards"));
  }

  const shoppingCardCountElement = document.getElementById("shopping-card-count");
  shoppingCardCountElement.innerHTML = cards.length;
}