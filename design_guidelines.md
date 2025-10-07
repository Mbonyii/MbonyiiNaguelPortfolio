# Terminal Portfolio Design Guidelines

## Design Approach: Reference-Based (Terminal/CLI Interface)

**Selected Reference**: Classic Unix/Linux terminal interfaces with modern web refinements inspired by developer tools like VS Code's integrated terminal, Hyper terminal, and iTerm2.

**Key Design Principle**: Authentic terminal experience with subtle modern enhancements - the interface should feel like a real command-line environment while maintaining web usability.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 220 20% 8% (deep charcoal with slight blue tint)
- Terminal Prompt: 142 70% 55% (classic terminal green)
- Command Text: 142 65% 60% (lighter green for user input)
- Response Text: 0 0% 90% (off-white for output)
- Accent/Links: 173 80% 50% (cyan for interactive elements)
- Error State: 0 70% 60% (muted red)
- Muted Text: 0 0% 60% (gray for secondary info)

### B. Typography

**Font Stack**
- Primary: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace
- All text uses monospace for terminal authenticity
- Font Weights: 400 (regular), 500 (medium), 600 (semibold for prompts)

**Text Sizing**
- Terminal Text: text-sm (14px) - optimal for code readability
- Prompt Symbol: text-base (16px)
- Headers in Output: text-lg (18px)
- Mobile: text-xs (12px) for terminal, scales up on larger screens

### C. Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8
- Terminal padding: p-4 on mobile, p-6 on tablet, p-8 on desktop
- Line spacing: space-y-2 for command history
- Section gaps: gap-4 within outputs, gap-6 between sections
- Container: max-w-6xl centered with full-height viewport

**Terminal Structure**
- Full viewport height (min-h-screen) with internal scrolling
- Fixed prompt at bottom with scrollable command history above
- Contained width for readability (max-w-4xl for terminal content)

### D. Component Library

**Core Terminal Components**

1. **Command Prompt**
   - Format: `user@portfolio:~$` in green (142 70% 55%)
   - Blinking cursor after input (1s animation)
   - Fixed position at bottom with backdrop blur

2. **Command Input Field**
   - Transparent background with no visible borders
   - Monospace font matching terminal
   - Green text color matching theme
   - Full-width input area

3. **Command History Display**
   - Each command shown with timestamp
   - Previous commands in muted green (142 50% 45%)
   - Output text in off-white
   - Scrollable area with smooth scroll behavior

4. **Command Output Cards**
   - Minimal borders: 1px solid with 20% opacity
   - Rounded corners: rounded-lg
   - Background: subtle gradient or solid with 5% lighter than base
   - Padding: p-4 to p-6
   - Organized content sections within responses

5. **3D Interactive Card** (Hero Element)
   - Floating card with tilt-on-hover effect
   - Glassmorphism: backdrop-blur-xl with semi-transparent background
   - Positioned prominently near welcome message
   - Subtle box-shadow with green/cyan tint
   - Contains key information or welcome message

6. **Navigation Elements**
   - Command suggestions appear below input
   - Tab-completion hints in muted cyan
   - Arrow key navigation indicators (subtle)
   - Help menu as formatted terminal output

7. **Interactive Elements**
   - Links: cyan color (173 80% 50%) with underline on hover
   - Buttons styled as terminal commands `[COMMAND]`
   - Hover states: slight brightness increase (no background change)
   - Focus: cyan outline (1px)

### E. Animations & Interactions

**Core Animations** (Used sparingly)

1. **Typing Effect**: 
   - New command outputs appear character-by-character
   - Speed: 20-30ms per character
   - Skippable on click

2. **Cursor Blink**:
   - 1-second interval
   - Smooth opacity transition

3. **Command Execution**:
   - Brief pause (200ms) before output appears
   - Smooth scroll to new content

4. **3D Card Interaction**:
   - Tilt on mouse move (max 10 degrees)
   - Smooth transform transitions (300ms)
   - Subtle scale on hover (1.02)

**No Animations For**:
- Text rendering after typing completes
- Background elements
- Navigation transitions

---

## Terminal-Specific Features

### Command System
- **help**: List all available commands in formatted table
- **about**: Display bio with ASCII art or formatted text
- **projects**: Grid of project cards within terminal
- **skills**: Progress bars or list format
- **experience**: Timeline in terminal format
- **contact**: Form styled as command input or direct links
- **clear**: Wipe terminal history with smooth transition
- **sudo**: Easter egg responses

### User Experience Patterns
- Auto-focus input on page load
- Command history accessible with up/down arrows
- Tab completion for commands
- Case-insensitive command recognition
- Clear error messages for unknown commands
- Persistent command history in session

### Responsive Behavior
- Mobile: Simplified terminal with virtual keyboard support
- Tablet: Standard terminal view with touch-optimized inputs
- Desktop: Full terminal experience with keyboard shortcuts

---

## Content Structure

**Welcome Screen**
- ASCII art logo or stylized name
- Brief introduction (2-3 lines)
- Prompt to type 'help'
- 3D card showcasing key achievement or CTA

**Command Outputs**
- Structured data tables for skills/experience
- Card grids for projects (2-3 columns on desktop)
- Lists with terminal-style bullets (→ or ▸)
- Links formatted as `[Link Text](url)` with cyan color

---

## Images
- **No traditional hero image** - replaced by 3D interactive card
- **Project thumbnails**: Displayed in terminal output cards when projects command is run
- **Skill icons**: Optional small icons (16x16px) next to skill names
- **Company logos**: Minimal grayscale logos for experience section
- All images should have subtle border or shadow to separate from dark background

This design creates an immersive developer portfolio that feels authentic to terminal environments while maintaining excellent UX through modern web capabilities.