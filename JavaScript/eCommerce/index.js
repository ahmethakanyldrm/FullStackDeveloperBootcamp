let products = []; // array
let shoppingCards = []; // localStorage'tan alınacak veya boş bir dizi

if(localStorage.getItem("products")){
    products = JSON.parse(localStorage.getItem("products"));
}

if(localStorage.getItem("shoppingCards")){
    shoppingCards = JSON.parse(localStorage.getItem("shoppingCards"));
}

setProductToHTML();
setShoppingCardCountUsingLocalStorage();

function setProductToHTML(){
    const productsRowElement = document.getElementById("productsRow");
    productsRowElement.innerHTML = "";

    for(const index in products){
        const product = products[index];

        let buttonText = `
          <button class="btn btn-danger w-100" disabled>
            <i class="bi bi-exclamation-diamond-fill"></i>
            No Product in Stock            
          </button>
          `;

        if(product.stock > 0){
          buttonText = `
          <button onclick="addShoppingCard(${index})" class="btn btn-outline-dark w-100">
            <i class="bi bi-cart-plus"></i>
            Add Shopping Cart
          </button>`
        }

        const text = `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-1">
        <div class="card">
          <div class="card-body product-image-div">
            <img src="${product.image}" alt="" style="width: 100%; max-height:100%">
          </div>
          <div class="card-header product-name-div" style="flex-direction: column">
            <h6>${product.name.substring(0,84)}</h6>
            <span>Stock: ${product.stock}</span>
          </div>
          <div class="card-body text-center">
            <h4 class="alert alert-danger"> 
              ${formatCurrency(product.price)}
            </h4>
              ${buttonText}
          </div>
        </div>
        </div>`
        if(productsRowElement !== null){
            productsRowElement.innerHTML += text;
        }
    }
}

function getImage(e){
  const file = e.target.files[0];

  const reader = new FileReader();  

  reader.onload = function(event){
    image = event.target.result;
  }

  reader.readAsDataURL(file);
}

function save(event){
    event.preventDefault();
    const nameElement = document.getElementById("name");
    const priceElement = document.getElementById("price");    
    const stockElement = document.getElementById("stock");
    const id = products.length + 1;

    const product = {
        id: id,
        name: nameElement.value,
        price: priceElement.value,
        image: image,
        stock: stockElement.value
    };

    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));

    nameElement.value = "";
    priceElement.value = "";
    stockElement.value = 0;

    const closeBtnElement = document.getElementById("addProductModalCloseBtn");
    closeBtnElement.click();
    setProductToHTML();
    const toastrOptions = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right"
    }
    toastr.options = toastrOptions;
    toastr.success("Product add is successful");
}

function addShoppingCard(index){
    const product = products[index];
    if (product.stock > 0) {
        shoppingCards.push(product);
        product.stock -= 1;

        localStorage.setItem("shoppingCards", JSON.stringify(shoppingCards));
        localStorage.setItem("products", JSON.stringify(products));

        setProductToHTML();
        setShoppingCardCountUsingLocalStorage();
    } else {
        toastr.error("Product out of stock");
    }
}

function setShoppingCardCountUsingLocalStorage(){
    const shoppingCardCountElement = document.getElementById("shopping-card-count");
    shoppingCardCountElement.innerHTML = shoppingCards.length;
}