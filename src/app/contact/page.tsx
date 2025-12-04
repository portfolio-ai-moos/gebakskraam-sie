'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventType: 'kermis'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would normally handle the form submission
    alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-nostalgia-brown">
          <Image
            src="/img/kraam.jpg"
            alt="Contacteer onze nostalgische gebakskraam"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-4">
              Contact
            </h1>
            <p className="font-body text-xl md:text-2xl">
              Vind onze kraam of boek ons voor uw evenement
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
              Onze Kraam Reist naar U
            </h2>
            <p className="font-body text-xl text-nostalgia-brown max-w-3xl mx-auto">
              Onze kraam reist naar markten, evenementen, kerstmarkten en pleinen — 
              net als de historische gebakkramen van de Nederlandse kermissen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl text-nostalgia-red mb-4">📍</div>
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Locatie
              </h3>
              <p className="font-body text-nostalgia-brown">
                Wij reizen door heel Nederland.<br />
                Volg ons op sociale media voor<br />
                actuele locaties.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-nostalgia-red mb-4">📞</div>
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                Telefoon
              </h3>
              <p className="font-body text-nostalgia-brown">
                <a href="tel:0612345678" className="hover:text-nostalgia-red transition-colors">
                  06-123 456 78
                </a><br />
                Dagelijks bereikbaar<br />
                van 08:00 tot 20:00 uur
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-nostalgia-red mb-4">✉️</div>
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-4">
                E-mail
              </h3>
              <p className="font-body text-nostalgia-brown">
                <a href="mailto:info@gebakskraam.nl" className="hover:text-nostalgia-red transition-colors">
                  info@gebakskraam.nl
                </a><br />
                Voor boekingen en<br />
                algemene vragen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-nostalgia-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-gold mb-6">
              Boek Onze Kraam
            </h2>
            <p className="font-body text-xl text-nostalgia-cream">
              Organiseert u een evenement, kermis of markt? Wij brengen de 
              nostalgische sfeer naar uw locatie!
            </p>
          </div>

          <div className="bg-nostalgia-cream p-8 rounded-lg gold-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-serif text-lg font-semibold text-nostalgia-red mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-nostalgia-gold rounded-lg font-body text-nostalgia-brown focus:outline-none focus:border-nostalgia-red"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-serif text-lg font-semibold text-nostalgia-red mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-nostalgia-gold rounded-lg font-body text-nostalgia-brown focus:outline-none focus:border-nostalgia-red"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-serif text-lg font-semibold text-nostalgia-red mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-nostalgia-gold rounded-lg font-body text-nostalgia-brown focus:outline-none focus:border-nostalgia-red"
                    placeholder="06-123 456 78"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block font-serif text-lg font-semibold text-nostalgia-red mb-2">
                    Type Evenement *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-nostalgia-gold rounded-lg font-body text-nostalgia-brown focus:outline-none focus:border-nostalgia-red"
                  >
                    <option value="kermis">Kermis</option>
                    <option value="markt">Markt</option>
                    <option value="kerstmarkt">Kerstmarkt</option>
                    <option value="bedrijfsevenement">Bedrijfsevenement</option>
                    <option value="particulier">Particulier Feest</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-serif text-lg font-semibold text-nostalgia-red mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-nostalgia-gold rounded-lg font-body text-nostalgia-brown focus:outline-none focus:border-nostalgia-red"
                  placeholder="Vertel ons over uw evenement, gewenste datum, aantal verwachte bezoekers en speciale wensen..."
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-8 py-4">
                  Verstuur Bericht
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Openingstijden Section */}
      <section className="py-20 bg-nostalgia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
              Openingstijden
            </h2>
            <p className="font-body text-xl text-nostalgia-brown">
              Onze kraam is geopend volgens de kermistraditie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 gold-border">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-6">
                Kermis & Evenementen
              </h3>
              <div className="space-y-3 font-body text-lg text-nostalgia-brown">
                <div className="flex justify-between">
                  <span>Maandag - Vrijdag:</span>
                  <span className="font-semibold">12:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag:</span>
                  <span className="font-semibold">10:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zondag & Feestdagen:</span>
                  <span className="font-semibold">10:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 gold-border">
              <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-6">
                Kerstmarkten
              </h3>
              <div className="space-y-3 font-body text-lg text-nostalgia-brown">
                <div className="flex justify-between">
                  <span>Maandag - Donderdag:</span>
                  <span className="font-semibold">14:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vrijdag - Zaterdag:</span>
                  <span className="font-semibold">12:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zondag:</span>
                  <span className="font-semibold">11:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-lg text-nostalgia-brown italic">
              &ldquo;In de geest van de traditionele kermissen zijn wij altijd 
              aanwezig wanneer het volk samenkomt om te feesten.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-nostalgia-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-nostalgia-gold mb-6">
            Volg Onze Reis
          </h2>
          <p className="font-body text-xl text-white mb-8">
            Blijf op de hoogte van waar onze kraam staat en deel uw 
            kermisherinneringen met ons!
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-nostalgia-gold transition-colors text-3xl">
              📘
            </a>
            <a href="#" className="text-white hover:text-nostalgia-gold transition-colors text-3xl">
              📷
            </a>
            <a href="#" className="text-white hover:text-nostalgia-gold transition-colors text-3xl">
              🐦
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
