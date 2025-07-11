import Link from 'next/link';
import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbSegment = {
  title: string;
  href: string;
};

type BreadcrumbsProps = {
  segments: BreadcrumbSegment[];
  className?: string;
};

export function Breadcrumbs({ segments, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex items-center space-x-2">
        {segments.map((segment, index) => (
          <li key={segment.href}>
            <div className="flex items-center">
              <Link
                href={segment.href}
                className="hover:text-foreground transition-colors"
                aria-current={index === segments.length - 1 ? 'page' : undefined}
              >
                {segment.title}
              </Link>
              {index < segments.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
