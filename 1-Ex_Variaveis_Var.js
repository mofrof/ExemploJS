/**
 * Variaveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
 * var -> cria uma variavel que pode ser acessada a partir
 * de qualquer escopo(bloco) e pode ser alterada; 
 * 
 * OBS.: Evitar utilizar o var, para obeter um melhor controle do 
 *       código.
 * 
 * OBS.: É recomendavel declarar as variaveis em JS, iniciando com
 *       letras minusculas (caixa baixa) e as demais paralavras em
 *       iniciando com letra maiusculas (caixa alta), alem de não
 *       adicionar ç ou acentuação.
 *       Exemplo:
 *               # var numero
 *               # var minhaVariavel
 *               # var idadeDaPessoAMinhaEsquerda
 */

{ //scopo(bloco) 
    //declarando variavel numero
    var numero = 10;

    { //scopo(bloco) mais interno
        //declarando variavel numero2
        var numero2 = 20;
        console.log(numero2);
        /**
         * A linha abaixo ira gerar um undefined,
         * pois a variavel ainda não foi declarada.
         * Obs.: Isso não é um erro de execução
         * e sim um retorno valido no JS.
         */
        console.log(numero3);
    }

    console.log(numero);
    //redefinição da variavel numero1
    numero = 11;

    console.log(numero2);

    //declarando variavel numero3
    var numero3 = 30;
    console.log(numero3);

    /**
     * é possivel redeclarar uma
     * variavel utilizando o var
     * como o exemplo abaixo
     * */
    var numero3 = "Texto";
    console.log(numero3);
}
