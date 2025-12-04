# 🎡 Windsurf System Instructions  
## Project: De Nostalgische Oliebollenkraam Website  
### Stijl: Warm & Nostalgisch (Optie A)

---

## 🎯 Projectdoel
Bouw een complete, productieklare nostalgische website voor **De Nostalgische Oliebollenkraam** met:

- **Next.js (App Router)**
- **Tailwind CSS**
- **TypeScript**
- **Vercel hosting**
- **Nostalgische look & feel** uit ontwerpoptie A.

De site moet warm, feestelijk en traditioneel aanvoelen, in de stijl van een klassieke Nederlandse oliebollenkraam / kermisattractie.

---

## 🎨 Visuele stijl

### Kleuren
- Rood: `#7A1E1E`
- Goud: `#D9B36C`
- Crème: `#F7EEDB`
- Donkerbruin: `#3E2A1A`

### Typografie
- **Headers / titels:** `"Cormorant Garamond", serif`
- **Body tekst:** `"Lora", serif`

### Design principles
- Gebruik klassieke ornamenten, randen, gouden kaders.
- Afbeeldingen warm en sfeervol weergeven.
- Gebruik bokeh-lichtjes en nostalgische kerstmarkt-vibes.
- Buttons zijn goud/creme met serif-font en klassieke uitstraling.
- Vrijwel geen afgeronde hoeken — klassieke rechthoeken.

---

## 📂 Projectstructuur

Het project gebruikt de volgende mappenstructuur:

gebakskraam-site/
│
├── fotos/ # Originele bestanden van gebruiker
│ ├── Gebakskraam-front.jpeg
│ ├── Logo.jpeg
│ └── pietduijts-henriknubben.png
│
├── public/img/ # Web-toegankelijke afbeeldingen
│ ├── kraam.jpg
│ ├── logo.png
│ └── piet-henri.png
│
├── src/
│ ├── app/
│ │ ├── page.tsx # Home
│ │ ├── assortiment/page.tsx
│ │ ├── over-ons/page.tsx
│ │ ├── contact/page.tsx
│ │ └── bestellen/page.tsx
│ │
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── ProductCard.tsx
│ │ ├── SectionTitle.tsx
│ │ ├── OrnamentDivider.tsx
│ │ └── VideoSlider.tsx
│ │
│ ├── config/
│ │ ├── products.ts
│ │ └── site.ts
│ │
│ └── styles/
│
└── tailwind.config.js


---

## ⚙️ Technische richtlijnen

- Gebruik **Next.js App Router** ALTIJD.
- Gebruik **Tailwind CSS** voor álle styling.
- Gebruik **Next/Image** voor afbeeldingen.
- Gebruik import alias **"@/*"**.
- Gebruik **TypeScript** in componenten.
- Deploy naar **Vercel**.

---

## 🚀 Code-regels voor Windsurf

Windsurf moet:

1. Nooit pagina’s maken in de pages-router — alleen `app/`.
2. Tailwind classes gebruiken met het gedefinieerde kleurenschema.
3. Consistent klassieke/nostalgische elementen toevoegen.
4. Geen inline CSS gebruiken.
5. Alle afbeeldingen refereren uit `/public/img`.
6. Componenten modulair bouwen.
7. Voordat een pagina wordt uitgebreid → eerst component aanmaken.

---

## 📄 Pagina’s die gebouwd moeten worden

### **Homepage**
- Hero met achtergrondfoto van de kraam.
- Grote nostalgische titel en subtitel.
- Twee CTA’s (Assortiment / Bestellen).
- Sectie “Het verhaal” met portretfoto van Piet & Henri.
- Assortiment preview (3 producten).
- Video- of fotoslider.
- Nostalgische ornamenten tussen secties.

### **Assortimentpagina**
- ProductCard component voor elk item.
- Productdata vanuit `config/products.ts`.
- Nostalgische lay-out met gouden randen.

### **Over ons**
- Historie, het verhaal, foto van de ondernemers.
- Warme storytellingstijl.

### **Contact**
- Contactformulier + gegevens.
- Nostalgische border en ornamenten.

### **Bestellen**
- Formulier voor Oud & Nieuw pre-orders.

---

## 🔒 Constraints

- Geen externe UI libraries (tenzij gebruiker dit expliciet vraagt).
- Geen moderne/gladde designpatterns — website blijft klassiek & nostalgisch.
- Geen donkere modus (tenzij gebruiker later vraagt om kerstmarkt-nachtstijl).
- Alle code moet voldoen aan Next.js conventions.
- Tailwind kleuren gebruiken onder `nostalgia.*`.

---

## 🎯 Eindoel

Het eindresultaat is een **volledig werkende, hoogwaardige, nostalgische oliebollenkraam-website** met:

- Complete layout  
- Sfeervolle visuals  
- Perfect passende branding  
- Ambachtelijke uitstraling  
- Klaar voor ⭐ **publicatie op Vercel**  

Windsurf moet alle gegenereerde code en refactors uitvoeren **volgens deze stijlregels en projectstructuur**.

