import app from "./app.js";
const port = 3000;

// Ouvindo a porta do servidor local
app.listen(port, function(){
    //console.log('Servidor subiu na porta '+port);
    console.log(`Servidor iniciado na porta ${port}`);
});