
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from '@/components/auth/login-form';
import { SignUpForm } from '@/components/auth/signup-form';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <div className={cn('font-sans', fontPoppins.className)}>
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/images/auth-background.jpg"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
          data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex min-h-screen w-full items-center justify-center p-4">
        <motion.div
          layout
          transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
          className="relative w-full max-w-[512px] h-[480px] bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {isLoginView ? (
              <motion.div
                key="login"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
                className="absolute w-full h-full p-4 md:p-10"
              >
                <LoginForm onToggleView={toggleView} />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
                className="absolute w-full h-full p-4 md:p-10"
              >
                <SignUpForm onToggleView={toggleView} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
