import { z } from "zod";

// Portfolio content schemas
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  link: z.string().optional(),
  github: z.string().optional(),
});

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.string(),
  achievements: z.array(z.string()).optional(),
});

export const educationSchema = z.object({
  id: z.string(),
  degree: z.string(),
  institution: z.string(),
  period: z.string(),
  details: z.string().optional(),
});

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  link: z.string().optional(),
});

export const leadershipSchema = z.object({
  id: z.string(),
  role: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string(),
});

export const aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  location: z.string().optional(),
  email: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
});

export const portfolioDataSchema = z.object({
  about: aboutSchema,
  projects: z.array(projectSchema),
  skills: z.array(skillSchema),
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  certifications: z.array(certificationSchema),
  leadership: z.array(leadershipSchema),
});

// Type exports
export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Leadership = z.infer<typeof leadershipSchema>;
export type About = z.infer<typeof aboutSchema>;
export type PortfolioData = z.infer<typeof portfolioDataSchema>;

// Command types
export type CommandName = 
  | 'help' 
  | 'about' 
  | 'projects' 
  | 'skills' 
  | 'experience' 
  | 'contact' 
  | 'education' 
  | 'certifications' 
  | 'leadership' 
  | 'sudo' 
  | 'clear';

export interface CommandHistory {
  command: string;
  output: string;
  timestamp: Date;
}
