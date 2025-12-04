'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 50 }
      case 'down': return { opacity: 0, y: -50 }
      case 'left': return { opacity: 0, x: 50 }
      case 'right': return { opacity: 0, x: -50 }
      default: return { opacity: 0, y: 50 }
    }
  }

  return (
    <motion.section
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Optimized cubic-bezier
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.section>
  )
}
