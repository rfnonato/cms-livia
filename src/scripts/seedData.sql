-- Inserir categorias de posts
INSERT INTO post_categories (name, slug, description) VALUES
  ('Tecnologia', 'tecnologia', 'Posts sobre tecnologia'),
  ('Saúde', 'saude', 'Posts sobre saúde'),
  ('Bem-estar', 'bem-estar', 'Posts sobre bem-estar')
ON CONFLICT (slug) DO NOTHING;

-- Inserir tags
INSERT INTO post_tags (name, slug) VALUES
  ('Dicas', 'dicas'),
  ('Tutorial', 'tutorial'),
  ('Novidades', 'novidades')
ON CONFLICT (slug) DO NOTHING;

-- Inserir posts
INSERT INTO posts (title, slug, excerpt, content, status, published_at) VALUES
  ('Primeiro Post', 'primeiro-post', 'Este é o primeiro post do blog', 'Conteúdo do primeiro post...', 'published', NOW()),
  ('Segundo Post', 'segundo-post', 'Este é o segundo post do blog', 'Conteúdo do segundo post...', 'draft', NULL)
ON CONFLICT (slug) DO NOTHING;

-- Inserir vídeos
INSERT INTO videos (title, description, youtube_id, published_at) VALUES
  ('Primeiro Vídeo', 'Este é o primeiro vídeo', 'abc123', NOW()),
  ('Segundo Vídeo', 'Este é o segundo vídeo', 'def456', NOW())
ON CONFLICT DO NOTHING;

-- Inserir podcasts
INSERT INTO podcasts (title, description, spotify_id, published_at) VALUES
  ('Primeiro Podcast', 'Este é o primeiro podcast', 'spotify123', NOW()),
  ('Segundo Podcast', 'Este é o segundo podcast', 'spotify456', NOW())
ON CONFLICT DO NOTHING;

-- Inserir páginas
INSERT INTO pages (title, slug, content, status, published_at) VALUES
  ('Sobre', 'sobre', 'Conteúdo da página Sobre', 'published', NOW()),
  ('Contato', 'contato', 'Conteúdo da página Contato', 'published', NOW())
ON CONFLICT (slug) DO NOTHING; 