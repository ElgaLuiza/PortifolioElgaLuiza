import express from 'express';

const app = express();
const port = 3000;

let desconto = 0.075;
let desconto1 = 0.15;
let desconto2 = 0.225;
let desconto3 = 0.275;

app.get('/', function(req,res){
    let salario = req.query.salario;
//    res.send('salario: '+salario);
    res.send(calculaDesconto(salario));
});

//função calcula desconto
function calculaDesconto(salario){
    if (salario <= 1903.98){
        return 'O seu <b>salário</b> é: '+salario+' *** Não houve desconto ***';
    }else if (salario >= 1903.99 && salario <= 2826.65){
        salario = (salario - (salario * desconto));
        <h1>return 'O seu <b>salário</b> com desconto é: '+salario+' *** Alíquota: 7,5% ***'</h1>;
    }else if (salario >= 2826.66 && salario <= 3751.05){
        salario = (salario - (salario * desconto1));
        return 'O seu <b>salário</b> com desconto é: '+salario+' *** Alíquota: 15% ***';
    }else if (salario >= 3751.06 && salario <= 4664.68){
        salario = (salario - (salario * desconto2));
        return 'O seu <b>salário</b> com desconto é: '+salario+' *** Alíquota: 22,5% ***';
    }else if (salario >= 4664.69){
        salario = (salario - (salario * desconto3));
        return 'O seu <b>salário</b> com desconto é: '+salario+' *** Alíquota: 27,5% ***';
    }else{
        return '<h2>Você não enviou nenhum salário: </h2>';
    }
};

app.listen(port, function(){
    console.log('Servidor subiu na porta '+port);
});