const container = document.querySelector(".jacket-container");

const baseUrl =
  "https://greenapplesfanatic.org/wp-json/wc/store/products?consumer_key=ck_5ae8f53566ed02cd687d5609dd9a871b26d72cd3&consumer_secret=cs_01556086b5754d9cd894dce182a1e222887e6700";

async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    const products = await response.json();

    console.log(products);

    container.classList.remove("loader");

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
  }
}

getProducts();
