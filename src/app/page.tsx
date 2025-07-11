import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroBackground from '@/components/hero-background';
import { ClassCard } from '@/components/class-card';
import { classes } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 p-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-200">
            Welcome to EduCrack
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-purple-200/90">
            Your journey to academic excellence starts here. Explore our courses and unlock your potential.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              <Link href="#classes">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="classes" className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Choose Your Class
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your academic path to access tailored notes, Q&amp;As, and tests designed for your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <ClassCard key={cls.id} {...cls} />
          ))}
        </div>
      </section>
    </div>
  );
}
