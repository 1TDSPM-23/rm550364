// Declarar uma variavel cim a palavra reservada var.

// var nr1 = 10;
// var nr2 = 5;

// // Vamos imprimir as varaveis com o objeto console
// console.log('nr1:', nr1);
// console.log('nr2:', nr2);

// // realizando as operações bsicas com estes valores:
// // + / - / * e /

// // adição
// //realize a cincatenação com o texto resultado:
// //ex: console.log(RESULTADO nr1 + nr2);

// //adicao
// // ERADO: console.log('resultado da adição:', nr1 + nr2);
// console.log('Resultado da adição: ' + (nr1 + nr2));
// console.log("RESULTADO: " + (parseInt(nr1) + parseInt(nr2)));
// console.log(`RESULTADO : ${parseInt(nr1) + parseInt(nr2)}`);


// //subtração
// // ERRADO: console.log('resultado da subtração:', nr1 - nr2);
// console.log('Reultado da subtração: ' + (parseInt(nr1) - parseInt(nr2)));

// //multiplicação
// // ERRADO: console.log('resultado da multiplicação:', nr1 * nr2);
// console.log('Resultado da multiplicação: ' + (parseInt(nr1) * parseInt(nr2)));

// //divisao
// // ERRADO: console.log('resultado da divisão:', nr1 / nr2);
// console.log('Resultado da divisão: ' + (parseInt(nr1) / parseInt(nr2)));

// //obtenha o resto da divisão
// // ERRADO: console.log('resultado do resto da divisão:', nr1 % nr2);
// console.log('Resultado da sobra da divisão: ' + (parseInt(nr1) % parseInt(nr2)));

//descobrindo se um número é par ou impar
//utilizando operador ternario (?).
// declarar uma variavel com a palavra reservada var.
// var nr1 = '10';
// var nr2 = '5';
// var resultado;

// resultado = !(parseInt(nr1) % parseInt(nr2)) ? "PAR" : "IMPAR";
// console.log(`o número é : ${resultado}`);

//REGRAS DO CONST
//1ª Regra = Inicializar na declaração
// const nome3 = "Violante";
//2ª Regra = Não pode ser alterado durante o fluxo do programa.
// nome3 = "Jonathan";
//DIFERENÇA ENTRE VAR/LET/CONST
// var nome1 = "Beatriz";
// let nome2 = "Matheus";

var nome = "Beatriz";
if(nome == ""){
    var nome = "Robson";
}
console.log(nome);

// ou coloca a variavel diferente ou coloca let, pq let respeita "hoisting" e var n.
//"hoisting" = elevação

//var nome = x
// var nome = y
//console.log (nome) = "y"

//let nome = x
// let nome = y
//console.log (nome) = "x"


