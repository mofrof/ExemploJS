console.log("==INICIO==");

let numero = 10;
let numero2 = 20;

/**
 * O simbolo "+", é utilizado como operador de Soma
 */
console.log(numero + 10);
console.log(numero + numero2);

/**
 * O simbolo "-", é utilizado como operador de Subtração
 */
console.log(numero - 10);
console.log(numero - numero2);

/**
 * O simbolo "*", é utilizado como operador de Multiplicação
 */
console.log(numero * 10);
console.log(numero * numero2);

/**
 * O simbolo "/", é utilizado como operador de Divisão
 */
console.log(numero / 10);
console.log(numero / numero2);

/**
 * O simbolo "%", é utilizado como operador de Modulo, Calcula o resto de uma divisão exata;
 */
console.log(numero % 2);
console.log(numero2 % numero);

/**
 * O simbolo "%", é utilizado como operador de Modulo, Calcula o resto de uma divisão exata;
 */
console.log(numero ** 2);
console.log(numero ** numero2);

/**
 * Precedência de cálculos:
 * Assim como na matemática o JS possui uma ordem de precedência para 
 * realizar os cálculos, sendo elas:
 * # () mais interno;
 * # multiplicação e divisão;
 * # soma e subtração;
 * # operações da esquerda para a direita;
 */

//Resultado da linha abaixo será 110
console.log(numero + numero2 * 5);

//Resultado da linha abaixo será 150
console.log((numero + numero2) * 5);

//Resultado da linha abaixo será 40
console.log(numero * numero2 / 5);


