# Portfolio Bas Verhoeven

Statische portfolio-site — geen build-stap, geen dependencies. Open `index.html` in de browser of host de map op elke statische host (Vercel, Netlify, GitHub Pages).

## Afbeeldingen toevoegen

Er staan drie gestreepte placeholders in `index.html` (zoek op `img-placeholder`):

1. **Screenshot Judoshop** — case 1
2. **Screenshot Wijnexpress** — case 2
3. **Portretfoto Bas** — sectie "Over mij"

Boven elke placeholder staat een commentaarregel met de `<img>`-tag die je ervoor in de plaats zet. Zet je afbeeldingen in een `img/`-map en verwijder de placeholder-div.

## Aanpassen

- **Accentkleur**: `--accent` bovenin `portfolio.css` (ontwerp-opties uit de designfase: `#FF5C38` oranje, `#9AE600` lime, `#4D7CFE` blauw, `#E8C547` geel).
- **Licht/donker**: standaard donker; bezoekers wisselen via de knop in de navigatie (keuze wordt onthouden in localStorage).
- **Animaties**: scroll-reveals, tellende cijfers en parallax staan aan; `prefers-reduced-motion` wordt gerespecteerd.
