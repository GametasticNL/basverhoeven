# Portfolio Bas Verhoeven

Statische portfolio-site — geen build-stap, geen dependencies. Open `index.html` in de browser of host de map op elke statische host (Vercel, Netlify, GitHub Pages).

## Afbeeldingen

Alle afbeeldingen staan in de `img/`-map: Judoshop-mockup (case 1), TCM Trader-mockup (case 2) en de portretfoto ("Over mij").

## Aanpassen

- **Accentkleur**: `--accent` bovenin `portfolio.css` (ontwerp-opties uit de designfase: `#FF5C38` oranje, `#9AE600` lime, `#4D7CFE` blauw, `#E8C547` geel).
- **Licht/donker**: standaard donker; bezoekers wisselen via de knop in de navigatie (keuze wordt onthouden in localStorage).
- **Animaties**: scroll-reveals, tellende cijfers en parallax staan aan; `prefers-reduced-motion` wordt gerespecteerd.
