import { useState, useEffect } from 'react';
import type { PortfolioData } from '@shared/schema';
import { getCommandOutput } from './CommandOutputs';

interface TerminalOutputProps {
  command: string;
  data?: PortfolioData;
  'data-testid'?: string;
  index?: number;
}

export function TerminalOutput({ command, data, 'data-testid': testId, index = 0 }: TerminalOutputProps) {
  const [showOutput, setShowOutput] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Typing animation for command
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < command.length) {
        setTypedCommand(command.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Show output after typing completes
        setTimeout(() => {
          setShowOutput(true);
        }, 200);
      }
    }, 50); // Adjust speed (lower = faster)

    return () => clearInterval(typingInterval);
  }, [command]);

  const output = getCommandOutput(command, data);

  return (
    <div 
      className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
      data-testid={testId}
    >
      <div className="flex items-center gap-2">
        <span className="text-primary/70 font-semibold text-sm sm:text-base" data-testid="output-prompt">
          mbonyii@portfolio:~$
        </span>
        <span className="text-primary font-mono text-sm sm:text-base" data-testid="output-command">
          {typedCommand}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
          )}
        </span>
      </div>
      {showOutput && (
        <div 
          className="pl-0 sm:pl-4 text-foreground text-sm sm:text-base font-mono leading-relaxed animate-in fade-in slide-in-from-left-2 duration-700"
          data-testid="output-content"
        >
          {output}
        </div>
      )}
    </div>
  );
}
