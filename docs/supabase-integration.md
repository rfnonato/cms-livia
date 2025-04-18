# Supabase Integration Documentation

## Overview
This document outlines the Supabase integration implementation for the CMS application, including database structure, authentication, and helper functions for various features.

## Configuration
The Supabase client is initialized using environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase instance
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anonymous key for public access

## Database Structure

### Users
Table: `users`
- Primary user information storage
- Fields:
  - `id`: Unique identifier
  - `email`: User's email address
  - `name`: User's full name
  - `role`: User's role in the system
  - `avatar_url`: Optional profile picture URL
  - `is_active`: Account status
  - Timestamps: `created_at`, `updated_at`

### Posts
Table: `posts`
- Blog post content
- Fields:
  - `id`: Unique identifier
  - `title`: Post title
  - `slug`: URL-friendly identifier
  - `excerpt`: Brief description
  - `content`: Main post content
  - `cover_image`: Featured image URL
  - `published_at`: Publication date
  - `author_id`: Reference to users table
  - `status`: Publication status
  - `meta_title`: SEO title
  - `meta_description`: SEO description
  - `views_count`: Number of views
  - `featured`: Featured post flag
  - Timestamps: `created_at`, `updated_at`

### Categories and Tags
Tables: `post_categories`, `post_tags`
- Organizational structures for posts
- Category Fields:
  - `id`, `name`, `slug`, `description`, `color`
- Tag Fields:
  - `id`, `name`, `slug`
- Relation Tables:
  - `post_category_relations`
  - `post_tag_relations`

### Media
Tables: `videos`, `podcasts`, `media_files`
- Video Fields:
  - YouTube integration (`youtube_id`)
  - Duration, thumbnail, transcript
- Podcast Fields:
  - Multiple platform IDs (Spotify, Apple, Google)
  - Duration, thumbnail, transcript
- Media Files:
  - General purpose media storage
  - Supports images, documents, etc.
  - Includes metadata like size, dimensions, duration

### Newsletter
Tables: `newsletter_subscribers`, `newsletter_campaigns`
- Subscriber Management:
  - Email, name, status
  - Confirmation and tracking
  - Tags for segmentation
- Campaign Management:
  - Content and scheduling
  - Performance metrics
  - Status tracking

### Pages
Tables: `pages`, `page_components`
- Dynamic page creation
- Fields:
  - Basic page info (title, slug, content)
  - SEO metadata
  - Template selection
  - Hierarchical structure
- Components:
  - Modular page building
  - Custom component types
  - Sortable elements

## Helper Functions

### Authentication (`auth`)
```typescript
- signIn(email, password)
- signUp(email, password)
- signOut()
- resetPassword(email)
- updatePassword(newPassword)
- getSession()
```

### Posts Management (`posts`)
```typescript
- getAll()
- getById(id)
- create(data)
- update(id, data)
- delete(id)
```

### Media Management (`media`)
```typescript
- getAll()
- getById(id)
- create(data)
- update(id, data)
- delete(id)
- upload(bucket, path, file)
- getPublicUrl(bucket, path)
- deleteFile(bucket, path)
```

### Newsletter Management (`newsletter`)
```typescript
- subscribe(email)
- unsubscribe(email)
- getCampaigns()
```

### Page Management (`pages`)
```typescript
- getAll()
- getBySlug(slug)
- create(data)
- update(id, data)
- delete(id)
```

### User Management (`users`)
```typescript
- getAll()
- getById(id)
- update(id, data)
- updateAvatar(userId, file)
```

## Database Views

### posts_with_categories
- Combines post data with category information
- Includes author details
- Optimized for listing and filtering

## Custom Functions

### get_posts_with_meta
Parameters:
- `p_limit`: Number of posts to return
- `p_offset`: Pagination offset
- `p_status`: Filter by status
- `p_search`: Search term
- `p_category_id`: Filter by category
- `p_tag_id`: Filter by tag
- `p_author_id`: Filter by author
- `p_featured`: Filter featured posts

### increment_post_views
- Updates view count for posts
- Parameter: `p_post_id`

## Security Considerations
- Environment variables must be properly configured
- Authentication is required for sensitive operations
- File uploads are restricted to specific buckets
- Public URLs are generated for approved content only 