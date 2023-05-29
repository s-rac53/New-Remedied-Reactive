// import { DateRange } from './atoms';
// import { Profile } from './basics';

export type WorkExperience = {
  id?: string;
  name: string;
  position: string;
  date?: string;
  url?: string;
  summary?: string;
  about? : string;
};

export type Education = {
  id?: string;
  institution: string;
  degree: string;
  affiliation: string;
  score?: string;
  date?: string;
  url?: string;
  summary?: string;
  courses?: string;
  dop?: string;
};

export type ProfessionalTraining = {
  id?: string;
  summary?: string;
}

export type ExtraCurricular = {
  id?: string;
  summary?: string;
}

export type VocationalTraining = {
  id?: string;
  date?: string;
  name?: string;
  summary?: string;
}

export type EntranceExam = {
  id?: string;
  date?: string;
  name?: string;
  summary?: string;
}


// export type Certificate = {
//   id?: string;
//   name: string;
//   issuer: string;
//   date?: string;
//   url?: string;
//   summary?: string;
// };

// export type Award = {
//   id?: string;
//   title: string;
//   awarder: string;
//   date?: string;
//   url?: string;
//   summary?: string;
// };

// export type Volunteer = {
//   id?: string;
//   organization: string;
//   position: string;
//   date?: string;
//   url?: string;
//   summary?: string;
// };

// export type Publication = {
//   id?: string;
//   name: string;
//   publisher: string;
//   date?: string;
//   url?: string;
//   summary?: string;
// };

export type Skill = {
  id?: string;
  summary: string;
};

export type Language = {
  id?: string;
  name: string;
  level: string;
};

export type Interest = {
  id?: string;
  summary: string;
  
};

export type Project = {
  id?: string;
  summary?: string;
};

// export type Reference = {
//   id?: string;
//   name: string;
//   relationship: string;
//   phone?: string;
//   email?: string;
//   summary?: string;
// };

export type Custom = {
  id?: string;
  title: string;
  subtitle?: string;
  date?: string;
  url?: string;
  level?: string;
  levelNum?: number;
  summary?: string;
  keywords?: string[];
};

export type ListItem =
  // | Award
  // | Certificate
  | Education
  | ProfessionalTraining
  | ExtraCurricular
  | VocationalTraining
  | EntranceExam
  | Interest
  | Language
  // | Profile
  | Project
  // | Publication
  // | Reference
  | Skill
  // | Volunteer
  | WorkExperience
  | Custom;

export type SectionType =
  | 'basic'
  | 'location'
  // | 'profiles'
  | 'education'
  // | 'awards'
  | 'professionaltrainings'
  | 'extracurriculars'
  | 'vocationaltrainings'
  | 'entranceexams'
  // | 'certifications'
  // | 'publications'
  | 'skills'
  | 'languages'
  | 'interests'
  // | 'volunteer'
  | 'projects'
  // | 'references'
  | 'custom'
  | 'work';

export type SectionPath = `sections.${string}`;

export type Section = {
  id?: string;
  name: string;
  type: SectionType;
  columns: number;
  visible: boolean;
  items: ListItem[];
  isDuplicated?: boolean;
};
