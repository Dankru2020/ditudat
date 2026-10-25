// Filter: "test" entscheidet, welche Produkte gezeigt werden.
// "season: true" = Filter erscheint nur in der Weihnachtszeit (1. Okt. bis 6. Jan.).
const FILTERS = [
  { id: "alle", label: "Alle", test: () => true },
  { id: "sie", label: "Für Sie", test: p => p.tags.includes("sie") },
  { id: "ihn", label: "Für Ihn", test: p => p.tags.includes("ihn") },
  { id: "kinder", label: "Für Kinder", test: p => p.tags.includes("kinder") },
  { id: "geburtstag", label: "Geburtstag", test: p => p.tags.includes("geburtstag") },
  { id: "wichtel", label: "Kleine Geschenke", test: p => p.tags.includes("wichtel") },
  { id: "weihnachten", label: "Weihnachten", test: p => p.tags.includes("weihnachten"), season: true },
  { id: "u20", label: "Unter 20 €", test: p => p.price < 20 },
  { id: "u50", label: "Unter 50 €", test: p => p.price < 50 }
];
const nav = document.getElementById("filters");
const grid = document.getElementById("grid");
const count = document.getElementById("count");
const track = document.getElementById("tickerTrack");
const tickerBar = document.getElementById("tickerBar");
const toggle = document.getElementById("tickerToggle");
let current = "alle";

// Alle Produkte, die heute gezeigt werden dürfen (Saisonlogik in products.js)
function visibleProducts() {
  return window.PRODUCTS.filter(window.isVisible);
}

// Laufband bauen: zwei Durchgänge hintereinander für die nahtlose Schleife.
// Der zweite Durchgang ist für Screenreader und Tastatur versteckt.
function renderTicker() {
  const items = visibleProducts();
  track.innerHTML = "";
  tickerBar.hidden = !items.length;
  [false, true].forEach(isCopy => {
    const group = document.createElement("div");
    group.className = "ticker-group";
    if (isCopy) group.setAttribute("aria-hidden", "true");
    items.forEach(p => {
      const a = document.createElement("a");
      a.className = "pill";
      a.href = p.url;
      a.target = "_blank";
      a.rel = "sponsored nofollow noopener";
      if (isCopy) a.tabIndex = -1;
      const em = document.createElement("span");
      em.className = "pill-emoji";
      em.textContent = p.emoji;
      const ti = document.createElement("span");
      ti.className = "pill-title";
      ti.textContent = p.title;
      const pr = document.createElement("span");
      pr.className = "pill-price";
      pr.textContent = p.priceLabel;
      a.append(em, ti, pr);
      group.appendChild(a);
    });
    track.appendChild(group);
  });
  // Geschwindigkeit: ca. 3,5 Sekunden pro Produkt
  track.style.setProperty("--ticker-duration", (items.length * 3.5) + "s");
}

// Pause/Weiter-Knopf
toggle.onclick = () => {
  const paused = tickerBar.classList.toggle("paused");
  toggle.textContent = paused ? "Weiter" : "Pause";
  toggle.setAttribute("aria-pressed", paused);
};

function render() {
  const f = FILTERS.find(x => x.id === current);
  const items = visibleProducts().filter(f.test);
  count.textContent = items.length + (items.length === 1 ? " Geschenkidee" : " Geschenkideen");
  grid.innerHTML = "";
  if (!items.length) { grid.innerHTML = '<div class="empty">Hier ist noch nichts. Bald mehr!</div>'; return; }
  items.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    const pic = document.createElement("div");
    pic.className = "pic";
    if (p.image) pic.style.backgroundImage = "url('" + p.image + "')";
    else { pic.style.background = p.color; pic.textContent = p.emoji; }
    const body = document.createElement("div");
    body.className = "body";
    const h3 = document.createElement("h3");
    h3.textContent = p.title;
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = p.priceLabel;
    const a = document.createElement("a");
    a.className = "btn";
    a.target = "_blank";
    a.rel = "sponsored nofollow noopener";
    a.href = p.url;
    a.textContent = "Zum Angebot bei " + p.seller + " ›";
    body.append(h3, price, a);
    card.append(pic, body);
    grid.appendChild(card);
  });
}

// Filter-Leiste bauen (Saison-Filter nur in der Saison)
function renderFilters() {
  nav.innerHTML = "";
  const shown = FILTERS.filter(f => !f.season || window.isChristmasSeason());
  if (!shown.some(f => f.id === current)) current = "alle";
  shown.forEach(f => {
    const b = document.createElement("button");
    b.textContent = f.label;
    b.className = f.id === current ? "active" : "";
    b.onclick = () => {
      current = f.id;
      [...nav.children].forEach(c => c.classList.toggle("active", c === b));
      render();
    };
    nav.appendChild(b);
  });
}

// Alles neu aufbauen (auch zum Testen mit anderem Datum nutzbar)
function refresh() {
  renderTicker();
  renderFilters();
  render();
}
refresh();
