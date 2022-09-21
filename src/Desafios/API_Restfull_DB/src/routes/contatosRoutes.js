import express from 'express';
import clientPg from '../db/database.js'

const router = express.Router();

// let usuarios = [];

// buscar todos os usuarios no banco de dados

    router.get('/usuarios', async function(req,res){
    let usuarios = await clientPg.query ('select * from convidados.usuarios order by id asc');

    res.status(200).send(usuarios.rows);
});


// buscar usuarios no banco de dados por id
router.get('/usuarios/:id', async function(req,res){
    let id = req.params.id;
    
    let usuarios = await clientPg.query (`select * from convidados.usuarios where id=${id}`);
   
    res.status(200).send(usuarios.rows);
}); 

// requisição de atualização de parte do endpoint em usuarios

router.patch('/usuarios/:id', async function(req,res){
    
    let id = req.params.id; 
    let {login, senha} = req.body;

    let usuarios = await clientPg.query (`UPDATE convidados.usuarios 
    SET 
        login = '${login}',
        senha = '${senha}'
    WHERE id=${id}`);

   res.status(200).send("Atualizado com sucesso!");    
});

// endpoint para deletar um registro por id
router.delete('/usuarios/:id', async function(req,res){
     let id = req.params.id;  

     let usuarios = await clientPg.query (`DELETE from convidados.usuarios WHERE id=${id}`);
 
res.status(200).send("Registro deletado!");
});


//criação de dados para usuarios no banco de dados
router.post('/usuarios', async function(req,res){

    let {login, senha} = req.body;
 
    const query = ` INSERT INTO convidados.usuarios(
        login, senha)
        VALUES ($1, $2)`;

    const valores = [login,senha];

    const resp = await clientPg.query(query,valores); 

    res.status(201).send('Usuário cadastrado com sucesso');
});

 export default router;