import Image from 'next/image'

export default function OverOns() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-nostalgia-brown">
          <Image
            src="/img/kraam.jpg"
            alt="Onze nostalgische gebakskraam"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-4">
              Over Ons
            </h1>
            <p className="font-body text-xl md:text-2xl">
              De geschiedenis van ambachtelijk gebak en nostalgische kermistraditie
            </p>
          </div>
        </div>
      </section>

      {/* Onze Geschiedenis */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-nostalgia-red mb-6">
                Onze Geschiedenis
              </h2>
              <div className="space-y-4 font-body text-lg text-nostalgia-brown">
                <p>
                  De traditie van de nostalgische gebakkramen begon in de vroege jaren &rsquo;20, 
                  toen ambachtslieden door het hele land reisden om kermissen te voorzien 
                  van vers gebak. Deze kramen waren meer dan alleen verkooppunten — ze waren 
                  sociale ontmoetingsplaatsen waar de geur van verse oliebollen en wafels 
                  mensen samenbracht.
                </p>
                <p>
                  Onze kraam is geïnspireerd op drie iconische periodes: 
                  een authentieke kraam uit 1920 met zijn robuuste houten constructie, 
                  een elegante jaren &rsquo;50 variant met rood fluweel en kristallen lampen, 
                  en een moderne interpretatie uit 1999 die de klassieke bouwstijl eer aan doet.
                </p>
                <p>
                  Vandaag de dag staan wij in diezelfde traditie — met respect voor het vakmanschap 
                  van toen en de kwaliteitseisen van nu. Elk product dat wij bakken draagt de 
                  ziel van meer dan een eeuw kermishistorie.
                </p>
              </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-nostalgia-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-nostalgia-gold mb-6">
            Ervaar Onze Ambacht
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Kom langs en proef de geschiedenis. Elke hap is een reis terug naar 
            de gouden tijd van de Nederlandse kermis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Vind Onze Kraam
            </a>
            <a href="/assortiment" className="btn-secondary">
              Bekijk Ons Assortiment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
