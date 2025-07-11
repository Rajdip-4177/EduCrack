import { notFound } from 'next/navigation';
import { findClass, findSubject } from '@/lib/data';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';

type SubjectPageProps = {
  params: {
    classId: string;
    subjectId: string;
  };
};

export default function SubjectPage({ params }: SubjectPageProps) {
  const { classId, subjectId } = params;
  const classInfo = findClass(classId);
  const subjectInfo = findSubject(classId, subjectId);

  if (!classInfo || !subjectInfo) {
    notFound();
  }

  const breadcrumbSegments = [
    { title: 'Home', href: '/' },
    { title: classInfo.name, href: `/class/${classId}` },
    { title: subjectInfo.name, href: `/class/${classId}/${subjectId}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs segments={breadcrumbSegments} />
      <div className="mt-6">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{subjectInfo.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Content for {classInfo.name}
        </p>
      </div>

      <Tabs defaultValue="notes" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="qa">Q&amp;A</TabsTrigger>
          <TabsTrigger value="earth-test">Earth Test</TabsTrigger>
        </TabsList>
        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chapter Notes</CardTitle>
              <CardDescription>Detailed notes for each chapter.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Chapter 1: Introduction</AccordionTrigger>
                  <AccordionContent>
                    Detailed notes for Chapter 1. This section will contain text, images, and formulas.
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Chapter 2: Core Concepts</AccordionTrigger>
                  <AccordionContent>
                    This is where the detailed notes for Chapter 2 would be.
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="qa" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Questions &amp; Answers</CardTitle>
              <CardDescription>Frequently asked questions and expert answers.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the main concept of this chapter?</AccordionTrigger>
                  <AccordionContent>
                    This is the answer to the first question. We will provide a comprehensive explanation.
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                  <AccordionTrigger>How do I solve this specific problem?</AccordionTrigger>
                  <AccordionContent>
                    Here is a step-by-step guide to solving the problem.
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="earth-test" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Earth Test</CardTitle>
              <CardDescription>Test your knowledge with these practice questions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium mb-2">1. What is the capital of France?</p>
                <div className="space-y-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">2. Solve for x: 2x + 5 = 15</p>
                <div className="space-y-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
