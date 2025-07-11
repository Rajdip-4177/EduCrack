
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import HeroBackground from '@/components/hero-background';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <HeroBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 p-4 text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-200">
          Welcome to EduCrack
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-purple-200/90">
          Your journey to academic excellence starts here. Explore our courses and unlock your potential.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-700 hover:bg-white/90 font-bold"
          >
            <Link href="#classes">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 z-10"
      >
        <Link href="#classes" aria-label="Scroll to classes">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </Link>
      </motion.div>
    </section>
  );
}
