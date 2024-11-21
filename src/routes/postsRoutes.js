import express from "express";
import { listarPosts } from "../controllers/postController.js";

const routes = (app) => {
    // Permite que o Express entenda JSON no corpo das requisições.
    app.use(express.json());
    // Rota GET para obter todos os posts.
    app.get ("/posts", listarPosts);
}

export default routes;