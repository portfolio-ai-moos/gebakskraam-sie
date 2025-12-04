'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

export function PremiumNavigation() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-nostalgia-red/95 via-nostalgia-red to-nostalgia-red/95 backdrop-blur-md border-b border-nostalgia-gold/20 shadow-[0_4px_20px_rgba(122,30,30,0.15)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Premium Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-nostalgia-gold/20 rounded-full blur-lg" />
                <Image 
                  src="/img/logo.jpeg" 
                  alt="Gebakskraam Logo" 
                  width={48}
                  height={48}
                  className="relative h-12 w-auto rounded-full border-2 border-nostalgia-gold/30"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="font-serif text-2xl font-bold text-nostalgia-gold tracking-wide">
                  Gebakskraam
                </h1>
                <p className="font-body text-xs text-nostalgia-cream/80 italic">
                  Sinds 1920
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Premium Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/" 
                    className="group px-6 py-3 font-serif text-lg text-nostalgia-cream hover:text-nostalgia-gold transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nostalgia-gold/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-serif text-lg text-nostalgia-cream hover:text-nostalgia-gold bg-transparent border-none px-6 py-3 transition-all duration-300">
                  Over Ons
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/95 border-2 border-nostalgia-gold/30 shadow-[0_10px_40px_rgba(122,30,30,0.2)] backdrop-blur-md">
                  <div className="grid gap-6 p-8 w-[400px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/over-ons"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-nostalgia-red/10 to-nostalgia-red/5 p-6 no-underline outline-none focus:shadow-md hover:shadow-[0_8px_30px_rgba(122,30,30,0.15)] transition-all duration-300"
                        >
                          <div className="mb-2 mt-1 text-lg font-medium font-serif text-nostalgia-red">
                            Ons Verhaal
                          </div>
                          <p className="text-sm leading-tight text-nostalgia-brown">
                            Ontdek de rijke geschiedenis van ambachtelijk gebak en de traditie van de Nederlandse kermis.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-2">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/over-ons#geschiedenis"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-nostalgia-red/10 focus:bg-nostalgia-red/10"
                        >
                          <div className="text-sm font-medium font-serif text-nostalgia-brown">
                            Geschiedenis
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-nostalgia-brown/70">
                            Van 1920 tot vandaag
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/over-ons#ambacht"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-nostalgia-red/10 focus:bg-nostalgia-red/10"
                        >
                          <div className="text-sm font-medium font-serif text-nostalgia-brown">
                            Ambacht & Materialen
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-nostalgia-brown/70">
                            Traditie in vakmanschap
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-serif text-lg text-nostalgia-cream hover:text-nostalgia-gold bg-transparent border-none px-6 py-3 transition-all duration-300">
                  Assortiment
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-nostalgia-cream to-nostalgia-cream/95 border-2 border-nostalgia-gold/30 shadow-[0_10px_40px_rgba(122,30,30,0.2)] backdrop-blur-md">
                  <div className="grid w-[500px] gap-6 p-8">
                    <div className="grid gap-4">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/assortiment"
                          className="group grid grid-cols-[25px_1fr] items-start gap-4 rounded-md p-3 hover:bg-nostalgia-red/10 transition-all duration-300"
                        >
                          <span className="text-2xl">🍩</span>
                          <div>
                            <div className="text-base font-medium font-serif text-nostalgia-brown">
                              Traditioneel Gebak
                            </div>
                            <p className="text-sm text-nostalgia-brown/70">
                              Oliebollen, krentenbollen en meer
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/assortiment"
                          className="group grid grid-cols-[25px_1fr] items-start gap-4 rounded-md p-3 hover:bg-nostalgia-red/10 transition-all duration-300"
                        >
                          <span className="text-2xl">🧇</span>
                          <div>
                            <div className="text-base font-medium font-serif text-nostalgia-brown">
                              Wafels & Specialiteiten
                            </div>
                            <p className="text-sm text-nostalgia-brown/70">
                              Krokante wafels en seizoensfavorieten
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/assortiment"
                          className="group grid grid-cols-[25px_1fr] items-start gap-4 rounded-md p-3 hover:bg-nostalgia-red/10 transition-all duration-300"
                        >
                          <span className="text-2xl">🍭</span>
                          <div>
                            <div className="text-base font-medium font-serif text-nostalgia-brown">
                              Suikerwerken
                            </div>
                            <p className="text-sm text-nostalgia-brown/70">
                              Traditionele snoepgoed
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="border-t border-nostalgia-gold/20 pt-4">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/assortiment#combos"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-nostalgia-red/10 focus:bg-nostalgia-red/10"
                        >
                          <div className="text-sm font-medium font-serif text-nostalgia-red">
                            Kermis Combo&apos;s
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-nostalgia-brown/70">
                            Complete kermiservaringen voor groepen
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/contact" 
                    className="group px-6 py-3 font-serif text-lg text-nostalgia-cream hover:text-nostalgia-gold transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nostalgia-gold/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="sm"
              className="bg-nostalgia-gold hover:bg-nostalgia-gold/90 text-nostalgia-brown font-serif px-6 py-2 border-2 border-nostalgia-gold hover:border-nostalgia-gold/80 shadow-[0_4px_15px_rgba(217,179,108,0.3)] hover:shadow-[0_6px_25px_rgba(217,179,108,0.4)] transition-all duration-300"
              asChild
            >
              <Link href="/contact">Bestel Nu</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
