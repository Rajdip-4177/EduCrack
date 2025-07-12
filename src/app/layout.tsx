
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth-context';
import LayoutClient from './layout-client';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontHeading = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EduCrack - Your Learning Companion',
  description: 'An educational platform for students.',
  icons: {
    icon: [
      {
        url: 'https://cdn-icons-png.flaticon.com/128/8224/8224757.png',
        href: 'https://cdn-icons-png.flaticon.com/128/8224/8224757.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('font-body antialiased', fontSans.variable, fontHeading.variable)}>
        <AuthProvider>
          <LayoutClient>{children}</LayoutClient>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
