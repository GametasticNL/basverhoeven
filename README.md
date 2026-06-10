# Portfolio Bas Verhoeven

Statische portfolio-site — geen build-stap, geen dependencies. Open `index.html` in de browser of host de map op elke statische host (Vercel, Netlify, GitHub Pages).

## Afbeeldingen toevoegen

Eén gestreepte placeholder resteert in `index.html` (zoek op `img-placeholder`):

1. **Screenshot Wijnexpress** — case 2

Boven de placeholder staat een commentaarregel met de `<img>`-tag die je ervoor in de plaats zet. Zet de afbeelding in de `img/`-map en verwijder de placeholder-div.

## Aanpassen

- **Accentkleur**: `--accent` bovenin `portfolio.css` (ontwerp-opties uit de designfase: `#FF5C38` oranje, `#9AE600` lime, `#4D7CFE` blauw, `#E8C547` geel).
- **Licht/donker**: standaard donker; bezoekers wisselen via de knop in de navigatie (keuze wordt onthouden in localStorage).
- **Animaties**: scroll-reveals, tellende cijfers en parallax staan aan; `prefers-reduced-motion` wordt gerespecteerd.
