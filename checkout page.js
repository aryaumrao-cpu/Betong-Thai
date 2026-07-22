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

function validateCheckoutForm() {
    let isValid = true;

    const name = document.getElementById('custName');
    const phone = document.getElementById('custPhone');
    const address = document.getElementById('custAddress');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');

    [name, phone, address].forEach(f => f.classList.remove('invalid'));
    [nameError, phoneError, addressError].forEach(e => e.textContent = '');

    const nameValue = name.value.trim();
    const namePattern = /^[A-Za-z\s'-]{2,60}$/;

    if (!nameValue) {
        nameError.textContent = 'Please enter your full name';
        name.classList.add('invalid');
        isValid = false;
    } else if (!namePattern.test(nameValue)) {
        nameError.textContent = 'Name should only contain letters.';
        name.classList.add('invalid');
        isValid = false;
    } else if (!nameValue.includes(' ')) {
        nameError.textContent = 'Please enter your first and last name.';
        name.classList.add('invalid');
        isValid = false;
    }

    const phoneValue = phone.value.trim();
    const phoneDigits = phoneValue.replace(/\D/g, '');
    const phonePattern = /^[\d\s()+-]+$/;

    if (!phoneValue) {
        phoneError.textContent = 'Please enter a phone number.';
        phone.classList.add('invalid');
        isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
        phoneError.textContent = 'Phone number contains invalid characters.';
        phone.classList.add('invalid');
        isValid = false;
    } else if (phoneDigits.length < 8 || phoneDigits.length > 12) {
        phoneError.textContent = 'Please enter a valid phone number.';
        phone.classList.add('invalid');
        isValid = false;
    }

    const addressValue = address.value.trim();
    const hasLetter = /[A-Za-z]/.test(addressValue);
    const hasNumber = /\d/.test(addressValue);

    if (!addressValue) {
        addressError.textContent = 'Please enter a delivery address.';
        address.classList.add('invalid');
        isValid = false;
    } else if (addressValue.length < 6) {
        addressError.textContent = 'Please enter a complete address.';
        address.classList.add('invalid');
        isValid = false;
    } else if (!hasNumber || !hasLetter) {
        addressError.textContent = 'Please include a street number and name.';
        address.classList.add('invalid');
        isValid = false;
    }

    return isValid;

}

document.addEventListener('DOMContentLoaded', function() {
    renderCheckout();

    const payNowBtn = document.getElementById('payNowBtn');

    payNowBtn.addEventListener('click', function(e) {
        if (!validateCheckoutForm()) {
            e.preventDefault();
        }
    });
});