console.log("==INICIO==");
/**
 * A instrução if permite criar diferentes fluxos de execução de acordo com
 * diferentes decisões.
 * 
 * O comando if() recebe como parâmetro para realizar a sua decisão valores
 * do tipo booleano.  
 */

//Ira exbir, "mensagem executada dentro do condicional",
//pois o parametro de decição esta marcado como true
if (true) {
    console.log("mensagem executada dentro do condicional");
}

//Não ira exibir nenhuma mensagem, pois o parâmetro de decisão esta 
//Marcado como false.
if (false) {
    console.log("Essa mensagem não será exibida");
}

/**
 * Podemos utilizar o comando if junto com os operadores de comparação
 * para tomar uma decisão, por exemplo:
 * Se a idade de uma pessoa for maior que 18 podemos exibir maior de idade
 * caso contrário exiba menor de idade
 */

//Se o valor da idade for maior que ou igual 18 irar exibir Maior de idade
//Se o valor da idade for menor que 18 irar exibir Menor de idade
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
}
if (idade < 18) {
    console.log("Menor de idade");
}

/**
 * Podemos melhorar o exemplo acima utilizando o comando else if em conjunto com 
 * o if. O else if opera de forma em conjunto com if, neste caso ele só realiza a
 * sua verificação caso a condição de cima for falsa. 
 */

//Se você tem altura maior que igual a 1,65 você pode entrar no brinquedo
//Se você tem altura menor que 1,60 você só pode entrar no brinquedo acompanhado
let altura = 1.50;

if (altura >= 1.65) {
    console.log("Você pode entrar no brinquedo");
} else if (altura < 1.65) {
    console.log("Você só pode entrar no brinquedo, acompanhado");
}

/**
 * Podemos utilizar vários else if para encadear várias verificações,
 * cada else if só ira realizar a verificação caso a condição de cima
 * seja falsa.
 */

let entrada = "A";

if (entrada == "C") {
    console.log("Condição letra C");
} else if (entrada == "B") {
    console.log("Condição letra B");
} else if (entrada == "A") {
    console.log("Condição letra A");
}

/**
 * Apesar do else if, ser bastante útil é inviável realizarmos a verificação
 * de todas as possíveis possibilidades. Para solucionar este problema podemos utilizar
 * o comando else. em conjunto com o if ou com if e else if.
 */

//Se a distância do salto for menor que 2 metros e 90 cm então não é um novo recorde mundial
//Caso contrário é um novo recorde mundial.
let distancia = 1.5;

if (distancia <= 2.9) {
    console.log("Não é um novo recorde mundial de salto a distancia");
} else {
    console.log("É um novo recorde mundial de salto a distancia");
}

//Se o veículo for moto o imposto será de 10% do valor do veículo.
//Se o veículo for carro o imposto será de 20% do valor do veículo.
//Caso seja qualquer outro tipo, imposto não se aplica para esse veículo.

let veiculo = "caminhão";

if (veiculo == "Moto") {
    console.log("Imposto será de de 10% do valor do veiculo");
} else if (veiculo == "Carro") {
    console.log("Imposto será de de 20% do valor do veiculo");
} else {
    console.log("Imposto não se aplica para esse veiculo");
}