function ex01(){
    // Crie um script que apresente o seu nome (gravado numa variável).
    let nome = "Bruno"
    alert(nome)
    console.log(nome)
    document.write(nome)
}

function ex02(){
    // Crie um script que apresente na mesma mensagem o nome e sobrenome concatenados (gravados em duas variáveis).
    let nome = "Bruno"
    let sobrenome = "Santos"
    console.log(nome + " " + sobrenome)
}

function ex03(){
    // Crie um script com as variáveis nome, sobrenome, idade e email. Apresente os elementos da seguinte forma:
    // Nome: XXX
    // Sobrenome: YYY
    // Idade: 123
    // Email: aaa@bbb.cc

    let nome = "Bruno"
    let sobrenome = "Santos"
    let idade = 30
    let email = "bruno.santos@cesae.pt"

    console.log("Nome: " + nome)
    console.log("Sobrenome: " + sobrenome)
    console.log("Idade: " + idade)
    console.log("Email: " + email)

    console.log("Nome: " + nome + 
        "\nSobrenome: " + sobrenome + 
        "\nIdade: " + idade + 
        "\nEmail: " + email)
}

function ex04(){
    // Crie um script baseado no anterior apresentando à frente do nome e sobrenome o número de carateres de cada um (deve usar funções). Exemplo: Nome: XXX (3)
    let nome = "Bruno"
    let sobrenome = "Santos"
    let idade = 30
    let email = "bruno.santos@cesae.pt"

    console.log("Nome: " + nome + " (" + nome.length + ")")
    console.log("Sobrenome: " + sobrenome + " (" + sobrenome.length + ")")
    console.log("Idade: " + idade)
    console.log("Email: " + email)
}

function ex05(){
    // Crie um script baseado no anterior em que apresente o nome todo em maiúsculas e o sobrenome todo em minúsculas (deve usar funções).
    let nome = "Bruno"
    let sobrenome = "Santos"
    let idade = 30
    let email = "bruno.santos@cesae.pt"

    console.log("Nome: " + nome.toUpperCase() + " (" + nome.length + ")")
    console.log("Sobrenome: " + sobrenome.toLowerCase() + " (" + sobrenome.length + ")")
    console.log("Idade: " + idade)
    console.log("Email: " + email)
}


function ex06(){
    // Crie um script com um parágrafo “Lorem Ipsum”. Na linha seguinte apresente as mensagens:
    // Primeira ocorrência da letra “a”: AAA
    // Última ocorrência da letra “b”: BBB
    // Nota: deve usar funções.

    let texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias error deleniti a ex eaque minus veniam ratione quidem, ea et quia, eum, in molestias unde tempora qui neque dolorem totam."
    console.log("Primeira ocorrência da letra A: "+ texto.indexOf("a"))
    console.log("Última ocorrência da letra B: "+ texto.lastIndexOf("b"))
    
}

function ex06a(){
    // Crie um script com um parágrafo “Lorem Ipsum”. Na linha seguinte apresente as mensagens:
    // Primeira ocorrência da letra “a”: AAA
    // Última ocorrência da letra “b”: BBB
    // Nota: deve usar funções.

    let texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias error deleniti a ex eaque minus veniam ratione quidem, ea et quia, eum, in molestias unde tempora qui neque dolorem totam."
    let posA = texto.indexOf("a")
    let posB = texto.lastIndexOf("b")

    if(posA > -1){
        console.log("Primeira ocorrência da letra A: "+ posA)
    } else {
        console.log("A letra A não foi encontrada.")
    }

    if(posB > -1){
        console.log("Última ocorrência da letra B: "+ posB)
    } else {
        console.log("A letra B não foi encontrada.")
    } 
}

function ex07(){
    // Crie um script com as variáveis n1 e n2 e atribua-lhes dois valores numéricos. Apresente em cada linha os resultados das operações: soma, subtração, multiplicação, divisão inteira, resto da divisão, exponencial, raiz quadrada e valor absoluto (estes dois últimos apenas de um dos números).
}

function ex08(){
    // Num novo script escreva “console.log(Math.random());” verifique o resultado. Recarregue a página e verifique se há diferença. Escreva uma linha/parágrafo sobre o resultado da operação executada.
}

function ex09(){
    // Num novo script gere e apresente um valor aleatório entre 1 e 10.
}

function ex10(){
    // Num novo script crie duas variáveis n1 e n2 e atribua valores decimais às mesmas. Apresente os valores originais, os valores arredondados de forma normal, arredondados para baixo e arredondados para cima (utilizando funções).
}

function ex11(){
    // Crie um script com uma variável numérica e atribua-lhe um valor. Se esse valor for superior a 37,5 deve surgir a mensagem “Tem febre”, caso contrário deve apresentar a mensagem “Saudável”. Altere o valor da variável de forma a perceber se a mensagem é alterada consoante o valor inserido.
}

function ex12(){
    // Baseado no script anterior acrescente uma outra condição, caso a temperatura seja inferior a 35 deve apresentar a mensagem “Temperatura muito baixa”.
}

function ex13(){
    // Crie um script com duas variáveis: idade e género. Consoante o género da pessoa deve apresentar “O jovem”, “A jovem” (estes dois com menos de 25 anos), “O Homem” ou “A Mulher” e consoante a idade deve apresentar “é maior de idade” ou “é menor de idade”.
}
function ex14(){
    // Crie um script com uma variável numérica. Utilizando a estrutura IF-ELSEIF apresente por extenso o número inserido (coloque apenas de 1 a 5). Caso o valor esteja for do intervalo deve apresentar a mensagem “Outro valor”.
}
function ex15(){
    // Repita o exercício anterior utilizando uma estrutura SWITCH-CASE.
}
function ex16(){
    // Crie um script que apresente uma lista de valores entre 1 e 1000.
}
function ex17(){
    // Caso tenha utilizado um ciclo FOR no último exercício repita-o agora com um WHILE ou vice-versa.
}
function ex18(){
    // Crie um script que dados dois números indicar se um é múltiplo do outro.
}
function ex19(){
    // Ler um número e apresentar uma mensagem indicando se o número é par ou ímpar.
}
function ex20(){
    // Ler um número positivo, verificar se tem 3 dígitos e em caso afirmativo imprimir os dígitos separados por dois espaços.
}
function ex21(){
    // Determinar o menor de 3 valores.
}
function ex22(){
    // Crie um script que peça ao utilizador um valor de temperatura em graus Celsius e converta o valor para graus Fahrenheit. Considere que Fahrenheit = Celsius * 1.8 + 32
}
function ex23(){
    // Crie um script que peça ao utilizador um valor em Euros e calcule e apresente o valor convertido para dólares, libras, reais e pesos. Considere: 1€ = 1,2$ (dólar) 1€ = 0,90£ (libra) 1€ = 4 R$ (reais) 1€ = 28,5$ (pesos)
}
function ex24(){
    // Dado um número inteiro positivo, verifique se este é ou não capicua. (Capicua é um número que se lê de forma igual da esquerda para a direita ou da direita para a esquerda. Exemplos: 212; 123454321; 123321)
}
function ex25(){
    // Ler um valor inteiro e apresentar todos os valores inteiros entre 0 e esse valor. A listagem só deve ser apresentada se o valor introduzido for superior a 10.
}
function ex26(){
    // Pretende-se apresentar numa lista todos os números pares de um intervalo definido pelo utilizador.
}
function ex27(){
    // Descreva um algoritmo que pede ao utilizador um valor par, inferior a 100 e apresenta numa lista todos os inteiros múltiplos de 5, entre 0 e esse valor.
}