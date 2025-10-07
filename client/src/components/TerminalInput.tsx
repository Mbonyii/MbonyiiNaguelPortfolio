import { RefObject, ChangeEvent, KeyboardEvent } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  'data-testid'?: string;
}

export function TerminalInput({ value, onChange, onKeyDown, inputRef, 'data-testid': testId }: TerminalInputProps) {
  return (
    <div className="flex items-center gap-2 group" data-testid={testId}>
      <span className="text-primary font-semibold text-sm sm:text-base whitespace-nowrap" data-testid="terminal-prompt">
        user@portfolio:~$
      </span>
      <div className="flex-1 relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent border-none outline-none text-primary font-mono text-sm sm:text-base caret-primary focus:ring-0"
          autoComplete="off"
          spellCheck="false"
          data-testid="input-command"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-primary animate-pulse" data-testid="cursor-blink" />
      </div>
    </div>
  );
}
