
import { notFound } from 'next/navigation';
import { findClass, getSubjects } from '@/lib/data';
import { SubjectCard } from '@/components/subject-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BackButton } from '@/components/back-button';
import ClassHeroBackground from '@/components/class-hero-background';

type ClassPageProps = {
  params: { classId: string };
};

export default function ClassPage({ params }: ClassPageProps) {
  const { classId } = params;
  const classInfo = findClass(classId);
  
  if (!classInfo) {
    notFound();
  }
  
  const subjects = getSubjects(classId);

  const breadcrumbSegments = [
    { title: 'Home', href: '/' },
    { title: classInfo.name, href: `/class/${classId}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Breadcrumbs segments={breadcrumbSegments} />
        <BackButton />
      </div>
      <div className="relative mt-6 py-12 text-center rounded-lg text-white shadow-xl overflow-hidden">
        <ClassHeroBackground />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">{classInfo.name}</h1>
          <p className="mt-2 text-lg text-purple-200">{classInfo.description}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-10">
          Explore Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </div>
    </div>
  );
}
