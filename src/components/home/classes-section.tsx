'use client';

import { ClassCard } from '@/components/class-card';
import { classes } from '@/lib/data';

export default function ClassesSection() {
  return (
    <section
      id="classes"
      className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4 bg-background"
    >
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
  );
}
