export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  photo: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  projects?: ProjectDetail[];
}

export interface ProjectDetail {
  name: string;
  tech: string;
  points: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  year: string;
  gpa: string;
  notes: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  experience: ExperienceItem[];
  projects: Project[];
  education: Education;
}
