'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventType: 'kermis'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      eventType: 'kermis'
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      title: 'Adres',
      content: 'Kerkstraat 123\n1234 AB Nostalgia',
      icon: '📍'
    },
    {
      title: 'Telefoon',
      content: '+31 6 1234 5678',
      icon: '📞'
    },
    {
      title: 'Email',
      content: 'info@gebakskraam.nl',
      icon: '✉️'
    },
    {
      title: 'Openingstijden',
      content: 'Vrijdag & Zaterdag\n10:00 - 22:00',
      icon: '��'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/img/kraam.jpg"
            alt="Contact - Vind onze nostalgische kraam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nostalgia-brown/60 via-nostalgia-brown/70 to-nostalgia-brown/80" />
        </motion.div>
        
        {/* Floating Particles */}
        <ParticleBackground />

        <AnimatedSection className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Luxury Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-nostalgia-gold/20 backdrop-blur-md border border-nostalgia-gold/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
              <span className="text-nostalgia-gold text-sm font-medium">Bereikbaar</span>
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
            </motion.div>

            <motion.h1 
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-nostalgia-gold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h1>
            <motion.p 
              className="font-body text-xl md:text-2xl text-nostalgia-cream/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Vind onze kraam en proef de authenticiteit van traditioneel ambachtelijk gebak
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Premium Contact Info Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-nostalgia-cream via-nostalgia-cream to-nostalgia-cream/95 relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D9B36C 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #D9B36C 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-6">
              Kom langs bij onze Kraam
            </h2>
            <p className="font-body text-xl text-nostalgia-brown max-w-3xl mx-auto leading-relaxed">
              Wij staan klaar om u te verwelkomen met de geur van vers gebak en de warme sfeer 
              van de traditionele Nederlandse kermis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-2xl hover:shadow-[0_15px_50px_rgba(217,179,108,0.2)] transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(217,179,108,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-nostalgia-brown whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Premium Contact Form Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-nostalgia-brown via-nostalgia-brown/95 to-nostalgia-brown relative overflow-hidden" direction="down">
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #D9B36C 80px, transparent 80px),
                             radial-gradient(circle at 70% 50%, #D9B36C 40px, transparent 40px)`,
            backgroundSize: '300px 200px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-nostalgia-gold/20 backdrop-blur-md border border-nostalgia-gold/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
              <span className="text-nostalgia-gold text-sm font-medium">Evenementen</span>
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-gold mb-6">
              Bestel voor uw Evenement
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed">
              Plan uw bestelling voor kermis, festival of particulier evenement. 
              Wij verzorgen verse ambachtelijke producten op locatie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-nostalgia-cream/5 backdrop-blur-md border border-nostalgia-gold/20 p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block font-serif text-lg text-nostalgia-gold mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-lg focus:border-nostalgia-gold focus:outline-none focus:ring-2 focus:ring-nostalgia-gold/20 transition-all font-body text-nostalgia-brown placeholder:text-nostalgia-brown/50"
                      placeholder="Uw naam"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block font-serif text-lg text-nostalgia-gold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-lg focus:border-nostalgia-gold focus:outline-none focus:ring-2 focus:ring-nostalgia-gold/20 transition-all font-body text-nostalgia-brown placeholder:text-nostalgia-brown/50"
                      placeholder="uw@email.nl"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-serif text-lg text-nostalgia-gold mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-lg focus:border-nostalgia-gold focus:outline-none focus:ring-2 focus:ring-nostalgia-gold/20 transition-all font-body text-nostalgia-brown placeholder:text-nostalgia-brown/50"
                    placeholder="+31 6 1234 5678"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-serif text-lg text-nostalgia-gold mb-2">
                    Type Evenement *
                  </label>
                  <div className="relative">
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-lg focus:border-nostalgia-gold focus:outline-none focus:ring-2 focus:ring-nostalgia-gold/20 transition-all font-body text-nostalgia-brown appearance-none"
                    >
                      <option value="kermis">Kermis</option>
                      <option value="festival">Festival</option>
                      <option value="bedrijfsevenement">Bedrijfsevenement</option>
                      <option value="particulier">Particulier</option>
                      <option value="braderie">Braderie</option>
                      <option value="overig">Overig</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-nostalgia-brown">
                      ▼
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-serif text-lg text-nostalgia-gold mb-2">
                    Bericht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-nostalgia-cream/90 border-2 border-nostalgia-gold/30 rounded-lg focus:border-nostalgia-gold focus:outline-none focus:ring-2 focus:ring-nostalgia-gold/20 transition-all font-body text-nostalgia-brown resize-none placeholder:text-nostalgia-brown/50"
                    placeholder="Vertel ons meer over uw evenement en wensen..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-nostalgia-gold to-nostalgia-gold/90 hover:from-nostalgia-gold/90 hover:to-nostalgia-gold text-nostalgia-brown border-2 border-nostalgia-gold/50 hover:border-nostalgia-gold shadow-[0_8px_30px_rgba(217,179,108,0.4)] hover:shadow-[0_12px_40px_rgba(217,179,108,0.5)] transition-all duration-400 font-serif text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur Bericht'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/90 p-8 border-2 border-nostalgia-gold/30 rounded-2xl shadow-[0_10px_40px_rgba(122,30,30,0.15)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-nostalgia-red to-nostalgia-red/80 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(122,30,30,0.3)]">
                    <span className="text-xl">🏆</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-nostalgia-red">
                    Onze Specialiteiten
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Oliebollen - De klassieke kermistraktatie',
                    'Krentenbollen - Zoet en luchtig',
                    'Wafels - Krokant en ambachtelijk',
                    'Suikerwerken - Voor de zoete trek',
                    'Seizoensspecialiteiten - Varies per periode'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-nostalgia-red/5 transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-nostalgia-gold text-xl">◆</span>
                      <span className="font-body text-nostalgia-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-nostalgia-red/10 to-nostalgia-red/5 p-8 border-2 border-nostalgia-red/30 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(217,179,108,0.3)]">
                    <span className="text-xl">ℹ️</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-nostalgia-red">
                    Bestel Informatie
                  </h3>
                </div>
                <div className="space-y-4 font-body text-nostalgia-brown">
                  <div className="flex justify-between border-b border-nostalgia-red/20 pb-2">
                    <span className="font-bold">Minimum bestelling:</span>
                    <span>20 stuks</span>
                  </div>
                  <div className="flex justify-between border-b border-nostalgia-red/20 pb-2">
                    <span className="font-bold">Bezorging:</span>
                    <span>Heel Nederland</span>
                  </div>
                  <div className="flex justify-between border-b border-nostalgia-red/20 pb-2">
                    <span className="font-bold">Voorbereiding:</span>
                    <span>48 uur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Betaling:</span>
                    <span>Contant of factuur</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Premium CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-nostalgia-red via-nostalgia-red/95 to-nostalgia-red/90 relative overflow-hidden" direction="up">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #D9B36C 60px, transparent 60px),
                             radial-gradient(circle at 70% 50%, #D9B36C 30px, transparent 30px)`,
            backgroundSize: '200px 100px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-nostalgia-gold mb-6">
              Wacht niet te Lang
            </h2>
            <p className="font-body text-xl text-nostalgia-cream mb-8 max-w-3xl mx-auto leading-relaxed">
              Onze kalender vult snel, zeker in het hoogseizoen. 
              Plan uw bestelling tijdig om teleurstelling te voorkomen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-nostalgia-gold to-nostalgia-gold/90 hover:from-nostalgia-gold/90 hover:to-nostalgia-gold text-nostalgia-brown font-serif text-lg px-10 py-4 border-2 border-nostalgia-gold/50 hover:border-nostalgia-gold shadow-[0_8px_30px_rgba(217,179,108,0.4)] hover:shadow-[0_12px_40px_rgba(217,179,108,0.5)] transition-all duration-400"
                  asChild
                >
                  <a href="#contact-form">Direct Bestellen</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-nostalgia-cream/60 text-nostalgia-cream hover:bg-nostalgia-cream hover:text-nostalgia-red font-serif text-lg px-10 py-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-400"
                  asChild
                >
                  <Link href="/assortiment">Bekijk Assortiment</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
