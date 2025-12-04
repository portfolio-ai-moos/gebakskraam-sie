'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface ProductCardProps {
  name: string
  description: string
  price: string
  category: string
  ingredients: string[]
  history: string
  rating: number
  icon: ReactNode
  delay?: number
}

export function ProductCard({ 
  name, 
  description, 
  price, 
  category, 
  ingredients, 
  history, 
  rating, 
  icon,
  delay = 0 
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Card className="group overflow-hidden border-2 border-nostalgia-gold/30 bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/90 backdrop-blur-sm hover:shadow-[0_20px_40px_rgba(122,30,30,0.15)] transition-all duration-300">
        {/* Icon Section with Gradient Background */}
        <div className="relative h-32 bg-gradient-to-br from-nostalgia-red/90 to-nostalgia-red/70 overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 h-full flex items-center justify-center text-6xl text-nostalgia-gold">
            {icon}
          </div>
          {/* Subtle animated pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, transparent 30%, rgba(217, 179, 108, 0.3) 31%)`,
            }}
          />
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="font-serif text-2xl text-nostalgia-red group-hover:text-nostalgia-red/80 transition-colors">
              {name}
            </CardTitle>
            <span className="font-serif text-xl text-nostalgia-gold font-semibold bg-nostalgia-red/10 px-3 py-1 rounded-full">
              {price}
            </span>
          </div>
          <span className="inline-block bg-nostalgia-gold/20 text-nostalgia-brown px-3 py-1 rounded-full text-sm font-body border border-nostalgia-gold/30">
            {category}
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="font-body text-nostalgia-brown leading-relaxed">
            {description}
          </p>

          {/* Ingredients */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-nostalgia-red mb-2">
              Ingrediënten
            </h4>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ingredient, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm font-body text-nostalgia-brown bg-nostalgia-cream px-2 py-1 rounded border border-nostalgia-gold/30 hover:bg-nostalgia-gold/20 transition-colors"
                >
                  {ingredient}
                </motion.span>
              ))}
            </div>
          </div>

          {/* History */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-nostalgia-red mb-2">
              Historie
            </h4>
            <p className="font-body text-sm text-nostalgia-brown italic leading-relaxed">
              {history}
            </p>
          </div>

          {/* Rating and CTA */}
          <div className="flex justify-between items-center pt-2">
            <motion.div 
              className="text-nostalgia-gold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.5 }}
              viewport={{ once: true }}
            >
              {"★".repeat(rating)}
            </motion.div>
            <Button 
              className="bg-nostalgia-red hover:bg-nostalgia-red/90 text-white border-2 border-nostalgia-red hover:border-nostalgia-red/80 hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              Bestellen
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
