import express from "express"; // Importa o framework Express para criar o servidor
import multer from "multer"; // Importa o Multer para lidar com requisições multipart/form-data (envio de arquivos)
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js"; // Importa funções do controlador de posts para lidar com a lógica de posts

// Configura o armazenamento do Multer para imagens enviadas
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // Define o diretório para salvar arquivos enviados
    cb(null, 'uploads/'); // Define a pasta de destino como 'uploads/'
  },
  filename: function (req, file, cb) { // Define o nome do arquivo para os arquivos enviados
    cb(null, file.originalname); // Usa o nome original do arquivo da requisição
  }
});

const upload = multer({ dest: "./uploads", storage }); // Cria uma instância do Multer com a configuração de armazenamento

const routes = (app) => {
  // Permite que o servidor interprete dados JSON no corpo das requisições
  app.use(express.json());

  // Rota GET para obter todos os posts (implementação em listarPosts)
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post (implementação em postarNovoPost)
  app.post("/posts", postarNovoPost);

  // Rota POST para fazer upload de imagens (implementação em uploadImagem)
  app.post("/upload", upload.single("imagem"), uploadImagem); // Use 'imagem' como chave para o arquivo enviado
};

export default routes; // Exporta a função de rotas para ser usada no arquivo principal do servidor