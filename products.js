// Alle Produkte der Seite stehen hier. Zum Ändern nur diese Liste bearbeiten.
//
// Amazon-Links entstehen aus der ASIN (Produktnummer in der Amazon-URL nach /dp/).
// Sobald du bei Amazon PartnerNet angenommen bist, trage unten deine Partner-ID ein
// (z. B. "deinname-21"). Dann hängt die Seite sie automatisch an alle Amazon-Links an.
// Für Produkte anderer Händler (Awin usw.) setze statt "asin" ein eigenes "url".
//
// tags:    sie, ihn, kinder, wichtel
// price:   Zahl in Euro (nur für die Filter "Unter 20 €" / "Unter 50 €")
// priceLabel: wird unten automatisch aus "price" als Preisbereich gebildet ("unter 20 €").
//          Amazon verlangt aktuelle Preise, deshalb zeigen wir keine festen Beträge.
//          "price" ist ein Richtwert (Stand 21.10.2026, aus Amazon-Listen übernommen).
// emoji/color: Platzhalter, bis echte Produktbilder da sind (image: "bilder/xyz.jpg" überschreibt das)

window.AMAZON_TAG = "ditudat-21"; // PartnerNet-Tracking-ID

function amazon(asin) {
  return "https://www.amazon.de/dp/" + asin + (window.AMAZON_TAG ? "?tag=" + window.AMAZON_TAG : "");
}

window.PRODUCTS = [
  // Für Sie
  { title: "Duftkerzen-Geschenkset, 12er-Pack", seller: "Amazon", url: amazon("B0F6CR563J"), tags: ["sie", "wichtel"], price: 17, priceLabel: "ca. 17 €", emoji: "🕯️", color: "#f3d9c4" },
  { title: "Kuschelige Sherpa-Decke mit Ärmeln", seller: "Amazon", url: amazon("B0CHPCWDDT"), tags: ["sie", "ihn"], price: 37, priceLabel: "ca. 37 €", emoji: "🧣", color: "#e4d3e9" },
  { title: "The Ordinary Niacinamid-Serum 10 %", seller: "Amazon", url: amazon("B01MDTVZTZ"), tags: ["sie", "wichtel"], price: 5, priceLabel: "ca. 5 €", emoji: "🧴", color: "#e7d6ee" },

  // Für Ihn
  { title: "Kaffee-Probierset: 5 Kaffees aus aller Welt", seller: "Amazon", url: amazon("B0733CKYSS"), tags: ["ihn", "sie"], price: 16, priceLabel: "ca. 16 €", emoji: "☕", color: "#e6d5bd" },
  { title: "Soundcore P20i Bluetooth-Kopfhörer (In-Ear)", seller: "Amazon", url: amazon("B0BTYCRJSS"), tags: ["ihn", "sie"], price: 21, priceLabel: "ca. 21 €", emoji: "🎧", color: "#d3dcec" },
  { title: "JBL Tune 530BT On-Ear-Kopfhörer", seller: "Amazon", url: amazon("B0FSGN86M9"), tags: ["ihn", "sie"], price: 39, priceLabel: "ca. 39 €", emoji: "🎧", color: "#cfd9e6" },
  { title: "Philips Fusselrasierer", seller: "Amazon", url: amazon("B07M8J529S"), tags: ["ihn", "sie"], price: 11, priceLabel: "ca. 11 €", emoji: "🧺", color: "#d8dde2" },

  // Spiele für alle
  { title: "Flip 7 – Kartenspiel (Kosmos)", seller: "Amazon", url: amazon("B0DQVGD538"), tags: ["kinder", "ihn", "sie", "wichtel"], price: 10, priceLabel: "ca. 10 €", emoji: "🃏", color: "#cfe3d6" },
  { title: "Hitster – Musik-Partyspiel", seller: "Amazon", url: amazon("B09T3K9ZC6"), tags: ["ihn", "sie", "kinder"], price: 15, priceLabel: "ca. 15 €", emoji: "🎵", color: "#f6d3d1" },
  { title: "Stadt Land Weihnachten – Ratespiel", seller: "Amazon", url: amazon("B0DG5Y8K84"), tags: ["wichtel", "sie", "ihn", "kinder"], price: 10, priceLabel: "ca. 10 €", emoji: "🎲", color: "#d6e8dc" },
  { title: "Perplexus Rebel – 3D-Kugellabyrinth", seller: "Amazon", url: amazon("B07MKCZJNJ"), tags: ["kinder", "ihn"], price: 16, priceLabel: "ca. 16 €", emoji: "🌀", color: "#dbe6f2" },

  // Für Kinder
  { title: "LEGO Star Wars Adventskalender 2026", seller: "Amazon", url: amazon("B0GGSK4J2N"), tags: ["kinder"], price: 25, priceLabel: "ca. 25 €", emoji: "🎄", color: "#cde5d4" },
  { title: "LEGO City Adventskalender 2026", seller: "Amazon", url: amazon("B0GGSTTS1R"), tags: ["kinder"], price: 22, priceLabel: "ca. 22 €", emoji: "🚒", color: "#f1e2b8" },
  { title: "LEGO Speed Champions Mercedes-AMG F1", seller: "Amazon", url: amazon("B0DHS9Y433"), tags: ["kinder", "ihn"], price: 16, priceLabel: "ca. 16 €", emoji: "🏎️", color: "#f2cdbb" },
  { title: "Play-Doh Super Colour Set, 20 Dosen", seller: "Amazon", url: amazon("B07MV3DYGJ"), tags: ["kinder"], price: 10, priceLabel: "ca. 10 €", emoji: "🎨", color: "#f5dbc9" },
  { title: "Ravensburger tiptoi Stift", seller: "Amazon", url: amazon("B09TPRRSW7"), tags: ["kinder"], price: 36, priceLabel: "ca. 36 €", emoji: "✏️", color: "#e1e9c9" },

  // Wichtel
  { title: "Tee-Geschenkset „Kleines Weihnachtswunder“", seller: "Amazon", url: amazon("B0FS1R28NP"), tags: ["wichtel", "sie", "ihn"], price: 6, priceLabel: "ca. 6 €", emoji: "🍵", color: "#cfe3d6" },
  { title: "Weihnachts-Glückskekse, 12 Stück", seller: "Amazon", url: amazon("B0F8P1Y5C5"), tags: ["wichtel", "sie", "ihn", "kinder"], price: 10, priceLabel: "ca. 10 €", emoji: "🥠", color: "#f3e4b8" }
];

// Preisbereich statt festem Betrag
window.PRODUCTS.forEach(function (p) {
  var bands = [10, 20, 30, 40, 50, 75, 100];
  var top = bands.find(function (b) { return p.price < b; });
  p.priceLabel = top ? "unter " + top + " €" : "ab 100 €";
});
