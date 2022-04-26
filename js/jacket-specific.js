const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const siteUrl = "https://greenapplesfanatic.org/wp-json/wc/store/products/";

console.log(siteUrl);

const key = "?consumer_key=ck_5ae8f53566ed02cd687d5609dd9a871b26d72cd3&consumer_secret=cs_01556086b5754d9cd894dce182a1e222887e6700";

const url = siteUrl + id + key;

console.log(url);

const jacketSpecificContainer = document.querySelector(".jacket-specific-container");

async function showJacket() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    console.log(product);

    document.title = "";
    document.title = `${product.name}`;

    jacketSpecificContainer.classList.remove("loader");

    jacketSpecificContainer.innerHTML += `<div class="jacket-image"><img src="${product.images[0].src}" alt="${product.name}"/></div> <div class="jacket-information">
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
<a href="checkout-bag.html"><button data-product=${product.id}  class="add-to-cart-button">Add to cart</button></a></div>`;
  } catch (error) {
    console.log(error);
    jacketSpecificContainer.innerHTML = `Something went wrong when calling the API`;
  }
}

showJacket();

//updated code messed with the add-to-cart function, but after discussing with a couple of tutors I decided to focus on the exam for now and get back to this later.
