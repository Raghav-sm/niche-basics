document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 60 },
  ];
  const cart = []
  const productList = document.getElementById('product-list');
  const cartItems = document.getElementById('cart-items');
  const emptyCartMessage = document.getElementById('empty-cart-para');
  const cartTotal = document.getElementById('cart-total');
  const totalPriceDisplay = document.getElementById('total-price');
  const checkOutBtn = document.getElementById('checkoutBtn');

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <span>${product.name}- $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to cart</button>`
    productList.appendChild(productDiv);
  });

  productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const productIdGrabbed = parseInt(e.target.getAttribute('data-id'));
      const product = products.find((p) => p.id == productIdGrabbed);
      addToCart(product);
    }
  });//end of event listener

  checkOutBtn.addEventListener('click', () => {
    cart.length = 0;
    alert('thank you for shopping!')
    renderCart();
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = '';
    emptyCartMessage.classList.add('hidden'); //para is hidden now 
    cartTotal.classList.remove('hidden'); // bottom total part is visible
    let totalPrice = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartDiv = document.createElement('div');
        cartDiv.innerHTML = `${item.name} : $${item.price.toFixed(2)}`
        cartItems.appendChild(cartDiv);
      });
      totalPriceDisplay.textContent = totalPrice.toFixed(2);
    } else {
      emptyCartMessage.classList.remove('hidden');
      cartTotal.classList.add('hidden');
    }
  }// render function done 


});