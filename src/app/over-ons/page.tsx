'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

const timeline = [
  {
    year: '1920',
    title: 'Het Begin',
    description: 'De eerste ambachtelijke gebakkramen verschijnen op Nederlandse kermissen. Robuuste houten constructies met eenvoudige decoratie en de focus op puur vakmanschap.',
    icon: '🎪'
  },
  {
    year: '1950',
    title: 'De Gouden Eeuw',
    description: 'De bloeiperiode met rood fluweel, kristallen lampen en gouden decoraties. De kramen worden ware pronkstukken en trekken duizenden bezoekers.',
    icon: '✨'
  },
  {
    year: '1999',
    title: 'De Renaissance',
    description: 'Een herontdekking van de traditionele bouwstijl met moderne technieken. Nieuwe kramen gebouwd in klassieke stijl, maar met hedendaagse hygiënestandaarden.',
    icon: '🏗️'
  },
  {
    year: 'Vandaag',
    title: 'Onze Kraam',
    description: 'Wij brengen de hele geschiedenis samen in één authentieke kraam. Met respect voor alle periodes brengen wij de smaak en sfeer van de nostalgische kermis terug naar moderne evenementen.',
    icon: '🎡'
  }
]

export default function OverOns() {
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
            alt="Onze nostalgische gebakskraam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nostalgia-brown/60 via-nostalgia-brown/70 to-nostalgia-brown/80" />
        </motion.div>
        
        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(217,179,108,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(217,179,108,0.1) 0%, transparent 50%)`,
            backgroundSize: '300px 300px, 400px 400px'
          }}
        />

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
              <span className="text-nostalgia-gold text-sm font-medium">Onze Geschiedenis</span>
              <span className="text-nostalgia-gold text-sm font-serif">✦</span>
            </motion.div>

            <motion.h1 
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-nostalgia-gold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Over Ons
            </motion.h1>
            <motion.p 
              className="font-body text-xl md:text-2xl text-nostalgia-cream/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              De geschiedenis van ambachtelijk gebak en nostalgische kermistraditie
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Premium Story Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-nostalgia-cream via-nostalgia-cream to-nostalgia-cream/95 relative overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-red mb-8 leading-tight">
                Onze
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
                  De traditie van de nostalgische gebakkramen begon in de vroege jaren &rsquo;20, 
                  toen ambachtslieden door het hele land reisden om kermissen te voorzien 
                  van vers gebak. Deze kramen waren meer dan alleen verkooppunten — ze waren 
                  sociale ontmoetingsplaatsen waar de geur van verse oliebollen en wafels 
                  mensen samenbracht.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Vandaag de dag staan wij in diezelfde traditie — met respect voor het vakmanschap 
                  van toen en de kwaliteitseisen van nu. Elk product dat wij bakken draagt de 
                  ziel van meer dan een eeuw kermishistorie.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-nostalgia-gold/20 to-nostalgia-red/20 blur-2xl transform rotate-3" />
                <div className="relative border-4 border-nostalgia-gold/30 p-2 bg-gradient-to-br from-nostalgia-cream/90 to-nostalgia-cream/70 backdrop-blur-sm shadow-[0_20px_60px_rgba(122,30,30,0.15)]">
                  <Image
                    src="/img/piet-henri.png"
                    alt="De mensen achter de kraam"
                    width={400}
                    height={500}
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

      {/* Premium Timeline Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-nostalgia-brown via-nostalgia-brown/95 to-nostalgia-brown relative overflow-hidden">
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
              <span className="text-nostalgia-gold text-sm font-medium">Tijdlijn</span>
              <span className="text-nostalgia-gold text-sm font-serif">★</span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-nostalgia-gold mb-6">
              Een Reis door de Tijd
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 max-w-3xl mx-auto leading-relaxed">
              Van de eerste houten kramen tot de moderne nostalgische beleving.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-nostalgia-gold/30 to-transparent hidden md:block" />
            
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Side */}
                  <motion.div 
                    className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className={`inline-flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                      <span className="text-6xl md:text-7xl font-serif font-bold text-nostalgia-gold/20 mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-3xl font-bold text-nostalgia-gold mb-4">
                        {item.title}
                      </h3>
                      <p className="font-body text-lg text-nostalgia-cream/80 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Marker */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-nostalgia-gold to-nostalgia-gold/80 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(217,179,108,0.4)] border-4 border-nostalgia-brown">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </motion.div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nostalgia-gold mb-6">
              Ervaar Onze Ambacht
            </h2>
            <p className="font-body text-xl text-nostalgia-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Kom langs en proef de geschiedenis. Elke hap is een reis terug naar 
              de gouden tijd van de Nederlandse kermis.
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
                  <Link href="/assortiment">Bekijk Ons Assortiment</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
