import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { AuthProvider } from '@/contexts/auth-context';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontHeading = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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

const DynamicFooter = dynamic(() => import('@/components/layout/footer'), {
  loading: () => <Skeleton className="h-24 w-full" />,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('font-body antialiased', fontSans.variable, fontHeading.variable)}>
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <DynamicFooter />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
