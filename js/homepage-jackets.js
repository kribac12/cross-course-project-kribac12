const homepageProducts = document.querySelector(".homepage-products");

for (let i = 0; i < products.length; i++) {
  if (products[i].homepage) {
    homepageProducts.innerHTML += `<a href="jacket.html?id=${products[i].id}"><div>
        <h3>${products[i].name}</h3><p class="orange-price">${products[i].price} $</p>
        <img src="${products[i].image}" /> </div></a>`;
  }
}
