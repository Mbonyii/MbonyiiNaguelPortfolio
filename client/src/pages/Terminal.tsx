import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { type CommandHistory, type PortfolioData } from '@shared/schema';
import { TerminalOutput } from '@/components/TerminalOutput';
import { TerminalInput } from '@/components/TerminalInput';
import { WelcomeMessage } from '@/components/WelcomeMessage';

export default function Terminal() {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: portfolioData } = useQuery<PortfolioData>({
    queryKey: ['/api/portfolio'],
  });

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
      setShowWelcome(false);
      setCurrentCommand('');
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
        {showWelcome && <WelcomeMessage />}
        
        <div className="space-y-4 mb-6">
          {history.map((entry, index) => (
            <TerminalOutput 
              key={index} 
              command={entry.command} 
              data={portfolioData}
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
