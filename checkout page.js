function renderCheckout() {
    const items = getCart();
    const list = document.getElementById('checkoutItems');

    if (items.length === 0) {
        list.innerHTML = '<li>Your cart is empty.</li>';
        setTotals(0);
        return;
    }

    list.innerHTML = items.map((item, index) => `
        <li class="checkout-item">
            <img src="${item.img || 'placeholder.jpg'}" alt="${item.name}">

        <div class="checkout-info">
            <div class="checkout-name">${item.name}</div>

            ${item.protein ? `<div class="checkout-protein">Protein: ${item.protein}</div>` : ''}
            
            <div class="checkout-qty">${item.qty} x $${Number(item.price).toFixed(2)}</div>
        </div>

        <button class="checkout-remove" onclick="removeCheckoutItem(${index})">✕</button>
        </li>
    `).join('');

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    setTotals(subtotal);
}

function removeCheckoutItem(index) {
    const items = getCart();
    items.splice(index, 1);
    saveCart(items);
    renderCheckout();
}

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || []; 
}

function setTotals(subtotal) {
    document.getElementById('breakdownSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('breakdownTotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('paymentSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('paymentTotal').textContent = `$${subtotal.toFixed(2)}`;
    
}


document.addEventListener('DOMContentLoaded', renderCheckout);