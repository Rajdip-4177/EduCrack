import Link from 'next/link';
import { GraduationCap, User, Mail, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">EduCrack</span>
        </Link>
        <nav className="flex items-center space-x-2">
           <Button variant="ghost" asChild className="hover:bg-transparent hover:text-accent-foreground">
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" asChild className="hover:bg-transparent hover:text-accent-foreground">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
           <Button variant="ghost" asChild className="hover:bg-transparent hover:text-accent-foreground">
            <Link href="/profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
