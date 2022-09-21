import express from 'express';
import clientPg from '../db/database.js'
//import clientPG from '../database/index.js';
const router = express.Router();

//let convidados = [];

// buscar todos os convidados no banco de dados

    router.get('/convidados', async function(req,res){
    let convidados = await clientPg.query ('select * from convidados.convidados order by id asc');

    res.status(200).send(convidados.rows);
});


// buscar convidados no banco de dados por id
router.get('/convidados/:id', async function(req,res){
    let id = req.params.id;
    
    let convidados = await clientPg.query (`select * from convidados.convidados where id=${id}`);
   
    res.status(200).send(convidados.rows);
}); 

// requisição de atualização de parte do endpoint em convidados

router.patch('/convidados/:id', async function(req,res){
    let id = req.params.id; 
    let {nome, area, programa, email, data_criacao, data_atualizacao} = req.body;

    let convidados = await clientPg.query (`UPDATE convidados.convidados 
    SET 
        nome = '${nome}',
        area = '${area}',
        programa = '${programa}',
        email = '${email}',
        data_criacao = '${data_criacao}', 
        data_atualizacao = '${data_atualizacao}'
    WHERE id=${id}`);

   res.status(200).send("Atualizado com sucesso!");    
});

// endpoint para atualizar convidados usando PUT
router.put('/convidados/:id', async function(req,res){

    let id = req.params.id;
    let { nome, area, programa, email, data_criacao, data_atualizacao } = req.body;

    const query = `
                update convidados.convidados 
                set nome=$2, area=$3, programa=$4, 
                    email=$5, data_criacao=$6, data_atualizacao=$7
                where id=$1`;
    const valores = [id,nome,area,programa,email,data_criacao,data_atualizacao];

    const resp = await clientPg.query(query,valores);

    res.status(200).send('convidado atualizado com sucesso');
    
});


// endpoint para deletar um registro por id
router.delete('/convidados/:id', async function(req,res){
     let id = req.params.id;  

     let convidados = await clientPg.query (`DELETE from convidados.convidados WHERE id=${id}`);
 
res.status(200).send("Registro deletado!");
});

//criação de dados para convidados no banco de dados
router.post('/convidados', async function(req,res){
    let { nome, area, programa, email, data_criacao, data_atualizacao } = req.body;

    const query = ` INSERT INTO convidados.convidados(
                    nome, area, programa, email, data_criacao, data_atualizacao)
                    VALUES ($1, $2, $3, $4, $5, $6)`;
    const valores = [nome,area,programa,email,data_criacao,data_atualizacao];

    const resp = await clientPg.query(query,valores); 
    
    res.status(201).send('Convidado cadastrado com sucesso');
});


export default router;