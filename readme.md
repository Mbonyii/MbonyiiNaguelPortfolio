# 🖥️ Terminal Portfolio

> An interactive terminal-style developer portfolio showcasing projects, skills, and experience through an immersive command-line interface.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Interactive Terminal UI** - Authentic Linux/Unix command-line experience
- 🎯 **Command-Based Navigation** - Explore portfolio sections using intuitive commands
- 🎭 **3D Interactive Card** - Immersive profile card with mouse-tracking animations
- ⚡ **Smooth Animations** - Professional typing effects and transitions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Mode** - Carefully crafted dark theme for comfortable viewing
- 🔒 **Type-Safe** - Full TypeScript implementation with Zod validation
- 🚀 **Fast Performance** - Optimized builds with Vite and esbuild

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **TanStack Query** - Server state management
- **Wouter** - Lightweight routing

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **Pino** - Structured logging
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vitest** - Testing framework




## 📁 Project Structure

```
terminal-portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   └── ...
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and configs
│   └── public/           # Static assets
│       └── images/       # Profile images
├── server/               # Backend Express server
│   ├── middleware/       # Express middlewares
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data storage
│   └── index.ts         # Server entry point
├── shared/              # Shared types and schemas
│   └── schema.ts        # Zod schemas
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```


### Terminal Features

- **Command History** - Use ↑/↓ arrow keys to navigate previous commands
- **Auto-completion** - Press Tab to complete command names
- **Smooth Animations** - Typing effects and fade-in transitions

## 🧑‍💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Code Quality

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks (pre-commit formatting)
- **TypeScript** for type checking

## 📡 API Documentation

### Endpoints

#### `GET /api/v1/portfolio`
Returns complete portfolio data including about, projects, skills, experience, education, certifications, and leadership information.

**Response:**
```json
{
  "about": { ... },
  "projects": [ ... ],
  "skills": [ ... ],
  "experience": [ ... ],
  "education": [ ... ],
  "certifications": [ ... ],
  "leadership": [ ... ]
}
```

#### `GET /healthz`
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "ok"
}
```

## 🏗️ Architecture

### Monolithic Design

This project uses a **monolithic architecture** where:
- Frontend and backend are in a single repository
- Express server serves both API and static files
- Shared types ensure consistency between client and server
- Single deployment simplifies hosting



### Data Flow

1. **Client** requests data via React Query
2. **Express API** validates request
3. **Storage Layer** returns portfolio data
4. **Zod Validation** ensures data integrity
5. **Client** renders data with smooth animations



### Styling

- **Theme Colors**: Edit `client/src/index.css` (CSS variables)
- **Tailwind Config**: Modify `tailwind.config.ts`
- **Components**: Customize `client/src/components/`



### Production Build

```bash
npm run build
npm start
```



## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mbonyingabo**

- Email: mbonyiiinaguel@gmail.com
- Location: Kigali, Rwanda
- Portfolio: [Your Website](https://yourwebsite.com)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Vite](https://vitejs.dev/) - Next-generation build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

⭐ **Star this repo if you find it helpful!**
