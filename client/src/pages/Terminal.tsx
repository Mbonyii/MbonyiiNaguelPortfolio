import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { type CommandHistory, type PortfolioData } from '@shared/schema';
import { TerminalOutput } from '@/components/TerminalOutput';
import { TerminalInput } from '@/components/TerminalInput';
import { WelcomeMessage } from '@/components/WelcomeMessage';
import { useToast } from '@/hooks/use-toast';

export default function Terminal() {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  const { data: portfolioData, isLoading, isError, error } = useQuery<PortfolioData>({
    queryKey: ['/api/v1/portfolio'],
    staleTime: 0,
    refetchOnMount: 'always',
  });

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Failed to load data',
        description: (error as Error)?.message ?? 'Please try again later.',
        variant: 'destructive',
      });
    }
  }, [isError, error, toast]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    if (!trimmedCommand) return;

    if (trimmedCommand === 'clear') {
      setHistory([]);
      setCommandHistory([]);
      setShowWelcome(true);
      setCurrentCommand('');
      setHistoryIndex(-1);
      // Scroll to top smoothly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        inputRef.current?.focus();
      }, 100);
      return;
    }
    
    const newHistoryEntry: CommandHistory = {
      command: trimmedCommand,
      timestamp: new Date(),
    };

    setHistory([...history, newHistoryEntry]);
    setCommandHistory([...commandHistory, trimmedCommand]);
    setHistoryIndex(-1);
    setCurrentCommand('');
    setShowWelcome(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(currentCommand.toLowerCase()));
      if (matches.length === 1) {
        setCurrentCommand(matches[0]);
      }
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8 cursor-text"
      onClick={handleContainerClick}
      data-testid="terminal-container"
    >
      <div className="max-w-6xl mx-auto">
        <WelcomeMessage 
          data={portfolioData} 
          hideIntro={!showWelcome} 
          onCommandClick={(cmd) => {
            setCurrentCommand(cmd);
            setTimeout(() => {
              inputRef.current?.focus();
              // Optionally auto-execute on click
              // handleCommand(cmd);
            }, 50);
          }}
        />

        {isLoading && (
          <div className="mb-6 space-y-2 animate-in fade-in duration-500" aria-live="polite" aria-busy="true">
            <div className="h-4 w-40 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded bg-[length:200%_100%] animate-shimmer" />
            <div className="h-3 w-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded bg-[length:200%_100%] animate-shimmer" />
            <div className="h-3 w-5/6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded bg-[length:200%_100%] animate-shimmer" />
          </div>
        )}
        
        <div className="space-y-4 mb-6">
          {history.map((entry, index) => (
            <TerminalOutput 
              key={`${entry.command}-${entry.timestamp.getTime()}-${index}`}
              command={entry.command} 
              data={portfolioData}
              index={index}
              data-testid={`terminal-output-${index}`}
            />
          ))}
        </div>

        <TerminalInput
          value={currentCommand}
          onChange={setCurrentCommand}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          data-testid="terminal-input"
        />

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
