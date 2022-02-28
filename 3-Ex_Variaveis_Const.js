/**
 * Variáveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
* const -> é uma variável que:
 *  # Não podem ser redeclaradas;
 *  # Devem ser declaradas antes do uso;
 *  # Devem ser utilizadas dentro do escopo
 *    (bloco) no qual foi criado ou nos seus
 *    escopos mais internos;
 *  # NÃO É possivel redefinir o valor de uma variavel
 *    utilizando o let.
 * 
 * OBS.: Utilizar o const quando for necessario criar uma variável que não podem ser alterada 
 */

{ //bloco ou escopo
    //declarando variável numero
    const numero = 10;
    console.log(numero);
    { //Bloco mais interno
        //declarando variavel numero2
        const numero2 = 20;
        console.log(numero2);
        /**
         * A linha abaixo irá gerar um erro de
         * execução o ReferenceError;
         * 
         * para continuar testando comente a linha abaixo 
         * adicionando // antes da linha
         */
        //console.log(numero3);
    }

    /**
     * Alinha abaixo irá gerar um erro, pois variáveis const não podem
     * ser redefinidas.
     */
    //numero = 11;
    //console.log(numero);
    /**
         * A linha abaixo irá gerar um erro de
         * execução o ReferenceError, pois a variável
         * numero2 foi declarada em um escopo(bloco) interno
         * a este. 
         * 
         * para continuar testando comente a linha abaixo 
         * adicionando // antes da linha
         */
    //console.log(numero2);

    const numero3 = 30;
    console.log(numero3);

    /**
     * A linha abaixo irá gerar um erro de
     * execução o SyntaxError, pois o const 
     * não permite redeclarar uma variável
     * */
    //const numero3 = "Texto";
    //console.log(numero3);
}
