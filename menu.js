const CATEGORIES = [
    {id: 'stirfried',    label:'Stir Fried',  img: 'stir fried1.jpg'},
    {id: 'curry',        label:'Curries',     img:'red thai curry.jpg'},
    {id: 'soup',         label:'Soups',       img:'soup1.jpg'},
    {id: 'rice',         label:'Rice',        img:'rice1.jpg'},
    {id: 'salad',        label:'Salads',      img:'salad1.jpg'},
    {id: 'dessert',      label:'Desserts',    img:'dessert1.jpg'},
    {id: 'specialties',  label:'Specialties', img:'specialties1.jpg'},
];

const PROTEIN_PRICES = {
    "": 0,
    "Chicken": 0,
    "Beef": 1,
    "Prawn": 2,
    "Tofu": 0,
    "Duck":0,
    "Chicken mince": 0,
}; 

const DISHES = [
    {num: 1, name:'Pad Nanmun Hoi', thai:'Oyster Sauce', cat:'stirfried', img: 'pad nammun hoi.jpg',
     price:14.90, estimate: true, desc: 'Stir fried with oyster sauce and mixed vegetables. Choose your protein.', spice:0, veg:false},
    {num: 2, name:'Pad King', thai:'Ginger', cat:'stirfried', img: 'pad king (ginger).jpg',
     price:14.90, estimate: true, desc: 'Stir fried with oyster sauce and mixed vegetables. Choose your protein.', spice:0, veg:false},
    {num: 3, name:'Pad Kha Pao', thai:'Basil', cat:'stirfried', img: 'pad kha pao (basil).jpg',
     price:14.90, estimate: true, desc: 'Stir fried with fresh chili, bamboo shoots., basil and vegetables. Choose your protein.', spice:2, veg:false},
     {num: 4, name:'Pad Gra Tiem', thai:'Garlic & Pepper', cat:'stirfried', img: 'pad gra tiem (ginger & pepper).jpg',
     price:14.90, estimate: true, desc: 'Stir fried garlic and pepper sauce and vegetables. Choose your protein.', spice:1, veg:false},
     {num: 5, name:'Pad Preow Wan', thai:'Sweet & Sour', cat:'stirfried', img: 'pad preow wan (sweet & sour).webp',
     price:14.90, estimate: true, desc: 'Stir fried sweet & sour sauce with tomato, pineapple, cucumber and vegetable. Choose your protein.', spice:0, veg:false},
     {num: 6, name:'Pad Prik King', thai:'Dry chilli paste', cat:'stirfried', img: 'pad prik king (dry chilli paste).jpg',
     price:14.90, estimate: true, desc: 'Stir fried medium-hot dry chilli paste with vegetable. Choose your protein.', spice:2, veg:false},
     {num: 7, name:'Pad Satay Sauce', thai:'No chilli', cat:'stirfried', img: 'pad satay sauce (no chili).webp',
     price:14.90, estimate: true, desc: 'Stir fried mixed vegetable with peanut satay sauce. Choose your protein.', spice:0, veg:false},
     {num: 8, name:'Pad Cashew Nut', thai:'', cat:'stirfried', img: 'pad cashew nut.jpg',
     price:14.90, estimate: true, desc: 'Stir fried with chilli jam, onion, mixed vegetable and cashew nuts. Choose your protein.', spice:1, veg:false},
     {num: 9, name:'Pad Takrai', thai:'Lemongrass', cat:'stirfried', img: 'pad takrai (lemongrass).jpg',
     price:14.90, estimate: true, desc: 'Stir fried wiht lemongrass, chilli jam and mixed vegetables. Choose your protein.', spice:1, veg:false},
     {num: 10, name:'Pad Nam Prik', thai:'', cat:'stirfried', img: 'pad nam prik.jpg',
     price:14.90, estimate: true, desc: 'Stir fried with red chilli paste, basil leaves, coconut milk and mixed vegetables. Choose your protein.', spice:2, veg:false},
     {num: 11, name:'Pad Snow Pea with King Prawn', thai:'', cat:'stirfried', img: 'pad snow pea with king prawn.jpg',
     price:14.90, estimate: true, desc: 'Stir fried king prawn with fresh snow peas and vegetables. Choose your protein.', spice:0, veg:false},
     {num: 12, name:'Pad Pak', thai:'Vegetarian', cat:'stirfried', img: 'pad pak.jpg',
     price:11.90, desc: 'Stir fried mixed vegetable in soy sauce.', spice:0, veg:true},
     {num: 13, name:'Pad Tofu and Bean Sprout', thai:'Vegetarian', cat:'stirfried', img: 'Pad Tofu and Bean Sprout.jpg',
     price:12.90, desc: 'Stir fried tofu with mixed vegetables, bean sprout and soy sauce', spice:0, veg:true},
     {num: 14, name:'Satay Vegetables and Tofu', thai:'Vegetarian', cat:'stirfried', img: 'Satay Vegetables and Tofu.jpg', 
     price:12.90, desc: 'Steamed mixed vegetables an tofu topped with satay sauce.', spice:0, veg:true},

     {num: 15, name:'Green Curry', thai:'Gaeng Keow Wan', cat:'curry', img: 'Green Curry.jpg',
     price:14.90, estimate: true, desc: 'Thai green curry infused with coconut milk, fresh vegetables, bamboo shoots and basil leaves. Choose your protein.', spice:2, veg:false},
     {num: 16, name:'Red Curry', thai:'Gaeng Daeng', cat:'curry', img: 'red thai curry.jpg',
     price:14.90, estimate: true, desc: 'Thai red curry infused with cocunut milk, fresh vegetables, bamboo shoots and basil leaves. Choose your protein.', spice:2, veg:false},
     {num: 17, name:'Yellow Curry', thai:'', cat:'curry', img: 'thai yellow curry.jpg',
     price:14.90, estimate: true, desc: 'Thai yellow curry cooked with cocnut milk and vegetables. Choose your protein.', spice:1, veg:false},
     {num: 18, name:'Panang Curry', thai:'', cat:'curry', img: 'thai Panang Curry.webp',
     price:14.90, estimate: true, desc: 'Mild curry cooked with cocunt milk and vegetables. Choose your protein.', spice:1, veg:false},
     {num: 19, name:'Massaman Curry Beef', thai:'', cat:'curry', img: 'Massaman Curry Beef.jpeg', 
     price:14.90, desc: 'Chunky tender beef stwed in sweet curry paste sauce with potato and peanut.', spice:1, veg:false},
     {num: 20, name:'Jungle Curry', thai:'Hot & Spicy', cat:'curry', img: 'jungle curry.jpg',
     price:14.90, estimate: true, desc: 'Aromatic curry paste with spicy Thai spices, pickled peppercorn and vegetables. Choose your protein.', spice:3, veg:false},
     
     {num: 21, name:'Tom Yum Gong', thai:'Prawn', cat:'soup', img: 'tom yum gong.jpg',
     price:17.90, desc: 'Famous Thai aromatic soup with prawn, mushroom, lemongrass and a touch of chilli. Entrée $8.90 / Main $17.90.', spice:2, veg:false},
     {num: 22, name:'Tom Kha Gai', thai:'', cat:'soup', img: 'Tom Kha Gai.jpg',
     price:15.90, desc: 'Creamy aromatic soup with mushroom, chicken and coconut-cream, flavoured with kaffir lime leaf and galangal. Entrée $7.90 / Main $15.90', spice:1, veg:false},
     {num: 23, name:'Tom Po Tak', thai:'', cat:'soup', img:'Tom Po Tak.jpg', 
     price:8.90, desc: 'Mixed seafood soup with lemon juice, Thai herbvs, mushroom and basil.', spice:2, veg:false},
     {num: 24, name:'Chicken Corn Soup', thai:'', cat:'soup', img: 'Chicken Corn Soup.webp', 
     price:6.90, desc: 'Thickened soup with corn, chicken pieces and egg.', spice:0, veg:false},
    
     {num: 25, name:'Steamed Thai Jasmine Rice', thai:'Per serving', cat:'rice', img: 'jasmine rice.jpg',
     price:3.00, side: true, desc: 'Steamed jasmine rice, per serving.', spice:0, veg:true},
     {num: 26, name:'Coconut Rice', thai:'Per Serving', cat:'rice', img: 'coconut rice.jpg',
     price:4.00, side: true, desc: 'Coconut-infused rice, per serving', spice:0, veg:true},
     {num: 27, name:'Thai Fried Rice with Egg', thai:'', cat:'rice', img: 'Thai Fried Rice with Egg.jpg',
     price:7.90, desc: 'Simple fried rice tossed with egg.', spice:0, veg:true},
     {num: 28, name:'Thai Garlic Rice', thai:'', cat:'rice', img: 'thai garlic rice.webp',
     price:5.90, desc: 'Fried rice tossed with garlic.', spice:0, veg:true},
     {num: 29, name:'Thai Fried Rice', thai:'', cat:'rice', img: 'thai fired rice.jpg',
     price:12.90, estimate: true, desc: 'Classic Thai-style fried rice. Choose your protein.', spice:0, veg:false},
     {num: 30, name:'Thai Spicy Fried Rice', thai:'', cat:'rice', img: 'thai spicy fired rice.jpg',
     price:12.90, estimate: true, desc: 'Fried rice tossed with chilli and Thai spices. Choose your protein.', spice:2, veg:false},
     {num: 31, name:'Thai Pineapple Fried Rice', thai:'', cat:'rice', img: 'thai pineapple fried rice.jpg',
     price:12.90, estimate: true, desc: 'Fried rice with pinapple, curry powder and cashew nut. Choose your protein.', spice:0, veg:false},
     {num: 32, name:'Thai Tom Yum Fried Rice', thai:'', cat:'rice', img: 'Thai Tom Yum Fried Rice.jpg',
     price:12.90, estimate: true, desc: 'Fried Rice with tom yum paste and Thai herbs. Choose your protein.', spice:2, veg:false},

     {num: 33, name:'Gai Yang', thai:'', cat:'salad', img: 'gai yang.jpg',
     price:14.90, desc: 'Grilled boneless chicken marinated in Thai herbs, with steamed vegetables and sweet chilli sauce.', spice:0, veg:false},
     {num: 34, name:'Crying Tiger', thai:'', cat:'salad', img: 'crying tiger.jpg', 
     price:14.90, desc: 'Grilled marinated beef served with special sauce on the side.', spice:1, veg:false},
     {num: 35, name:'BBQ Beef Salad', thai:'', cat:'salad', img: 'BBQ Beef Salad.webp',
     price:14.90, desc: 'Grilled beef tossed with mint, coriander, shallot, red onion and chilli-lime dressing, sprinkled with roasted rice.', spice: 1, veg:false},
     {num: 36, name:'Larb', thai:'', cat:'salad', img: 'BBQ Beef Salad.jpg',
     price:14.90, desc: 'Warm salad infused with fish sauce, lime juice, chilli powder, roasted rice, mince, coriander, red onion and shallot.', spice:2, veg:false},
     {num: 37, name:'Gai Yang Salad', thai:'', cat:'salad', img: 'gai yang salad.jpg',
     price:14.90, desc: 'Fried rice tossed with chilli and Thai spices. Choose your protein.', spice:2, veg:false},
     {num: 38, name:'Thai Duck Salad', thai:'', cat:'salad', img: 'thai duck salad.jpg',
     price:18.90,  desc: 'Roasted duck tossed with coriander, shallot, red onion, chilli, cucumber and tomato, drizzled with chilli jam and coconut sauce.', spice:1, veg:false},
     {num: 39, name:'Yum Seafood Salad', thai:'', cat:'salad', img: 'yum seafood salad.jpg',
     price:17.90, desc: 'Thai herbs and cooked seafood seasoned with chilli and lime juice.', spice:2, veg:false},
     {num: 40, name:'Soft Shell Crab Cashew Nut Salad', thai:'', cat:'salad', img: 'Soft Shell Crab Cashew Nut Salad.jpg',
     price:18.90, desc: 'Crispy soft shell crab topped with Thai herbs, yum sauce and cashew nut.', spice:1, veg:false},
     {num: 41, name:'Crispy Barramundi Salad', thai:'', cat:'salad', img: 'Crispy Barramundi Salad.jpg',
     price:19.90, desc: 'Crispy barramundi topped with aromatic Thai herbs and yum sauce.', spice:1, veg:false},

     {num: 42, name:'Roti Crepes', thai:'Honey banana & ice cream', cat:'dessert', img: 'roti crpes.jpg',
     price:6.50, desc: 'Crispy roti crepes with honey, banana and ice cream.', spice:0, veg:true},
     {num: 43, name:'Banana Fritter', thai:'With ice cream', cat:'dessert', img: 'banana fritters.jpg',
     price:6.50, desc: 'Fried banana fritter served with ice cream.', spice:0, veg:true},
     {num: 44, name:'White Sticky Rice', thai:'Custard or mango', cat:'dessert', img: 'sticky rice.jpg',
     price:6.50, desc: 'Sticky rice with custard $6.50, or fresh mango (seasonal) $8.50.', spice: 0, veg:true},
     {num: 45, name:'Vanilla Ice Cream', thai:'', cat:'dessert', img: 'vanilla ice cream.jpg',
     price:3.00, desc: 'Vanilla ice cream with your choice of topping: chocolate, strawberry or caramel.', spice: 0, veg: true},
     
     {num: 46, name:'Salt & Pepper Chicken', thai:'', cat:'specialties', img: 'salt and pepper chicken.jpg',
     price:16.90, desc: 'Lightly fried marinated crumbed chicken, served with sweet chilli sauce.', spice:0, veg:false},
     {num: 47, name:'Spicy Salt & Pepper King Prawn', thai:'', cat:'specialties', img: 'Spicy Salt & Pepper King Prawn.jpg',
     price:17.90,  desc: 'Lightly fried crumbed king prawn seasoned with chilli and house-made salt & pepper, served with sweet chilli sauce.', spice:1, veg:false},
     {num: 48, name:'Crispy Soft Shell Crab', thai:'', cat:'specialties', img: 'Soft Shell Crab Cashew Nut Salad.jpg',
     price:18.90, desc: 'Fried marinated soft shell crab seasoned with house-made salt & pepper, served with sweet chilli sauce.', spice:0, veg:false},
     {num: 49, name:'Salt & Pepper Quail', thai:'', cat:'specialties', img: 'Salt & Pepper Quail.jpg',
     price:16.90, desc: 'Deep fried marinated quail tossed in garlic and house-made salt & pepper, served with sweet chilli sauce.', spice:0, veg:false},
     {num: 50, name:'Pad Tom Yum Seafood', thai:'Betong Specialty', cat:'specialties', img: 'Pad Tom Yum Seafood.jpg',
     price:18.90, desc: 'Stir fried with fresh chilli, tom yum paste, peppercorn and mixed vegetables.', spice:2, veg:false},
     {num: 51, name:'Betong Fire Prawn', thai:'Betong Specialty', cat:'specialties', img: 'Betong Fire Prawn.jpg',
     price:18.90, desc: "Lightly fried crumbed king prawn coated in Betong's spicy special sauce, with steamed mixed vegetables and crispy basil leaf.", spice:1, veg:false},
     {num: 52, name:'Pad Kana Moo Krob', thai:'Crispy pork belly', cat:'specialties', img: 'Pad Kana Moo Krob.webp',
     price:17.90, desc: 'Crispy pork belly stir fried with garlic, oyster sauce, carrot and Chinese broccoli.', spice:0, veg:false},
     {num: 53, name:'Pad Pong Karee Gong', thai:'Curry stir-fried king prawn', cat:'specialties', img: 'Pad Pong Karee Gong.jpg',
     price:18.90, desc: 'Stir fried king prawn with curry powder, coconut cream, chilli, egg and mixed vegetables.', spice:1, veg:false},

];

 const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));


 const catNav = document.getElementById('catNav');
 CATEGORIES.forEach((c, i) => {
    const a = document.createElement('a');
    a.href = '#cat-' + c.id;
    if(i === 0) a.classList.add('active');
    a.innerHTML = `<span class="cat-icon" style="background-image:url('${c.img}')"></span><span>${c.label}</span>`;
    a.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCat(c.id);
        renderCategory(c.id);
    });
    catNav.appendChild(a);
 });

 function setActiveCat(id){
    document.querySelectorAll('.menu-quicknav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#cat-' + id));
 }

 function scrollCatNav(dir) {
    catNav.scrollBy({ left: dir * 240, behavior:'smooth'});
 }

 const menuPage = document.getElementById('menuPage');

 function renderCategory(catId){
    const c = catById[catId];
    const items = DISHES.filter(d => d.cat === catId);

    menuPage.innerHTML = `
        <div class="menu-category active" id="cat-${c.id}">
      <div class="menu-title-row">
        <h2 class="menu-title">${c.label}</h2>
        <span class="menu-title-count">${items.length} dishes</span>
      </div>
      <div class="dish-grid">
        ${items.map(d => dishCardHTML(d, c)).join('')}
      </div>
    </div>
    `;
 }

 renderCategory(CATEGORIES[0].id);

 function dishCardHTML(d, c){
    const spiceIcons = '🌶️'.repeat(d.spice);
    const tags = [
        d.side ? '<span class="tag">Side</span>' : '',
    (!d.side && d.spice > 0) ? `<span class="tag">${spiceIcons}</span>` : ''
  ].join('');
    const priceLabel = d.estimate ? `From $${d.price.toFixed(2)}` : `$${d.price.toFixed(2)}`;
    
    return `
    <div class="dish-card" id="dish-${d.num}" data-num="${d.num}">
      <div class="stamp">${d.num}</div>
      <div class="dish-img" style="background-image:url('${d.img}')"></div>
      <div class="dish-name">${d.name}</div>
      ${d.thai ? `<div class="dish-thai">${d.thai}</div>` : ''}
      <div class="dish-desc">${d.desc}</div>

      ${d.estimate ? `
      <div class="protein-select">
        <select id="protein-${d.num}" onchange="updatePrice(${d.num}, ${d.price})">
            <option value="">Choose protein</option>
            <option value="Chicken">Chicken</option>
            <option value="Beef">Beef</option>
            <option value="Prawn">Prawn</option>
            <option value="Tofu">Tofu</option>
        </select>
      </div>

     ` : ''} 

      <div class="dish-tags">${tags}</div>

      <div class="dish-footer">
        <span class="dish-price">${priceLabel}</span>
       <button class="add-btn" onclick="addToCart(
        ${JSON.stringify(d.name)},
        getFinalPrice(${d.num}, ${d.price}),
        ${JSON.stringify(d.img)},
        getDishQty(${d.num})
      ); document.getElementById('qty-${d.num}').textContent = 1;">
        Add
      </button>
      </div>

    <div class="qty-select">
    <button onclick="changeDishQty(${d.num}, -1)">−</button>
    <span id="qty-${d.num}">1</span>
    <button onclick="changeDishQty(${d.num}, 1)">+</button>
</div>
    </div>
  `;
}
 
function changeDishQty(num, delta) {
  const el = document.getElementById(`qty-${num}`);
  let qty = parseInt(el.textContent);
  qty = Math.max(1, qty + delta);
  el.textContent = qty;
}

function getDishQty(num) {
  return parseInt(document.getElementById(`qty-${num}`).textContent);
}

function updatePrice(num, basePrice) {
    const protein = document.getElementById(`protein-${num}`).value;
    const extra = PROTEIN_PRICES[protein];
    const finalPrice= (basePrice + extra).toFixed(2);

    document.querySelector(`#dish-${num} .dish-price`).textContent = `$${finalPrice}`; 
}

function getFinalPrice(num, basePrice) {
  const protein = document.getElementById(`protein-${num}`)?.value || "";
  const extra = PROTEIN_PRICES[protein] || 0;
  return basePrice + extra;
}

const input = document.getElementById('searchInput');
const suggBox = document.getElementById('suggestions');
const clearBtn = document.getElementById('clearBtn');
let activeIndex = -1;
let currentResults = [];
let debounceTimer = null;

function escapeHtml(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlight(text, query){
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if(idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0,idx)) + 
    '<mark>' + 
    escapeHtml(text.slice(idx, idx+query.length)) + 
    '</mark>' + 
    escapeHtml(text.slice(idx+query.length));
}

function score(d, q) {
    q = q.toLowerCase();
    const name = d.name.toLowerCase();
    const thai = (d.thai || '').toLowerCase();
    const cat = catById[d.cat].label.toLowerCase();
    const desc = d.desc.toLowerCase();
    const spiceWord = d.spice >= 3 ? 'very spicy' : d.spice === 2 ? 'spicy' : d.spice === 1 ? 'mild' : 'not spicy';
    const vegWord = d.veg ? 'vegetarian' : '';
    const numStr = String(d.num);

    if (d.spice >= 3 && (q.includes('🌶️') || q.includes('extra') || q.includes('spicy'))) {
     return 120;   
    }
    if (d.spice === 2 && (q.includes('🌶️') || q.includes('spicy'))) {
        return 100;
    }

    if (d.spice === 1 && (q.includes('mild') || q.includes('🌶️'))) {
        return 80;
    }

    if (d.veg && (q === 'vegetarian' || q === 'veg')) {
        return 120;
    }

    if (String(d.num) === q) return 110;

    if (name.startsWith(q)) return 100;
    if (name.includes(q)) return 80;

    if (thai.includes(q)) return 60;

    if (cat.startsWith(q)) return 55;
    if (cat.includes(q)) return 50;

    if (desc.includes(q)) return 40;

    return 0;
}

function runSearch(query) {
    query = query.trim();
    const clearBtn = document.getElementById('clearBtn');
    if(query.length === 0) {
        suggBox.classList.remove('show');
        currentResults = [];
        return;
    }
    const results = DISHES
    .map(d => ({d, s: score(d, query)}))
    .filter(r => r.s > 0)
    .sort((a,b) => b.s - a.s)
    .slice(0, 7)
    .map(r => r.d);

    currentResults = results;
    activeIndex = -1;
    renderSuggestions(results, query);
}

function  renderSuggestions(results, query) {
    if(results.length === 0) {
        suggBox.innerHTML =`<div class="suggestion-empty">No dishes match "${escapeHtml(query)}" — try a category like "curry" or "soup", or a dish number.</div>`;
        suggBox.classList.add('show');
        return;
    }
    suggBox.innerHTML =
        `<div class="suggestion-meta">${results.length} match${results.length>1?'es':''}</div>` +
        results.map((d,i) => ` 
            <div class="suggestion" data-index="${i}" onclick="selectSuggestion(${d.num})">
        <div class="thumb" style="background-image:url('${d.img}')"></div>
        <div class="info">
          <div class="name">${highlight(d.name, query)} <span style="opacity:.5;font-weight:400;">#${d.num}</span></div>
          <div class="sub">${catById[d.cat].label} · ${d.spice>0 ? '🌶️'.repeat(d.spice) : 'not spicy'}</div>
        </div>
        <div class="price">${d.estimate ? 'From ' : ''}$${d.price.toFixed(2)}</div>
      </div>
        `).join('');
    suggBox.classList.add('show');
}

function selectSuggestion(num) {
    suggBox.classList.remove('show');
    input.blur();
    const dish = DISHES.find(d => d.num === num);
  if(!dish) return;
  setActiveCat(dish.cat);
  renderCategory(dish.cat);
  requestAnimationFrame(() => {
    const card = document.getElementById('dish-' + num);
    if(card) {
        card.scrollIntoView({behavior:'smooth', block:'center'});
        card.classList.remove('flash');
        void card.offsetWidth;
        card.classList.add('flash');
    }
  });
}


function clearSearch() {
    input.value = '';
    runSearch('');
    input.focus();
}

function quickSearch(term) {
    input.value = term;
    runSearch(term);
    input.focus();
}

input.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runSearch(e.target.value), 120);
});

input.addEventListener('keydown', (e) => {
  const items = suggBox.querySelectorAll('.suggestion');
  if(e.key === 'ArrowDown'){
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, items.length - 1);
    updateActive(items);
  } else if(e .key === 'ArrowUp'){
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, 0);
    updateActive(items);
  } else if (e.key === 'Enter') {
    if(activeIndex >= 0 && currentResults[activeIndex]) selectSuggestion(currentResults[activeIndex].num);
    else if(currentResults[0]) selectSuggestion(currentResults[0].num);
  } else if(e.key === 'Escape') {
    suggBox.classList.remove('show');
  }
});

function updateActive(items) {
    items.forEach((el,i) => el.classList.toggle('active', i === activeIndex));
    if(items[activeIndex]) items[activeIndex].scrollIntoView({block:'nearest'})
}

document.addEventListener('click', (e) => {
    if(!e.target.closest('.search-box')) suggBox.classList.remove('show');
});