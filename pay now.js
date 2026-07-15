const methodButtons = document.querySelectorAll('.method-btn');
const panels = document.querySelectorAll('.method-panel');

methodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        methodButtons.forEach(b => {
            b.classList.remove('is-active');
            b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        const target = btn.dataset.method;
        panels.forEach(p => {
            p.classList.toggle('is-hidden', p.dataset.panel !== target);
        });
    });
});

function renderPaySummary() {
    const items = (typeof getCart === 'function') ? getCart() : [];
    const list = document.getElementById('paySummaryItems');

    if (items.length === 0) {
        list.innerHTML = '<li class="empty-summary">Your cart is empty.</li>';
    } else {
        list.innerHTML = items.map(item => `
            <li> 
                <img src="${item.img || 'placeholder.jpg'}" alt="${item.name}">
        <div class="summary-item-info">
          <div class="summary-item-name">${item.name}</div>
          <div class="summary-item-meta">${item.qty} x $${Number(item.price).toFixed(2)}${item.protein ? ` · ${item.protein}` : ''}</div>
        </div>
        <div class="summary-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </li>
      `).join('');
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('paySubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('payTotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cardPayAmount').textContent = `$${subtotal.toFixed(2)}`;

  return subtotal;
}

let currentTotal = renderPaySummary();

const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvvInput = document.getElementById('cardCvv');

cardNumberInput.addEventListener('input', () => {
    let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 19);
    cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
});

cardExpiryInput.addEventListener('input', () => {
    let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length > 2) {
        cardExpiryInput.value = digits.slice(0, 2) + '/' + digits.slice(2);
    } else {
        cardExpiryInput.value = digits;
    }
});

cardCvvInput.addEventListener('input', () => {
    cardCvvInput.value = cardCvvInput.value.replace(/\D/g, '').slice(0, 4);
});

function luhnCheck(number) {
    let sum = 0;
    let alternate = false;
    for (let i = number.length - 1; i>= 0; i--) {
        let digit = parseInt(number.charAt(i), 10);
        if (alternate) {
            digit *= 2;
            if (digit > 9) digit -=9;
        }
        sum += digit;
        alternate = !alternate;
    }
    return sum % 10 === 0;
}

function setError(id, message) {
    document.getElementById(`err-${id}`).textContent = message;
    document.getElementById(id).classList.toggle('has-error', !!message);
}

function validateForm() {
    let firstInvalid = null;
    let valid = true;

    const name = document.getElementById('cardName').value.trim();
    if(!name) {
        setError('cardName', 'Enter the name on your card.');
        valid = false; firstInvalid = firstInvalid || 'cardName'; 
    } else if (!/^[a-zA-Z\s'-]{2,}$/.test(name)) {
        setError('cardName', 'Name can only contain letters.');
        valid = false; firstInvalid = firstInvalid || 'cardName'; 
    } else {
        setError('cardName', '');
    }

    const rawNumber = cardNumberInput.value.replace(/\s/g, '');
    if (!rawNumber) {
        setError('cardNumber', 'Enter your card number.');
        valid = false; firstInvalid = firstInvalid || 'cardNumber'; 
    } else if (!/^\d{13,19}$/.test(rawNumber)) {
        setError('cardNumber', 'Card should be 13-19 digits');
        valid = false; firstInvalid = firstInvalid || 'cardNumber'; 
    } else if (!luhnCheck(rawNumber)) {
        setError('cardNumber', "That card number doesn't look right.");
        valid = false; firstInvalid = firstInvalid || 'cardNumber'; 
    } else {
        setError('cardNumber', '')
    }

    const expiry = cardExpiryInput.value.trim();
    if (!expiry) {
        setError('cardExpiry', 'Enter the expiry date.');
        valid = false; firstInvalid = firstInvalid || 'cardExpiry'; 
    } else if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        setError('cardExpiry', 'Use MM/YY format.');
        valid = false; firstInvalid = firstInvalid || 'cardExpiry'; 
    } else {
        const [mm, yy] = expiry.split('/').map(Number);
        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;
        if (mm < 1 || mm > 12) {
        setError('cardExpiry', 'Month must be between 01 and 12');
        valid = false; firstInvalid = firstInvalid || 'cardExpiry'; 
    } else if (yy < currentYear || (yy === currentYear && mm < currentMonth)) {
        setError('cardExpiry', 'This card has expired.');
        valid = false; firstInvalid = firstInvalid || 'cardExpiry'; 
    } else {
        setError('cardExpiry', '');
    }
  }
  
  const cvv = cardCvvInput.value.trim();
  if (!cvv) {
    setError('cardCvv', 'Enter the CVV.');
    valid = false; firstInvalid = firstInvalid || 'cardCvv'; 
  } else if (!/^\d{3,4}$/.test(cvv)) {
    setError('cardCvv', 'CVV should be 3-4 digits.');
    valid = false; firstInvalid = firstInvalid || 'cardCvv';
  } else {
    setError('cardCvv', '');
  }

  const zip = document.getElementById('cardZip').value.trim();
  if (!zip) {
    setError('cardZip', 'Enter your billing postcode.');
    valid = false; firstInvalid = firstInvalid || 'cardZip';
  } else if (!/^[a-zA-Z0-9\s-]{3,10}$/.test(zip)) {
    setError('cardZip', "That postcode doesn't look right.");
    valid = false; firstInvalid = firstInvalid || 'cardZip';
  } else {
    setError('cardZip', '');
  }

  if (firstInvalid) document.getElementById(firstInvalid).focus();
  return valid;
}

['cardName', 'cardNumber', 'cardExpiry', 'cardCvv', 'cardZip'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => setError(id, ''));
});

const cardForm = document.getElementById('cardForm');
const submitBtn = document.getElementById('cardSubmitBtn');

submitBtn.addEventListener('click', (e)  => {
    e.preventDefault();
    cardForm.requestSubmit();
});

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();


if (currentTotal <= 0) {
    setError('cardNumber', '');
    alert('Your cart is empty - add something from the menu first.');
    return;
}

if (!validateForm()) return;

submitBtn.disabled = true;
submitBtn.querySelector('.btn-label').textContent = 'Processing payment...';

setTimeout(() => { 
    const orderRef = 'BT-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('orderRef').textContent = `Order reference: ${orderRef}
`; 

    document.getElementById('successOverlay').classList.add('show');

    localStorage.removeItem('cart');
}, 1400);
});




