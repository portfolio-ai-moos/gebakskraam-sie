import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/img/kraam.jpg"
            alt="Gebakskraam met nostalgische sfeer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-nostalgia-brown bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-nostalgia-gold">
              Gebakskraam
            </h1>
            <p className="font-body text-xl md:text-2xl mb-8 leading-relaxed">
              In de traditie van de nostalgische kermis bakken wij dagelijks verse oliebollen — 
              met dezelfde warmte, geur en uitstraling als de klassieke kramen uit 1920 en 1950.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assortiment" className="btn-primary inline-block text-center">
                Assortiment Bekijken
              </a>
              <a href="/contact" className="btn-secondary inline-block text-center">
                Bestellen voor Oud & Nieuw
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verhaal & Historie Section */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
                Onze Nostalgische Geschiedenis
              </h2>
              <p className="font-body text-lg leading-relaxed mb-6 text-nostalgia-brown">
                Onze kraam is geïnspireerd op ambachtelijke gebakkramen die al meer dan een eeuw 
                over Nederlandse kermissen reisden — herkenbaar aan rood fluweel, gouden decoraties 
                en kristallen lampen.
              </p>
              <p className="font-body text-lg leading-relaxed text-nostalgia-brown">
                Vanaf de jaren &rsquo;20 tot de gouden &rsquo;50 stonden deze kramen symbool voor warmte, 
                gezelligheid en de onweerstaanbare geur van vers gebak. Vandaag de dag brengen wij 
                diezelfde sfeer terug met respect voor traditie en aandacht voor kwaliteit.
              </p>
            </div>
            <div className="relative">
              <div className="gold-border p-2">
                <Image
                  src="/img/piet-henri.png"
                  alt="De mensen achter de kraam"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productoverzicht Section */}
      <section className="py-20 bg-nostalgia-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-gold mb-6">
              Ons Ambachtelijke Assortiment
            </h2>
            <p className="font-body text-xl text-nostalgia-cream max-w-3xl mx-auto">
              Volgens traditionele recepten gebakken met de beste ingrediënten, 
              net als op de kermissen van vroeger.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Oliebol
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                De klassieke kermistraktatie, knapperig van buiten en zacht van binnen.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Krentenbol
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                Zoete rozijnen in een luchtig beslag, een ware delicatesse.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Wafel
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                Krokante wafels à la oublie, gebakken in authentieke ijzers.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Oubliewafel
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                Dunne, knapperige wafels met een subtiele vanillesmaak.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Appelbeignet
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                Verse appels in een zacht beslag, bestrooid met poedersuiker.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-nostalgia-cream p-8 text-center nostalgic-shadow">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Suikerwerken
              </h3>
              <p className="font-body text-nostalgia-brown mb-4">
                Traditionele snoepgoed zoals op de kermissen van weleer.
              </p>
              <div className="text-nostalgia-gold font-serif text-lg">
                ★★★★★
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/assortiment" className="btn-primary">
              Bekijk Volledig Assortiment
            </a>
          </div>
        </div>
      </section>

      {/* Nostalgische Sfeer Section */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
              De Sfeer van Vroeger
            </h2>
            <p className="font-body text-xl text-nostalgia-brown max-w-3xl mx-auto">
              Onze kraam ademt de warme sfeer van toen — kristallen lampen, houten ornamenten 
              en de geur van vers deeg, precies zoals op de traditionele kermissen van toen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src="/img/kraam.jpg"
                alt="Detail van de nostalgische kraam"
                fill
                className="object-cover gold-border"
              />
            </div>
            <div className="flex items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold text-nostalgia-red mb-6">
                  Authentieke Materialen
                </h3>
                <ul className="space-y-4 font-body text-lg text-nostalgia-brown">
                  <li className="flex items-center">
                    <span className="text-nostalgia-gold mr-3">◆</span>
                    Rood fluweel met gouden afwerking
                  </li>
                  <li className="flex items-center">
                    <span className="text-nostalgia-gold mr-3">◆</span>
                    Kristallen lampen voor warme sfeerverlichting
                  </li>
                  <li className="flex items-center">
                    <span className="text-nostalgia-gold mr-3">◆</span>
                    Ambachtelijk houtsnijwerk
                  </li>
                  <li className="flex items-center">
                    <span className="text-nostalgia-gold mr-3">◆</span>
                    Traditionele bakapparatuur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nostalgia-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-nostalgia-gold mb-6">
            Ervaar de Nostalgie
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Kom langs bij onze kraam en proef de authenticiteit van traditioneel 
            ambachtelijk gebak, bereid met passie en respect voor het vak.
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
