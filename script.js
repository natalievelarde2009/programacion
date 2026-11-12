// REEVA - script.js
// ===== 1. PRENDAS =====
const PRODUCTS = [
  { id: 'chaqueta-hombros', name: 'Off-Shoulder Denim Jacket', cat: 'jackets', price: 85, size: 'M', isNew: true,
    made: '1 denim jacket', story: 'A classic jean jacket opened at the shoulders, re-cut into a halter neckline and closed with a zip.' },
  { id: 'chaleco-ojal', name: 'Keyhole Denim Vest', cat: 'tops', price: 52, size: 'S', isNew: true,
    made: '1 jeans + 1 shirt lining', story: 'Panels from an old pair of jeans shaped into a fitted vest with a keyhole front.' },
  { id: 'top-cuadros-tartan', name: 'Tartan Patchwork Top', cat: 'tops', price: 58, size: 'M', isNew: true,
    made: '3 flannel shirts + denim', story: 'Three flannel shirts cut on the bias and pieced together, finished with denim trims.' },
  { id: 'halter-pelo', name: 'Fur Trim Halter', cat: 'tops', price: 64, size: 'S',
    made: '1 suede skirt + faux fur collar', story: 'A suede skirt rebuilt as an asymmetric halter, with a fur collar from an old coat.' },
  { id: 'falda-estrella-cinturon', name: 'Belted Star Skirt', cat: 'bottoms', price: 46, size: 'S', isNew: true,
    made: '1 jeans + 1 belt', story: 'Black jeans turned into a wrap mini skirt, with a frayed star and a belt sewn across.' },
  { id: 'vestido-denim-gasa', name: 'Denim Chiffon Dress', cat: 'dresses', price: 78, size: 'M',
    made: '1 jeans + 1 chiffon skirt', story: 'A washed denim bodice layered over an old chiffon skirt for an asymmetric hem.' },
  { id: 'short-tul', name: 'Mesh Ruffle Shorts', cat: 'bottoms', price: 55, size: 'S',
    made: '1 jean shorts + mesh', story: 'Dark jean shorts with long mesh ruffles cut from a party dress.' },
  { id: 'jeans-tiras', name: 'Strip Patchwork Jeans', cat: 'bottoms', price: 72, size: 'L',
    made: '7 jeans', story: 'Dozens of denim strips in every wash, sewn side by side into wide-leg jeans.' }
];
const productImg = p => 'img/closet/' + p.id + '.png';
const CATS = { jackets: 'Jackets', tops: 'Tops', bottoms: 'Bottoms', dresses: 'Dresses' };
const findProduct = id => PRODUCTS.find(p => p.id === id);
const CLOSET = [
  { id: 'chaqueta-hombros', name: 'Off-Shoulder Denim Jacket', type: 'Jacket', material: 'Denim', len: .56,
    made: '1 denim jacket', story: 'A classic jean jacket opened at the shoulders, re-cut into a halter neckline and closed with a zip.' },
  { id: 'chaleco-ojal', name: 'Keyhole Denim Vest', type: 'Top', material: 'Denim', len: .48,
    made: '1 jeans + 1 shirt lining', story: 'Panels from an old pair of jeans shaped into a fitted vest with a keyhole front.' },
  { id: 'top-cuadros-tartan', name: 'Tartan Patchwork Top', type: 'Top', material: 'Flannel', len: .56,
    made: '3 flannel shirts + denim', story: 'Three flannel shirts cut on the bias and pieced together, finished with denim trims.' },
  { id: 'halter-pelo', name: 'Fur Trim Halter', type: 'Top', material: 'Suede', len: .64,
    made: '1 suede skirt + faux fur collar', story: 'A suede skirt rebuilt as an asymmetric halter, with a fur collar from an old coat.' },
  { id: 'falda-estrella-cinturon', name: 'Belted Star Skirt', type: 'Skirt', material: 'Denim', len: .42, hanger: 'clip',
    made: '1 jeans + 1 belt', story: 'Black jeans turned into a wrap mini skirt, with a frayed star and a belt sewn across.' },
  { id: 'vestido-denim-gasa', name: 'Denim Chiffon Dress', type: 'Dress', material: 'Denim', len: .8,
    made: '1 jeans + 1 chiffon skirt', story: 'A washed denim bodice layered over an old chiffon skirt for an asymmetric hem.' },
  { id: 'short-tul', name: 'Mesh Ruffle Shorts', type: 'Shorts', material: 'Denim', len: .8, hanger: 'clip',
    made: '1 jean shorts + mesh', story: 'Dark jean shorts with long mesh ruffles cut from a party dress.' },
  { id: 'jeans-tiras', name: 'Strip Patchwork Jeans', type: 'Jeans', material: 'Denim', len: .84, hanger: 'clip',
    made: '7 jeans', story: 'Dozens of denim strips in every wash, sewn side by side into wide-leg jeans.' }
];

// ===== 2. GLOBAL =====
const PAGES = [
  { key: 'home', href: '#home', label: 'Home' },
  { key: 'collections', href: '#collections', label: 'Collections Centers' },
  { key: 'about', href: '#about', label: 'About REEVA' },
  { key: 'marketplace', href: '#marketplace', label: 'Marketplace' },
  { key: 'blog', href: '#blog', label: 'Blog' }
];
let page = 'home';
const onShow = {};
const ICONS = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 8h14l-1.2 12.1a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 8h16M4 16h11"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l16 16M20 4L4 20"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 3v11a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4 5 4"/></svg>'
};
const nav = document.createElement('header');
nav.className = 'nav';
nav.innerHTML = `
  <div class="wrap nav__in">
    <a href="#home" class="nav__logo" aria-label="REEVA home"><img src="img/logo.png" alt="REEVA"></a>
    <ul class="nav__links">
      ${PAGES.map(p => `<li><a href="${p.href}" data-key="${p.key}">${p.label}</a></li>`).join('')}
    </ul>
    <div class="nav__icons">
      <a href="#join" class="icon-btn" aria-label="Account">${ICONS.user}</a>
      <button class="icon-btn" id="bagBtn" type="button" aria-label="Open bag">${ICONS.bag}<span class="bag-count" id="bagCount">0</span></button>
      <button class="icon-btn nav__burger" id="burger" type="button" aria-label="Open menu">${ICONS.menu}</button>
    </div>
  </div>`;
document.body.prepend(nav);
const mmenu = document.createElement('nav');
mmenu.className = 'mmenu';
mmenu.innerHTML =
  `<button class="icon-btn mmenu__close" id="mclose" type="button" aria-label="Close menu">${ICONS.close}</button>` +
  PAGES.map(p => `<a href="${p.href}" data-key="${p.key}">${p.label}</a>`).join('');
document.body.appendChild(mmenu);
document.getElementById('burger').addEventListener('click', () => mmenu.classList.add('open'));
document.getElementById('mclose').addEventListener('click', () => mmenu.classList.remove('open'));
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `
  <div class="wrap">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="img/logo.png" alt="REEVA">
        <p>REEVA conecta personas, diseñadores emergentes y moda sostenible para darle una segunda vida a cada prenda.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>${PAGES.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:contacto@reeva.pa">contacto@reeva.pa</a></li>
          <li><a href="tel:+50780000000">+507 8000-0000</a></li>
          <li><address>Calle de la Innovación 123,<br>Ciudad de Panamá</address></li>
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <div class="footer__social">
          ${['instagram', 'tiktok', 'facebook', 'youtube', 'x', 'linkedin'].map(k => `<a href="#" aria-label="${k}">${ICONS[k]}</a>`).join('')}
        </div>
      </div>
    </div>
    <p class="footer__big" aria-hidden="true">REEVA</p>
    <div class="footer__bottom">
      <p>© 2026 REEVA. Todos los derechos reservados.</p>
      <p>Where Every Garment Tells a New Story.</p>
    </div>
  </div>`;
document.body.appendChild(footer);
document.body.insertAdjacentHTML('beforeend', `
  <div class="scrim" id="scrim"></div>
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="mName">
    <button class="icon-btn modal__close" id="mClose" type="button" aria-label="Close">${ICONS.close}</button>
    <div class="modal__img"><img id="mImg" src="" alt=""></div>
    <div class="modal__body">
      <span class="eyebrow" id="mCat"></span>
      <h3 id="mName"></h3>
      <span class="modal__price" id="mPrice"></span>
      <div class="modal__chips" id="mChips"></div>
      <p class="modal__story" id="mStory"></p>
      <p class="modal__made" id="mMade"></p>
      <button class="btn" id="mAdd" type="button">Add to bag <span class="arr">&rarr;</span></button>
    </div>
  </div>
  <aside class="drawer" id="drawer" aria-label="Your bag">
    <div class="drawer__head"><h3>Your bag</h3><button class="icon-btn" id="dClose" type="button" aria-label="Close bag">${ICONS.close}</button></div>
    <ul class="drawer__list" id="dList"></ul>
    <div class="drawer__foot">
      <div class="drawer__total"><span>Total</span><span id="dTotal">$0</span></div>
      <button class="btn" id="dCheckout" type="button">Checkout <span class="arr">&rarr;</span></button>
      <p class="drawer__note" id="dNote"></p>
    </div>
  </aside>
  <div class="toast" id="toast"></div>`);
const $ = id => document.getElementById(id);
const scrim = $('scrim'), modal = $('modal'), drawer = $('drawer');
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2200);
}
const store = {
  get() { try { return JSON.parse(localStorage.getItem('reeva-bag')) || []; } catch (e) { return this._mem || []; } },
  set(v) { this._mem = v; try { localStorage.setItem('reeva-bag', JSON.stringify(v)); } catch (e) {} }
};
let bag = store.get().filter(id => typeof findProduct === 'function' && findProduct(id));
function renderBag(bump) {
  const c = $('bagCount');
  c.textContent = bag.length;
  if (bump) { c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); }
  const list = $('dList');
  if (!bag.length) {
    list.innerHTML = '<li class="drawer__empty">Your bag is empty.<br>Every piece here is one of one, so don\'t wait too long.</li>';
  } else {
    list.innerHTML = bag.map(id => {
      const p = findProduct(id);
      return `<li class="drawer__item"><img src="${productImg(p)}" alt=""><div><b>${p.name}</b><small>$${p.price} · Size ${p.size}</small></div>
              <button class="drawer__rm" data-rm="${p.id}" aria-label="Remove ${p.name}">&times;</button></li>`;
    }).join('');
  }
  $('dTotal').textContent = '$' + bag.reduce((s, id) => s + findProduct(id).price, 0);
  $('dCheckout').disabled = !bag.length;
  $('dCheckout').style.opacity = bag.length ? 1 : .5;
}
function addToBag(id) {
  const p = findProduct(id);
  if (!p) return false;
  if (bag.includes(id)) { toast('Already in your bag — it\'s one of one!'); return false; }
  bag.push(id);
  store.set(bag);
  renderBag(true);
  toast(p.name + ' added to your bag');
  return true;
}
window.addToBag = addToBag;
window.inBag = id => bag.includes(id);
$('dList').addEventListener('click', e => {
  const b = e.target.closest('[data-rm]');
  if (!b) return;
  bag = bag.filter(id => id !== b.dataset.rm);
  store.set(bag);
  renderBag();
});
$('dCheckout').addEventListener('click', () => {
  $('dNote').textContent = 'Checkout is coming soon — thanks for shopping circular!';
});
function openLayer(el) { scrim.classList.add('open'); el.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeLayers() {
  [scrim, modal, drawer].forEach(el => el.classList.remove('open'));
  document.body.style.overflow = '';
  $('dNote').textContent = '';
}
$('bagBtn').addEventListener('click', () => { renderBag(); openLayer(drawer); });
$('dClose').addEventListener('click', closeLayers);
$('mClose').addEventListener('click', closeLayers);
scrim.addEventListener('click', closeLayers);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLayers(); mmenu.classList.remove('open'); } });
function quickView(id) {
  const p = findProduct(id);
  if (!p) return;
  $('mImg').src = productImg(p);
  $('mImg').alt = p.name;
  $('mCat').textContent = CATS[p.cat] + ' · one of one';
  $('mName').textContent = p.name;
  $('mPrice').textContent = '$' + p.price;
  $('mChips').innerHTML = `<span class="chip on">Size ${p.size}</span><span class="chip">Upcycled</span><span class="chip">Made in Panamá</span>`;
  $('mStory').textContent = p.story;
  $('mMade').textContent = 'Made from: ' + p.made;
  const add = $('mAdd');
  add.innerHTML = inBag(id) ? 'In your bag ✓' : 'Add to bag <span class="arr">&rarr;</span>';
  add.onclick = () => { if (addToBag(id)) add.innerHTML = 'In your bag ✓'; };
  openLayer(modal);
}
window.quickView = quickView;
window.productCard = p => `
  <button class="pcard reveal" type="button" data-qv="${p.id}" data-cat="${p.cat}">
    <span class="pcard__tile">
      ${p.isNew ? '<span class="pcard__badge">NEW DROP</span>' : ''}
      <img src="${productImg(p)}" alt="${p.name}" loading="lazy">
      <span class="pcard__quick">Quick view +</span>
    </span>
    <span class="pcard__meta"><span class="pcard__name">${p.name}</span><span class="pcard__price">$${p.price}</span></span>
    <span class="pcard__sub">${CATS[p.cat]} · Size ${p.size}</span>
  </button>`;
document.addEventListener('click', e => {
  const c = e.target.closest('[data-qv]');
  if (c) quickView(c.dataset.qv);
});
document.querySelectorAll('.marquee__track').forEach(t => { t.innerHTML += t.innerHTML; });
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
}), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
window.observeReveals = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
const cio = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  cio.unobserve(en.target);
  const el = en.target, end = +el.dataset.count, dec = +(el.dataset.dec || 0);
  const t0 = performance.now(), dur = 1800;
  (function tick(t) {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
    el.textContent = (end * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const pageKeys = PAGES.map(p => p.key);
function targetOf(hash) {
  const id = (hash || '').replace('#', '');
  if (pageKeys.includes(id)) return { key: id, el: null };
  const el = id && document.getElementById(id);
  const pg = el && el.closest('.page');
  return pg ? { key: pg.id, el } : { key: 'home', el: null };
}
function showPage(key, el) {
  page = key;
  document.body.dataset.page = key;
  document.querySelectorAll('.page').forEach(p => { p.hidden = p.id !== key; });
  document.querySelectorAll('[data-key]').forEach(a => a.classList.toggle('active', a.dataset.key === key));
  document.title = 'REEVA | ' + document.getElementById(key).dataset.title;
  mmenu.classList.remove('open');
  closeLayers();
  if (onShow[key]) onShow[key]();
  observeReveals();
  if (el) requestAnimationFrame(() => el.scrollIntoView());
  else scrollTo(0, 0);
}
function go(hash, animate) {
  const t = targetOf(hash);
  if (!animate || reduceMotion || t.key === page) { showPage(t.key, t.el); return; }
  root.classList.remove('pt-in');
  root.classList.add('pt-out');
  setTimeout(() => {
    showPage(t.key, t.el);
    root.classList.remove('pt-out');
    root.classList.add('pt-in');
    setTimeout(() => root.classList.remove('pt-in'), 1000);
  }, 480);
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.metaKey || e.ctrlKey) return;
  const hash = a.getAttribute('href');
  if (hash.length < 2) return;
  e.preventDefault();
  if (location.hash !== hash) history.pushState(null, '', hash);
  go(hash, true);
});
addEventListener('popstate', () => go(location.hash, true));
history.scrollRestoration = 'manual';
renderBag();

// ===== 4. HOME =====
(() => {
  const hero = document.getElementById('hero');
  const heroModel = document.getElementById('heroModel');
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - .5;
      heroModel.style.translate = `${(mx * 18).toFixed(1)}px 0`;
      hero.style.setProperty('--wx', (mx * -24).toFixed(1) + 'px');
    });
  }
  const waste = document.getElementById('waste');
  const wasteImg = document.getElementById('wasteImg');
  function parallax() {
    const r = waste.getBoundingClientRect();
    const k = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
    wasteImg.style.transform = `translateY(${-8 + k * -10}%)`;
  }
  addEventListener('scroll', parallax, { passive: true });
  parallax();
  const HERO_IDS = [];
  document.getElementById('drops').innerHTML =
    PRODUCTS.filter(p => p.isNew && !HERO_IDS.includes(p.id)).slice(0, 4).map(productCard).join('');
  observeReveals();
  const look = document.getElementById('look');
  const people = [...look.querySelectorAll('.look__p')];
  const lio = new IntersectionObserver(([en]) => { if (en.isIntersecting) { look.classList.add('in'); lio.disconnect(); } }, { threshold: .3 });
  lio.observe(look);
  function lookParallax() {
    const r = look.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const k = (r.top + r.height / 2 - innerHeight / 2);
    people.forEach(p => { p.style.translate = `0 ${(k * +p.dataset.speed).toFixed(1)}px`; });
  }
  addEventListener('scroll', lookParallax, { passive: true });
  lookParallax();
})();

// ===== 5. CLOSET (Collections Centers) =====
(() => {
  const closet = document.getElementById('closet');
  const rack = document.getElementById('rack');
  const tagsEl = document.getElementById('tags');
  const info = document.getElementById('info');
  const arrL = document.getElementById('arrL');
  const arrR = document.getElementById('arrR');
  const btnFront = document.getElementById('btnFront');
  const btnStory = document.getElementById('btnStory');
  document.getElementById('count').textContent = CLOSET.length;
  const HOOK = `<svg class="piece__hook" viewBox="0 0 28 34" aria-hidden="true">
    <defs><linearGradient id="hk" x1="0" x2="1"><stop offset="0" stop-color="#8e8e8e"/><stop offset=".5" stop-color="#f2f2f2"/><stop offset="1" stop-color="#7d7d7d"/></linearGradient></defs>
    <path d="M14 34V23c0-5 8-6.5 8-13.5a8 8 0 1 0-16 0" fill="none" stroke="url(#hk)" stroke-width="3.4" stroke-linecap="round"/></svg>`;
  const WOOD = `<svg viewBox="0 0 200 26" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="wd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcab78"/><stop offset=".55" stop-color="#a96f3d"/><stop offset="1" stop-color="#7a4b25"/></linearGradient></defs>
    <path d="M100 1C76 2 38 11 6 18.5Q.5 20 2 23.5Q3 25 8 25H192Q197 25 198 23.5Q199.5 20 194 18.5C162 11 124 2 100 1Z" fill="url(#wd)"/>
    <path d="M100 3.2C78 4.2 42 12 11 19.2M100 3.2C122 4.2 158 12 189 19.2" fill="none" stroke="#f3cf9f" stroke-width="1.1" opacity=".75"/>
    <rect x="95.5" y="0" width="9" height="5" rx="1.5" fill="#c4c4c4"/></svg>`;
  const CLIP = `<svg viewBox="0 0 200 30" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="cl" x1="0" x2="1"><stop offset="0" stop-color="#7f7f7f"/><stop offset=".5" stop-color="#e6e6e6"/><stop offset="1" stop-color="#7a7a7a"/></linearGradient></defs>
    <rect x="2" y="2" width="196" height="7" rx="3.5" fill="url(#wd)"/>
    <rect x="96" y="0" width="8" height="5" rx="1.5" fill="#c4c4c4"/>
    <rect x="9" y="6" width="17" height="23" rx="3" fill="url(#cl)"/><rect x="174" y="6" width="17" height="23" rx="3" fill="url(#cl)"/>
    <path d="M12 12h11M177 12h11" stroke="#666" stroke-width="1.4"/></svg>`;
  const pieces = CLOSET.map((p, i) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'piece' + (p.hanger === 'clip' ? ' piece--clip' : '');
    el.style.setProperty('--i', i);
    el.setAttribute('aria-label', `${p.name}, ${p.type}`);
    el.innerHTML = `
      <span class="piece__swing">
        ${HOOK}
        <span class="piece__bar">${p.hanger === 'clip' ? CLIP : WOOD}</span>
        <span class="piece__card"><span class="piece__flip">
          <img class="piece__img" src="img/closet/${p.id}.png" alt="${p.name}" draggable="false">
          <span class="piece__back"><small>THE STORY</small><strong>${p.name}</strong><p>${p.story}</p><em>Made from: ${p.made}</em></span>
        </span></span>
      </span>`;
    rack.appendChild(el);
    el._p = p;
    el._sw = el.querySelector('.piece__swing');
    el._a = 0; el._v = 0;
    el._ph = Math.random() * 6.28;
    el._w = .8 + Math.random() * .6;
    el.addEventListener('click', () => {
      if (moved > 6) return;
      i === sel ? toggleStory() : open(i);
    });
    return el;
  });
  let W, H, ROD, FH, sel = -1;
  let pan = 0, panTarget = 0, minPan = 0, maxPan = 0;
  function measure() {
    W = closet.clientWidth;
    H = closet.clientHeight;
    ROD = closet.querySelector('.closet__rod').offsetTop;
    const mobile = W < 700;
    FH = Math.min(600, H - ROD - 60 - (mobile ? 190 : 175));
    const avail = H - ROD - 60 - 70;
    const maxW = Math.min(520, W * (mobile ? .58 : .48));
    pieces.forEach(el => {
      const img = el.querySelector('img');
      const r = (img.naturalWidth / img.naturalHeight) || .7;
      let fh = FH, fw = fh * r;
      if (fw > maxW) { fw = maxW; fh = fw / r; }
      const clip = el._p.hanger === 'clip';
      const barW = Math.max(110, Math.min(330, fw * (clip ? .7 : .7)));
      el._fw = fw; el._fh = fh;
      el._bw = Math.max(fw, barW);
      el._head = clip ? 34 + 30 - 3 - 10 : 34 + 30 - 3 - 24;
      el._rail = Math.min(1.08, (el._p.len * avail * (mobile ? .8 : 1)) / fh);
      el.style.width = el._bw + 'px';
      el.querySelector('.piece__bar').style.width = barW + 'px';
      const card = el.querySelector('.piece__card');
      card.style.width = fw + 'px';
      card.style.height = fh + 'px';
    });
  }
  function place(el, x, y, s, z) {
    el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    el.style.zIndex = z;
    el._x = x; el._s = s;
  }
  function layoutRail() {
    const ov = .1;
    let x = W < 700 ? 30 : 90, prevW = 0;
    pieces.forEach((el, i) => {
      const s = el._rail, w = el._bw * s;
      if (i) x += prevW - ov * Math.min(w, prevW);
      place(el, x, ROD - 3 * s, s, i + 1);
      prevW = w;
    });
    const total = x + prevW + (W < 700 ? 30 : 90);
    if (total <= W) { minPan = maxPan = (W - total) / 2; }
    else { minPan = W - total; maxPan = 0; }
    panTarget = clamp(panTarget, minPan, maxPan);
    updateArrows();
  }
  function layoutOpen() {
    const a = pieces[sel];
    const mobile = W < 700;
    const cx = mobile ? W / 2 - 26 : W / 2;
    place(a, cx - a._bw / 2 - pan, ROD - 3, 1, 100);
    let edge = cx - a._fw / 2 - (mobile ? 20 : 50);
    for (let i = sel - 1; i >= 0; i--) {
      const el = pieces[i], s = el._rail * .82, w = el._bw * s;
      place(el, edge - w - pan, ROD - 3 * s, s, i + 1);
      edge -= w * .62;
    }
    edge = cx + a._fw / 2 + (mobile ? 70 : 150);
    for (let i = sel + 1; i < pieces.length; i++) {
      const el = pieces[i], s = el._rail * .82, w = el._bw * s;
      place(el, edge - pan, ROD - 3 * s, s, 60 - (i - sel));
      edge += w * .62;
    }
    tagsEl.style.left = (cx + a._fw / 2 + 4) + 'px';
    info.style.top = (ROD - 3 + a._head + a._fh + 24) + 'px';
    updateArrows();
  }
  function layout() {
    measure();
    sel < 0 ? layoutRail() : layoutOpen();
  }
  function updateArrows() {
    if (sel >= 0) { arrL.disabled = arrR.disabled = false; return; }
    arrL.disabled = panTarget >= maxPan - 2;
    arrR.disabled = panTarget <= minPan + 2;
  }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function open(i) {
    if (sel >= 0) pieces[sel].classList.remove('flipped');
    sel = i;
    const p = CLOSET[i];
    pieces.forEach((el, k) => {
      el.classList.toggle('active', k === i);
      el.classList.toggle('blur', k !== i);
    });
    document.getElementById('infoName').textContent = p.name;
    document.getElementById('tagType').textContent = p.type;
    document.getElementById('tagMat').textContent = p.material;
    document.getElementById('infoMade').textContent = 'Made from ' + p.made;
    setStory(false);
    closet.classList.remove('intro', 'open');
    void closet.offsetWidth;
    closet.classList.add('open');
    layout();
    pieces[i]._v += 60;
  }
  function close() {
    if (sel < 0) return;
    const last = pieces[sel];
    last.classList.remove('flipped');
    sel = -1;
    pieces.forEach(el => el.classList.remove('active', 'blur'));
    closet.classList.remove('open');
    measure();
    layoutRail();
    panTarget = clamp(W / 2 - (last._x + last._bw * last._s / 2), minPan, maxPan);
    updateArrows();
    last.focus({ preventScroll: true });
  }
  const step = d => open((sel + d + pieces.length) % pieces.length);
  function setStory(on) {
    if (sel < 0) return;
    pieces[sel].classList.toggle('flipped', on);
    btnFront.classList.toggle('on', !on);
    btnStory.classList.toggle('on', on);
  }
  function toggleStory() { setStory(!pieces[sel].classList.contains('flipped')); }
  btnFront.addEventListener('click', () => setStory(false));
  btnStory.addEventListener('click', () => setStory(true));
  tagsEl.querySelectorAll('.tag').forEach(t => t.addEventListener('click', () => {
    t.classList.remove('jiggle'); void t.offsetWidth; t.classList.add('jiggle');
  }));
  arrL.addEventListener('click', () => sel >= 0 ? step(-1) : (panTarget = clamp(panTarget + W * .6, minPan, maxPan), updateArrows()));
  arrR.addEventListener('click', () => sel >= 0 ? step(1) : (panTarget = clamp(panTarget - W * .6, minPan, maxPan), updateArrows()));
  document.getElementById('btnBack').addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (page !== 'collections' || document.querySelector('.modal.open, .drawer.open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') sel >= 0 ? step(1) : arrR.click();
    if (e.key === 'ArrowLeft') sel >= 0 ? step(-1) : arrL.click();
  });
  let down = false, startX = 0, lastX = 0, lastT = 0, vel = 0, moved = 0;
  const ignore = e => e.target.closest('.info, .tags, .closet__arrow, .closet__back');
  closet.addEventListener('pointerdown', e => {
    if (e.button !== 0 || ignore(e)) return;
    down = true; moved = 0; vel = 0;
    startX = lastX = e.clientX; lastT = performance.now();
  });
  window.addEventListener('pointermove', e => {
    const dx = e.clientX - lastX;
    if (!down && sel < 0 && e.target.closest && e.target.closest('#closet')) brush(e.clientX, e.clientY, e.movementX || 0);
    if (!down) return;
    const now = performance.now();
    vel = dx / Math.max(1, now - lastT);
    lastX = e.clientX; lastT = now;
    moved += Math.abs(dx);
    if (sel < 0 && moved > 5) {
      closet.classList.add('dragging');
      const over = pan > maxPan || pan < minPan;
      pan += over ? dx * .35 : dx;
      panTarget = pan;
      pieces.forEach(el => { el._v -= dx * .9; });
    }
  });
  window.addEventListener('pointerup', e => {
    if (!down) return;
    down = false;
    closet.classList.remove('dragging');
    if (sel < 0) {
      panTarget = clamp(pan + vel * 320, minPan, maxPan);
      updateArrows();
    } else {
      const total = e.clientX - startX;
      if (Math.abs(total) > 60) step(total < 0 ? 1 : -1);
    }
    setTimeout(() => { moved = 0; }, 0);
  });
  closet.addEventListener('wheel', e => {
    if (sel >= 0) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (!d) return;
    e.preventDefault();
    panTarget = clamp(panTarget - d, minPan, maxPan);
    pieces.forEach(el => { el._v += d * .4; });
    updateArrows();
  }, { passive: false });
  function brush(x, y, mx) {
    if (!mx) return;
    pieces.forEach(el => {
      const r = el.getBoundingClientRect();
      if (x > r.left && x < r.right && y > r.top && y < r.bottom) el._v += clamp(mx, -30, 30) * 5;
    });
  }
  closet.addEventListener('click', e => {
    if (sel >= 0 && moved <= 6 && (e.target === closet || e.target === rack)) close();
  });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const K = 26, C = 2.6;
  let last = performance.now();
  function tick(t) {
    if (page !== 'collections') { last = t; requestAnimationFrame(tick); return; }
    const dt = Math.min(.033, (t - last) / 1000);
    last = t;
    if (!down || sel >= 0) pan += (panTarget - pan) * Math.min(1, dt * 8);
    rack.style.transform = `translateX(${pan.toFixed(2)}px)`;
    if (!reduce) {
      const sec = t / 1000;
      pieces.forEach(el => {
        const amp = el.classList.contains('blur') ? .5 : 1.1;
        const target = amp * Math.sin(sec * el._w + el._ph);
        el._v += (-K * (el._a - target) - C * el._v) * dt;
        el._a = clamp(el._a + el._v * dt, -10, 10);
        el._sw.style.transform = `rotate(${el._a.toFixed(3)}deg)`;
      });
    }
    requestAnimationFrame(tick);
  }
  let rT;
  addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(() => { if (page === 'collections') layout(); }, 120); });
  let started = false;
  onShow.collections = () => {
    if (started) { requestAnimationFrame(layout); return; }
    started = true;
    Promise.all(pieces.map(el => {
      const img = el.querySelector('img');
      return img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; });
    })).then(() => {
      measure();
      layoutRail();
      panTarget = pan = maxPan;
      rack.style.transform = `translateX(${pan}px)`;
      pieces.forEach(el => { el.style.transition = 'none'; el.style.transform += ' translateY(-120px)'; });
      void rack.offsetWidth;
      pieces.forEach(el => { el.style.transition = ''; });
      closet.classList.add('intro');
      requestAnimationFrame(() => {
        closet.classList.add('ready');
        layoutRail();
        pieces.forEach((el, i) => setTimeout(() => { el._v += 90; }, 450 + i * 55));
      });
      setTimeout(() => closet.classList.remove('intro'), 2000);
      requestAnimationFrame(tick);
    });
  };
})();

// ===== 6. MARKETPLACE =====
(() => {
  const grid = document.getElementById('grid');
  const chipsEl = document.getElementById('chips');
  const q = document.getElementById('q');
  const sortEl = document.getElementById('sort');
  let cat = 'all';
  document.getElementById('fCount').textContent = PRODUCTS.length;
  document.getElementById('fFrom').textContent = '$' + Math.min(...PRODUCTS.map(p => p.price));
  const strip = document.getElementById('strip');
  strip.innerHTML = '<div class="phead__track">' +
    [...PRODUCTS, ...PRODUCTS].map(p => `<img src="${productImg(p)}" alt="">`).join('') + '</div>';
  const cats = [['all', 'All'], ...Object.entries(CATS)];
  chipsEl.innerHTML = cats.map(([k, label]) => {
    const n = k === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === k).length;
    return `<button type="button" class="chip ${k === 'all' ? 'on' : ''}" data-cat="${k}" role="tab">${label} <span>${n}</span></button>`;
  }).join('');
  chipsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    cat = b.dataset.cat;
    chipsEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
    render();
  });
  q.addEventListener('input', render);
  sortEl.addEventListener('change', render);
  function render() {
    const term = q.value.trim().toLowerCase();
    let list = PRODUCTS.filter(p =>
      (cat === 'all' || p.cat === cat) &&
      (!term || (p.name + ' ' + p.story + ' ' + p.made).toLowerCase().includes(term)));
    const s = sortEl.value;
    if (s === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (s === 'high') list = [...list].sort((a, b) => b.price - a.price);
    if (s === 'new') list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    grid.innerHTML = list.map(productCard).join('');
    [...grid.children].forEach((c, i) => { c.classList.remove('reveal'); c.style.animationDelay = (i % 8) * 45 + 'ms'; c.classList.add('pop'); });
    document.getElementById('empty').hidden = list.length > 0;
    document.getElementById('resCount').textContent = `Showing ${list.length} of ${PRODUCTS.length} pieces`;
  }
  render();
})();

// ===== 7. ABOUT =====
(() => {
  const man = document.getElementById('manifesto');
  man.innerHTML = man.textContent.trim().split(/\s+/).map(w => `<span>${w}</span>`).join(' ');
  const words = [...man.querySelectorAll('span')];
  function paint() {
    const r = man.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35)));
    const n = Math.round(k * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }
  addEventListener('scroll', paint, { passive: true });
  paint();
  const collage = document.getElementById('collage');
  addEventListener('scroll', () => {
    const y = scrollY;
    collage.style.setProperty('--y1', (y * -.06) + 'px');
    collage.style.setProperty('--y2', (y * .08) + 'px');
  }, { passive: true });
  document.getElementById('dform').addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target.name.value.split(' ')[0];
    document.getElementById('dmsg').textContent = `Thanks, ${name}! We'll email you the details to drop off your ${e.target.bags.value}.`;
    e.target.reset();
  });
  document.getElementById('jform').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('jmsg').textContent = 'You\'re on the list — we\'ll be in touch soon ✂';
    e.target.reset();
  });
})();

// ===== 8. BLOG =====
(() => {
  const POSTS = [
    {
      id: 'waste', cat: 'Impact', date: 'Nov 10, 2026', mins: 4, img: 'img/clasificacion.jpg',
      title: 'Where do 92 million tons of clothes go every year?',
      excerpt: 'Most of what we throw away never gets a second chance. Here\'s what happens to it — and how we can change that.',
      body: [
        'Every year the world throws away around 92 million tons of textiles. Most of it ends up buried in landfills or burned, and a lot of it was still perfectly wearable.',
        'Clothes made from synthetic fibers can take hundreds of years to break down. Meanwhile, producing new garments uses huge amounts of water and energy.',
        'Upcycling flips the script: instead of making something new, we take what already exists and make it better. Every piece in the REEVA closet is one less garment in a landfill and one less new garment that needed to be produced.'
      ]
    },
    {
      id: 'corset', cat: 'Makers', date: 'Nov 3, 2026', mins: 5, img: 'img/closet/halter-pelo.png', tint: '#f6d9cf',
      title: 'Inside the workshop: how a suede skirt became a halter',
      excerpt: 'Seams, ribbons and a lot of patience. We followed one piece from donation bag to hanger.',
      body: [
        'It started as a suede skirt that nobody wanted anymore. Our designer saw the structure first: a soft but firm fabric, good stitching, enough length to rebuild.',
        'The skirt was opened along the seams and re-cut into an asymmetric halter. The fur trim came from the collar of an old winter coat.',
        'The result is the Fur Trim Halter you can find in the closet — a piece that exists only once, with its story stitched in.'
      ]
    },
    {
      id: 'style', cat: 'Style', date: 'Oct 27, 2026', mins: 3, img: 'img/closet/jeans-tiras.png', tint: '#e3eef4',
      title: '5 ways to wear patchwork denim this season',
      excerpt: 'Loud pieces, easy outfits. Our favorite ways to style upcycled denim without overthinking it.',
      body: [
        '1. Let one piece talk: pair statement jeans with a plain white tee.',
        '2. Denim on denim works when the washes are different — mix light and dark.',
        '3. Add a cropped jacket to balance wide-leg pants. 4. Use a corset or halter to dress denim up for the night. 5. Keep shoes simple: white sneakers go with everything in the closet.'
      ]
    },
    {
      id: 'inadeh', cat: 'Community', date: 'Oct 18, 2026', mins: 4, img: 'img/centros-comunitarios.jpg',
      title: 'Learning by doing with INADEH',
      excerpt: 'Our partnership brings upcycling techniques into technical training for young designers.',
      body: [
        'INADEH trains young people in technical and professional skills across Panamá. Together, we bring upcycling into the workshop.',
        'Students learn to take apart a garment, read its fabric and rebuild it into something new — skills that turn creativity into real income.',
        'Some of the pieces in our Marketplace were made by students as part of this program.'
      ]
    },
    {
      id: 'crew', cat: 'Community', date: 'Oct 9, 2026', mins: 2, img: 'img/equipo.jpg',
      title: 'Meet the REEVA crew',
      excerpt: 'Red hoodies, patchwork jeans and a lot of ideas. Say hi to the people behind the project.',
      body: [
        'REEVA is run by a team of young people from Panamá who got tired of seeing good clothes go to waste.',
        'Between classes and workshops we sort donations, photograph every piece and write the stories you read in the closet.',
        'Want to join us? Head to the About page and sign up to the designer network.'
      ]
    },
    {
      id: 'oneofone', cat: 'Style', date: 'Sep 30, 2026', mins: 3, img: 'img/look-cierres.jpg',
      title: 'Why one-of-one pieces matter',
      excerpt: 'In a world of mass production, wearing something that exists only once feels different.',
      body: [
        'Fast fashion makes thousands of copies of the same shirt. Upcycling can\'t — and that\'s the point.',
        'Because every REEVA piece starts from a different garment, no two are ever the same. When you buy one, nobody else will ever have it.',
        'It\'s a small way to dress like yourself while doing something good for the planet.'
      ]
    }
  ];
  const feature = document.getElementById('feature');
  const postsEl = document.getElementById('posts');
  const chipsEl = document.getElementById('bchips');
  let current = 'All';
  const media = p => p.img.endsWith('.png')
    ? `<span class="post__media post__media--cut" style="background:${p.tint || 'var(--papel)'}"><img src="${p.img}" alt=""></span>`
    : `<span class="post__media"><img src="${p.img}" alt=""></span>`;
  const f = POSTS[0];
  feature.dataset.post = f.id;
  feature.innerHTML = `${media(f)}
    <div class="feature__copy">
      <span class="eyebrow">${f.cat} · ${f.date} · ${f.mins} min read</span>
      <h2>${f.title}</h2>
      <p class="lead">${f.excerpt}</p>
      <span class="btn">Read the story <span class="arr">&rarr;</span></span>
    </div>`;
  const cats = ['All', ...new Set(POSTS.map(p => p.cat))];
  chipsEl.innerHTML = cats.map(c => `<button type="button" class="chip ${c === 'All' ? 'on' : ''}" data-c="${c}">${c}</button>`).join('');
  chipsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-c]');
    if (!b) return;
    current = b.dataset.c;
    chipsEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
    renderPosts();
  });
  function renderPosts() {
    const list = POSTS.slice(1).filter(p => current === 'All' || p.cat === current);
    postsEl.innerHTML = list.map(p => `
      <article class="post pop" data-post="${p.id}" tabindex="0">
        ${media(p)}
        <span class="eyebrow">${p.cat} · ${p.mins} min</span>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="post__more">Read more &rarr;</span>
      </article>`).join('') || '<p class="lead">No stories in this category yet.</p>';
  }
  renderPosts();
  const reader = document.getElementById('reader');
  let openId = null;
  function openPost(id) {
    const p = POSTS.find(x => x.id === id);
    openId = id;
    document.getElementById('rMeta').textContent = `${p.cat} · ${p.date} · ${p.mins} min read`;
    document.getElementById('rTitle').textContent = p.title;
    document.getElementById('rImg').innerHTML = media(p);
    document.getElementById('rBody').innerHTML = p.body.map(t => `<p>${t}</p>`).join('');
    reader.classList.add('open');
    reader.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
  function closePost() { reader.classList.remove('open'); document.body.style.overflow = ''; }
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-post]');
    if (c) openPost(c.dataset.post);
  });
  document.addEventListener('keydown', e => {
    const c = e.target.closest && e.target.closest('[data-post]');
    if (c && e.key === 'Enter') openPost(c.dataset.post);
    if (e.key === 'Escape') closePost();
  });
  document.getElementById('rClose').addEventListener('click', closePost);
  document.getElementById('rNext').addEventListener('click', () => {
    const i = POSTS.findIndex(p => p.id === openId);
    openPost(POSTS[(i + 1) % POSTS.length].id);
  });
  reader.addEventListener('scroll', () => {
    const k = reader.scrollTop / Math.max(1, reader.scrollHeight - reader.clientHeight);
    document.getElementById('rProgress').style.width = (k * 100) + '%';
  });
  document.getElementById('nform').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('nmsg').textContent = 'You\'re subscribed — see you next drop ✦';
    e.target.reset();
  });
})();

// ===== 9. ARRANCAR =====
showPage(targetOf(location.hash).key, targetOf(location.hash).el);