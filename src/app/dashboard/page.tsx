
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="container flex min-h-[calc(100vh-150px)] items-center justify-center py-12">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">
        Welcome, {user.displayName || 'Student'}!
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is your personal dashboard. Here you can track your progress and view your results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Continue your learning journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">You are not enrolled in any courses yet.</p>
            <Button asChild>
              <Link href="/#classes">Explore Classes</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity.</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>Manage your account settings.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Email: {user.email}</p>
             <p className="text-muted-foreground mb-4">Name: {user.displayName}</p>
             <Button variant="outline" disabled>Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
