const jacketContainer = document.querySelector(".jacket-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");

const cors = "https://noroffcors.herokuapp.com/";
const siteUrl = "http://rainydays.local/wp-json/wc/store/products" + id;

const url = cors + siteUrl;

console.log(url);

async function showJacket() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const products = results[0];
    console.log(products);

    document.title = "";
    document.title = `${products.name}`;

    const productImg = products[i].images;

    jacketContainer.innerHTML += `<div class="jacket-image"><img src="${productImg[0].src}" alt="${products.name}"/></div> <div class="jacket-information">
<h1>${products.name}</h1><p class="orange-price">$${products[i].prices.price}</p><p>Description: ${products.description}</p><p>Materials: 60% cotton, 40% polyester</p>
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
<button class="cta cta-white add-to-cart-button" data-product=${products.id}>Add to cart</button></div>`;
  } catch (error) {
    jacketContainer.innerHTML = alert("Could not find the jacket, try again");
  }
}

showJacket();
