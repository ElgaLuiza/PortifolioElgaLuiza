var peso = document.querySelector(".peso");
var altura = document.querySelector(".altura");
var imc;
var resultadoImc;
var paragrafoResultado = document.querySelector("#resultado");

function pegaValores(){
	event.preventDefault();
	imc = calculaIMC(peso.value, altura.value);
	resultadoImc = retornaImc(imc);
	paragrafoResultado.innerText = 'Seu IMC é de '+ parseInt(imc) + ' kg/m2. '  + resultadoImc ;
}

function calculaIMC(peso, altura){
	return peso / (altura * altura);
}

function percorreElemento(){
	var elementos = document.querySelectorAll("tr");
	for( var elemento of elementos){
		elemento.style.backgroundColor = "white";
		elemento.style.color = "black";
	}
}

function retornaImc(imc){
	percorreElemento();
	var retornaValor;
	
	if(imc < 18.5){
		retornaValor = "Magreza";
		document.querySelector("#magreza").style.backgroundColor = "red";
		document.querySelector("#magreza").style.color = "white";
	}else if(imc >= 18.5 && imc <= 24.9){
		retornaValor = "Normal";
		document.querySelector("#normal").style.backgroundColor = "red";
		document.querySelector("#normal").style.color = "white";
	}else if(imc >= 25 && imc <= 29.9){
		retornaValor = "Sobrepeso";
		document.querySelector("#sobrepeso").style.backgroundColor = "red";
		document.querySelector("#sobrepeso").style.color = "white";
	}else if(imc >= 30 && imc <= 34.9){
		retornaValor = "Obesidade grau I";
		document.querySelector("#obesidadeI").style.backgroundColor = "red";
		document.querySelector("#obesidadeI").style.color = "white";
	}else if(imc >= 35 && imc <= 39.9){
		retornaValor = "Obesidade grau II";	
		document.querySelector("#obesidadeII").style.backgroundColor = "red";
		document.querySelector("#obesidadeII").style.color = "white";
	}else if(imc >= 40){
		retornaValor = "Obesidade grau III";
		document.querySelector("#obesidadeIII").style.backgroundColor = "red";
		document.querySelector("#obesidadeIII").style.color = "white";
	}else{
		retornaValor = "Valor n�o localizado";
	};

	return retornaValor;
}

















