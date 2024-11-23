function addToCart(productName, productDescription, productImage) {
  // Retrieve existing cart items
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Create a new product object
  const product = { 
      name: productName, 
      description: productDescription, 
      image: productImage 
  };

  // Check if the product already exists in the cart
  if (!cartItems.some((item) => item.name === productName)) {
      cartItems.push(product); // Add product to cart
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save to localStorage
      alert(`${productName} added to cart!`);
  } else {
      alert(`${productName} is already in the cart.`);
  }
}


function removeFromCart(index) {
  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Remove item at the specified index
  cartItems.splice(index, 1);

  // Save the updated cart back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Refresh the cart display
  displayCartItems();
}
