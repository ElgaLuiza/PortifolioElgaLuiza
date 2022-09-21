import contatos from "../routes/contatosRoutes.js";
import convidados from "../routes/convidadosRoutes.js";
import criticas from "../routes/criticasRoutes.js"

const routes = function(app){
    
    
    app.use(contatos);    
    app.use(convidados);
    app.use(criticas);
    
    
    //esta resposta será dada se nenhuma outra for encontrada
    app.all('*', function (req,res){
    res.status(404).send('página nao encontrada');
});
};
export default routes;
