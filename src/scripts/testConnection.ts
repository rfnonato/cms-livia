import { supabase } from '../lib/api/supabaseClient';

export async function testConnection() {
  try {
    console.log('Testando conexão com o Supabase...');
    
    // Tenta buscar a versão do Supabase
    const { data, error } = await supabase.from('_version').select('*').limit(1);
    
    if (error) {
      console.error('Erro ao conectar com o Supabase:', error.message);
      return false;
    }
    
    console.log('Conexão com o Supabase estabelecida com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao testar conexão:', error);
    return false;
  }
}

// Executa o teste de conexão se o arquivo for executado diretamente
if (require.main === module) {
  testConnection();
} 