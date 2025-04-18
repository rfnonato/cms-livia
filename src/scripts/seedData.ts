import { supabase } from '../lib/api/supabaseClient';

export async function seedData() {
  try {
    console.log('Iniciando seed de dados...');

    // 1. Criar usuário admin
    const { data: adminUser, error: adminError } = await supabase.auth.signUp({
      email: 'admin@example.com',
      password: 'admin123',
      options: {
        data: {
          name: 'Admin',
          role: 'admin'
        }
      }
    });

    if (adminError) throw adminError;
    console.log('Usuário admin criado:', adminUser);

    // 2. Criar categorias de posts
    const categories = [
      { name: 'Tecnologia', slug: 'tecnologia', description: 'Posts sobre tecnologia' },
      { name: 'Saúde', slug: 'saude', description: 'Posts sobre saúde' },
      { name: 'Bem-estar', slug: 'bem-estar', description: 'Posts sobre bem-estar' }
    ];

    for (const category of categories) {
      const { error } = await supabase
        .from('post_categories')
        .insert(category);
      
      if (error) throw error;
    }
    console.log('Categorias criadas');

    // 3. Criar tags
    const tags = [
      { name: 'Dicas', slug: 'dicas' },
      { name: 'Tutorial', slug: 'tutorial' },
      { name: 'Novidades', slug: 'novidades' }
    ];

    for (const tag of tags) {
      const { error } = await supabase
        .from('post_tags')
        .insert(tag);
      
      if (error) throw error;
    }
    console.log('Tags criadas');

    // 4. Criar posts
    const posts = [
      {
        title: 'Primeiro Post',
        slug: 'primeiro-post',
        excerpt: 'Este é o primeiro post do blog',
        content: 'Conteúdo do primeiro post...',
        author_id: adminUser.user?.id,
        status: 'published',
        published_at: new Date().toISOString()
      },
      {
        title: 'Segundo Post',
        slug: 'segundo-post',
        excerpt: 'Este é o segundo post do blog',
        content: 'Conteúdo do segundo post...',
        author_id: adminUser.user?.id,
        status: 'draft'
      }
    ];

    for (const post of posts) {
      const { error } = await supabase
        .from('posts')
        .insert(post);
      
      if (error) throw error;
    }
    console.log('Posts criados');

    // 5. Criar vídeos
    const videos = [
      {
        title: 'Primeiro Vídeo',
        description: 'Este é o primeiro vídeo',
        youtube_id: 'abc123',
        published_at: new Date().toISOString()
      },
      {
        title: 'Segundo Vídeo',
        description: 'Este é o segundo vídeo',
        youtube_id: 'def456',
        published_at: new Date().toISOString()
      }
    ];

    for (const video of videos) {
      const { error } = await supabase
        .from('videos')
        .insert(video);
      
      if (error) throw error;
    }
    console.log('Vídeos criados');

    // 6. Criar podcasts
    const podcasts = [
      {
        title: 'Primeiro Podcast',
        description: 'Este é o primeiro podcast',
        spotify_id: 'spotify123',
        published_at: new Date().toISOString()
      },
      {
        title: 'Segundo Podcast',
        description: 'Este é o segundo podcast',
        spotify_id: 'spotify456',
        published_at: new Date().toISOString()
      }
    ];

    for (const podcast of podcasts) {
      const { error } = await supabase
        .from('podcasts')
        .insert(podcast);
      
      if (error) throw error;
    }
    console.log('Podcasts criados');

    // 7. Criar páginas
    const pages = [
      {
        title: 'Sobre',
        slug: 'sobre',
        content: 'Conteúdo da página Sobre',
        status: 'published',
        published_at: new Date().toISOString()
      },
      {
        title: 'Contato',
        slug: 'contato',
        content: 'Conteúdo da página Contato',
        status: 'published',
        published_at: new Date().toISOString()
      }
    ];

    for (const page of pages) {
      const { error } = await supabase
        .from('pages')
        .insert(page);
      
      if (error) throw error;
    }
    console.log('Páginas criadas');

    console.log('Seed de dados concluído com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao fazer seed dos dados:', error);
    return false;
  }
}

// Executa o seed se o arquivo for executado diretamente
if (require.main === module) {
  seedData();
} 