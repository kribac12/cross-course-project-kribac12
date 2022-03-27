const jacketContainer = document.querySelector(".jacket-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");
const jacket = jackets.find(({ id }) => id === parseInt(jacketId));

function showJacket() {
  try {
    document.title = "";
    document.title = `${jacket.name}`;
    jacketContainer.innerHTML += `<div class="jacket-image"><img src="${jacket.image}" alt="${jacket.name}"/></div> <div class="jacket-information">
<h1>${jacket.name}</h1><p class="orange-price">${jacket.price}$</p><p>Description: ${jacket.description}</p><p>Materials: ${jacket.materials}</p><p>Details: ${jacket.details}</p> 
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
<button class="cta cta-white add-to-cart-button" data-product=${jacket.id}>Add to cart</button></div>`;
  } catch (error) {
    jacketContainer.innerHTML = alert("Could not find the jacket, try again");
  }
}

showJacket();
