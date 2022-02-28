console.log("==INICIO==");

/**
 * Operadores de comparação permitem realizar comparação
 * entre variáveis e retornam como resultado um valor booleano
 * true caso a comparação seja VERDADEIRA e false caso a
 * comparação seja FALSA;
 * 
 * Temos como atributos de comparação:
 * # "==" Igualdade
 * # ">" Maior que
 * # "<" Menor que
 * # ">=" Maior que igual
 * # "<=" Menor que igual
 * # "!=" Diferente
 * 
 * Obs.: As comparações acima realizam somente a comparação dos
 * valores não dos tipos, para realizar a comparação de tipos
 * devemos adicionar mais um "=" nas comparações anteriores:
 * 
 * Ex.: === Igualdade de valores e de tipos. 
 */

let numero1 = 10;
let numero2 = 15;
let texto = "10";

//Ira retornar true
console.log(numero1 == 10);

//Ira retornar true
console.log(numero1 == texto);

//Ira retornar false
console.log(numero1 === texto);

//Ira retornar true
console.log(numero1 > 5);

//Ira retornar true
console.log(numero1 >= 10);

//Ira retornar false
console.log(numero1 >= numero2);

//Ira retornar true
console.log(numero1 < numero2);

//Ira retornar false
console.log(numero1 < -1);

//Ira retornar true
console.log(numero1 <= 10);


