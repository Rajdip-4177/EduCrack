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
import { loginUser } from '@/lib/auth';
import { Loader2, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
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
            : error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-70"
        data-ai-hint="serene landscape illustration"
      />
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-white/10 p-10 shadow-2xl backdrop-blur-lg">
        <div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-white font-headline">
            Login
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <div>
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-white text-black hover:bg-gray-200" disabled={isLoading}>
                {isLoading && (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                )}
                Login
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-center text-sm text-gray-300">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:text-primary/80">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
