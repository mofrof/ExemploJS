console.log("==INICIO==");

let numero = 10;
let numero2 = 20;

/**
 * "+"" utilizado como operador de Soma
 */
console.log(numero + 10);
console.log(numero + numero2);

/**
 * "-"" utilizado como operador de Subtração
 */
console.log(numero - 10);
console.log(numero - numero2);

/**
 * "*" utilizado como operador de Multiplicação
 */
console.log(numero * 10);
console.log(numero * numero2);

/**
 * "/" utilizado como operador de Divisão
 */
console.log(numero / 10);
console.log(numero / numero2);

/**
 * "%" utilizado como operador de Modulo, Calcula o resto de uma divisão exata;
 */
console.log(numero % 2);
console.log(numero2 % numero);

/**
 * "%" utilizado como operador de Modulo, Calcula o resto de uma divisão exata;
 */
console.log(numero ** 2);
console.log(numero ** numero2);

/**
 * Precedencia de calculos:
 * Assim como na matematica o JS possui uma ordem de precedencia para 
 * realizar os calculos, sendo elas:
 * # () mais interno;
 * # multiplicação e divisão;
 * # soma e subtração;
 * # calculos da esquerda para a direita;
 * 
 */

//Resultado da linha abaixo será 110
console.log(numero + numero2 * 5);

//Resultado da linha abaixo será 150
console.log((numero + numero2) * 5);

//Resultado da linha abaixo será 40
console.log(numero * numero2 / 5);


