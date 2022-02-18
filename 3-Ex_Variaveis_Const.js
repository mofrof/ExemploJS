/**
 * Variaveis Variáveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
* const -> é uma variavel que:
 *  # não podem ser redeclaradas;
 *  # devem ser declaradas antes do uso;
 *  # Devem ser utilizadas dentro do scopo
 *    (bloco) em que foi criado ou nos seus
 *    scopos mais internos;
 *  # NÃO É possivel redefinir o valor de uma variavel
 *    utilizando o let.
 * 
 * OBS.: Utilizar o const quando necessario criar uma variavel que não posso ser alterada 
 */

{ //bloco ou escopo
    //declarando variavel numero
    const numero = 10;

    { //Bloco mais interno
        //declarando variavel numero2
        const numero2 = 20;
        console.log(numero2);
        /**
         * A linha abaixo ira gerar um erro de
         * execução o ReferenceError;
         * 
         * para continuar testando comente a linha abaixo 
         * adicionando // antes da linha
         */
        //console.log(numero3);
    }

    console.log(numero);
    /**
     * Alinha abaixo ira gerar um erro, pois const não podem
     * ser redefinidas.
     */
    //numero = 11;
    
    /**
         * A linha abaixo ira gerar um erro de
         * execução o ReferenceError, pois a variavel
         * numero2 foi declarando em um scopo(bloco) interno
         * a este. 
         * 
         * para continuar testando comente a linha abaixo 
         * adicionando // antes da linha
         */
    //console.log(numero2);

    const numero3 = 30;
    console.log(numero3);

    /**
     * A linha abaixo ira gerar um erro de
     * execução o SyntaxError, pois o let 
     * não permite redeclarar uma variavel
     * */
     //const numero3 = "Texto";
     //console.log(numero3);
}
