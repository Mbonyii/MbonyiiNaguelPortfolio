import { useState, useEffect } from 'react';
import type { PortfolioData } from '@shared/schema';
import { getCommandOutput } from './CommandOutputs';

interface TerminalOutputProps {
  command: string;
  data?: PortfolioData;
  'data-testid'?: string;
}

export function TerminalOutput({ command, data, 'data-testid': testId }: TerminalOutputProps) {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOutput(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const output = getCommandOutput(command, data);

  return (
    <div className="space-y-2" data-testid={testId}>
      <div className="flex items-center gap-2">
        <span className="text-primary/70 font-semibold text-sm sm:text-base" data-testid="output-prompt">
          user@portfolio:~$
        </span>
        <span className="text-primary font-mono text-sm sm:text-base" data-testid="output-command">
          {command}
        </span>
      </div>
      {showOutput && (
        <div 
          className="pl-0 sm:pl-4 text-foreground text-sm sm:text-base font-mono leading-relaxed animate-in fade-in duration-200"
          data-testid="output-content"
        >
          {output}
        </div>
      )}
    </div>
  );
}
