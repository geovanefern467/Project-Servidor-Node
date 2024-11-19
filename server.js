import express from "express";

const posts = [
      { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
      { id: 2, descricao: "Gato adorável dormindo", imagem: "https://placekitten.com/400/300"},
      { id: 3,  descricao: "Paisagem incrível de um pôr do sol", imagem: "https://picsum.photos/seed/picsum/200/300"}
 
  ];

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor executando...");
})

app.get ("/posts", (req, res)=>{
    res.status(200).json(posts);
});


function buscarPostPorId(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    })
}

app.get ("/posts/:id", (req, res)=>{
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});