
'use client';

import Link from 'next/link';
import { GraduationCap, User, Mail, LayoutDashboard, Menu, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/auth-context';
import { logoutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import * as React from 'react';

function NavLinks() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast({ title: "Logged out successfully." });
      router.push('/');
      router.refresh();
    } catch (error) {
      toast({ variant: 'destructive', title: "Logout failed." });
    }
  };

  return (
    <>
      {user ? (
        <>
          <Button variant="ghost" asChild className="hover:bg-transparent hover:text-accent-foreground justify-start">
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
           <Button variant="ghost" onClick={handleLogout} className="hover:bg-transparent hover:text-accent-foreground justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="ghost" asChild className="hover:bg-transparent hover:text-accent-foreground justify-start">
            <Link href="/auth">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/auth">Sign Up</Link>
          </Button>
        </>
      )}
    </>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetClose asChild>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-xl">EduCrack</span>
            </Link>
          </SheetClose>
        <div className="flex flex-col gap-2">
           <NavLinks />
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
        <div className="hidden md:flex items-center space-x-2">
            <NavLinks />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
