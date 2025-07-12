
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
import { loginUser } from '@/lib/auth';
import { Loader2, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onToggleView: () => void;
}

export function LoginForm({ onToggleView }: LoginFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      await loginUser(data.email, data.password);
      toast({
        title: 'Success!',
        description: "You've been logged in.",
      });
      router.push('/dashboard');
      router.refresh();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description:
          error.code === 'auth/invalid-credential'
            ? 'Invalid email or password. Please try again.'
            : 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col text-white">
      <div className="text-center mb-6">
        <p className="text-sm mb-2">
          Don&apos;t have an account?{' '}
          <button onClick={onToggleView} className="font-semibold hover:underline">
            Sign Up
          </button>
        </p>
        <h2 className="text-3xl font-bold">Login</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          <Button type="submit" className="w-full h-11 text-base font-semibold bg-white text-black rounded-full hover:bg-white/80" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            Sign In
          </Button>

          <div className="flex justify-between items-center text-xs mt-2">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2 accent-primary" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link href="#" className="hover:underline">Forgot password?</Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
