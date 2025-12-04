'use client'

import { motion } from 'framer-motion'

export function OrnamentalDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 100"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9B36C" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D9B36C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D9B36C" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Main ornamental curve */}
        <motion.path
          d="M0,50 Q300,20 600,50 T1200,50"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* Crystal lamp ornaments */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <circle cx="300" cy="50" r="4" fill="#D9B36C" opacity="0.6" />
          <circle cx="600" cy="50" r="4" fill="#D9B36C" opacity="0.6" />
          <circle cx="900" cy="50" r="4" fill="#D9B36C" opacity="0.6" />
        </motion.g>
        
        {/* Subtle decorative dots */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <circle cx="150" cy="50" r="2" fill="#D9B36C" />
          <circle cx="450" cy="50" r="2" fill="#D9B36C" />
          <circle cx="750" cy="50" r="2" fill="#D9B36C" />
          <circle cx="1050" cy="50" r="2" fill="#D9B36C" />
        </motion.g>
      </motion.svg>
    </div>
  )
}

export function FluidTransition({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nostalgia-gold/5 to-transparent" />
      <OrnamentalDivider />
    </div>
  )
}
