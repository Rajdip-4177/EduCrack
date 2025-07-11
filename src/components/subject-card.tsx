'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/card';

type SubjectCardProps = {
  classId: string;
  id: string;
  name: string;
  icon: string;
};

export function SubjectCard({ classId, id, name, icon }: SubjectCardProps) {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Book;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Link href={`/class/${classId}/${id}`} className="block h-full">
        <Card className="h-full text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/80 transition-colors duration-300 shadow-lg hover:shadow-accent/20 flex flex-col items-center justify-center p-6">
            <div className="p-4 bg-accent/10 rounded-full mb-4">
                <IconComponent className="h-10 w-10 text-accent" />
            </div>
            <CardTitle className="font-headline text-xl">{name}</CardTitle>
        </Card>
      </Link>
    </motion.div>
  );
}
