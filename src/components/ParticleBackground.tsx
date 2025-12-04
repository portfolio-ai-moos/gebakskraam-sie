'use client'

import { motion } from 'framer-motion'

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-[-100%]"
        animate={{
          transform: ["translate(0, 0)", "translate(50px, 50px)"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(217,179,108,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 0% 0%, rgba(217,179,108,0.05) 0%, transparent 50%)`,
          backgroundSize: '400px 400px',
          willChange: 'transform'
        }}
      />
    </div>
  )
}
