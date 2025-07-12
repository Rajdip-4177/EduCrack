
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
    <div className="flex flex-col text-white">
      <div className="text-center mb-4">
        <p className="text-sm mb-2">
          Have an account?{' '}
          <button onClick={onToggleView} className="font-semibold hover:underline">
            Login
          </button>
        </p>
        <h2 className="text-3xl font-bold">Sign Up</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25"
                      disabled={isLoading}
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-xs pl-4" />
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
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25"
                      disabled={isLoading}
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-xs pl-4" />
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
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25"
                      disabled={isLoading}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-xs pl-4" />
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
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                      className="bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25"
                      disabled={isLoading}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-xs pl-4" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-11 text-base font-semibold bg-white text-black rounded-full hover:bg-white/80" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            Register
          </Button>

           <div className="text-xs text-center text-white/80 mt-2">
             By registering, you agree to the <Link href="#" className="font-semibold hover:underline">Terms & Conditions</Link>.
          </div>

        </form>
      </Form>
    </div>
  );
}

