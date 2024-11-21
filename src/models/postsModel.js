import conectarAoBanco from "../config/dbConfig.js"; 



// Conecta ao banco de dados MongoDB usando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados.
export default async function getTodosPosts(){
    // Obtém o banco de dados 'imersao-instabytes' e a coleção 'posts'.
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    // Retorna um array com todos os documentos da coleção 'posts'.
    return colecao.find().toArray()
}