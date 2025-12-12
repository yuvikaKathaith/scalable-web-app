# TaskFlow - Scalable Web Application

A modern, full-stack task management application built with Next.js 16, featuring JWT-based authentication, CRUD operations, and a responsive UI. This project demonstrates best practices for building secure, scalable web applications.

## 🚀 Live Demo

[Add your deployed URL here after deployment]

## ✨ Features

### Authentication & Security
- **JWT-based authentication** with HTTP-only cookies
- **Password hashing** using Web Crypto API (SHA-256)
- **Protected routes** via Next.js middleware
- **Session management** with automatic token refresh
- **Client & server-side validation**

### Task Management
- **Full CRUD operations** (Create, Read, Update, Delete)
- **Real-time search** and filtering
- **Status tracking** (Pending, In Progress, Completed)
- **Priority levels** (Low, Medium, High)
- **Due date management**
- **Responsive dashboard** with modern UI

### User Profile
- View and update profile information
- Email management
- Account creation date tracking

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router) - React framework with SSR/SSG
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - RESTful API endpoints
- **Neon Postgres** - Serverless database
- **@neondatabase/serverless** - Database driver
- **jose** - JWT creation and verification

## 📁 Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   ├── auth/              # Authentication endpoints
│   │   │   ├── signup/
│   │   │   ├── login/
│   │   │   ├── logout/
│   │   │   └── me/
│   │   ├── tasks/             # Task CRUD endpoints
│   │   │   └── [id]/
│   │   └── profile/           # Profile management
│   ├── dashboard/             # Protected dashboard page
│   ├── login/                 # Login page
│   ├── signup/                # Signup page
│   └── page.tsx              # Landing page
├── components/
│   ├── auth/                  # Authentication forms
│   ├── dashboard/             # Dashboard components
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── auth.ts               # JWT & session utilities
│   ├── db.ts                 # Database queries
│   ├── password.ts           # Password hashing
│   └── types.ts              # TypeScript types
├── scripts/
│   └── 001-initial-schema.sql # Database schema
└── proxy.ts                   # Route protection middleware
\`\`\`

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- Neon Postgres account (or any PostgreSQL database)

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd taskflow-app
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
bun install
\`\`\`

### 3. Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Database (Required)
DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"

# JWT Secret (Required - use a strong random string in production)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Password Salt (Required - use a strong random string in production)
PASSWORD_SALT="your-super-secret-salt-change-this-in-production"
\`\`\`

### 4. Database Setup
Run the SQL script to create tables:

\`\`\`bash
# Option 1: Using psql
psql $DATABASE_URL < scripts/001-initial-schema.sql

# Option 2: Using Neon SQL Editor
# Copy the contents of scripts/001-initial-schema.sql
# and run in your Neon project's SQL Editor
\`\`\`

### 5. Run Development Server
\`\`\`bash
npm run dev
# or
bun dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## 📡 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Register a new user.

**Request:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
\`\`\`

**Response:**
\`\`\`json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
\`\`\`

#### POST `/api/auth/login`
Login with existing credentials.

**Request:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

**Response:**
\`\`\`json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
\`\`\`

#### POST `/api/auth/logout`
Logout the current user.

**Response:**
\`\`\`json
{
  "success": true
}
\`\`\`

#### GET `/api/auth/me`
Get current user information.

**Response:**
\`\`\`json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
\`\`\`

### Task Endpoints

#### GET `/api/tasks`
Get all tasks for the authenticated user.

**Response:**
\`\`\`json
{
  "tasks": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the frontend internship assignment",
      "status": "in-progress",
      "priority": "high",
      "due_date": "2024-12-20T00:00:00Z",
      "created_at": "2024-12-15T00:00:00Z",
      "updated_at": "2024-12-15T00:00:00Z"
    }
  ]
}
\`\`\`

#### POST `/api/tasks`
Create a new task.

**Request:**
\`\`\`json
{
  "title": "Complete project",
  "description": "Finish the frontend internship assignment",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-20"
}
\`\`\`

#### PUT `/api/tasks/:id`
Update an existing task.

**Request:**
\`\`\`json
{
  "title": "Complete project (Updated)",
  "description": "Updated description",
  "status": "completed",
  "priority": "high",
  "dueDate": "2024-12-20"
}
\`\`\`

#### DELETE `/api/tasks/:id`
Delete a task.

**Response:**
\`\`\`json
{
  "success": true
}
\`\`\`

### Profile Endpoints

#### PUT `/api/profile`
Update user profile.

**Request:**
\`\`\`json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
\`\`\`

## 🔒 Security Features

### 1. Password Security
- Passwords are hashed using SHA-256 with a salt
- Never stored in plain text
- Minimum length validation (6 characters)

### 2. JWT Authentication
- Tokens signed with HS256 algorithm
- 7-day expiration
- HTTP-only cookies prevent XSS attacks
- Secure flag in production

### 3. Route Protection
- Middleware validates tokens on protected routes
- Automatic redirect to login for unauthenticated users
- Server-side validation on all API endpoints

### 4. Input Validation
- Client-side validation for immediate feedback
- Server-side validation for security
- SQL injection prevention via parameterized queries

## 📈 Scalability Considerations

### Current Architecture
The application follows a monolithic architecture with the frontend and backend in a single Next.js application. This is ideal for:
- Small to medium-sized applications
- Fast development and deployment
- Simplified hosting (single deployment)

### Scaling Strategy for Production

#### 1. Database Optimization
**Current:** Single Neon Postgres instance
**Scale to:**
- **Read replicas** for query performance
- **Connection pooling** (PgBouncer) to handle more concurrent users
- **Database indexes** on frequently queried columns (already implemented)
- **Query optimization** with EXPLAIN ANALYZE
- **Caching layer** (Redis) for frequently accessed data

\`\`\`typescript
// Example: Add Redis caching
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

// Cache user profile
export async function getUserById(id: number) {
  const cached = await redis.get(`user:${id}`)
  if (cached) return cached
  
  const user = await sql`SELECT * FROM users WHERE id = ${id}`
  await redis.set(`user:${id}`, user, { ex: 3600 }) // 1 hour TTL
  return user
}
\`\`\`

#### 2. Frontend Performance
**Current:** Server-side rendering with Next.js
**Scale to:**
- **Static generation** for public pages
- **Incremental Static Regeneration (ISR)** for semi-dynamic content
- **CDN caching** (Vercel Edge Network)
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **React Server Components** for reduced client bundle size

\`\`\`typescript
// Example: Static generation for landing page
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  return <LandingPage />
}
\`\`\`

#### 3. API Architecture Evolution
**Current:** Monolithic API routes
**Scale to:**
- **Microservices architecture** for independent scaling
- **API Gateway** for request routing and rate limiting
- **GraphQL** for flexible data fetching
- **WebSockets** for real-time features
- **Message queue** (RabbitMQ/AWS SQS) for async operations

\`\`\`
┌─────────────┐
│   Frontend  │
│  (Next.js)  │
└──────┬──────┘
       │
┌──────▼──────────┐
│  API Gateway    │
│ (Rate Limiting) │
└──────┬──────────┘
       │
   ┌───┴───┐
   │       │
┌──▼──┐ ┌──▼──┐ ┌────────┐
│Auth │ │Task │ │Profile │
│ API │ │ API │ │  API   │
└──┬──┘ └──┬──┘ └────┬───┘
   │       │         │
   └───┬───┴─────────┘
       │
   ┌───▼───────┐
   │ Database  │
   │  (Neon)   │
   └───────────┘
\`\`\`

#### 4. Authentication at Scale
**Current:** JWT with HTTP-only cookies
**Scale to:**
- **OAuth 2.0** for social login
- **Refresh token rotation** for enhanced security
- **Session management service** (Redis)
- **Multi-factor authentication (MFA)**
- **Rate limiting** on auth endpoints

\`\`\`typescript
// Example: Rate limiting with Upstash
import { Ratelimit } from '@upstash/ratelimit'

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
})

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }
  
  // ... login logic
}
\`\`\`

#### 5. Monitoring & Observability
**Add for production:**
- **Error tracking** (Sentry)
- **Performance monitoring** (Vercel Analytics, Datadog)
- **Logging** (structured logs with Winston/Pino)
- **Health checks** for all services
- **Alerts** for critical errors and performance issues

\`\`\`typescript
// Example: Error tracking with Sentry
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
})

// In API routes
try {
  // ... your code
} catch (error) {
  Sentry.captureException(error)
  throw error
}
\`\`\`

#### 6. Deployment Strategy
**Current:** Single deployment on Vercel
**Scale to:**
- **Multi-region deployment** for global users
- **Blue-green deployments** for zero downtime
- **Auto-scaling** based on traffic
- **Load balancing** across multiple instances
- **Docker containers** with Kubernetes orchestration

#### 7. CI/CD Pipeline
\`\`\`yaml
# Example: GitHub Actions workflow
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run lint
      - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
\`\`\`

### Performance Targets for Scale
- **Response time:** < 200ms for 95th percentile
- **Throughput:** 1000+ requests per second
- **Availability:** 99.9% uptime
- **Database queries:** < 50ms average
- **Page load:** < 2s First Contentful Paint

## 🧪 Testing Strategy for Production

### Unit Tests
\`\`\`typescript
// Example: Test password hashing
import { hashPassword, verifyPassword } from '@/lib/password'

describe('Password Utilities', () => {
  it('should hash and verify password correctly', async () => {
    const password = 'testpassword123'
    const hash = await hashPassword(password)
    const isValid = await verifyPassword(password, hash)
    expect(isValid).toBe(true)
  })
})
\`\`\`

### Integration Tests
\`\`\`typescript
// Example: Test API endpoints
describe('Auth API', () => {
  it('should create a new user', async () => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      }),
    })
    expect(response.status).toBe(200)
  })
})
\`\`\`

### E2E Tests
\`\`\`typescript
// Example: Playwright test
import { test, expect } from '@playwright/test'

test('user can login and create task', async ({ page }) => {
  await page.goto('/login')
  await page.fill('[name=email]', 'test@example.com')
  await page.fill('[name=password]', 'password123')
  await page.click('button[type=submit]')
  
  await expect(page).toHaveURL('/dashboard')
  await page.click('text=New Task')
  await page.fill('[name=title]', 'Test Task')
  await page.click('button:has-text("Create Task")')
  
  await expect(page.locator('text=Test Task')).toBeVisible()
})
\`\`\`

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables for Production
\`\`\`env
DATABASE_URL=your_production_database_url
JWT_SECRET=generate_strong_random_string_here
PASSWORD_SALT=generate_strong_random_string_here
NODE_ENV=production
\`\`\`

## 📝 Development Notes

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Consistent naming conventions**
- **Component-based architecture**

### Best Practices Implemented
1. Server Components by default for better performance
2. Client Components only when needed
3. Proper error handling and user feedback
4. Loading states for better UX
5. Responsive design for all screen sizes
6. Accessibility considerations (semantic HTML, ARIA labels)
7. SEO optimization (metadata, structured data)

## 🤝 Contributing

This is an internship assignment project, but suggestions and feedback are welcome!

## 📄 License

This project is created as part of a frontend developer internship assignment.

## 👤 Author

[Your Name]
- GitHub: [@yourusername]
- LinkedIn: [Your Profile]
- Email: your.email@example.com

---

Built with ❤️ using Next.js, React, and TypeScript
