/**
 * Variaveis Variáveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
 * let -> cria uma variavel que:
 *  # não podem ser redeclaradas;
 *  # devem ser declaradas antes do uso;
 *  # Devem ser utilizadas dentro do scopo
 *    (bloco) em que foi criado ou nos seus
 *    scopos mais internos;
 *  # É possivel redefinir o valor de uma variavel
 *    utilizando o let.
 * 
 * OBS.: Tentar quando possivel utilizar let ao inves
 *       de var, para um melhor controle do código.
 * 
  * OBS.: É recomendavel declarar as variaveis em JS, iniciando com
 *       letras minusculas (caixa baixa) e as demais paralavras em
 *       iniciando com letra maiusculas (caixa alta), alem de não
 *       adicionar ç ou acentuação.
 *       Exemplo:
 *               # let numero
 *               # let minhaVariavel
 *               # let idadeDaPessoAMinhaEsquerda
 */

{ //bloco ou escopo
    //declarando variavel numero
    let numero = 10;

    { //Bloco mais interno
        //declarando variavel numero2
        let numero2 = 20;
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
    //redefinição da variavel numero1
    numero = 11;
    
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

    let numero3 = 30;
    console.log(numero3);

    /**
     * A linha abaixo ira gerar um erro de
     * execução o SyntaxError, pois o let 
     * não permite redeclarar uma variavel
     * */
     let numero3 = "Texto";
     console.log(numero3);
}
