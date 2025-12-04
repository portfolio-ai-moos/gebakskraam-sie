import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gebakskraam - Ambachtelijk Gebak met Nostalgische Sfeer',
  description: 'In de traditie van de nostalgische kermis bakken wij dagelijks verse oliebollen, wafels en suikerwerken met de warmte en sfeer van de klassieke kramen uit 1920 en 1950.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <div className="min-h-screen bg-nostalgia-cream">
          {/* Header */}
          <header className="bg-nostalgia-red gold-border shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                {/* Logo */}
                <div className="flex items-center">
                  <Image 
                    src="/img/logo.jpeg" 
                    alt="Gebakskraam Logo" 
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                </div>
                
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <a 
                    href="/" 
                    className="text-white font-serif text-lg hover:text-nostalgia-gold transition-colors duration-300"
                  >
                    Home
                  </a>
                  <a 
                    href="/over-ons" 
                    className="text-white font-serif text-lg hover:text-nostalgia-gold transition-colors duration-300"
                  >
                    Over Ons
                  </a>
                  <a 
                    href="/assortiment" 
                    className="text-white font-serif text-lg hover:text-nostalgia-gold transition-colors duration-300"
                  >
                    Assortiment
                  </a>
                  <a 
                    href="/contact" 
                    className="text-white font-serif text-lg hover:text-nostalgia-gold transition-colors duration-300"
                  >
                    Contact
                  </a>
                </nav>
                
                {/* Mobile menu button */}
                <button className="md:hidden text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-nostalgia-brown text-nostalgia-cream py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="font-serif text-lg mb-2">
                  Gebakskraam - Sinds 1920 de smaak van nostalgie
                </p>
                <p className="text-sm opacity-75">
                  © 2024 Gebakskraam. Alle rechten voorbehouden.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
