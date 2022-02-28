/**
 * Variáveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
 * let -> cria uma variável que:
 *  # Não podem ser redeclaradas;
 *  # Devem ser declaradas antes do uso;
 *  # Devem ser utilizadas dentro do escopo
 *    (bloco) no qual foi criado ou nos seus
 *    escopos mais internos;
 *  # É possível redefinir o valor de uma variável
 *    utilizando o let.
 * 
 * OBS.: Tentar quando possível utilizar let ao invés
 *       de var, para um melhor controle do código.
 * 
  * OBS.: É recomendável declarar as variáveis em JS, iniciando com
 *       letras minúsculas (caixa baixa) e as demais palavras em
 *       iniciando com letra maiúsculas (caixa alta), além de não
 *       adicionar ç ou acentuação.
 *       Exemplo:
 *               # let numero
 *               # let minhaVariavel
 *               # let idadeDaPessoAMinhaEsquerda
 */

{ //bloco ou escopo
    //declarando variável numero
    let numero = 10;
    console.log(numero);

    { //Bloco mais interno
        //declarando variável numero2
        let numero2 = 20;
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

    //redefinição da variavel numero1
    numero = 11;
    console.log(numero);
    /**
    * A linha abaixo ira gerar um erro de
    * execução o ReferenceError, pois a variável
    * numero2 foi declarando em um escopo(bloco) interno
    * a este. 
    * 
    * para continuar testando comente a linha abaixo 
    * adicionando // antes da linha
    */
    //console.log(numero2);

    //declarando variável numero3
    let numero3 = 30;
    console.log(numero3);

    /**
     * A linha abaixo irá gerar um erro de
     * execução o SyntaxError, pois o let 
     * não permite redeclarar uma variável
     * */
    //let numero3 = "Texto";
    //console.log(numero3);
}
