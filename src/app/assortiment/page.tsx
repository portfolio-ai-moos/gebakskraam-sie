import Image from 'next/image'

interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  ingredients: string[]
  history: string
  rating: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Oliebol",
    description: "De klassieke kermistraktatie, knapperig van buiten en zacht van binnen. Gemaakt volgens het originele recept uit 1920.",
    price: "€2,50",
    category: "Traditioneel Gebak",
    ingredients: ["Bloem", "Rozijnen", "Gist", "Melk", "Eieren"],
    history: "De oliebol is al sinds de Middeleeuwen een Nederlandse delicatesse, maar werd pas echt populair op de kermissen van de jaren '20.",
    rating: 5
  },
  {
    id: 2,
    name: "Krentenbol",
    description: "Zoete rozijnen in een luchtig beslag, een ware delicatesse die al generaties lang wordt gewaardeerd.",
    price: "€2,75",
    category: "Traditioneel Gebak",
    ingredients: ["Bloem", "Krenten", "Gist", "Boter", "Suiker"],
    history: "In de jaren '50 was de krentenbol het summum van luxe op de kermis, vaak geserveerd met een poedersuikerlaagje.",
    rating: 5
  },
  {
    id: 3,
    name: "Wafel",
    description: "Krokante wafels à la oublie, gebakken in authentieke ijzers volgens traditioneel recept.",
    price: "€3,00",
    category: "Wafels",
    ingredients: ["Bloem", "Boter", "Eieren", "Suiker", "Vanille"],
    history: "Oubliewafels komen oorspronkelijk uit de Middeleeuwen en werden op kermissen geserveerd als delicatesse voor de rijke stand.",
    rating: 5
  },
  {
    id: 4,
    name: "Oubliewafel",
    description: "Dunne, knapperige wafels met een subtiele vanillesmaak. Een verfijnde traktatie uit de oude tijd.",
    price: "€3,25",
    category: "Wafels",
    ingredients: ["Rijstmeel", "Boter", "Suiker", "Vanille", "Eieren"],
    history: "De dunne oubliewafel was in de jaren '20 een symbool van verfijning en werd vaak geserveerd bij speciale gelegenheden.",
    rating: 5
  },
  {
    id: 5,
    name: "Appelbeignet",
    description: "Verse appels in een zacht beslag, bestrooid met poedersuiker. Een seizoensfavoriet.",
    price: "€3,50",
    category: "Beignets",
    ingredients: ["Appels", "Bloem", "Eieren", "Melk", "Kaneel"],
    history: "Appelbeignets werden in de herfstmaanden populair op de kermissen, als viering van de oogst.",
    rating: 5
  },
  {
    id: 6,
    name: "Suikerwerken",
    description: "Traditionele snoepgoed zoals op de kermissen van weleer. Handgemaakt met liefde en vakmanschap.",
    price: "€1,50",
    category: "Zoetigheid",
    ingredients: ["Suiker", "Glucose", "Kleurstoffen", "Aromen", "Citroenzuur"],
    history: "Suikerspinnen en andere suikerwerken waren in de jaren '50 de grote trekpleisters voor kinderen op de kermis.",
    rating: 5
  },
  {
    id: 7,
    name: "Luxe Oliebol",
    description: "Onze premium oliebol met extra rozijnen en een vleugje kaneel, geserveerd met warme kersencompote.",
    price: "€4,00",
    category: "Specialiteiten",
    ingredients: ["Bloem", "Extra Rozijnen", "Kaneel", "Gist", "Melk", "Kersen"],
    history: "Een moderne interpretatie van de klassieke oliebol, geïnspireerd op de luxere versies uit de jaren '30.",
    rating: 5
  },
  {
    id: 8,
    name: "Honingwafel",
    description: "Zachte wafel met een vleugje honing, gebakken in een speciaal ijzer voor een unieke textuur.",
    price: "€3,75",
    category: "Wafels",
    ingredients: ["Bloem", "Honing", "Boter", "Eieren", "Specerijen"],
    history: "Honingwafels waren een specialiteit uit de noordelijke provincies, later populair geworden op kermissen.",
    rating: 5
  }
]

export default function Assortiment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-nostalgia-brown">
          <Image
            src="/img/kraam.jpg"
            alt="Ons assortiment ambachtelijk gebak"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-4">
              Ons Assortiment
            </h1>
            <p className="font-body text-xl md:text-2xl">
              Ambachtelijk gebak volgens traditionele recepten uit 1920-1950
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">
              Alle Producten
            </button>
            <button className="btn-secondary">
              Traditioneel Gebak
            </button>
            <button className="btn-secondary">
              Wafels
            </button>
            <button className="btn-secondary">
              Specialiteiten
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-nostalgia-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-nostalgia-cream rounded-lg overflow-hidden nostalgic-shadow">
                <div className="h-48 bg-nostalgia-red flex items-center justify-center">
                  <div className="text-6xl text-nostalgia-gold">
                    {product.category === "Traditioneel Gebak" && "🍩"}
                    {product.category === "Wafels" && "🧇"}
                    {product.category === "Beignets" && "🍎"}
                    {product.category === "Zoetigheid" && "🍭"}
                    {product.category === "Specialiteiten" && "⭐"}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-nostalgia-red">
                      {product.name}
                    </h3>
                    <span className="font-serif text-xl text-nostalgia-gold font-semibold">
                      {product.price}
                    </span>
                  </div>
                  
                  <p className="font-body text-nostalgia-brown mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-nostalgia-gold text-nostalgia-brown px-3 py-1 rounded-full text-sm font-serif">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-serif text-lg font-semibold text-nostalgia-red mb-2">
                      Ingrediënten
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <span key={index} className="text-sm font-body text-nostalgia-brown bg-nostalgia-cream px-2 py-1 rounded border border-nostalgia-gold">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-serif text-lg font-semibold text-nostalgia-red mb-2">
                      Historie
                    </h4>
                    <p className="font-body text-sm text-nostalgia-brown italic">
                      {product.history}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-nostalgia-gold">
                      {"★".repeat(product.rating)}
                    </div>
                    <button className="btn-secondary text-sm">
                      Bestellen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
              Kermis Specialiteiten
            </h2>
            <p className="font-body text-xl text-nostalgia-brown max-w-3xl mx-auto">
              Proef onze seizoensgebonden specialiteiten, geïnspireerd op de 
              authentieke kermistradities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="gold-border p-8 bg-white">
              <h3 className="font-serif text-3xl font-bold text-nostalgia-red mb-4">
                Kermis Combo
              </h3>
              <p className="font-body text-lg text-nostalgia-brown mb-6">
                Een complete kermiservaring: oliebol, krentenbol en wafel, 
                geserveerd met traditionele poedersuiker en een kop warme chocolademelk.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-serif text-2xl text-nostalgia-gold font-bold">
                  €8,50
                </span>
                <button className="btn-primary">
                  Bestel Combo
                </button>
              </div>
            </div>

            <div className="gold-border p-8 bg-white">
              <h3 className="font-serif text-3xl font-bold text-nostalgia-red mb-4">
                Familie Pakket
              </h3>
              <p className="font-body text-lg text-nostalgia-brown mb-6">
                Voor het hele gezin: 4 oliebollen, 4 krentenbollen en 2 wafels, 
                perfect om te delen op een dagje kermis.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-serif text-2xl text-nostalgia-gold font-bold">
                  €22,00
                </span>
                <button className="btn-primary">
                  Bestel Pakket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nostalgia-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-nostalgia-gold mb-6">
            Proef de Traditie
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Kom langs bij onze kraam en ervaar de authentieke smaken van 
            de Nederlandse kermis. Al ons gebak wordt dagelijks vers bereid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Vind Onze Kraam
            </a>
            <a href="/over-ons" className="btn-secondary">
              Lees Ons Verhaal
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
