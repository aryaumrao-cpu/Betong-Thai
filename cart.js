function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(items) {
    localStorage.setItem('cart', JSON.stringify(items));
}

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('show');
    document.body.classList.toggle('no-scroll');
}

function addToCart(name, price, img, qty = 1) {
  const items = getCart();
  const existing = items.find(item => item.name === name); 

  if (existing) {
    existing.qty += qty;
  } else {
    items.push({name, price, img, qty});
  }


  saveCart(items);
  renderCart();
}

function removeFromCart(index) {
    const items = getCart();
    items.splice(index, 1);
    saveCart(items);
    renderCart();
}

function changeQty(index, delta) {
    const items = getCart();
    items[index].qty += delta;

    if (items[index].qty <= 0) {
        items.splice(index, 1);
    }

    saveCart(items);
    renderCart();
}

function renderCart() {
  const items = getCart();
  document.querySelector('.cart-count').textContent = 
    items.reduce((sum, item) => sum + item.qty, 0);

  const list = document.getElementById('cartItems');
  list.innerHTML = items.map((item, i) => `
        <li>
            <img src="${item.img || 'placeholder.jpg'}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">
                ${item.qty} x $${item.price.toFixed(2)} 
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
        </li>
    `).join('');

    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
}

function payNow() {
    const items = getCart();
    if (items.length === 0) {
        alert('Your cart is empty');
        return;
    }
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.qty, 
        0
    );
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    alert(`Redirecting to payment for $${subtotal.toFixed(2)}...`);
}

document.addEventListener('DOMContentLoaded', renderCart);