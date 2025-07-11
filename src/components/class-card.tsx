'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

interface ClassCardProps {
  id: string;
  name: string;
  description: string;
}

export function ClassCard({ id, name, description }: ClassCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Link href={`/class/${id}`} className="block h-full">
        <Card className="flex flex-col h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{name}</CardTitle>
            <CardDescription className="pt-2">{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow"></CardContent>
          <div className="p-6 pt-0 mt-auto">
             <Button variant="outline" className="w-full group">
                View Subjects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
