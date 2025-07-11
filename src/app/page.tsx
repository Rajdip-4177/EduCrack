import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { HeroSection } from '@/components/home/hero-section';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicClassesSection = dynamic(
  () => import('../components/home/classes-section'),
  { 
    loading: () => (
      <section className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4 bg-background">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </section>
    )
  }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <DynamicClassesSection />
    </>
  );
}
