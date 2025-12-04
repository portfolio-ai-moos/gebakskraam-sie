'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ParticleBackground } from '@/components/ParticleBackground'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

const products = [
  {
    name: 'Oliebol',
    description: 'De klassieke kermistraktatie, knapperig van buiten en zacht van binnen. Gemaakt volgens het originele recept uit 1920.',
    price: '€2,50',
    category: 'Traditioneel Gebak',
    ingredients: ['Bloem', 'Rozijnen', 'Gist', 'Melk', 'Eieren'],
    history: 'De oliebol is al sinds de Middeleeuwen een Nederlandse delicatesse, maar werd pas echt populair op de kermissen van de jaren &rsquo;20.',
    rating: 5,
    icon: '🍩'
  },
  {
    name: 'Krentenbol',
    description: 'Zoete rozijnen in een luchtig beslag, een ware delicatesse die al generaties lang wordt gewaardeerd.',
    price: '€2,75',
    category: 'Traditioneel Gebak',
    ingredients: ['Bloem', 'Krenten', 'Gist', 'Boter', 'Suiker'],
    history: 'In de jaren &rsquo;50 was de krentenbol het summum van luxe op de kermis, vaak geserveerd met een poedersuikerlaagje.',
    rating: 5,
    icon: '🍩'
  },
  {
    name: 'Wafel',
    description: 'Krokante wafels à la oublie, gebakken in authentieke ijzers volgens traditioneel recept.',
    price: '€3,00',
    category: 'Wafels',
    ingredients: ['Bloem', 'Boter', 'Eieren', 'Suiker', 'Vanille'],
    history: 'Oubliewafels komen oorspronkelijk uit de Middeleeuwen en werden op kermissen geserveerd als delicatesse voor de rijke stand.',
    rating: 5,
    icon: '🧇'
  },
  {
    name: 'Oubliewafel',
    description: 'Dunne, knapperige wafels met een subtiele vanillesmaak. Een verfijnde traktatie uit de oude tijd.',
    price: '€3,25',
    category: 'Wafels',
    ingredients: ['Rijstmeel', 'Boter', 'Suiker', 'Vanille', 'Eieren'],
    history: 'De dunne oubliewafel was in de jaren &rsquo;20 een symbool van verfijning en werd vaak geserveerd bij speciale gelegenheden.',
    rating: 5,
    icon: '🧇'
  },
  {
    name: 'Appelbeignet',
    description: 'Verse appels in een zacht beslag, bestrooid met poedersuiker. Een seizoensfavoriet.',
    price: '€3,50',
    category: 'Beignets',
    ingredients: ['Appels', 'Bloem', 'Eieren', 'Melk', 'Kaneel'],
    history: 'Appelbeignets werden in de herfstmaanden populair op de kermissen, als viering van de oogst.',
    rating: 5,
    icon: '🍎'
  },
  {
    name: 'Suikerwerken',
    description: 'Traditionele snoepgoed zoals op de kermissen van weleer. Handgemaakt met liefde en vakmanschap.',
    price: '€1,50',
    category: 'Zoetigheid',
    ingredients: ['Suiker', 'Glucose', 'Kleurstoffen', 'Aromen', 'Citroenzuur'],
    history: 'Suikerspinnen en andere suikerwerken waren in de jaren &rsquo;50 de grote trekpleisters voor kinderen op de kermis.',
    rating: 5,
    icon: '🍭'
  },
  {
    name: 'Luxe Oliebol',
    description: 'Onze premium oliebol met extra rozijnen en een vleugje kaneel, geserveerd met warme kersencompote.',
    price: '€4,00',
    category: 'Specialiteiten',
    ingredients: ['Bloem', 'Extra Rozijnen', 'Kaneel', 'Gist', 'Melk', 'Kersen'],
    history: 'Een moderne interpretatie van de klassieke oliebol, geïnspireerd op de luxere versies uit de jaren &rsquo;30.',
    rating: 5,
    icon: '⭐'
  },
  {
    name: 'Honingwafel',
    description: 'Zachte wafel met een vleugje honing, gebakken in een speciaal ijzer voor een unieke textuur.',
    price: '€3,75',
    category: 'Wafels',
    ingredients: ['Bloem', 'Honing', 'Boter', 'Eieren', 'Specerijen'],
    history: 'Honingwafels waren een specialiteit uit de noordelijke provincies, later populair geworden op kermissen.',
    rating: 5,
    icon: '🧇'
  }
]

const categories = ['Alle Producten', 'Traditioneel Gebak', 'Wafels', 'Specialiteiten', 'Beignets', 'Zoetigheid']

export default function Assortiment() {
  const [selectedCategory, setSelectedCategory] = useState('Alle Producten')

  const filteredProducts = selectedCategory === 'Alle Producten' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

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
            alt="Ons assortiment ambachtelijk gebak"
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
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
              <span className="text-nostalgia-gold text-sm font-medium">Ambachtelijk</span>
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
            </motion.div>

            <motion.h1 
              className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Ons Assortiment
            </motion.h1>
            <motion.p 
              className="font-body text-xl md:text-2xl text-nostalgia-cream/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Ambachtelijk gebak volgens traditionele recepten uit 1920-1950
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Premium Filter Section */}
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
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group px-8 py-4 font-serif text-lg border-2 transition-all duration-500 relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-nostalgia-red to-nostalgia-red/90 text-white border-nostalgia-red shadow-[0_8px_30px_rgba(122,30,30,0.3)] scale-105'
                    : 'bg-nostalgia-cream text-nostalgia-brown border-nostalgia-gold/30 hover:border-nostalgia-gold hover:bg-nostalgia-gold/10'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-nostalgia-gold/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            layout
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-nostalgia-red/10 border border-nostalgia-red/20 rounded-full px-6 py-3">
                <span className="text-nostalgia-red text-xl">🍩</span>
                <p className="font-body text-lg text-nostalgia-brown">
                  Geen producten gevonden in deze categorie.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* Premium Specialiteiten Section */}
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
            className="text-center mb-20"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
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
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
              <span className="text-nostalgia-gold text-sm font-medium">Kermis Specialiteiten</span>
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-6 leading-tight">
              Seizoensgebonden
              <span className="block">Specialiteiten</span>
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed">
              Proef onze seizoensgebonden specialiteiten, geïnspireerd op de authentieke kermistradities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/90 p-10 border-2 border-nostalgia-gold/30 rounded-2xl shadow-[0_15px_50px_rgba(122,30,30,0.15)] hover:shadow-[0_25px_70px_rgba(122,30,30,0.25)] transition-all duration-500">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nostalgia-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(217,179,108,0.3)]">
                      <span className="text-2xl">🎪</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-nostalgia-red">
                      Kermis Combo
                    </h3>
                  </div>
                  <p className="font-body text-lg text-nostalgia-brown mb-8 leading-relaxed italic">
                    &ldquo;Een complete kermiservaring: oliebol, krentenbol en wafel, geserveerd met traditionele poedersuiker en een kop warme chocolademelk.&rdquo;
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-3xl text-nostalgia-gold font-bold">€8,50</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="bg-gradient-to-r from-nostalgia-red to-nostalgia-red/90 hover:from-nostalgia-red/90 hover:to-nostalgia-red text-white font-serif px-8 py-3 border-2 border-nostalgia-red/50 hover:border-nostalgia-red shadow-[0_6px_25px_rgba(122,30,30,0.3)] hover:shadow-[0_8px_35px_rgba(122,30,30,0.4)] transition-all duration-400"
                        asChild
                      >
                        <Link href="/contact">Bestel Combo</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/90 p-10 border-2 border-nostalgia-gold/30 rounded-2xl shadow-[0_15px_50px_rgba(122,30,30,0.15)] hover:shadow-[0_25px_70px_rgba(122,30,30,0.25)] transition-all duration-500">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nostalgia-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(217,179,108,0.3)]">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-nostalgia-red">
                      Familie Pakket
                    </h3>
                  </div>
                  <p className="font-body text-lg text-nostalgia-brown mb-8 leading-relaxed italic">
                    &ldquo;Voor het hele gezin: 4 oliebollen, 4 krentenbollen en 2 wafels, perfect om te delen op een dagje kermis.&rdquo;
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-3xl text-nostalgia-gold font-bold">€22,00</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="bg-gradient-to-r from-nostalgia-red to-nostalgia-red/90 hover:from-nostalgia-red/90 hover:to-nostalgia-red text-white font-serif px-8 py-3 border-2 border-nostalgia-red/50 hover:border-nostalgia-red shadow-[0_6px_25px_rgba(122,30,30,0.3)] hover:shadow-[0_8px_35px_rgba(122,30,30,0.4)] transition-all duration-400"
                        asChild
                      >
                        <Link href="/contact">Bestel Pakket</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Premium CTA Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-nostalgia-red via-nostalgia-red/95 to-nostalgia-red/90 relative overflow-hidden" direction="up">
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
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* CTA Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-nostalgia-gold/20 backdrop-blur-md border border-nostalgia-gold/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
              <span className="text-nostalgia-gold text-sm font-medium">Proef de Traditie</span>
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-8 leading-tight">
              Proef de
              <span className="block">Traditie</span>
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Kom langs bij onze kraam en ervaar de authentieke smaken van de Nederlandse kermis. 
              Al ons gebak wordt dagelijks vers bereid.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-nostalgia-gold to-nostalgia-gold/90 hover:from-nostalgia-gold/90 hover:to-nostalgia-gold text-nostalgia-brown font-serif text-lg px-10 py-4 border-2 border-nostalgia-gold/50 hover:border-nostalgia-gold shadow-[0_8px_30px_rgba(217,179,108,0.4)] hover:shadow-[0_12px_40px_rgba(217,179,108,0.5)] transition-all duration-400"
                  asChild
                >
                  <Link href="/contact">Vind Onze Kraam</Link>
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
                  <Link href="/over-ons">Lees Ons Verhaal</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
