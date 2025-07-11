'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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
     <div className="relative flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Image
        src="https://ide-media-prod.a.run.app/api/medias/6a6358c3-e117-4933-9118-20427c30d22a"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-70"
        data-ai-hint="abstract art trees"
      />
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-white/10 p-10 shadow-2xl backdrop-blur-lg">
        <div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-white font-headline">
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
                  <FormControl>
                     <div className="relative">
                       <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                       <Input
                        placeholder="Name"
                        {...field}
                        disabled={isLoading}
                        className="h-12 rounded-lg border-b-2 border-white/20 bg-transparent pl-12 text-white placeholder:text-gray-300 focus:border-primary focus:ring-0"
                      />
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
                  <FormControl>
                    <div className="relative">
                       <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                       <Input
                        placeholder="Email"
                        {...field}
                        disabled={isLoading}
                        className="h-12 rounded-lg border-b-2 border-white/20 bg-transparent pl-12 text-white placeholder:text-gray-300 focus:border-primary focus:ring-0"
                      />
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
                  <FormControl>
                    <div className="relative">
                       <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...field}
                        disabled={isLoading}
                         className="h-12 rounded-lg border-b-2 border-white/20 bg-transparent pl-12 text-white placeholder:text-gray-300 focus:border-primary focus:ring-0"
                      />
                       <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-300" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-300" />
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
                  <FormControl>
                    <div className="relative">
                       <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        {...field}
                        disabled={isLoading}
                         className="h-12 rounded-lg border-b-2 border-white/20 bg-transparent pl-12 text-white placeholder:text-gray-300 focus:border-primary focus:ring-0"
                      />
                       <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-300" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-300" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div>
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-white text-black hover:bg-gray-200" disabled={isLoading}>
                 {isLoading && (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                )}
                Create account
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-center text-sm text-gray-300">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
