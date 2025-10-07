import { useState, useEffect } from 'react';

interface TerminalOutputProps {
  command: string;
  output: string;
  'data-testid'?: string;
}

export function TerminalOutput({ command, output, 'data-testid': testId }: TerminalOutputProps) {
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedOutput('');
    setIsTyping(true);

    const typingSpeed = 10;
    const interval = setInterval(() => {
      if (currentIndex < output.length) {
        setDisplayedOutput(output.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [output]);

  const handleClick = () => {
    if (isTyping) {
      setDisplayedOutput(output);
      setIsTyping(false);
    }
  };

  return (
    <div className="space-y-2" data-testid={testId} onClick={handleClick}>
      <div className="flex items-center gap-2">
        <span className="text-primary/70 font-semibold text-sm sm:text-base" data-testid="output-prompt">
          user@portfolio:~$
        </span>
        <span className="text-primary font-mono text-sm sm:text-base" data-testid="output-command">
          {command}
        </span>
      </div>
      <div 
        className="pl-0 sm:pl-4 text-foreground text-sm sm:text-base whitespace-pre-wrap font-mono leading-relaxed"
        dangerouslySetInnerHTML={{ __html: displayedOutput }}
        data-testid="output-content"
      />
    </div>
  );
}
