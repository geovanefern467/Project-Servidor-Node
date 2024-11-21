import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
async function conectarAoBanco(stringConexao) {
  let mongoClient;

  // Bloco try-catch para lidar com possíveis erros durante a conexão
  try {
    // Cria um novo cliente MongoDB com a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Aguarda a conclusão da conexão com o banco de dados
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para realizar operações no banco de dados
    return mongoClient;
  } catch (erro) {
    // Imprime uma mensagem de erro no console caso a conexão falhe
    console.error('Falha na conexão com o banco!', erro);

    // Encerra a aplicação em caso de falha na conexão
    process.exit();
  }
}