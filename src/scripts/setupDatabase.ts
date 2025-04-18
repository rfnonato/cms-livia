import { testConnection } from './testConnection';
import { createTables } from './createTables';

async function setupDatabase() {
  try {
    console.log('Iniciando configuração do banco de dados...');
    
    // Testa a conexão com o Supabase
    const isConnected = await testConnection();
    if (!isConnected) {
      console.error('Não foi possível conectar ao Supabase. Verifique suas credenciais.');
      return;
    }
    
    // Cria as tabelas necessárias
    await createTables();
    
    console.log('Configuração do banco de dados concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a configuração do banco de dados:', error);
  }
}

// Executa a configuração
setupDatabase(); 