import { Card3D } from './Card3D';
import type { PortfolioData } from '@shared/schema';

interface WelcomeMessageProps {
  data?: PortfolioData;
  hideIntro?: boolean;
  onCommandClick?: (command: string) => void;
}

export function WelcomeMessage({ data, hideIntro, onCommandClick }: WelcomeMessageProps) {
  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 animate-in fade-in-50">
        {!hideIntro && (
        <div className="flex-1 space-y-4">
          <pre className="text-primary text-base sm:text-lg font-semibold" data-testid="welcome-prompt">
mbonyii@portfolio:~$ welcome
          </pre>
          <div className="space-y-3 text-sm sm:text-base" data-testid="welcome-message">
            <p className="text-foreground">
              Hi, I'm <span className="text-primary font-semibold">Mbonyingabo Naguel</span>, a Software  Engineer.
            </p>
            <p className="text-muted-foreground">
              Welcome to my interactive portfolio terminal!
            </p>
            <p className="text-muted-foreground">
              Type <span className="text-accent-foreground font-mono bg-accent/20 px-2 py-0.5 rounded">'help'</span> to see available commands.
            </p>
          </div>
        </div>
        )}
        
        <div className="lg:w-[420px] md:w-[380px] w-full group animate-in fade-in slide-in-from-right-2">
          <Card3D imageUrl={data?.about?.photo} name={data?.about?.name} subtitle={data?.about?.title || 'Interactive Terminal'} />
        </div>
      </div>

      {!hideIntro && (
        <div className="border-t border-border pt-6 animate-in fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">Available commands:</span>
              <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-border" />
            </div>
            <div className="flex flex-wrap gap-3">
              {['help', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact', 'clear'].map((cmd, index) => (
                <button
                  key={cmd}
                  onClick={() => {
                    if (onCommandClick) {
                      onCommandClick(cmd);
                    }
                  }}
                  className="group relative text-accent-foreground font-mono text-xs sm:text-sm bg-accent/15 hover:bg-accent/25 border border-accent/30 hover:border-primary/60 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 ease-out cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-3 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-100"
                  style={{ 
                    animationDelay: `${index * 75}ms`,
                    animationFillMode: 'both'
                  }}
                  data-testid={`command-suggestion-${cmd}`}
                  title={`Click to type: ${cmd}`}
                >
                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  {/* Command text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-primary/70 group-hover:text-primary transition-colors duration-300">$</span>
                    <span className="font-semibold">{cmd}</span>
                  </span>
                  
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 blur-sm transition-all duration-300 -z-10" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
