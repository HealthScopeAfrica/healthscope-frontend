# Reader Module Documentation

## 📁 Directory Structure

```
app/reader/
├── onboarding.tsx                          # Main onboarding entry point
├── data/
│   └── articles.ts                         # Data abstraction layer for articles
├── components/
│   ├── dashboard/
│   │   ├── featured.tsx                    # Main dashboard page with featured content
│   │   
│   ├── pages/
│   │   ├── dashboard.tsx                   # Dashboard page component
│   │   ├── articles-list.tsx               # All articles listing page
│   │   ├── article-detail.tsx              # Individual article view page
│   │   └── featured-articles.tsx           # Featured articles page
│   ├── shared/
│   │   └── article-card.tsx                # Reusable article display components
│   ├── onboarding/
│   │   ├── welcome-step.tsx                # Welcome/intro step
│   │   ├── location-step.tsx               # Location selection step
│   │   ├── age-group-step.tsx              # Age group selection step
│   │   └── health-topics-step.tsx          # Health interests step
│   └── kulo-ai/
│       ├── index.ts                        # KuloAI module exports
│       ├── types.ts                        # TypeScript type definitions
│       ├── config.ts                       # Configuration and constants
│       ├── hooks/
│       │   └── use-kulo-chat.ts            # React hook for chat state management
│       └── components/
│           └── chat-panel.tsx              # Main chat interface component
```

## 🎯 Module Overview

The **Reader Module** is the core user-facing module for health content consumption in HealthScope. It provides:

- **Dashboard Experience**: Personalized content discovery and quick actions
- **Article Management**: Browsing, reading, and interacting with health articles
- **AI Assistance**: KuloAI chat integration for health guidance
- **User Onboarding**: Multi-step registration and preference setup

## 📊 Architecture Patterns

### 1. Data Abstraction Layer (`/data/`)

**Purpose**: Centralized data management with API-ready architecture

```typescript
// app/reader/data/articles.ts
export interface Article {
  id: number
  title: string
  content: string
  category: string
  author: string
  // ... more fields
}

export async function getArticles(): Promise<Article[]>
export async function getArticleById(id: number): Promise<Article | null>
export async function searchArticles(query: string): Promise<Article[]>
```

**Key Features**:
- ✅ **Mock Data**: Currently uses comprehensive mock data
- ✅ **API Ready**: Functions designed to easily switch to real API calls
- ✅ **Type Safe**: Full TypeScript interfaces for all data structures
- ✅ **Search & Filter**: Built-in search and filtering capabilities

### 2. Component Architecture (`/components/`)

#### A. Page Components (`/pages/`)
**Purpose**: Full-page components that represent routes

- `dashboard.tsx` - Main reader dashboard
- `articles-list.tsx` - Browse all articles with search/filter
- `article-detail.tsx` - Individual article reading view
- `featured-articles.tsx` - Curated featured content

**Characteristics**:
- Wrapped by `reader-dashboard-layout.tsx` via React Router
- Handle route parameters and navigation
- Orchestrate data fetching and state management

#### B. Shared Components (`/shared/`)
**Purpose**: Reusable components used across multiple pages

```typescript
// article-card.tsx exports:
- ArticleCard: Individual article display
- ArticleGrid: Grid layout for multiple articles
- ArticleList: List layout for multiple articles
- ArticleCardSkeleton: Loading state component
```

**Benefits**:
- ✅ **Consistent UI**: Same article display across all pages
- ✅ **Loading States**: Built-in skeleton loading
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Smart Navigation**: Tracks article source for back navigation

#### C. Feature-Specific Modules

##### KuloAI Module (`/kulo-ai/`)
**Purpose**: AI health assistant chat system

**Structure**:
```
kulo-ai/
├── index.ts              # Public API exports
├── types.ts              # TypeScript definitions
├── config.ts             # Configuration & constants
├── hooks/
│   └── use-kulo-chat.ts  # React state management
└── components/
    └── chat-panel.tsx    # UI component
```

**Key Features**:
- ✅ **Modular Design**: Self-contained with clear APIs
- ✅ **State Management**: Custom React hook for chat state
- ✅ **Type Safety**: Comprehensive TypeScript interfaces
- ✅ **Configurable**: Centralized configuration for easy customization
- ✅ **Emergency Handling**: Built-in emergency keyword detection

##### Onboarding Module (`/onboarding/`)
**Purpose**: Multi-step user registration flow

**Components**:
- `welcome-step.tsx` - Introduction and welcome
- `location-step.tsx` - Geographic preference selection  
- `age-group-step.tsx` - Demographic information
- `health-topics-step.tsx` - Health interest customization

**Features**:
- ✅ **Step-by-step Flow**: Guided user experience
- ✅ **Progress Tracking**: Visual progress indicators
- ✅ **Validation**: Form validation at each step
- ✅ **Responsive Design**: Mobile-optimized forms

## 🔀 Data Flow

### 1. Article Reading Flow
```
User → Page Component → Data Layer → API/Mock Data
     ← Rendered UI    ← Processed   ← Raw Data
```

### 2. KuloAI Chat Flow
```
User Input → useKuloChat Hook → State Management → API Call
          ← Chat Panel      ← Updated State   ← AI Response
```

### 3. Navigation Flow
```
User Action → React Router → Layout Component → Page Component
           ← UI Update    ← Navigation      ← Content Render
```

## 🎨 Layout Integration

### React Router Layout Nesting

The reader module uses React Router's layout nesting pattern:

```

**Benefits**:
- ✅ **Consistent Layout**: All reader pages share the same navigation and structure
- ✅ **Performance**: Layout persists across page navigation
- ✅ **Clean Architecture**: Page components focus on content, not layout concerns

## 🔧 Development Guidelines

### 1. Adding New Pages

1. Create component in `/components/pages/`
2. Add route to `app/routes.ts` within the reader layout
3. Update navigation links in `reader-dashboard-layout.tsx`
4. Add data functions to `/data/articles.ts` if needed

### 2. Adding New Shared Components

1. Create in `/components/shared/`
2. Export from module for reusability
3. Include TypeScript interfaces
4. Add loading states and error handling

### 3. Extending KuloAI

1. Update types in `/kulo-ai/types.ts`
2. Modify configuration in `/kulo-ai/config.ts`
3. Extend hook logic in `/kulo-ai/hooks/use-kulo-chat.ts`
4. Update UI in `/kulo-ai/components/chat-panel.tsx`

### 4. Data Layer Modifications

1. Update interfaces in `/data/articles.ts`
2. Modify mock data as needed
3. Ensure API-ready function signatures
4. Update TypeScript types across components

## 🚀 Future Enhancements

### Planned Features
- [ ] **Real API Integration**: Replace mock data with actual API calls
- [ ] **User Preferences**: Personalized content recommendations
- [ ] **Article Bookmarking**: Save articles for later reading
- [ ] **Social Features**: Article sharing and comments
- [ ] **Offline Reading**: PWA capabilities for offline access
- [ ] **Advanced Search**: Full-text search with filters
- [ ] **Reading Progress**: Track reading time and completion

### Architecture Improvements
- [ ] **Component Library**: Extract shared components to design system
- [ ] **State Management**: Consider Zustand/Redux for complex state
- [ ] **Testing**: Unit and integration test coverage
- [ ] **Performance**: Code splitting and lazy loading
- [ ] **Accessibility**: WCAG compliance improvements

## 📝 File Naming Conventions

- **Pages**: `kebab-case.tsx` (e.g., `articles-list.tsx`)
- **Components**: `PascalCase.tsx` (e.g., `ArticleCard.tsx`)
- **Hooks**: `use-kebab-case.ts` (e.g., `use-kulo-chat.ts`)
- **Types**: `types.ts` or `interfaces.ts`
- **Data**: `kebab-case.ts` (e.g., `articles.ts`)

## 🔗 Key Dependencies

- **React Router 7**: Navigation and layout management
- **Tailwind CSS**: Styling and responsive design
- **Lucide React**: Icon library
- **TypeScript**: Type safety and developer experience

---

*This documentation reflects the current state of the reader module as of the latest restructuring. For questions or contributions, please refer to the main project documentation.*