export type Subject = {
  id: string;
  name: string;
  icon: string;
};

export type ClassInfo = {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
};

export const classes: Omit<ClassInfo, 'subjects'>[] = [
  { id: 'class-10', name: 'Class 10', description: 'Comprehensive curriculum for 10th-grade students.' },
  { id: '11-neet', name: '11 NEET', description: 'Foundation course for National Eligibility cum Entrance Test.' },
  { id: '11-jee', name: '11 JEE', description: 'Prepare for the Joint Entrance Examination (Main & Advanced).' },
  { id: '12-neet', name: '12 NEET', description: 'Advanced course for medical aspirants.' },
];

export const subjectsByClass: Record<string, Subject[]> = {
  'class-10': [
    { id: 'math', name: 'Mathematics', icon: 'Calculator' },
    { id: 'science', name: 'Science', icon: 'FlaskConical' },
    { id: 'english', name: 'English', icon: 'BookOpen' },
    { id: 'social-science', name: 'Social Science', icon: 'Globe' },
  ],
  '11-neet': [
    { id: 'physics', name: 'Physics', icon: 'Atom' },
    { id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical' },
    { id: 'biology', name: 'Biology', icon: 'Dna' },
  ],
  '11-jee': [
    { id: 'physics', name: 'Physics', icon: 'Atom' },
    { id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical' },
    { id: 'math', name: 'Mathematics', icon: 'Calculator' },
  ],
  '12-neet': [
    { id: 'physics', name: 'Physics', icon: 'Atom' },
    { id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical' },
    { id: 'biology', name: 'Biology', icon: 'Dna' },
  ],
  '12-jee': [
    { id: 'physics', name: 'Physics', icon: 'Atom' },
    { id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical' },
    { id: 'math', name: 'Mathematics', icon: 'Calculator' },
  ],
};

export const findClass = (id: string) => classes.find((c) => c.id === id);
export const getSubjects = (classId: string) => subjectsByClass[classId] || [];
export const findSubject = (classId: string, subjectId: string) => getSubjects(classId).find(s => s.id === subjectId);
