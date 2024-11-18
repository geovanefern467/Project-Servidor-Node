import express from "express";

const app = express();
app.listen(3000, () =>{
    console.log("Servidor executando...");
})

app.get ("/api", (req, res)=>{
    res.status(200).send ("Boas vindas ao servidor criado por Geovane Ribeiro!");
});