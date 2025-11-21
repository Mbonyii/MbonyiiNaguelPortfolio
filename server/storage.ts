import { type PortfolioData } from "@shared/schema";

export interface IStorage {
  getPortfolioData(): Promise<PortfolioData>;
}

export class MemStorage implements IStorage {
  private portfolioData: PortfolioData;

  constructor() {
    this.portfolioData = {
      about: {
        name: "Mbonyingabo",
        title: "Software Engineer",
        bio: "Passionate developer with expertise in building innovative solutions using modern technologies. Experienced in full-stack development, artificial intelligence, and cloud computing. Always eager to learn and tackle challenging problems.",
        location: "Kigali, Rwanda",
        email: "mbonyiiinaguel@gmail.com",
        linkedin: "https://www.linkedin.com/in/mbonyingabo-naguel-8a9bb6317/",
        github: "https://github.com/Mbonyii",
        photo: "/images/Nagz.jpeg",
      },
      projects: [
        {
          id: "1",
          title: "Smart Resource Monitoring Dashboard",
          description: "A web-based dashboard designed to collect, visualize, and analyze data on community resources such as water, electricity, and waste usage. The platform allows users and administrators to monitor consumption trends and make data-driven decisions to optimize resource use.",
          technologies: ["Python", "Flask/Django", "JavaScript", "React/Vue", "HTML", "CSS", "REST APIs", "MQTT", "JSON"],
          github: "https://github.com/Mbonyii/resource-monitoring",
          link: "https://resource-monitoring-demo.vercel.app",
        },
        {
          id: "2",
          title: "Cyber Hygiene Awareness Platform",
          description: "A simple, interactive web platform that educates users on safe online practices, including password management, phishing awareness, and digital privacy protection. The system provides quizzes, real-world examples, and daily security tips.",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Flask/Django", "SQLite", "Firebase"],
          github: "https://github.com/Mbonyii/cyber-hygiene",
          link: "https://cyber-hygiene-demo.vercel.app",
        },
        {
          id: "3",
          title: "Data-Driven Youth Employment Insights App",
          description: "A data visualization platform that uses open datasets to display youth employment and education trends across regions. It provides interactive charts and insights to help policymakers, educators, and youth identify areas for improvement.",
          technologies: ["Python", "Pandas", "NumPy", "Plotly", "D3.js", "HTML", "CSS", "JavaScript", "REST APIs"],
          github: "https://github.com/Mbonyii/youth-employment-insights",
          link: "https://youth-employment-demo.vercel.app",
        },
        {
          id: "4",
          title: "Community Problem-Solving Platform",
          description: "A collaborative online platform that allows users to post community challenges (like waste management or water shortages) and enables volunteers or developers to propose innovative solutions. It includes voting features to prioritize issues and track progress.",
          technologies: ["MongoDB", "Express", "React", "Node.js", "PostgreSQL", "Django", "Tailwind CSS"],
          github: "https://github.com/Mbonyii/community-platform",
          link: "https://community-platform-demo.vercel.app",
        },
        {
          id: "5",
          title: "AI-Enhanced Student Learning Recommender",
          description: "An intelligent system that recommends personalized learning materials based on students' interests, progress, and weaknesses. The model uses data-driven insights to guide learners toward suitable courses, books, or resources.",
          technologies: ["Python", "scikit-learn", "TensorFlow Lite", "Flask", "HTML", "CSS", "PostgreSQL"],
          github: "https://github.com/Mbonyii/learning-recommender",
          link: "https://learning-recommender-demo.vercel.app",
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
          title: "Software Engineer",
          company: "Rwanda Revenue Authority (RRA)",
          period: "Summer 2024",
          description: "Developed web applications using Spring Boot and React for revenue management systems.",
          achievements: [
            "Built robust backend APIs using Spring Boot framework",
            "Developed responsive frontend interfaces with React",
            "Contributed to revenue management system improvements",
          ],
        },
      ],
      education: [
     
        {
          id: "1",
          degree: "Bachelor of Science in Software Engineering",
          institution: "Adventist University of Central Africa",
          period: "2022 - 2026",
          
        },
      ],
      certifications: [
        {
          id: "1",
          name: "Responsive Web Design",
          issuer: "freeCodeCamp",
          date: "2022",
          link: "https://www.freecodecamp.org/",
        },
        {
          id: "2",
          name: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
          issuer: "Oracle",
          date: "2025",
          link: "https://www.oracle.com/cloud/certification/",
        },
        {
          id: "3",
          name: "Oracle Cloud Infrastructure Certified Data Science Professional",
          issuer: "Oracle",
          date: "2025",
          link: "https://www.oracle.com/cloud/certification/",
        },
        {
          id: "4",
          name: "Professional Foundation Certificate",
          issuer: "ALX",
          date: "2025",
        },
        {
          id: "5",
          name: "ALX Prodev Frontend Developer",
          issuer: "ALX",
          date: "2025",
        },
        {
          id: "6",
          name: "JavaScript Algorithms and Data Structures",
          issuer: "freeCodeCamp",
          date: "2023",
          link: "https://www.freecodecamp.org/",
        },
        {
          id: "7",
          name: "Java Programming and Software Engineering Fundamentals Specialization",
          issuer: "Coursera",
          date: "2024",
          link: "https://www.coursera.org/",
        },
        {
          id: "8",
          name: "Python for Everybody",
          issuer: "Coursera",
          date: "2024",
          link: "https://www.coursera.org/",
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
