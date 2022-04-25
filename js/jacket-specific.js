const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const siteUrl =
  "https://greenapplesfanatic.org/wp-json/wc/store/products?consumer_key=ck_5ae8f53566ed02cd687d5609dd9a871b26d72cd3&consumer_secret=cs_01556086b5754d9cd894dce182a1e222887e6700";

const url = siteUrl + id;

console.log(url);

const jacketContainer = document.querySelector(".jacket-container");

async function showJacket() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const product = results;

    console.log(products);

    document.title = "";
    document.title = `${product.name}`;

    jacketContainer.innerHTML += `<div class="jacket-image"><img src="${product.images[0].src}" alt="${product.name}"/></div> <div class="jacket-information">
<h1>${product.name}</h1><p class="orange-price">$${product.prices.price}</p><p>Description: ${product.description}</p><p>Materials: 60% cotton, 40% polyester</p>
<label for="sizes">Choose size</label>
<select name="sizes" id="sizes" class="sizes">
  <option value="XXS">XSS</option>
  <option value="XS">XS</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="XXL">XXL</option>
</select>
<button class="cta cta-white add-to-cart-button" data-product=${product.id}>Add to cart</button></div>`;
  } catch (error) {
    jacketContainer.innerHTML = alert("Could not find the jacket, try again");
  }
}

showJacket();
