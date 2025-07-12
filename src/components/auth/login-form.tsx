
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
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
    <div className="w-full h-full flex flex-col justify-center font-[Poppins,sans-serif]">
      <div className="top text-center mb-2">
        <span className="text-white text-base font-normal font-[Poppins,sans-serif]">
          Don't have an account?{' '}
          <button onClick={onToggleView} className="font-semibold hover:underline focus:outline-none font-[Poppins,sans-serif]">
            Sign Up
          </button>
        </span>
        <header className="text-white text-4xl font-bold mt-2 font-[Poppins,sans-serif]">Login</header>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="input-box relative">
                    <Input
                      type="email"
                      placeholder="Username or Email"
                      {...field}
                      className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg"
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
                  <div className="input-box relative">
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="input-field bg-white/20 border-none rounded-full h-12 pl-12 text-white placeholder:text-white/70 focus:bg-white/25 font-[Poppins,sans-serif] text-lg"
                      disabled={isLoading}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-xs pl-4" />
              </FormItem>
            )}
          />
          <div className="two-col flex justify-between items-center text-xs mt-2 text-white font-[Poppins,sans-serif]">
            <div className="one flex items-center gap-2">
              <input type="checkbox" id="login-check" className="accent-primary" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#" className="hover:underline">Forgot password?</a></label>
            </div>
          </div>
          <div className="input-box">
            <button type="submit" className="submit w-full h-11 text-lg font-semibold bg-white text-black rounded-full hover:bg-white/80 flex items-center justify-center font-[Poppins,sans-serif]" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign In'}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
