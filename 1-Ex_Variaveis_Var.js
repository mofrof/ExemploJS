/**
 * Variáveis ​​são contêineres para armazenar dados 
 * (armazenando valores de dados).
 * 
 * var -> cria uma variável que pode ser acessada a partir
 * de qualquer escopo(bloco) e pode ser alterada; 
 * 
 * OBS.: Evitar utilizar o var, para obter um melhor controle do 
 *       código.
 * 
 * OBS.: É recomendável declarar as variáveis em JS, iniciando com
 *       letras minúsculas (caixa baixa) e as demais palavras em
 *       iniciando com letra maiúsculas (caixa alta), além de não
 *       adicionar ç ou acentuação.
 *       Exemplo:
 *               # var numero
 *               # var minhaVariavel
 *               # var idadeDaPessoAMinhaEsquerda
 */

{ //escopo(bloco) 
    //declarando variável numero
    var numero = 10;
    console.log(numero);

    { //escopo(bloco) mais interno
        //declarando variável numero2
        var numero2 = 20;
        console.log(numero2);
        /**
         * A linha abaixo ira gerar um undefined,
         * pois a variável ainda não foi declarada.
         * Obs.: Isso não é um erro de execução
         * e sim um retorno valido no JS.
         */
        console.log(numero3);
    }

    //redefinição da variável numero1
    numero = 11;
    console.log(numero);

    //Utilizando a variável numero2 que foi declarada
    //dentro de um escopo mais interno, fora dele.
    console.log(numero2);

    //declarando variável numero3
    var numero3 = 30;
    console.log(numero3);

    /**
     * é possível redeclarar uma
     * variável utilizando o var
     * como o exemplo abaixo
     * */
    var numero3 = "Texto";
    console.log(numero3);
}
