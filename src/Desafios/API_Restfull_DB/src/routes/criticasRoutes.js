import express from 'express';
import clientPg from '../db/database.js'

const router = express.Router();

// buscar todos as criticas no banco de dados
router.get('/criticas', async function(req,res){
    let criticas = await clientPg.query ('select * from convidados.criticas order by id asc');

    res.status(200).send(criticas.rows);
});


// buscar criticas no banco de dados por id
router.get('/criticas/:id', async function(req,res){
    let id = req.params.id;
    
    let criticas = await clientPg.query (`select * from convidados.criticas where id=${id}`);
   
    res.status(200).send(criticas.rows);
}); 

// requisição de atualização de parte do endpoint em criticas

router.patch('/criticas/:id', async function(req,res){
    
    let id = req.params.id; 
    let {FK_usuario, FK_convidado, nota, comentario, data_criacao, data_atualizacao} = req.body;

    let criticas = await clientPg.query (`UPDATE convidados.criticas 
    SET 
        FK_usuario = '${FK_usuario}',
        FK_convidado = '${FK_convidado}',
        nota = '${nota}',
        comentario = '${comentario}',
        data_criacao = '${data_criacao}',
        data_atualizacao = '${data_atualizacao}'
    WHERE id=${id}`);

   res.status(200).send("Atualizado com sucesso!");    
});

// endpoint para deletar um registro por id
router.delete('/criticas/:id', async function(req,res){
     let id = req.params.id;  

     let criticas = await clientPg.query (`DELETE from convidados.criticas WHERE id=${id}`);
 
res.status(200).send("Registro deletado!");
});

//criação de dados para criticas no banco de dados
router.post('/criticas', async function(req,res){

    let { FK_usuario, FK_convidado, nota, comentario, data_criacao, data_atualizacao } = req.body;

    const query = ` INSERT INTO convidados.criticas(
        FK_usuario, FK_convidado, nota, comentario, data_criacao, data_atualizacao)
                    VALUES ($1, $2, $3, $4, $5, $6)`;
    const valores = [FK_usuario,FK_convidado,nota,comentario,data_criacao,data_atualizacao];

    const resp = await clientPg.query(query,valores); 
    
    res.status(201).send('Crítica cadastrada com sucesso');   

});


export default router;