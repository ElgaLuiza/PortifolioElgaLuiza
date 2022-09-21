import express from 'express';
const router = express.Router();
//array de objetos : contatos
let contatos = [
    {id: 1, nome: 'Paulo', ddd:31},
    {id: 2, nome: 'Nat', ddd:21 },
    {id: 3, nome: 'Bruna', ddd:15},
    {id: 4, nome: 'Joana', ddd:22 }
];

//array de objetos : criticas
let criticas = [
    {id: 1, id_contato: 1, id_convidado: null, nota: 8, comentario: "satisfatório"},
    {id: 2, id_contato: 3, id_convidado: null, nota: 5, comentario: "ruim"},
    {id: 3, id_contato: 4, id_convidado: null, nota: 9, comentario: "muito bom"}
]

//array de objetos : convidados
let convidados = [
    {id: 1, nome: 'Paulo', area: "RH", programa: "Vai Que Cola", email: "email@gmail.com"},
    {id: 2, nome: 'José', area: "Psicologo", programa: "Amanhã", email: "email@gmail.com"},
    {id: 3, nome: 'Eva', area: "TI", programa: "Ana Maria", email: "email@gmail.com"}
]


// buscar todos os contatos
router.get('/contatos', function(req,res){
    res.status(200).send(contatos);
});

// buscar contatos por id
router.get('/contatos/:id', function(req,res){
    let id = req.params.id;
    let contato = contatos.find(function(obj){
        if(obj.id==id){
            return obj;
        }
    });
    res.status(200).send(contato);
});


// requisição de atualização de parte do endpoint
router.patch('/contatos/:id', function(req,res){
    let id = req.params.id;
    let nome = req.body.nome;
    let ddd = req.body.ddd;
    
    let posicaoIndex = contatos.findIndex
    (function(posicao){
        if(posicao.id==id){
            return posicao;
        }
    });
    contatos[posicaoIndex].nome = nome;
    contatos[posicaoIndex].ddd = ddd;

    res.status(200).send(contatos[posicaoIndex]);
    });

   
// requisicao de atualização completa 
router.put('/contatos/:id', function(req,res){
    let id = req.params.id;
    let body = req.body;
    /* alternativa, alterando um a um os campos do registro
        let nome=req.body.nome;
        let ddd=req.body.ddd;
        let id=req.body.id;
    */

    let posicaoIndex = contatos.findIndex
    (function(posicao){
        if(posicao.id==id){
            return posicao;
        }
    });    
    res.status(200).send(contatos);
});

// endpoint para deletar um registro por id
router.delete('/contatos/:id', function(req,res){
    let id = req.params.id;
    //acha a posição
    let posicaoIndex = contatos.findIndex
    (function(posicao){
        if(posicao.id==id){
            return posicao;
        }
    });  

//com o splice apaga a posicao iniciada em 1 e até a 1 ou seja apaga o proximo contato
contatos.splice(posicaoIndex,1);

res.status(200).send(contatos);    
});


//criação de dados para contatos
router.post('/contatos', function(req,res){
    let body=req.body;
    contatos.push(body);
    res.status(201).send(contatos);
});


export default router;