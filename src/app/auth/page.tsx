
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';
import { SignUpForm } from '@/components/auth/signup-form';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className={`min-h-screen w-full relative ${poppins.className}`}> {/* Use Poppins font globally */}
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/Images/auth-background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Lighter overlay */}
      </div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-12 py-6 absolute top-0 left-0 z-10">
        <div className="text-white text-2xl md:text-3xl font-bold tracking-wide">Educrack<span className="text-white"> .</span></div>
        <ul className="hidden md:flex gap-10 text-white font-medium text-lg">
          <li><a href="#" className="link border-b-2 border-transparent hover:border-white transition-all">Home</a></li>
          <li><a href="#" className="link border-b-2 border-transparent hover:border-white transition-all">Blog</a></li>
          <li><a href="#" className="link border-b-2 border-transparent hover:border-white transition-all">Services</a></li>
          <li><a href="#" className="link border-b-2 border-transparent hover:border-white transition-all">About</a></li>
        </ul>
        <div className="flex gap-4">
          <button
            className={`btn px-8 py-2 rounded-full font-medium text-base md:text-lg transition-all ${isLoginView ? 'bg-white/70 text-black' : 'bg-white/40 text-white hover:bg-white/60'}`}
            onClick={() => setIsLoginView(true)}
          >
            Sign In
          </button>
          <button
            className={`btn px-8 py-2 rounded-full font-medium text-base md:text-lg transition-all ${!isLoginView ? 'bg-white/70 text-black' : 'bg-white/40 text-white hover:bg-white/60'}`}
            onClick={() => setIsLoginView(false)}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Form Box (no glassmorphism) */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-xl mt-24 p-0 flex flex-col items-center">
          {isLoginView ? (
            <LoginForm onToggleView={() => setIsLoginView(false)} />
          ) : (
            <SignUpForm onToggleView={() => setIsLoginView(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
