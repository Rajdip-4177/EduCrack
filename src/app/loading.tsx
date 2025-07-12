import { GraduationCap } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-primary/50" />
        <div className="absolute h-16 w-16 animate-pulse rounded-full bg-primary/70" />
        <GraduationCap className="relative h-12 w-12 text-primary-foreground" />
      </div>
      <p className="mt-8 text-lg font-medium text-muted-foreground animate-pulse">
        Loading your learning experience...
      </p>
    </div>
  );
}
