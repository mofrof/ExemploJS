console.log("==INICIO==");

/**
 * Operadores de atribição, são utilizados para atribuir valor em variaveis.
 * o simbolo "=" é o mais utilizado.
 */
//grava o numero 10 na variavel numero;
let numero = 10;
console.log(numero);

/**
 * Existem operadores de atribuição que permitem incrementar
 * e decrementar o valor da variavel são eles:
 * ++ incremento
 * -- decremento
 */
let numero2 = 10;
numero2++;
console.log(numero2);

let numero3 = 10;
numero3--;
console.log(numero3);

/**
 * O numero não será incrementado no momento de execução do operador,
 * somente depois do mesmo, segue exemplo.
 */
let numero4 = 10;
console.log(numero4++);
console.log(numero4);

/**
 * podemos tambem simplicar operações utilizando alguns operadores de atribuição
 * como por exemplo:
 * # "+=" realiza a SOMA do valor da propia variavel mais o numero especifico
 * # "-=" realiza a SUBTRAÇÃO do valor da propia variavel mais o numero especifico
 * # "*=" realiza a MULTIPLICAÇÃO do valor da propia variavel mais o numero especifico
 * # "/=" realiza a DIVISÃO do valor da propia variavel mais o numero especifico
 * # "%=" realiza a MODULO do valor da propia variavel mais o numero especifico
 * # "**=" realiza a POTENCIAÇÃO do valor da propia variavel mais o numero especifico
 */

let numero5 = 10;
numero5 += 5;
//resultado será 15
console.log(numero5);

let numero6 = 5;
numero6 -= 3;
//resultado será 2
console.log(numero6);

let numero7 = 10;
numero7 *= 4;
//resultado será 40
console.log(numero7);

let numero8 = 10;
numero8 /= 2;
//resultado será 5
console.log(numero8);

let numero9 = 10;
numero9 %= 3;
//resultado será 1
console.log(numero9);

let numero10 = 10;
numero10 **= 2;
//resultado será 100
console.log(numero10);


