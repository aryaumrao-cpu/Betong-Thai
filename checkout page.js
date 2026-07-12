function renderCheckout() {
    const items = getCart();
    const list = document.getElementById('çheckoutItems');

    if (items.length === 0) {
        list.innerHTML = '<li>Your cart is empty.</li>';
        setTotals(0);
        return;
    }

    list.innerHTML = items.map(item => `
        <li>
            <img src="${item.img || 'placeholder.jpg'}" alt="${item.name}">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-qty">$${item.qty}x</div>
            </div>
            <div class="item-price">$${(item.price * item.qty).toFixed(2)}
        </li>
    `).join('');

    const subtotal = items.reduce((sum, item) => sum (item.price * item.qty), 0);
    setTotals(subtotal);
}

function setTotals(subtotal) {
    document.getElementById('breakdownSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('breakdownTotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('paymentSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('paymentTotal').textContent = `$${subtotal.toFixed(2)}`;
    
}


document.addEventListener('DOMContentLoaded', renderCheckout);