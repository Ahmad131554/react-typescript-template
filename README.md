# Frontend Master Template

A professional, production-ready React + TypeScript template for modern frontend applications.

## 🚀 Features

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router v7** for routing
- **TanStack Query** for data fetching and caching
- **Tailwind CSS v4** for styling
- **Shadcn/ui** components with Radix UI
- **Axios** for HTTP client with interceptors
- **React Hook Form** with Zod validation
- **Framer Motion** for animations
- **Sonner** for toast notifications
- **ESLint + Prettier** for code quality
- **TypeScript** strict mode enabled

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── config/              # Configuration files
├── features/            # Feature-based modules
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── lib/                 # Utility libraries
├── pages/               # Page components
├── routes/              # Routing configuration
├── services/            # API service layers
├── shared/              # Shared components and utilities
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 🛠️ Setup

1. **Clone or use this template**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment setup:**
   ```bash
   cp .example.env .env
   ```
   Update the `.env` file with your configuration.

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.example.env`:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api/v1
VITE_FILE_URL=http://localhost:3000/uploads
VITE_NODE_ENV=development

# Auth Configuration
VITE_ACCESS_TOKEN_KEY=access_token
VITE_REFRESH_TOKEN_KEY=refresh_token

# Feature Toggles
VITE_ENABLE_LOGGING=false
```

### API Client

The template includes a configured Axios client with:
- Request/response interceptors
- Automatic token management
- Error handling with toast notifications
- TypeScript support

### Routing

Uses React Router v7 with:
- File-based routing structure
- Nested layouts
- Error boundaries
- Type-safe route definitions

## 🎨 UI Components

Built with Shadcn/ui components:
- Button, Input, Textarea
- Dialog, Card, Accordion
- Form components with validation
- Loading states and error handling

## 📚 Included Services

### Authentication Service
- Login/signup
- Password reset flow
- Token management
- Google OAuth support

### User Service
- Profile management
- User CRUD operations
- Role-based access

## 🔍 TypeScript

Strict TypeScript configuration with:
- Path aliases (`@/` for `src/`)
- Strict mode enabled
- Unused variable detection
- Import optimization

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Custom design system with CSS variables
- Dark mode support ready

## 🧪 Code Quality

- ESLint with React and TypeScript rules
- Prettier for consistent formatting
- Husky for pre-commit hooks (optional)
- TypeScript strict mode

## 🚀 Production Ready

- Optimized build configuration
- Environment-specific configurations
- Error boundaries
- Performance optimizations
- SEO-friendly structure

## 📦 Key Dependencies

### Core
- React 19.2.0
- TypeScript ~5.9.3
- Vite ^7.2.2

### Routing & State
- React Router ^7.9.6
- TanStack Query ^5.90.10

### UI & Styling
- Tailwind CSS ^4.1.17
- Radix UI components
- Lucide React icons
- Framer Motion ^12.23.24

### Forms & Validation
- React Hook Form ^7.66.1
- Zod ^4.1.12
- @hookform/resolvers ^5.2.2

### HTTP & Utils
- Axios ^1.13.2
- Date-fns ^4.1.0
- Class Variance Authority ^0.7.1

## 🤝 Contributing

1. Follow the existing code style
2. Run `npm run lint` and `npm run type-check` before committing
3. Update documentation as needed

## 📄 License

MIT License - feel free to use this template for your projects!

---

**Happy coding! 🚀**