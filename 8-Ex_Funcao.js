console.log("==Inicio==");

/**
 * Uma função é um bloco de código projetado para executar uma tarefa específica.
 * As funções são sub-rotinas que podem ser acessadas quantas vezes forem necessárias.
 * 
 * Para criar uma função utilizamos o comando function que segue a seguinte estrutura:
 * # function [nomeDaFunção]([parâmetros]){}
 * 
 * Para utilizar uma função (chamar a função) bastas escrever o nome da mesma junto com
 * os parâmetros caso necessário.
 * [nomeDaFunção]();
 * 
 * OBS.: A nomenclatura das funções deve seguir a mesma regra das da variáveis.
 * # primeira letra minúscula e demais maiúsculas quando houver separação da palavra.
 */

//função que exibir uma mensagem especifica
function mensagem() {
    console.log("Mensagem da função");
}

mensagem();

//É possível chamar uma função antes de declarar a mesma, como mostra o exemplo abaixo. 
outraMensagem();

function outraMensagem() {
    console.log("Outra Mensagem de uma função");
}

/**
 * Funções podem receber parâmetros(Valores) para poderem executar
 * sua sub-rotinas.
 */
//A função declarou que deve receber uma parâmetro chamado texto.
function funcaoComParamentro(texto) {
    console.log(texto);
}

// Quando chamamos a função devemos passar o parâmetro solicitado por ela
// no exemplo passamos o parâmetro texto.
funcaoComParamentro("Função com parametro 1");
funcaoComParamentro("Função com parametro 2");

/**
 * A linha abaixo irá exibir indefinido, pois ele não reconhece a função
 * como existente. Ele não encontra a função pois não passamos o valor do 
 * parâmetro.
 * */
funcaoComParamentro()

/**
 * Podemos receber mais de um parâmetro para uma função,
 * basta adicionar "," para separar os parâmetros
 */
function soma(numero1, numero2) {
    console.log(numero1 + numero2);
}

//Irá exibir 5
soma(2, 3);


/**
 * As funções podem ter retorno, isso 
 * significa que eles podem retornar valores para a execução principal
 */

function retornaNumero16() {
    //a palavra return indica qual valor iremos retornar
    //no caso estamos retornando 16
    return 16;
}

//criamos uma variável resultado
//e atribuímos o valor do retorno da função
//que no caso é 16
let resultado = retornaNumero16();
console.log(resultado);

/**
 * Podemos misturar tudo que aprendemos ate agora 
 */
function ehMaiorDeIdade(idade) {
    //podemos retornar tambem o resultado de uma comparação.
    return idade >= 18;
}

let resultado2 = ehMaiorDeIdade(20);
console.log(resultado2);