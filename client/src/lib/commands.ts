import { type PortfolioData } from '@shared/schema';

export function getCommandOutput(command: string, data?: PortfolioData): string {
  const commands: Record<string, () => string> = {
    help: () => `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Available Commands:</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
    <div><span class="text-primary">help</span> <span class="text-muted-foreground">- Show this help message</span></div>
    <div><span class="text-primary">about</span> <span class="text-muted-foreground">- Learn about me</span></div>
    <div><span class="text-primary">projects</span> <span class="text-muted-foreground">- View my projects</span></div>
    <div><span class="text-primary">skills</span> <span class="text-muted-foreground">- See my technical skills</span></div>
    <div><span class="text-primary">experience</span> <span class="text-muted-foreground">- My work experience</span></div>
    <div><span class="text-primary">education</span> <span class="text-muted-foreground">- Educational background</span></div>
    <div><span class="text-primary">certifications</span> <span class="text-muted-foreground">- Professional certifications</span></div>
    <div><span class="text-primary">leadership</span> <span class="text-muted-foreground">- Leadership roles</span></div>
    <div><span class="text-primary">contact</span> <span class="text-muted-foreground">- Get in touch</span></div>
    <div><span class="text-primary">clear</span> <span class="text-muted-foreground">- Clear terminal screen</span></div>
  </div>
  <div class="pt-3 border-t border-border/50">
    <div class="text-muted-foreground text-sm">💡 Tip: Use ↑ ↓ arrow keys to navigate command history</div>
    <div class="text-muted-foreground text-sm">💡 Tip: Press Tab for command auto-completion</div>
  </div>
</div>`,

    about: () => {
      if (!data?.about) {
        return '<div class="text-muted-foreground">Loading about information...</div>';
      }
      const { name, title, bio, location, email } = data.about;
      return `
<div class="space-y-4">
  <div class="text-accent-foreground text-lg font-semibold">${name}</div>
  <div class="text-primary font-medium">${title}</div>
  ${location ? `<div class="text-muted-foreground">📍 ${location}</div>` : ''}
  <div class="text-foreground leading-relaxed pt-2">${bio}</div>
  ${email ? `<div class="pt-3"><span class="text-muted-foreground">Email:</span> <a href="mailto:${email}" class="text-accent-foreground hover:underline">${email}</a></div>` : ''}
</div>`;
    },

    projects: () => {
      if (!data?.projects || data.projects.length === 0) {
        return '<div class="text-muted-foreground">No projects available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Projects</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    ${data.projects.map(project => `
      <div class="border border-border/50 rounded-lg p-4 space-y-2 bg-card/30">
        <div class="text-primary font-semibold">${project.title}</div>
        <div class="text-sm text-foreground">${project.description}</div>
        <div class="flex flex-wrap gap-1 pt-1">
          ${project.technologies.map(tech => `<span class="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">${tech}</span>`).join('')}
        </div>
        ${project.github || project.link ? `
          <div class="flex gap-3 pt-2 text-sm">
            ${project.github ? `<a href="${project.github}" class="text-accent-foreground hover:underline">GitHub →</a>` : ''}
            ${project.link ? `<a href="${project.link}" class="text-accent-foreground hover:underline">Live Demo →</a>` : ''}
          </div>
        ` : ''}
      </div>
    `).join('')}
  </div>
</div>`;
    },

    skills: () => {
      if (!data?.skills || data.skills.length === 0) {
        return '<div class="text-muted-foreground">No skills available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Technical Skills</div>
  <div class="space-y-3">
    ${data.skills.map(skillGroup => `
      <div class="space-y-2">
        <div class="text-primary font-medium">${skillGroup.category}</div>
        <div class="flex flex-wrap gap-2">
          ${skillGroup.items.map(skill => `<span class="text-sm bg-muted/50 text-foreground px-3 py-1 rounded-md border border-border/50">▸ ${skill}</span>`).join('')}
        </div>
      </div>
    `).join('')}
  </div>
</div>`;
    },

    experience: () => {
      if (!data?.experience || data.experience.length === 0) {
        return '<div class="text-muted-foreground">No experience available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Work Experience</div>
  <div class="space-y-4">
    ${data.experience.map(exp => `
      <div class="border-l-2 border-primary/50 pl-4 space-y-2">
        <div class="text-primary font-semibold">${exp.title}</div>
        <div class="text-accent-foreground">${exp.company}</div>
        <div class="text-sm text-muted-foreground">${exp.period}</div>
        <div class="text-sm text-foreground">${exp.description}</div>
        ${exp.achievements && exp.achievements.length > 0 ? `
          <ul class="space-y-1 text-sm text-foreground pt-1">
            ${exp.achievements.map(achievement => `<li>• ${achievement}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('')}
  </div>
</div>`;
    },

    education: () => {
      if (!data?.education || data.education.length === 0) {
        return '<div class="text-muted-foreground">No education information available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Education</div>
  <div class="space-y-3">
    ${data.education.map(edu => `
      <div class="space-y-1">
        <div class="text-primary font-semibold">${edu.degree}</div>
        <div class="text-foreground">${edu.institution}</div>
        <div class="text-sm text-muted-foreground">${edu.period}</div>
        ${edu.details ? `<div class="text-sm text-foreground pt-1">${edu.details}</div>` : ''}
      </div>
    `).join('')}
  </div>
</div>`;
    },

    certifications: () => {
      if (!data?.certifications || data.certifications.length === 0) {
        return '<div class="text-muted-foreground">No certifications available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Certifications</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    ${data.certifications.map(cert => `
      <div class="border border-border/50 rounded-lg p-3 space-y-1 bg-card/30">
        <div class="text-primary font-medium">${cert.name}</div>
        <div class="text-sm text-foreground">${cert.issuer}</div>
        <div class="text-xs text-muted-foreground">${cert.date}</div>
        ${cert.link ? `<a href="${cert.link}" class="text-xs text-accent-foreground hover:underline inline-block pt-1">View Certificate →</a>` : ''}
      </div>
    `).join('')}
  </div>
</div>`;
    },

    leadership: () => {
      if (!data?.leadership || data.leadership.length === 0) {
        return '<div class="text-muted-foreground">No leadership roles available.</div>';
      }
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Leadership & Community</div>
  <div class="space-y-3">
    ${data.leadership.map(lead => `
      <div class="border-l-2 border-accent/50 pl-4 space-y-1">
        <div class="text-primary font-semibold">${lead.role}</div>
        <div class="text-accent-foreground">${lead.organization}</div>
        <div class="text-sm text-muted-foreground">${lead.period}</div>
        <div class="text-sm text-foreground pt-1">${lead.description}</div>
      </div>
    `).join('')}
  </div>
</div>`;
    },

    contact: () => {
      if (!data?.about) {
        return '<div class="text-muted-foreground">Loading contact information...</div>';
      }
      const { email, linkedin, github, website } = data.about;
      return `
<div class="space-y-4">
  <div class="text-accent-foreground font-semibold">Get In Touch</div>
  <div class="space-y-2">
    ${email ? `<div class="flex items-center gap-2"><span class="text-muted-foreground">Email:</span> <a href="mailto:${email}" class="text-accent-foreground hover:underline">${email}</a></div>` : ''}
    ${linkedin ? `<div class="flex items-center gap-2"><span class="text-muted-foreground">LinkedIn:</span> <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="text-accent-foreground hover:underline">View Profile →</a></div>` : ''}
    ${github ? `<div class="flex items-center gap-2"><span class="text-muted-foreground">GitHub:</span> <a href="${github}" target="_blank" rel="noopener noreferrer" class="text-accent-foreground hover:underline">View Profile →</a></div>` : ''}
    ${website ? `<div class="flex items-center gap-2"><span class="text-muted-foreground">Website:</span> <a href="${website}" target="_blank" rel="noopener noreferrer" class="text-accent-foreground hover:underline">${website}</a></div>` : ''}
  </div>
</div>`;
    },

    sudo: () => `
<div class="space-y-2">
  <div class="text-destructive font-semibold">sudo: Permission denied</div>
  <div class="text-muted-foreground text-sm">Nice try! But you'll need root access for that 😄</div>
  <div class="text-muted-foreground text-sm italic">This incident will be reported...</div>
</div>`,
  };

  const commandFn = commands[command];
  
  if (commandFn) {
    return commandFn();
  }

  return `
<div class="space-y-2">
  <div class="text-destructive">Command not found: <span class="font-mono">${command}</span></div>
  <div class="text-muted-foreground">Type <span class="text-accent-foreground font-mono bg-accent/20 px-2 py-0.5 rounded">help</span> to see available commands.</div>
</div>`;
}
