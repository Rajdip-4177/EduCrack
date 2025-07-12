
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { signUpUser } from '@/lib/auth';
import { Loader2, User, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

const signupSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

interface SignUpFormProps {
  onToggleView: () => void;
}

export function SignUpForm({ onToggleView }: SignUpFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    try {
      await signUpUser(data.email, data.password, data.name);
      toast({
        title: 'Account Created!',
        description: "We've created your account for you.",
      });
      router.push('/dashboard');
      router.refresh();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign Up Failed',
        description:
          error.code === 'auth/email-already-in-use'
            ? 'This email is already registered.'
            : 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center font-[Poppins,sans-serif]">
      <div className="top text-center mb-2">
        <span className="text-white text-base font-normal font-[Poppins,sans-serif]">
          Have an account?{' '}
          <button onClick={onToggleView} className="font-semibold hover:underline font-[Poppins,sans-serif]">
            Login
          </button>
        </span>
        <header className="text-white text-4xl font-bold mt-2 font-[Poppins,sans-serif]">Sign Up</header>
      </div>
      <form className="space-y-4 w-full mt-6">
        <div className="flex gap-4 w-full">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Firstname"
              className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg w-full"
              disabled={isLoading}
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Lastname"
              className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg w-full"
              disabled={isLoading}
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Email"
            className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg w-full"
            disabled={isLoading}
          />
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
        </div>
        <div className="relative w-full">
          <input
            type="password"
            placeholder="Password"
            className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg w-full"
            disabled={isLoading}
          />
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
        </div>
        <button type="submit" className="submit w-full h-11 text-lg font-semibold bg-white text-black rounded-full hover:bg-white/80 flex items-center justify-center font-[Poppins,sans-serif] mt-2" disabled={isLoading}>
          Register
        </button>
        <div className="two-col flex justify-between items-center text-xs mt-2 text-white font-[Poppins,sans-serif] w-full">
          <div className="one flex items-center gap-2">
            <input type="checkbox" id="register-check" className="accent-primary" />
            <label htmlFor="register-check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="#" className="hover:underline">Terms & conditions</a></label>
          </div>
        </div>
      </form>
    </div>
  );
}

