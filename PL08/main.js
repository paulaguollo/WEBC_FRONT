//1-Crie um script que apresente o seu nome (gravado numa variável). 
function ex01(){
    let nome = "Paulinha";
    //alert(nome); aparece como um pop-up
    //document.write(nome); aparece na page
    console.log(nome); //aparece na consola
}
//ex01() 

//2-Crie um script que apresente na mesma mensagem o nome e sobrenome concatenados (gravados em duas variáveis). 
function ex02(){
    let nome = "Paula";
    let apelido = "Guollo";

    console.log("O nome completo é "+nome+" "+apelido);
}
//ex02()

//3- Crie um script com as variáveis nome, sobrenome, idade e email.
function ex03(){
    let nome = "Paula";
    let apelido = "Guollo";
    let idade = "24 anos"
    let email = "email@gmail.com"

    console.log(nome + "\n" +apelido);
    console.log(apelido);
    console.log(idade);
    console.log(email);
}
//ex03()

//4-Crie um script baseado no anterior apresentando à frente do nome e sobrenome o número de carateres de cada um (deve usar funções). Exemplo: Nome: XXX (3) 
function ex04(){
    let nome = "Paula";
    let apelido = "Guollo";
    let idade = "24"
    let email = "email@gmail.com"

    console.log(nome + " (" +nome.length+")");
    console.log(apelido + " (" +apelido.length+")");
    console.log(idade + " (" +idade.length+")");
    console.log(email + " (" +email.length+")");

}
//ex04()

//5-Crie um script baseado no anterior em que apresente o nome todo em maiúsculas e o sobrenome todo em minúsculas (deve usar funções). 

function ex05(){
    let nome = "Paula";
    let apelido = "Guollo";

    console.log(nome.toUpperCase());
    console.log(apelido.toLowerCase());
}

//ex05()

//6- Crie um script com um parágrafo “Lorem Ipsum”. Na linha seguinte apresente as mensagens:  Primeira ocorrência da letra “a”: AAA Última ocorrência da letra “b”: BBB 
function ex06(){
    let text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam qui cum vero pariatur. Pariatur tempora nemo saepe corporis rem, ut suscipit earum tempore laboriosam, velit aspernatur sequi, voluptate quam?"

    console.log("Primeira ocorrência da letra A: "+ text.indexOf("a"))
    console.log("Primeira ocorrência da letra B: "+ text.lastIndexOf("b"))

}
//ex06()

/*7-Crie um script com as variáveis n1 e n2 e atribua-lhes dois valores numéricos. Apresente em cada linha os 
resultados das operações: soma, subtração, multiplicação, divisão inteira, resto da divisão, exponencial, raiz 
quadrada e valor absoluto (estes dois últimos apenas de um dos números).*/

function ex07(){
    let n1 = 10;
    let n2 = 5;
    let soma = n1 + n2;
    let subtração = n1 - n2;
    let multiplicação = n1 * n2;
    let divisaoInteiro = Math.trunc(n1 / n2);
    let resto = n1 % n2;
    let exponencial = Math.pow(n1, n2); //n1**n2
    let raizN1 = Math.sqrt(n1);
    let raizN2 = Math.sqrt(n2);
    let valorAbsolutoN1 = Math.abs(n1);
    let valorAbsolutoN2 = Math.abs(n2); 
   
    console.log(soma);
    console.log(subtração);
    console.log(multiplicação);
    console.log(divisaoInteiro);
    console.log(resto);
    console.log(exponencial);
    console.log(raizN1);
    console.log(raizN2);
    console.log(valorAbsolutoN1);
    console.log(valorAbsolutoN2);
}

//ex07()

/*8- Num novo script escreva “console.log(Math.random());” verifique o resultado. Recarregue a página e verifique se 
há diferença. Escreva uma linha/parágrafo sobre o resultado da operação executada. */

function ex08(){
    console.log(" Math.random fornece um número aleatório entre 0 e 1. Pode ser escrito como: Math.random ();");
}

//ex08()

//9- Num novo script gere e apresente um valor aleatório entre 1 e 10.
function ex09(){
    let num = Math.floor(Math.random() * 10) + 1; // 1 <= num <= 10
console.log(num);
}

//ex09()

/*10. Num novo script crie duas variáveis n1 e n2 e atribua valores decimais às mesmas. Apresente os valores originais, 
os valores arredondados de forma normal, arredondados para baixo e arredondados para cima (utilizando 
funções). */

function ex10(){
    let numero1 = 10.458;
    let numero2 = 5.9865;
   
console.log("Numero arredondado normalmente: " + Math.round(numero1) +" "+ Math.round(numero2));
console.log("Numero arredondado para baixo: " + Math.floor(numero1) +" "+ Math.floor(numero2));
console.log("Numero arredondado para cima: " + Math.ceil(numero1) +" "+ Math.ceil(numero2));
}

//ex10()

/*11. Crie um script com uma variável numérica e atribua-lhe um valor. Se esse valor for superior a 37,5 deve surgir a 
mensagem “Tem febre”, caso contrário deve apresentar a mensagem “Saudável”. Altere o valor da variável de 
forma a perceber se a mensagem é alterada consoante o valor inserido. */

function ex11(){
    let temp = 20;
   
    if(temp > 37.5) {
      console.log("Tem febre");  
    } else {
        console.log("Saudável");
    }

}
//ex11()

/*12. Baseado no script anterior acrescente uma outra condição, caso a temperatura seja inferior a 35 deve apresentar 
a mensagem “Temperatura muito baixa”. */

function ex12(){
        let temp = 36;
   
    if(temp > 37.5) {
      console.log("Tem febre");  
    }  else if (temp < 35) {
        console.log("Temperatura muito baixa")
    }
    else {
        console.log("Saudável");
    }

}
//ex12()

/*13. Crie um script com duas variáveis: idade e género. Consoante o género da pessoa deve apresentar “O jovem”, “A 
jovem” (estes dois com menos de 25 anos), “O Homem” ou “A Mulher” e consoante a idade deve apresentar “é maior de idade” ou “é menor de idade”.  */

function ex13(){
    let gender = "female";
    let age = 23;

    if(gender == "female") {
        console.log("A Mulher é ")
    } else {
        console.log(" O Homem é ")
    }

    if (age >= 18) {
        console.log("maior de idade.")
    } else {
        console.log("menor de idade")
    }
}

//ex13()

/*14. Crie um script com uma variável numérica. Utilizando a estrutura IF-ELSEIF apresente por extenso o número 
inserido (coloque apenas de 1 a 5). Caso o valor esteja for do intervalo deve apresentar a mensagem “Outro valor”.*/

//ex14()

//15. Repita o exercício anterior utilizando uma estrutura SWITCH-CASE.

//ex15()

//16. Crie um script que apresente uma lista de valores entre 1 e 1000.

//ex16()

//17. Caso tenha utilizado um ciclo FOR no último exercício repita-o agora com um WHILE ou vice-versa.

//ex17()

//18. Crie um script que dados dois números indicar se um é múltiplo do outro.

//ex18()

//19. Ler um número e apresentar uma mensagem indicando se o número é par ou ímpar.

//ex19()

/*20. Ler um número positivo, verificar se tem 3 dígitos e em caso afirmativo imprimir os dígitos separados por dois espaços.*/

//ex20()

//21. Determinar o menor de 3 valores.

//ex21()

/*22. Crie um script que peça ao utilizador um valor de temperatura em graus Celsius e converta o valor para graus 
Fahrenheit.  
Considere que Fahrenheit = Celsius * 1.8 + 32 */

//ex22()

/*23. Crie um script que peça ao utilizador um valor em Euros e calcule e apresente o valor convertido para dólares, 
libras, reais e pesos. Considere: 
1€ = 1,2$ (dólar) 1€ = 0,90£ (libra) 1€ = 4 R$ (reais) 1€ = 28,5$ (pesos) */

//ex23()

/*24. Dado um número inteiro positivo, verifique se este é ou não capicua. (Capicua é um número que se lê de forma 
igual da esquerda para a direita ou da direita para a esquerda. Exemplos: 212; 123454321; 123321)*/

//ex24()

/*25. Ler um valor inteiro e apresentar todos os valores inteiros entre 0 e esse valor. A listagem só deve ser apresentada 
se o valor introduzido for superior a 10. */

//ex25()

//26. Pretende-se apresentar numa lista todos os números pares de um intervalo definido pelo utilizador. 

//ex26()

/*27. Descreva um algoritmo que pede ao utilizador um valor par, inferior a 100 e apresenta numa lista todos os inteiros 
múltiplos de 5, entre 0 e esse valor. */

//ex27()