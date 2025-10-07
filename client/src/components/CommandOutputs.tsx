import type { PortfolioData } from '@shared/schema';

interface CommandOutputProps {
  command: string;
  data?: PortfolioData;
}

export function HelpOutput() {
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Available Commands:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div><span className="text-primary">help</span> <span className="text-muted-foreground">- Show this help message</span></div>
        <div><span className="text-primary">about</span> <span className="text-muted-foreground">- Learn about me</span></div>
        <div><span className="text-primary">projects</span> <span className="text-muted-foreground">- View my projects</span></div>
        <div><span className="text-primary">skills</span> <span className="text-muted-foreground">- See my technical skills</span></div>
        <div><span className="text-primary">experience</span> <span className="text-muted-foreground">- My work experience</span></div>
        <div><span className="text-primary">education</span> <span className="text-muted-foreground">- Educational background</span></div>
        <div><span className="text-primary">certifications</span> <span className="text-muted-foreground">- Professional certifications</span></div>
        <div><span className="text-primary">leadership</span> <span className="text-muted-foreground">- Leadership roles</span></div>
        <div><span className="text-primary">contact</span> <span className="text-muted-foreground">- Get in touch</span></div>
        <div><span className="text-primary">clear</span> <span className="text-muted-foreground">- Clear terminal screen</span></div>
      </div>
      <div className="pt-3 border-t border-border/50">
        <div className="text-muted-foreground text-sm">Tip: Use ↑ ↓ arrow keys to navigate command history</div>
        <div className="text-muted-foreground text-sm">Tip: Press Tab for command auto-completion</div>
      </div>
    </div>
  );
}

export function AboutOutput({ data }: { data?: PortfolioData }) {
  if (!data?.about) {
    return <div className="text-muted-foreground">Loading about information...</div>;
  }
  const { name, title, bio, location, email } = data.about;
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground text-lg font-semibold">{name}</div>
      <div className="text-primary font-medium">{title}</div>
      {location && <div className="text-muted-foreground">Location: {location}</div>}
      <div className="text-foreground leading-relaxed pt-2">{bio}</div>
      {email && (
        <div className="pt-3">
          <span className="text-muted-foreground">Email:</span>{' '}
          <a href={`mailto:${email}`} className="text-accent-foreground hover:underline">
            {email}
          </a>
        </div>
      )}
    </div>
  );
}

export function ProjectsOutput({ data }: { data?: PortfolioData }) {
  if (!data?.projects || data.projects.length === 0) {
    return <div className="text-muted-foreground">No projects available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.projects.map(project => (
          <div key={project.id} className="border border-border/50 rounded-lg p-4 space-y-2 bg-card/30">
            <div className="text-primary font-semibold">{project.title}</div>
            <div className="text-sm text-foreground">{project.description}</div>
            <div className="flex flex-wrap gap-1 pt-1">
              {project.technologies.map(tech => (
                <span key={tech} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            {(project.github || project.link) && (
              <div className="flex gap-3 pt-2 text-sm">
                {project.github && (
                  <a href={project.github} className="text-accent-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-accent-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsOutput({ data }: { data?: PortfolioData }) {
  if (!data?.skills || data.skills.length === 0) {
    return <div className="text-muted-foreground">No skills available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Technical Skills</div>
      <div className="space-y-3">
        {data.skills.map((skillGroup, index) => (
          <div key={index} className="space-y-2">
            <div className="text-primary font-medium">{skillGroup.category}</div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <span key={skill} className="text-sm bg-muted/50 text-foreground px-3 py-1 rounded-md border border-border/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceOutput({ data }: { data?: PortfolioData }) {
  if (!data?.experience || data.experience.length === 0) {
    return <div className="text-muted-foreground">No experience available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Work Experience</div>
      <div className="space-y-4">
        {data.experience.map(exp => (
          <div key={exp.id} className="border-l-2 border-primary/50 pl-4 space-y-2">
            <div className="text-primary font-semibold">{exp.title}</div>
            <div className="text-accent-foreground">{exp.company}</div>
            <div className="text-sm text-muted-foreground">{exp.period}</div>
            <div className="text-sm text-foreground">{exp.description}</div>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground pt-1">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationOutput({ data }: { data?: PortfolioData }) {
  if (!data?.education || data.education.length === 0) {
    return <div className="text-muted-foreground">No education information available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Education</div>
      <div className="space-y-3">
        {data.education.map(edu => (
          <div key={edu.id} className="space-y-1">
            <div className="text-primary font-semibold">{edu.degree}</div>
            <div className="text-foreground">{edu.institution}</div>
            <div className="text-sm text-muted-foreground">{edu.period}</div>
            {edu.details && <div className="text-sm text-foreground pt-1">{edu.details}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CertificationsOutput({ data }: { data?: PortfolioData }) {
  if (!data?.certifications || data.certifications.length === 0) {
    return <div className="text-muted-foreground">No certifications available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Certifications</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data.certifications.map(cert => (
          <div key={cert.id} className="border border-border/50 rounded-lg p-3 space-y-1 bg-card/30">
            <div className="text-primary font-medium">{cert.name}</div>
            <div className="text-sm text-foreground">{cert.issuer}</div>
            <div className="text-xs text-muted-foreground">{cert.date}</div>
            {cert.link && (
              <a href={cert.link} className="text-xs text-accent-foreground hover:underline inline-block pt-1" target="_blank" rel="noopener noreferrer">
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LeadershipOutput({ data }: { data?: PortfolioData }) {
  if (!data?.leadership || data.leadership.length === 0) {
    return <div className="text-muted-foreground">No leadership roles available.</div>;
  }
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Leadership & Community</div>
      <div className="space-y-3">
        {data.leadership.map(lead => (
          <div key={lead.id} className="border-l-2 border-accent/50 pl-4 space-y-1">
            <div className="text-primary font-semibold">{lead.role}</div>
            <div className="text-accent-foreground">{lead.organization}</div>
            <div className="text-sm text-muted-foreground">{lead.period}</div>
            <div className="text-sm text-foreground pt-1">{lead.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactOutput({ data }: { data?: PortfolioData }) {
  if (!data?.about) {
    return <div className="text-muted-foreground">Loading contact information...</div>;
  }
  const { email, linkedin, github, website } = data.about;
  return (
    <div className="space-y-4">
      <div className="text-accent-foreground font-semibold">Get In Touch</div>
      <div className="space-y-2">
        {email && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Email:</span>{' '}
            <a href={`mailto:${email}`} className="text-accent-foreground hover:underline">
              {email}
            </a>
          </div>
        )}
        {linkedin && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">LinkedIn:</span>{' '}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:underline">
              View Profile →
            </a>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">GitHub:</span>{' '}
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:underline">
              View Profile →
            </a>
          </div>
        )}
        {website && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Website:</span>{' '}
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:underline">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function SudoOutput() {
  return (
    <div className="space-y-2">
      <div className="text-destructive font-semibold">sudo: Permission denied</div>
      <div className="text-muted-foreground text-sm">Nice try! But you'll need root access for that</div>
      <div className="text-muted-foreground text-sm italic">This incident will be reported...</div>
    </div>
  );
}

export function UnknownCommandOutput({ command }: { command: string }) {
  return (
    <div className="space-y-2">
      <div className="text-destructive">
        Command not found: <span className="font-mono">{command}</span>
      </div>
      <div className="text-muted-foreground">
        Type <span className="text-accent-foreground font-mono bg-accent/20 px-2 py-0.5 rounded">help</span> to see available commands.
      </div>
    </div>
  );
}

export function getCommandOutput(command: string, data?: PortfolioData) {
  const commandMap: Record<string, JSX.Element> = {
    help: <HelpOutput />,
    about: <AboutOutput data={data} />,
    projects: <ProjectsOutput data={data} />,
    skills: <SkillsOutput data={data} />,
    experience: <ExperienceOutput data={data} />,
    education: <EducationOutput data={data} />,
    certifications: <CertificationsOutput data={data} />,
    leadership: <LeadershipOutput data={data} />,
    contact: <ContactOutput data={data} />,
    sudo: <SudoOutput />,
  };

  return commandMap[command] || <UnknownCommandOutput command={command} />;
}
