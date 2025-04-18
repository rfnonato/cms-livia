# CMS Lívia - Documentation

## Overview
CMS Lívia is a modern content management system built with Next.js and Supabase, designed to manage various types of content including blog posts, media files, newsletters, and dynamic pages.

## Features

### Content Management
- Blog post creation and management
- Media library (videos, podcasts, images)
- Dynamic page builder
- Newsletter system
- Category and tag organization

### User Management
- Authentication system
- Role-based access control
- User profiles with avatars

### Media Management
- Support for multiple media types
- Integration with YouTube and podcast platforms
- File upload and storage
- Media categorization

### Newsletter System
- Subscriber management
- Campaign creation and scheduling
- Performance tracking
- Email templates

### SEO Features
- Meta title and description management
- URL slug customization
- SEO-friendly content structure

## Technical Documentation

### Architecture
- Frontend: Next.js with TypeScript
- Backend: Supabase (PostgreSQL + APIs)
- Authentication: Supabase Auth
- File Storage: Supabase Storage

### Key Components
- [Supabase Integration](./supabase-integration.md)
- Database Schema
- API Endpoints
- Helper Functions

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run development server: `npm run dev`

### Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key

### Project Structure
```
cms-livia/
├── src/
│   ├── components/    # Reusable UI components
│   ├── lib/          # Utility functions and API clients
│   ├── pages/        # Next.js pages and API routes
│   └── types/        # TypeScript type definitions
├── public/           # Static files
└── docs/            # Documentation
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 