
import { notFound } from 'next/navigation';
import { findClass, findSubject, getChapters } from '@/lib/data';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { BackButton } from '@/components/back-button';

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
  
  const chapters = getChapters(classId, subjectId);

  const breadcrumbSegments = [
    { title: 'Home', href: '/' },
    { title: classInfo.name, href: `/class/${classId}` },
    { title: subjectInfo.name, href: `/class/${classId}/${subjectId}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Breadcrumbs segments={breadcrumbSegments} />
        <BackButton />
      </div>
      <div className="mt-6">
        <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary">{subjectInfo.name}</h1>
        <p className="mt-2 text-md md:text-lg text-muted-foreground">
          Content for {classInfo.name}
        </p>
      </div>

      <Tabs defaultValue="notes" className="mt-8">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="qa">Q&A</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
        </TabsList>
        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chapter Notes</CardTitle>
              <CardDescription>Detailed notes for each chapter.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {chapters.map(chapter => (
                  <AccordionItem key={chapter.id} value={chapter.id}>
                    <AccordionTrigger>{chapter.name}</AccordionTrigger>
                    <AccordionContent>
                      Detailed notes for {chapter.name}. This section will contain text, images, and formulas.
                      <div className="space-y-2 mt-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="qa" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Questions & Answers</CardTitle>
              <CardDescription>Frequently asked questions and expert answers for each chapter.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {chapters.map(chapter => (
                    <AccordionItem key={`qa-${chapter.id}`} value={`qa-${chapter.id}`}>
                      <AccordionTrigger>Questions for {chapter.name}</AccordionTrigger>
                      <AccordionContent>
                        This is where the Q&A for {chapter.name} would be.
                        <div className="space-y-2 mt-4">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-2/3" />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tests" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Practice Tests</CardTitle>
              <CardDescription>Test your knowledge with these practice questions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {chapters.map(chapter => (
                <div key={`test-${chapter.id}`}>
                  <p className="font-medium mb-2">Test for: {chapter.name}</p>
                  <div className="space-y-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
