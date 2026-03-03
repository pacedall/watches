# Pacedall Watches — Website

A premium watch e-commerce website for **Pacedall Watches** by Pacedall Labs.

## 🏗️ Project Structure

```
pacedall-watches/
├── index.html              # Landing page (homepage)
├── pages/
│   ├── collection.html     # Full watch collection with filters
│   └── about.html          # Brand story & about page
├── css/
│   └── styles.css          # All styles (CSS variables, responsive)
├── js/
│   └── main.js             # Scroll animations, nav, filters, interactions
├── images/
│   └── watches-logo.png    # Pacedall Watches logo
└── README.md
```

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0D1B3E` | Primary background |
| Blue | `#1565C0` | Accent, CTA |
| Amber | `#E65100` | Accent, gradient end |
| Gold | `#FFA726` | Highlights, price |
| Off-White | `#F5F0E8` | Body text |

**Fonts:** Playfair Display (headings) · Montserrat (body) · Oswald (labels/UI)

## 📄 Pages

- **Home** (`index.html`) — Hero with animated watch showcase, featured products, collections, testimonials, newsletter
- **Collection** (`pages/collection.html`) — Full product grid with filter bar (All / Sport / Luxury / Diver / Chrono / Dress)
- **About** (`pages/about.html`) — Brand story, values, timeline

## ⚙️ Features

- Fixed navbar with scroll effect + mobile hamburger
- CSS scroll-reveal animations via IntersectionObserver
- Animated ticker/marquee band
- Interactive filter buttons (collection page)
- Add-to-cart button micro-interactions
- Cursor glow effect (desktop)
- Newsletter form with success state
- Fully responsive (mobile, tablet, desktop)

## 🚀 Deployment

Drop the entire folder into any static hosting:
- **GitHub Pages** — Push to repo, enable Pages from root or `/docs`
- **Netlify** — Drag & drop the folder
- **Vercel** — `vercel --prod`

No build step required. Pure HTML/CSS/JS.

## 🔗 Brand Context

Part of the **Pacedall Labs** product ecosystem. See also:
- Pacedall Signal, Mirror, Flow, Voice, Clarity, Breath, Pulse, Tempo, Noise, Cast, Focus, Recall

---

© 2024 Pacedall Labs
