export interface Experience {
  id: string;
  company: string;
  designation: string;
  duration: string;
  location: string;
  projects: ExperienceProject[];
}

export interface ExperienceProject {
  id: string;
  name: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  impact: string;
  type: 'mobile' | 'web' | 'enterprise';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
}
