
export type Chapter = {
  id: string;
  name: string;
};

export type Subject = {
  classId: string; // Keep track of parent class
  id: string;
  name: string;
  icon: string;
  chapters: Chapter[];
};

export type ClassInfo = {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
};

export const classesData: Omit<ClassInfo, 'subjects'>[] = [
  { id: 'class-10', name: 'Class 10', description: 'Comprehensive curriculum for 10th-grade students.' },
  { id: '11-neet', name: '11 NEET', description: 'Foundation course for National Eligibility cum Entrance Test.' },
  { id: '11-jee', name: '11 JEE', description: 'Prepare for the Joint Entrance Examination (Main & Advanced).' },
  { id: '12-neet', name: '12 NEET', description: 'Advanced course for medical aspirants.' },
  { id: '12-jee', name: '12 JEE', description: 'Master advanced topics for Joint Entrance Examination.' },
];

export const subjectsByClass: Record<string, Omit<Subject, 'classId'>[]> = {
  'class-10': [
    { 
      id: 'math', name: 'Mathematics', icon: 'Calculator', 
      chapters: [
        { id: 'real-numbers', name: 'Real Numbers' },
        { id: 'polynomials', name: 'Polynomials' },
        { id: 'linear-equations', name: 'Pair of Linear Equations in Two Variables' },
        { id: 'quadratic-equations', name: 'Quadratic Equations' },
        { id: 'arithmetic-progressions', name: 'Arithmetic Progressions' },
        { id: 'triangles', name: 'Triangles' },
        { id: 'coordinate-geometry', name: 'Coordinate Geometry' },
        { id: 'trigonometry-intro', name: 'Introduction to Trigonometry' },
        { id: 'trigonometry-apps', name: 'Some Applications of Trigonometry' },
        { id: 'circles', name: 'Circles' },
        { id: 'constructions', name: 'Constructions' },
        { id: 'areas-circles', name: 'Areas Related to Circles' },
        { id: 'surface-areas', name: 'Surface Areas and Volumes' },
        { id: 'statistics', name: 'Statistics' },
        { id: 'probability', name: 'Probability' },
      ] 
    },
    { 
      id: 'physics', name: 'Physics', icon: 'Atom',
      chapters: [
        { id: 'light', name: 'Light – Reflection and Refraction' },
        { id: 'human-eye', name: 'The Human Eye and the Colourful World' },
        { id: 'magnetic-effects', name: 'Magnetic Effects of Electric Current' },
        { id: 'sources-of-energy', name: 'Sources of Energy' },
      ]
    },
    {
      id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical',
      chapters: [
        { id: 'chemical-reactions', name: 'Chemical Reactions and Equations' },
        { id: 'acids-bases-salts', name: 'Acids, Bases and Salts' },
        { id: 'metals-nonmetals', name: 'Metals and Non-metals' },
        { id: 'carbon-compounds', name: 'Carbon and its Compounds' },
      ]
    },
    {
      id: 'biology', name: 'Biology', icon: 'Dna',
      chapters: [
        { id: 'life-processes', name: 'Life Processes' },
        { id: 'control-coordination', name: 'Control and Coordination' },
        { id: 'reproduction', name: 'How Do Organisms Reproduce?' },
        { id: 'heredity-evolution', name: 'Heredity and Evolution' },
        { id: 'our-environment', name: 'Our Environment' },
        { id: 'natural-resources', name: 'Management of Natural Resources' },
      ]
    },
    {
      id: 'history', name: 'History', icon: 'Landmark',
      chapters: [
        { id: 'nationalism-europe', name: 'The Rise of Nationalism in Europe' },
        { id: 'nationalism-india', name: 'Nationalism in India' },
        { id: 'global-world', name: 'The Making of a Global World' },
        { id: 'industrialisation', name: 'The Age of Industrialisation' },
        { id: 'print-culture', name: 'Print Culture and the Modern World' },
      ]
    },
    {
      id: 'geography', name: 'Geography', icon: 'Globe',
      chapters: [
        { id: 'resources-dev', name: 'Resources and Development' },
        { id: 'forest-wildlife', name: 'Forest and Wildlife Resources' },
        { id: 'water-resources', name: 'Water Resources' },
        { id: 'agriculture', name: 'Agriculture' },
        { id: 'minerals-energy', name: 'Minerals and Energy Resources' },
        { id: 'manufacturing', name: 'Manufacturing Industries' },
        { id: 'lifelines-economy', name: 'Lifelines of National Economy' },
      ]
    },
    {
      id: 'political-science', name: 'Political Science', icon: 'Scale',
      chapters: [
        { id: 'power-sharing', name: 'Power Sharing' },
        { id: 'federalism', name: 'Federalism' },
        { id: 'gender-religion-caste', name: 'Gender, Religion and Caste' },
        { id: 'political-parties', name: 'Political Parties' },
        { id: 'outcomes-democracy', name: 'Outcomes of Democracy' },
      ]
    },
    {
      id: 'economics', name: 'Economics', icon: 'Banknote',
      chapters: [
        { id: 'development', name: 'Development' },
        { id: 'sectors-economy', name: 'Sectors of the Indian Economy' },
        { id: 'money-credit', name: 'Money and Credit' },
        { id: 'globalisation', name: 'Globalisation and the Indian Economy' },
        { id: 'consumer-rights', name: 'Consumer Rights' },
      ]
    },
    { 
      id: 'english', name: 'English', icon: 'BookOpen',
      chapters: [
        { id: 'two-gentlemen', name: 'Two Gentlemen of Verona' },
        { id: 'mrs-packletide', name: 'Mrs. Packletide’s Tiger' },
        { id: 'the-letter', name: 'The Letter' },
        { id: 'shady-plot', name: 'A Shady Plot' },
        { id: 'patol-babu', name: 'Patol Babu, Film Star' },
        { id: 'virtually-true', name: 'Virtually True' },
        { id: 'frog-nightingale', name: 'The Frog and the Nightingale' },
        { id: 'not-marble', name: 'Not Marble, Nor the Gilded Monuments' },
        { id: 'ozymandias', name: 'Ozymandias' },
        { id: 'ancient-mariner', name: 'The Rime of the Ancient Mariner' },
        { id: 'snake', name: 'Snake' },
        { id: 'dear-departed', name: 'The Dear Departed' },
        { id: 'julius-caesar', name: 'Julius Caesar' },
      ]
    },
    { 
      id: 'bengali', name: 'Bengali', icon: 'Languages',
      chapters: [
        { id: 'prose-1', name: 'Prose Placeholder 1' },
        { id: 'poetry-1', name: 'Poetry Placeholder 1' },
        { id: 'grammar-1', name: 'Grammar Placeholder 1' },
      ]
    },
  ],
  '11-neet': [
    { 
      id: 'physics', name: 'Physics', icon: 'Atom',
      chapters: [
        { id: 'units-measurements', name: 'Units and Measurements' },
        { id: 'motion-straight-line', name: 'Motion in a Straight Line' },
        { id: 'motion-plane', name: 'Motion in a Plane' },
        { id: 'laws-of-motion', name: 'Laws of Motion' },
        { id: 'work-energy-power', name: 'Work, Energy and Power' },
        { id: 'rotational-motion', name: 'System of Particles and Rotational Motion' },
        { id: 'gravitation', name: 'Gravitation' },
        { id: 'mech-solids', name: 'Mechanical Properties of Solids' },
        { id: 'mech-fluids', name: 'Mechanical Properties of Fluids' },
        { id: 'thermal-matter', name: 'Thermal Properties of Matter' },
        { id: 'thermodynamics', name: 'Thermodynamics' },
        { id: 'kinetic-theory', name: 'Kinetic Theory' },
        { id: 'oscillations', name: 'Oscillations' },
        { id: 'waves', name: 'Waves' },
      ] 
    },
    { 
      id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical',
      chapters: [
        { id: 'basic-concepts', name: 'Some Basic Concepts of Chemistry' },
        { id: 'atom-structure', name: 'Structure of Atom' },
        { id: 'element-classification', name: 'Classification of Elements and Periodicity' },
        { id: 'chemical-bonding', name: 'Chemical Bonding and Molecular Structure' },
        { id: 'thermodynamics', name: 'Thermodynamics' },
        { id: 'equilibrium', name: 'Equilibrium' },
        { id: 'redox', name: 'Redox Reactions' },
        { id: 'organic-basic', name: 'Organic Chemistry – Basic Principles and Techniques' },
        { id: 'hydrocarbons', name: 'Hydrocarbons' },
      ]
    },
    { 
      id: 'botany', name: 'Botany', icon: 'Leaf',
      chapters: [
        { id: 'living-world', name: 'The Living World' },
        { id: 'biological-classification', name: 'Biological Classification' },
        { id: 'plant-kingdom', name: 'Plant Kingdom' },
        { id: 'morphology-flowering', name: 'Morphology of Flowering Plants' },
        { id: 'anatomy-flowering', name: 'Anatomy of Flowering Plants' },
        { id: 'transport-plants', name: 'Transport in Plants' },
        { id: 'mineral-nutrition', name: 'Mineral Nutrition' },
        { id: 'photosynthesis', name: 'Photosynthesis in Higher Plants' },
        { id: 'respiration-plants', name: 'Respiration in Plants' },
        { id: 'plant-growth', name: 'Plant Growth and Development' },
      ]
    },
    { 
      id: 'zoology', name: 'Zoology', icon: 'Rabbit',
      chapters: [
        { id: 'animal-kingdom', name: 'Animal Kingdom' },
        { id: 'structural-org-animals', name: 'Structural Organisation in Animals' },
        { id: 'cell-unit-life', name: 'Cell – The Unit of Life' },
        { id: 'biomolecules', name: 'Biomolecules' },
        { id: 'cell-cycle', name: 'Cell Cycle and Cell Division' },
        { id: 'digestion-absorption', name: 'Digestion and Absorption' },
        { id: 'breathing-exchange', name: 'Breathing and Exchange of Gases' },
        { id: 'body-fluids', name: 'Body Fluids and Circulation' },
        { id: 'excretory-products', name: 'Excretory Products and their Elimination' },
        { id: 'locomotion-movement', name: 'Locomotion and Movement' },
        { id: 'neural-control', name: 'Neural Control and Coordination' },
        { id: 'chemical-coordination', name: 'Chemical Coordination and Integration' },
      ]
    },
  ],
  '11-jee': [
    { 
      id: 'physics', name: 'Physics', icon: 'Atom',
      chapters: [
        { id: 'units-measurements', name: 'Units and Measurements' },
        { id: 'motion-straight-line', name: 'Motion in a Straight Line' },
        { id: 'motion-plane', name: 'Motion in a Plane' },
        { id: 'laws-of-motion', name: 'Laws of Motion' },
        { id: 'work-energy-power', name: 'Work, Energy and Power' },
        { id: 'rotational-motion', name: 'System of Particles and Rotational Motion' },
        { id: 'gravitation', name: 'Gravitation' },
        { id: 'mech-solids', name: 'Mechanical Properties of Solids' },
        { id: 'mech-fluids', name: 'Mechanical Properties of Fluids' },
        { id: 'thermal-matter', name: 'Thermal Properties of Matter' },
        { id: 'thermodynamics', name: 'Thermodynamics' },
        { id: 'kinetic-theory', name: 'Kinetic Theory' },
        { id: 'oscillations', name: 'Oscillations' },
        { id: 'waves', name: 'Waves' },
      ] 
    },
    { 
      id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical',
      chapters: [
        { id: 'basic-concepts', name: 'Some Basic Concepts of Chemistry' },
        { id: 'atom-structure', name: 'Structure of Atom' },
        { id: 'element-classification', name: 'Classification of Elements and Periodicity' },
        { id: 'chemical-bonding', name: 'Chemical Bonding and Molecular Structure' },
        { id: 'thermodynamics', name: 'Thermodynamics' },
        { id: 'equilibrium', name: 'Equilibrium' },
        { id: 'redox', name: 'Redox Reactions' },
        { id: 'organic-basic', name: 'Organic Chemistry – Basic Principles and Techniques' },
        { id: 'hydrocarbons', name: 'Hydrocarbons' },
      ]
    },
    { 
      id: 'math', name: 'Mathematics', icon: 'Calculator',
      chapters: [
        { id: 'sets', name: 'Sets' },
        { id: 'relations-functions', name: 'Relations and Functions' },
        { id: 'trigonometric-functions', name: 'Trigonometric Functions' },
        { id: 'math-induction', name: 'Principle of Mathematical Induction' },
        { id: 'complex-numbers', name: 'Complex Numbers and Quadratic Equations' },
        { id: 'linear-inequalities', name: 'Linear Inequalities' },
        { id: 'permutations-combinations', name: 'Permutations and Combinations' },
        { id: 'binomial-theorem', name: 'Binomial Theorem' },
        { id: 'sequences-series', name: 'Sequences and Series' },
        { id: 'straight-lines', name: 'Straight Lines' },
        { id: 'conic-sections', name: 'Conic Sections' },
      ]
    },
  ],
  '12-neet': [
    { 
      id: 'physics', name: 'Physics', icon: 'Atom',
      chapters: [
        { id: 'electric-charges', name: 'Electric Charges and Fields' },
        { id: 'electrostatic-potential', name: 'Electrostatic Potential and Capacitance' },
        { id: 'current-electricity', name: 'Current Electricity' },
        { id: 'moving-charges', name: 'Moving Charges and Magnetism' },
        { id: 'magnetism-matter', name: 'Magnetism and Matter' },
        { id: 'emi', name: 'Electromagnetic Induction' },
        { id: 'ac', name: 'Alternating Current' },
        { id: 'em-waves', name: 'Electromagnetic Waves' },
        { id: 'ray-optics', name: 'Ray Optics and Optical Instruments' },
        { id: 'wave-optics', name: 'Wave Optics' },
        { id: 'dual-nature', name: 'Dual Nature of Radiation and Matter' },
        { id: 'atoms', name: 'Atoms' },
        { id: 'nuclei', name: 'Nuclei' },
        { id: 'semiconductor', name: 'Semiconductor Electronics' },
      ]
    },
    { 
      id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical',
      chapters: [
        { id: 'solid-state', name: 'The Solid State' },
        { id: 'solutions', name: 'Solutions' },
        { id: 'electrochemistry', name: 'Electrochemistry' },
        { id: 'chemical-kinetics', name: 'Chemical Kinetics' },
        { id: 'surface-chemistry', name: 'Surface Chemistry' },
        { id: 'isolation-elements', name: 'General Principles and Processes of Isolation of Elements' },
        { id: 'p-block', name: 'The p-Block Elements' },
        { id: 'd-f-block', name: 'The d- and f-Block Elements' },
        { id: 'coordination-compounds', name: 'Coordination Compounds' },
        { id: 'haloalkanes-haloarenes', name: 'Haloalkanes and Haloarenes' },
        { id: 'alcohols-phenols-ethers', name: 'Alcohols, Phenols and Ethers' },
        { id: 'aldehydes-ketones', name: 'Aldehydes, Ketones and Carboxylic Acids' },
        { id: 'amines', name: 'Amines' },
        { id: 'biomolecules', name: 'Biomolecules' },
        { id: 'polymers', name: 'Polymers' },
        { id: 'chem-everyday-life', name: 'Chemistry in Everyday Life' },
      ]
    },
    { 
      id: 'botany', name: 'Botany', icon: 'Leaf',
      chapters: [
        { id: 'repro-in-org', name: 'Reproduction in Organisms' },
        { id: 'repro-flowering', name: 'Sexual Reproduction in Flowering Plants' },
        { id: 'principles-inheritance', name: 'Principles of Inheritance and Variation' },
        { id: 'molecular-inheritance', name: 'Molecular Basis of Inheritance' },
        { id: 'strategies-food', name: 'Strategies for Enhancement in Food Production' },
        { id: 'microbes-welfare', name: 'Microbes in Human Welfare' },
        { id: 'biotech-principles', name: 'Biotechnology – Principles and Processes' },
        { id: 'biotech-apps', name: 'Biotechnology and its Applications' },
        { id: 'organisms-populations', name: 'Organisms and Populations' },
        { id: 'ecosystem', name: 'Ecosystem' },
        { id: 'biodiversity', name: 'Biodiversity and Conservation' },
        { id: 'env-issues', name: 'Environmental Issues' },
      ]
    },
    { 
      id: 'zoology', name: 'Zoology', icon: 'Rabbit',
      chapters: [
        { id: 'human-repro', name: 'Human Reproduction' },
        { id: 'reproductive-health', name: 'Reproductive Health' },
        { id: 'evolution', name: 'Evolution' },
        { id: 'human-health-disease', name: 'Human Health and Disease' },
      ]
    },
  ],
  '12-jee': [
    { 
      id: 'physics', name: 'Physics', icon: 'Atom',
      chapters: [
        { id: 'electric-charges', name: 'Electric Charges and Fields' },
        { id: 'electrostatic-potential', name: 'Electrostatic Potential and Capacitance' },
        { id: 'current-electricity', name: 'Current Electricity' },
        { id: 'moving-charges', name: 'Moving Charges and Magnetism' },
        { id: 'magnetism-matter', name: 'Magnetism and Matter' },
        { id: 'emi', name: 'Electromagnetic Induction' },
        { id: 'ac', name: 'Alternating Current' },
        { id: 'em-waves', name: 'Electromagnetic Waves' },
        { id: 'ray-optics', name: 'Ray Optics and Optical Instruments' },
        { id: 'wave-optics', name: 'Wave Optics' },
        { id: 'dual-nature', name: 'Dual Nature of Radiation and Matter' },
        { id: 'atoms', name: 'Atoms' },
        { id: 'nuclei', name: 'Nuclei' },
        { id: 'semiconductor', name: 'Semiconductor Electronics' },
      ]
    },
    { 
      id: 'chemistry', name: 'Chemistry', icon: 'FlaskConical',
      chapters: [
        { id: 'solid-state', name: 'The Solid State' },
        { id: 'solutions', name: 'Solutions' },
        { id: 'electrochemistry', name: 'Electrochemistry' },
        { id: 'chemical-kinetics', name: 'Chemical Kinetics' },
        { id: 'surface-chemistry', name: 'Surface Chemistry' },
        { id: 'isolation-elements', name: 'General Principles and Processes of Isolation of Elements' },
        { id: 'p-block', name: 'The p-Block Elements' },
        { id: 'd-f-block', name: 'The d- and f-Block Elements' },
        { id: 'coordination-compounds', name: 'Coordination Compounds' },
        { id: 'haloalkanes-haloarenes', name: 'Haloalkanes and Haloarenes' },
        { id: 'alcohols-phenols-ethers', name: 'Alcohols, Phenols and Ethers' },
        { id: 'aldehydes-ketones', name: 'Aldehydes, Ketones and Carboxylic Acids' },
        { id: 'amines', name: 'Amines' },
        { id: 'biomolecules', name: 'Biomolecules' },
        { id: 'polymers', name: 'Polymers' },
        { id: 'chem-everyday-life', name: 'Chemistry in Everyday Life' },
      ]
    },
    { 
      id: 'math', name: 'Mathematics', icon: 'Calculator',
      chapters: [
        { id: 'relations-functions', name: 'Relations and Functions' },
        { id: 'inverse-trigo', name: 'Inverse Trigonometric Functions' },
        { id: 'matrices', name: 'Matrices' },
        { id: 'determinants', name: 'Determinants' },
        { id: 'continuity-diff', name: 'Continuity and Differentiability' },
        { id: 'app-derivatives', name: 'Application of Derivatives' },
        { id: 'integrals', name: 'Integrals' },
        { id: 'app-integrals', name: 'Application of Integrals' },
        { id: 'diff-equations', name: 'Differential Equations' },
        { id: 'vector-algebra', name: 'Vector Algebra' },
        { id: '3d-geometry', name: 'Three Dimensional Geometry' },
        { id: 'linear-programming', name: 'Linear Programming' },
        { id: 'probability', name: 'Probability' },
      ]
    },
  ],
};

// Renamed for clarity
export const classes = classesData;

export const findClass = (id: string): ClassInfo | undefined => {
  const classBase = classesData.find((c) => c.id === id);
  if (!classBase) {
    return undefined;
  }
  const subjects = getSubjects(id);
  return {
    ...classBase,
    subjects: subjects,
  };
};

export const getSubjects = (classId: string): Subject[] => {
  const subjectsForClass = subjectsByClass[classId] || [];
  // Add classId to each subject for linking purposes
  return subjectsForClass.map(s => ({ ...s, classId }));
};

export const findSubject = (classId: string, subjectId: string): Subject | undefined => {
  const subjects = getSubjects(classId);
  return subjects.find(s => s.id === subjectId);
};

export const getChapters = (classId: string, subjectId: string): Chapter[] => {
  const subject = findSubject(classId, subjectId);
  return subject?.chapters || [];
};

    