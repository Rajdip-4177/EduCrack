'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { signUpUser } from '@/lib/auth';
import { Loader2, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const signupSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
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
            : error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111] py-12 px-4 sm:px-6 lg:px-8">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-sm space-y-6 rounded-2xl bg-[#181818] p-8 shadow-2xl border border-white/10"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Create Account
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/60 text-sm">Name</FormLabel>
                  <FormControl>
                     <div className="relative">
                       <Input
                        placeholder="Your Name"
                        {...field}
                        disabled={isLoading}
                        className="bg-transparent text-white border-0 border-b-2 border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary"
                      />
                      <User className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/60 text-sm">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                       <Input
                        placeholder="you@example.com"
                        {...field}
                        disabled={isLoading}
                        className="bg-transparent text-white border-0 border-b-2 border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary"
                      />
                      <Mail className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/60 text-sm">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                         className="bg-transparent text-white border-0 border-b-2 border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary"
                      />
                       <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/60 text-sm">Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                         className="bg-transparent text-white border-0 border-b-2 border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary"
                      />
                       <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div>
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-white text-black hover:bg-gray-200 transition-colors duration-300" disabled={isLoading}>
                 {isLoading && (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                )}
                Create account
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
