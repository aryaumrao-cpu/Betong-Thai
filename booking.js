let viewYear, viewMonth;
let selectedDate = null;
let guestCount = 0;

const today = new Date();
today.setHours(0,0,0,0);
viewYear = today.getFullYear();
viewMonth = today.getMonth();

const MONTH_NAMES = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const calendarMonthEl = document.getElementById('calendarMonth');
const calendarGridEl = document.getElementById('calendarGrid');
const dateDisplayEl = document.getElementById('dateDisplay');

function renderCalendar() {
    calendarMonthEl.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;
    calendarGridEl.innerHTML = '';

    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    for(let i = 0; i < firstWeekday; i++){
        const blank = document.createElement('div');
        blank.className = 'calendar-day-blank';
        calendarGridEl.appendChild(blank);
    }

    for(let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(viewYear, viewMonth, day);
        cellDate.setHours(0,0,0,0);
        const btn = document.createElement('button');
        btn.className = 'calendar-day';
        btn.textContent = day;

        if(cellDate < today) {
            btn.disabled = true;
        } else {
            btn.addEventListener('click', () => selectDate(cellDate));
        }
        if(cellDate.getTime() === today.getTime()) btn.classList.add('today');
        if(selectedDate && cellDate.getTime() === selectedDate.getTime()) {
            btn.classList.add('selected');
        }
        calendarGridEl.appendChild(btn);
    }
}

function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    updateDateDisplay();
    updateStep1Continue();
}

function updateDateDisplay() {
    if(!selectedDate) {
        dateDisplayEl.innerHTML = `<span class="date-display-year">Pick a date</span><span class="date-display-day">—</span>`;
        return;
    }
    const dayName = DAY_NAMES_SHORT[selectedDate.getDay()];
    dateDisplayEl.innerHTML = `<span class="date-display-year">${selectedDate.getFullYear()}</span><span class="date-display-day">${dayName}, ${MONTH_NAMES[selectedDate.getMonth()].slice(0,3)} ${selectedDate.getDate()}</span>`;
}

document.getElementById('prevMonth').addEventListener('click', () =>  {
    viewMonth--;
    if(viewMonth < 0){viewMonth = 11; viewYear--;}
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    viewMonth++;
    if(viewMonth > 11){viewMonth = 0; viewYear++;}
    renderCalendar();
});

renderCalendar();
updateDateDisplay();

const guestCountEl = document.getElementById('guestCount');

function updateGuestDisplay() {
    guestCountEl.textContent = guestCount;
    updateStep1Continue();
}

document.getElementById('guestMinus').addEventListener('click', () => {
    guestCount = Math.max(0, guestCount -1);
    updateGuestDisplay();
});

document.getElementById('guestPlus').addEventListener('click', () => {
    guestCount = Math.min(20, guestCount +1);
    updateGuestDisplay();
});

const steps = {1: document.getElementById('step1'), 2: document.getElementById('step2'), 3: document.getElementById('step3')};
const stepDone = document.getElementById('stepDone');
const stepperEls = document.querySelectorAll('.stepper-step');

function goToStep(n) {
    Object.values(steps).forEach(el => el.hidden = true);
    stepDone.hidden = true;
    steps[n].hidden = false;
    stepperEls.forEach(el => {
        const s = Number(el.dataset.step);
        el.classList.toggle('active', s === n);
        el.classList.toggle('done', s < n);
    });
}

function updateStep1Continue() {
    document.getElementById('toStep2').disabled = !(selectedDate && guestCount > 0);
}

document.getElementById('toStep2').addEventListener('click', () => goToStep(2));
document.getElementById('toStep1Back').addEventListener('click', () => goToStep(1));
document.getElementById('toStep2Back').addEventListener('click', () => goToStep(2));


const nameInput = document.getElementById('guestName');
const phoneInput = document.getElementById('guestPhone');
const emailInput = document.getElementById('guestEmail');
const notesInput = document.getElementById('guestNotes');
const toStep3Btn = document.getElementById('toStep3');
const fieldTouched = { name: false, phone: false, email: false };

function validateStep2() {
    let valid = true;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.replace(/\s/g, "");
    const email = emailInput.value.trim();

    const nameValid = /^[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*$/.test(name);
    const phoneValid = /^04\d{8}$/.test(phone);
    const emailValid = /\S+@\S+\.\S+/.test(email);

    document.getElementById('nameError').textContent = 
        (!nameValid && fieldTouched.name) ? "Please enter a valid name." : "";
    document.getElementById('phoneError').textContent = 
        (!phoneValid && fieldTouched.phone) ? "Please enter a valid phone number." : "";
    document.getElementById('emailError').textContent = 
        (!emailValid && fieldTouched.email) ? "Please enter a valid email address." : "";

    if (!nameValid || !phoneValid || !emailValid) {
        valid = false;
    }

    toStep3Btn.disabled = !valid;

    return valid;
}

nameInput.addEventListener('input', () => validateStep2());
phoneInput.addEventListener('input', () => validateStep2());
emailInput.addEventListener('input', () => validateStep2());

nameInput.addEventListener('blur', () => {
    fieldTouched.name = true;
    validateStep2();
});

phoneInput.addEventListener('blur', () => {
    fieldTouched.phone = true;
    validateStep2();
});

emailInput.addEventListener('blur', () => {
    fieldTouched.email = true;
    validateStep2();
});

toStep3Btn.addEventListener ('click', () => {
    fieldTouched.name = true;
    fieldTouched.phone = true;
    fieldTouched.email = true;
    
    if (validateStep2()) {
        renderSummary();
        goToStep(3);
    }
});

function renderSummary() {
    const dateStr = selectedDate
    ? `${DAY_NAMES_SHORT[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : '—';
    const rows = [
        ['Date', dateStr],
        ['Guests', String(guestCount)],
        ['Name', nameInput.value.trim()],
        ['Phone', phoneInput.value.trim()],
        ['Email', emailInput.value.trim()],
        ['Special Requests', notesInput.value.trim() || '—'],
    ];

    document.getElementById('summaryBox').innerHTML = rows.map(([label, value]) =>
        `<div class="summary-row"><span class="summary-label">${label}</span><span class="summary-value">${escapeHtml(value)}</span></div>`
).join('');
}

function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'). replace(/>/g,'&gt;');
}

document.getElementById('confirmBooking').addEventListener('click', () => {
    const dateStr = selectedDate
    ? `${DAY_NAMES_SHORT[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}`
    : '';
    document.getElementById('confirmText').textContent =
        `We'll see ${nameInput.value.trim()} and party of ${guestCount} on ${dateStr}.`;
    Object.values(steps).forEach(el => el.hidden = true);
    stepDone.hidden = false;
    stepperEls.forEach(el => el.classList.add('done'));
});

function toggleCart(){document.getElementById('cartPanel').classList.toggle('open');}