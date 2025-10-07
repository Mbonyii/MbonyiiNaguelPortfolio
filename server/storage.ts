import { type PortfolioData } from "@shared/schema";

export interface IStorage {
  getPortfolioData(): Promise<PortfolioData>;
}

export class MemStorage implements IStorage {
  private portfolioData: PortfolioData;

  constructor() {
    this.portfolioData = {
      about: {
        name: "Your Name",
        title: "Software & AI Engineer",
        bio: "Passionate developer with expertise in building innovative solutions using modern technologies. Experienced in full-stack development, artificial intelligence, and cloud computing. Always eager to learn and tackle challenging problems.",
        location: "San Francisco, CA",
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourprofile",
        website: "https://yourwebsite.com",
      },
      projects: [
        {
          id: "1",
          title: "AI Chat Platform",
          description: "Real-time AI-powered chat application with natural language processing and sentiment analysis.",
          technologies: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
          github: "https://github.com/yourprofile/ai-chat",
          link: "https://ai-chat-demo.com",
        },
        {
          id: "2",
          title: "E-Commerce Dashboard",
          description: "Analytics dashboard for e-commerce businesses with real-time metrics and predictive insights.",
          technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Chart.js"],
          github: "https://github.com/yourprofile/ecommerce-dashboard",
        },
        {
          id: "3",
          title: "Task Management System",
          description: "Collaborative task management tool with team features and automated workflows.",
          technologies: ["Vue.js", "Express", "Redis", "Docker", "AWS"],
          link: "https://task-manager-demo.com",
        },
        {
          id: "4",
          title: "Smart Home Automation",
          description: "IoT-based home automation system with voice control and machine learning optimization.",
          technologies: ["Python", "TensorFlow", "Raspberry Pi", "MQTT", "React Native"],
          github: "https://github.com/yourprofile/smart-home",
        },
      ],
      skills: [
        {
          category: "Programming Languages",
          items: ["JavaScript/TypeScript", "Python", "Java", "Go", "SQL"],
        },
        {
          category: "Frontend Development",
          items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
        },
        {
          category: "Backend Development",
          items: ["Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST APIs"],
        },
        {
          category: "Databases & Storage",
          items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
        },
        {
          category: "DevOps & Cloud",
          items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "GitHub Actions"],
        },
        {
          category: "AI & Machine Learning",
          items: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"],
        },
      ],
      experience: [
        {
          id: "1",
          title: "Senior Software Engineer",
          company: "Tech Innovations Inc.",
          period: "2022 - Present",
          description: "Leading development of AI-powered enterprise solutions and mentoring junior developers.",
          achievements: [
            "Architected and deployed microservices handling 10M+ daily requests",
            "Reduced system latency by 40% through optimization and caching strategies",
            "Led team of 5 engineers in delivering major product features",
          ],
        },
        {
          id: "2",
          title: "Full Stack Developer",
          company: "StartupXYZ",
          period: "2020 - 2022",
          description: "Built and maintained web applications using modern JavaScript frameworks and cloud services.",
          achievements: [
            "Developed customer-facing dashboard serving 50K+ users",
            "Implemented real-time collaboration features using WebSocket",
            "Improved test coverage from 30% to 85%",
          ],
        },
        {
          id: "3",
          title: "Software Development Intern",
          company: "Digital Solutions Ltd.",
          period: "2019 - 2020",
          description: "Contributed to development of internal tools and automation scripts.",
          achievements: [
            "Automated deployment pipeline reducing release time by 60%",
            "Built internal API documentation portal",
          ],
        },
      ],
      education: [
        {
          id: "1",
          degree: "Master of Science in Computer Science",
          institution: "Stanford University",
          period: "2018 - 2020",
          details: "Focus on Artificial Intelligence and Machine Learning. GPA: 3.9/4.0",
        },
        {
          id: "2",
          degree: "Bachelor of Science in Software Engineering",
          institution: "University of California, Berkeley",
          period: "2014 - 2018",
          details: "Graduated with Honors. Dean's List all semesters.",
        },
      ],
      certifications: [
        {
          id: "1",
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          date: "2023",
          link: "https://aws.amazon.com/certification/",
        },
        {
          id: "2",
          name: "Google Cloud Professional Developer",
          issuer: "Google Cloud",
          date: "2022",
          link: "https://cloud.google.com/certification",
        },
        {
          id: "3",
          name: "TensorFlow Developer Certificate",
          issuer: "TensorFlow",
          date: "2022",
        },
        {
          id: "4",
          name: "Certified Kubernetes Administrator",
          issuer: "Cloud Native Computing Foundation",
          date: "2021",
          link: "https://www.cncf.io/certification/cka/",
        },
      ],
      leadership: [
        {
          id: "1",
          role: "Tech Lead - Open Source Initiative",
          organization: "Local Developer Community",
          period: "2021 - Present",
          description: "Leading open-source projects and organizing hackathons to promote collaborative development.",
        },
        {
          id: "2",
          role: "Mentor",
          organization: "Code for Good",
          period: "2020 - Present",
          description: "Mentoring aspiring developers and helping them build their first projects.",
        },
        {
          id: "3",
          role: "Chapter President",
          organization: "Association for Computing Machinery (ACM)",
          period: "2017 - 2018",
          description: "Organized technical workshops and coding competitions for university students.",
        },
      ],
    };
  }

  async getPortfolioData(): Promise<PortfolioData> {
    return this.portfolioData;
  }
}

export const storage = new MemStorage();
