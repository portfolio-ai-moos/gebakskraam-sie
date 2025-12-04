'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/img/kraam.jpg"
            alt="Premium gebakskraam met nostalgische sfeer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nostalgia-brown/40 via-nostalgia-brown/60 to-nostalgia-brown/80" />
        </motion.div>

        {/* Optimized Floating Particles */}
        <ParticleBackground />

        {/* Premium Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
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
              <span className="text-nostalgia-gold text-sm font-medium">Sinds 1920</span>
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
            </motion.div>

            {/* Premium Title */}
            <motion.h1 
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="block bg-gradient-to-r from-nostalgia-gold via-nostalgia-cream to-nostalgia-gold bg-clip-text text-transparent">
                Gebakskraam
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-nostalgia-cream/90">
                Ambachtelijk Gebak
              </span>
            </motion.h1>

            {/* Premium Description */}
            <motion.p 
              className="font-body text-xl md:text-2xl lg:text-3xl text-nostalgia-cream/90 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              viewport={{ once: true }}
            >
              In de traditie van de nostalgische kermis bakken wij dagelijks verse oliebollen — 
              met dezelfde warmte, geur en uitstraling als de klassieke kramen uit 1920 en 1950.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-nostalgia-gold to-nostalgia-gold/90 hover:from-nostalgia-gold/90 hover:to-nostalgia-gold text-nostalgia-brown font-serif text-lg px-10 py-4 border-2 border-nostalgia-gold/50 hover:border-nostalgia-gold shadow-[0_8px_30px_rgba(217,179,108,0.4)] hover:shadow-[0_12px_40px_rgba(217,179,108,0.5)] transition-all duration-400"
                  asChild
                >
                  <Link href="/assortiment">Assortiment Bekijken</Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-nostalgia-cream/60 text-nostalgia-cream hover:bg-nostalgia-cream hover:text-nostalgia-brown font-serif text-lg px-10 py-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-400"
                  asChild
                >
                  <Link href="/contact">Bestellen voor Oud & Nieuw</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-nostalgia-cream/60 text-sm font-body italic">Scroll verder</span>
              <div className="w-6 h-10 border-2 border-nostalgia-gold/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-nostalgia-gold/60 rounded-full mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Story Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-nostalgia-cream via-nostalgia-cream to-nostalgia-cream/95 relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Premium Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {/* Section Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-nostalgia-red/10 border border-nostalgia-red/20 rounded-full px-4 py-1 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-nostalgia-red text-sm font-serif">◆</span>
                <span className="text-nostalgia-red text-sm font-medium">Onze Erfenis</span>
              </motion.div>

              <h2 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-red mb-8 leading-tight">
                Onze Nostalgische
                <span className="block bg-gradient-to-r from-nostalgia-red to-nostalgia-red/80 bg-clip-text text-transparent">
                  Geschiedenis
                </span>
              </h2>

              <div className="space-y-6 font-body text-lg text-nostalgia-brown leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Onze kraam is geïnspireerd op ambachtelijke gebakkramen die al meer dan een eeuw 
                  over Nederlandse kermissen reisden — herkenbaar aan rood fluweel, gouden decoraties 
                  en kristallen lampen.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Vanaf de jaren &rsquo;20 tot de gouden &rsquo;50 stonden deze kramen symbool voor warmte, 
                  gezelligheid en de onweerstaanbare geur van vers gebak. Vandaag de dag brengen wij 
                  diezelfde sfeer terug met respect voor traditie en aandacht voor kwaliteit.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-nostalgia-red to-nostalgia-red/90 hover:from-nostalgia-red/90 hover:to-nostalgia-red text-white font-serif px-8 py-3 border-2 border-nostalgia-red/50 hover:border-nostalgia-red shadow-[0_6px_25px_rgba(122,30,30,0.3)] hover:shadow-[0_8px_35px_rgba(122,30,30,0.4)] transition-all duration-400"
                  asChild
                >
                  <Link href="/over-ons">Lees Ons Verhaal</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Premium Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Floating Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-nostalgia-gold/20 to-nostalgia-red/20 blur-2xl transform rotate-3" />
                <div className="relative border-4 border-nostalgia-gold/30 p-2 bg-gradient-to-br from-nostalgia-cream/90 to-nostalgia-cream/70 backdrop-blur-sm shadow-[0_20px_60px_rgba(122,30,30,0.15)]">
                  <Image
                    src="/img/piet-henri.png"
                    alt="De mensen achter de kraam"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(217,179,108,0.4)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-3xl">✦</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Premium Products Showcase */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-nostalgia-brown via-nostalgia-brown/95 to-nostalgia-brown relative overflow-hidden" direction="down">
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
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
              <span className="text-nostalgia-gold text-sm font-medium">Ambachtelijk</span>
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-6 leading-tight">
              Ons Ambachtelijke
              <span className="block">Assortiment</span>
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed">
              Volgens traditionele recepten gebakken met de beste ingrediënten, 
              net als op de kermissen van vroeger.
            </p>
          </motion.div>

          {/* Premium Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Oliebol', desc: 'De klassieke kermistraktatie', icon: '��', rating: 5 },
              { name: 'Krentenbol', desc: 'Zoete rozijnen in luchtig beslag', icon: '🍩', rating: 5 },
              { name: 'Wafel', desc: 'Krokante wafels à la oublie', icon: '🧇', rating: 5 },
              { name: 'Oubliewafel', desc: 'Dunne wafels met vanillesmaak', icon: '🧇', rating: 5 },
              { name: 'Appelbeignet', desc: 'Verse appels in zacht beslag', icon: '🍎', rating: 5 },
              { name: 'Suikerwerken', desc: 'Traditionele snoepgoed', icon: '🍭', rating: 5 }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                className="group relative bg-gradient-to-br from-nostalgia-cream/90 to-nostalgia-cream/70 backdrop-blur-sm border-2 border-nostalgia-gold/30 rounded-2xl p-8 shadow-[0_10px_40px_rgba(122,30,30,0.1)] hover:shadow-[0_20px_60px_rgba(122,30,30,0.2)] transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nostalgia-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-nostalgia-red mb-3 group-hover:text-nostalgia-red/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-nostalgia-brown mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-nostalgia-gold text-xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button 
                      size="sm"
                      className="bg-nostalgia-red hover:bg-nostalgia-red/90 text-white font-serif px-6 py-2 border-2 border-nostalgia-red/50 hover:border-nostalgia-red shadow-[0_4px_15px_rgba(122,30,30,0.3)] transition-all duration-300"
                      asChild
                    >
                      <Link href="/assortiment">Bekijk Details</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-nostalgia-gold to-nostalgia-gold/90 hover:from-nostalgia-gold/90 hover:to-nostalgia-gold text-nostalgia-brown font-serif text-lg px-10 py-4 border-2 border-nostalgia-gold/50 hover:border-nostalgia-gold shadow-[0_8px_30px_rgba(217,179,108,0.4)] hover:shadow-[0_12px_40px_rgba(217,179,108,0.5)] transition-all duration-400"
              asChild
            >
              <Link href="/assortiment">Bekijk Volledig Assortiment</Link>
            </Button>
          </motion.div>
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
              Ervaar de
              <span className="block">Nostalgie</span>
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Kom langs bij onze kraam en proef de authenticiteit van traditioneel ambachtelijk gebak, 
              bereid met passie en respect voor het vak.
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
