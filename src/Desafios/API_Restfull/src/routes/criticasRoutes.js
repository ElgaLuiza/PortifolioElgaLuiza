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


// buscar todas as criticas
router.get('/criticas', function(req,res){
    res.status(200).send(criticas);
});


// buscar criticas por id
router.get('/criticas/:id', function(req,res){
    let id = req.params.id;
    let critica = criticas.find(function(obj){
        if(obj.id==id){
            return obj;
        }
    });
    res.status(200).send(critica);
});


// requisição de atualização de parte do endpoint em criticas
    router.patch('/criticas/:id', function(req,res){
    let id = req.params.id;
    let nota = req.body.nota;
    
    let posicaoIndex = criticas.findIndex
    (function(posicao){
        if(posicao.id==id){
            return posicao;
        }
    });
    criticas[posicaoIndex].nota = nota;
    
    res.status(200).send(criticas[posicaoIndex]);
    });
 
      
//criação de dados para criticas
router.post('/criticas', function(req,res){
    let body=req.body;
    criticas.push(body);
    res.status(201).send(criticas);
});


export default router;