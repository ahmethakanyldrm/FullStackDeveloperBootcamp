let shoppingCards = [];


if (localStorage.getItem("shoppingCards")) {
    shoppingCards = JSON.parse(localStorage.getItem("shoppingCards"));
  }

  setShoppingCardToHtml();

  setShoppingCardCountUsingLocalStorage();

function setShoppingCardToHtml() {
    const shoppingCardsRowElement = document.getElementById("shoppingCardsRow");
    shoppingCardsRowElement.innerHTML = "";
  for (const index in shoppingCards) {
    const shoppingCard = shoppingCards[index];
    const text = `
      
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                          <div class="card">
                              <div class="card-body product-image-div">
                                  <img src="${shoppingCard.image}"
                                      >
                              </div>
                              <div class="card-header product-name-div">
                                  <h6 class="text-center">${shoppingCard.name.substring()}</h6>
                              </div>
                              <div class="card-body text-center">
                                  <h4 class="alert alert-danger">
                                  ${shoppingCard.price}
                                  </h4>
                                  <button class="btn btn-outline-dark w-100" onclick="deleteShoppingCard(${index})" >
                                      <i class="bi bi-trash"></i>
                                      Delete </button>
                              </div>
                          </div>
          
                      </div>
          
          
          `;

    if (shoppingCardsRowElement !== null) {
        shoppingCardsRowElement.innerHTML += text; // innerHTML sıfırdan siler ve tekrar yazar
    }
  }
}

function setShoppingCardCountUsingLocalStorage() {

    let cards = [];
  
    if (localStorage.getItem("shoppingCards")){
      cards = JSON.parse(localStorage.getItem("shoppingCards"));
    }
  
    const shoppingCardCountElement = document.getElementById("shopping-card-count");
    shoppingCardCountElement.innerHTML = cards.length;
  }