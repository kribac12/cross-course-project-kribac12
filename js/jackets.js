const container = document.querySelector(".women-container");
const errorContainer = document.querySelector(".women-container");

const baseUrl = "http://rainydays.local/wp-json/wc/store/products";

async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    const products = await response.json();

    console.log(products);

    container.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
      const productImg = products[i].images;
      container.innerHTML += `<a href="jacket.html?id=${products[i].id}">
      <img src=${productImg[0].src} alt="${products[i].name}" class="product" />
        <h2 class=“heading-left”>${products[i].name}</h2>
        <p class="orange-price">Price: $${products[i].prices.price}</p>
<div class=cta-white-view>View</div>
        </a>`;
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = alert("Unfortunately, there was an error with the API: " + error);
  }
}

getProducts();
