
'use client';

import Link from 'next/link';
import { GraduationCap, User, Mail, LayoutDashboard, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { useIsMobile } from '@/hooks/use-mobile';
import * as React from 'react';

function NavLinks() {
  return (
    <>
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
    </>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4 py-8">
          <SheetClose asChild>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-xl">EduCrack</span>
            </Link>
          </SheetClose>
          <div className="flex flex-col gap-2">
             <SheetClose asChild><NavLinks /></SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">EduCrack</span>
        </Link>
        {isMobile ? (
          <MobileNav />
        ) : (
          <nav className="flex items-center space-x-2">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
