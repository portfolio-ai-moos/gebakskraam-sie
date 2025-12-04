# 🎡 Gebakskraam Website

Een nostalgische website voor een ambachtelijke gebakskraam, geïnspireerd op de traditionele Nederlandse kermissen uit de jaren '20-'50.

## 🎨 Design & Stijl

- **Kleurthema:** Nostalgisch rood (#7A1E1E), goud (#D9B36C), crème (#F7EEDB), bruin (#3E2A1E)
- **Typografie:** Cormorant Garamond (serif), Lora (body)
- **Sfeer:** Rood fluweel, kristallen lampen, gouden decoraties, kermisnostalgie

## 🛠️ Technologie

- **Framework:** Next.js 14.2.5 met App Router
- **Styling:** Tailwind CSS
- **TypeScript:** Volledig getyped
- **Images:** Next.js Image optimization
- **Deployment:** Vercel-ready

## 📁 Project Structuur

```
gebakskraam-site/
├── public/
│   └── img/
│       ├── kraam.jpg          # Hero foto
│       ├── logo.jpeg          # Logo
│       └── piet-henri.png     # Portret foto
├── src/
│   └── app/
│       ├── globals.css        # Global styles & Tailwind
│       ├── layout.tsx         # Nostalgische layout
│       ├── page.tsx           # Home pagina
│       ├── over-ons/
│       │   └── page.tsx       # About pagina
│       ├── assortiment/
│       │   └── page.tsx       # Producten pagina
│       └── contact/
│           └── page.tsx       # Contact pagina
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🚀 Lokale Ontwikkeling

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Pagina's

### Home (`/`)
- Hero sectie met kraam foto
- Historische context over kermistraditie
- Product overzicht
- Nostalgische sfeer sectie

### Over Ons (`/over-ons`)
- Geschiedenis van de gebakkramen (1920-1950-heden)
- Beschrijving van de kraam en materialen
- Team informatie

### Assortiment (`/assortiment`)
- 8 producten met kaarten
- Ingrediënten, historie en prijzen
- Specialiteiten en combo's

### Contact (`/contact`)
- Contactformulier voor boekingen
- Openingstijden
- Locatie informatie

## 🎯 Features

- ✅ Responsive design voor alle apparaten
- ✅ SEO-geoptimaliseerd met metadata
- ✅ Image optimization voor snelle laadtijden
- ✅ TypeScript voor type safety
- ✅ Tailwind CSS voor consistent design
- ✅ Nostalgische UI componenten

## 🌐 Deployment

De website is geconfigureerd voor Vercel deployment:

1. Push de code naar GitHub
2. Connect repository met Vercel
3. Deploy automatisch geconfigureerd voor Next.js

## 📸 Afbeeldingen

Alle foto's zijn geoptimaliseerd voor web:
- `kraam.jpg` - Hero achtergrond
- `logo.jpeg` - Header logo  
- `piet-henri.png` - Team portret

## 🎪 Nostalgische Elementen

- Rood fluweel en gouden decoraties
- Kristallen lampen referenties
- Historische kermis content
- Traditionele bakproducten (oliebollen, wafels, suikerwerken)
- Jaren '20-'50 sfeer en typografie

## 📝 Licentie

© 2024 Gebakskraam - Alle rechten voorbehouden
