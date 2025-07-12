
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicFooter = dynamic(() => import('@/components/layout/footer'), {
  loading: () => <Skeleton className="h-24 w-full" />,
});

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/auth';

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <DynamicFooter />
    </div>
  );
}

