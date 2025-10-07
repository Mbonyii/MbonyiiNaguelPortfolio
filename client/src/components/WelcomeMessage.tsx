import { Card3D } from './Card3D';

export function WelcomeMessage() {
  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        <div className="flex-1 space-y-4">
          <pre className="text-primary text-base sm:text-lg font-semibold" data-testid="welcome-prompt">
user@portfolio:~$ welcome
          </pre>
          <div className="space-y-3 text-sm sm:text-base" data-testid="welcome-message">
            <p className="text-foreground">
              Hi, I'm <span className="text-primary font-semibold">Your Name</span>, a Software & AI Engineer.
            </p>
            <p className="text-muted-foreground">
              Welcome to my interactive portfolio terminal!
            </p>
            <p className="text-muted-foreground">
              Type <span className="text-accent-foreground font-mono bg-accent/20 px-2 py-0.5 rounded">'help'</span> to see available commands.
            </p>
          </div>
        </div>
        
        <div className="lg:w-80">
          <Card3D />
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground">
          <span className="hidden sm:inline">Available commands:</span>
          {['help', 'about', 'projects', 'skills', 'experience', 'contact'].map((cmd) => (
            <span 
              key={cmd} 
              className="text-accent-foreground font-mono bg-accent/10 px-2 py-1 rounded-md"
              data-testid={`command-suggestion-${cmd}`}
            >
              {cmd}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
