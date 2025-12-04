import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import { PremiumNavigation } from '@/components/PremiumNavigation'

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
          <PremiumNavigation />
          <main className="pt-20">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-gradient-to-r from-nostalgia-brown via-nostalgia-brown/95 to-nostalgia-brown border-t border-nostalgia-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center space-y-4">
                <p className="font-serif text-lg text-nostalgia-gold">
                  Gebakskraam - Sinds 1920 de smaak van nostalgie
                </p>
                <p className="font-body text-sm text-nostalgia-cream/70">
                  &copy; 2024 Gebakskraam. Alle rechten voorbehouden.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
