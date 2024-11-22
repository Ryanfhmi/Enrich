function addToCart(productName, productDescription) {
  // Retrieve existing cart items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Create a new product object
  const product = { name: productName, description: productDescription };

  // Check if the product already exists in the cart
  if (!cartItems.some((item) => item.name === productName)) {
      cartItems.push(product); // Add product to cart
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save updated cart to localStorage
      alert(`${productName} added to cart!`);
  } else {
      alert(`${productName} is already in the cart.`);
  }
}

function displayCartItems() {
  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let likedArticlesContainer = document.getElementById("likedArticlesContainer");

  // Clear existing content
  likedArticlesContainer.innerHTML = "";

  // Display each product in the cart
  cartItems.forEach((item) => {
      let itemElement = document.createElement("div");
      itemElement.classList.add("singleArticleContainer");
      itemElement.innerHTML = `
          <h1 class="title">${item.name}</h1>
          <p class="paragrafStyle">${item.description}</p>
      `;
      likedArticlesContainer.appendChild(itemElement);
  });
}


