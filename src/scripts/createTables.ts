import { supabase } from '../lib/api/supabaseClient';

export async function createTables() {
  try {
    console.log('Criando tabelas no Supabase...');

    // Criar tabela de usuários
    const { error: usersError } = await supabase.rpc('create_users_table');
    if (usersError) throw usersError;

    // Criar tabela de categorias de posts
    const { error: categoriesError } = await supabase.rpc('create_post_categories_table');
    if (categoriesError) throw categoriesError;

    // Criar tabela de tags de posts
    const { error: tagsError } = await supabase.rpc('create_post_tags_table');
    if (tagsError) throw tagsError;

    // Criar tabela de posts
    const { error: postsError } = await supabase.rpc('create_posts_table');
    if (postsError) throw postsError;

    // Criar tabela de vídeos
    const { error: videosError } = await supabase.rpc('create_videos_table');
    if (videosError) throw videosError;

    // Criar tabela de podcasts
    const { error: podcastsError } = await supabase.rpc('create_podcasts_table');
    if (podcastsError) throw podcastsError;

    // Criar tabela de categorias de mídia
    const { error: mediaCategoriesError } = await supabase.rpc('create_media_categories_table');
    if (mediaCategoriesError) throw mediaCategoriesError;

    // Criar tabela de assinantes da newsletter
    const { error: subscribersError } = await supabase.rpc('create_newsletter_subscribers_table');
    if (subscribersError) throw subscribersError;

    // Criar tabela de campanhas da newsletter
    const { error: campaignsError } = await supabase.rpc('create_newsletter_campaigns_table');
    if (campaignsError) throw campaignsError;

    // Criar tabela de páginas
    const { error: pagesError } = await supabase.rpc('create_pages_table');
    if (pagesError) throw pagesError;

    // Criar tabela de componentes de página
    const { error: componentsError } = await supabase.rpc('create_page_components_table');
    if (componentsError) throw componentsError;

    // Criar tabela de arquivos de mídia
    const { error: mediaFilesError } = await supabase.rpc('create_media_files_table');
    if (mediaFilesError) throw mediaFilesError;

    console.log('Todas as tabelas foram criadas com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
    return false;
  }
}

// Executa a criação das tabelas se o arquivo for executado diretamente
if (require.main === module) {
  createTables();
} 