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
    let n1 = 10
    let n2 = 3
    let n3 = -3

    console.log("Soma: " + (n1+n2))
    console.log("Subtração: " + (n1-n2))
    console.log("Multiplicação: " + (n1*n2))
    console.log("Divisão inteira: " + (n1/n2))
    console.log("Resto da divisão: " + (n1%n2))
    console.log("Exponencial: " + Math.pow(n1,n2))   // n1**n2
    console.log("Raiz quadrada de n1: " + Math.sqrt(n1))
    console.log("Valor absoluto de n2: " + Math.abs(n2))
    console.log("Valor absoluto de n3: " + Math.abs(n3))    // +n3
}

function ex08(){
    // Num novo script escreva “console.log(Math.random());” verifique o resultado. Recarregue a página e verifique se há diferença. Escreva uma linha/parágrafo sobre o resultado da operação executada.
        console.log(Math.random());
        console.log("O método Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo). Cada vez que a página é recarregada, um novo número é gerado")
}

function ex09(){
    // Num novo script gere e apresente um valor aleatório entre 1 e 10.
    console.log(Math.floor(Math.random() * 10) + 1);
}

function ex10(){
    // Num novo script crie duas variáveis n1 e n2 e atribua valores decimais às mesmas. Apresente os valores originais, os valores arredondados de forma normal, arredondados para baixo e arredondados para cima (utilizando funções).
    let n1 = 10.3
    let n2 = 10.7

    console.log("Valor original de n1: " + n1)
    console.log("Valor original de n2: " + n2)

    console.log("Valor arredondado de n1: " + Math.round(n1))
    console.log("Valor arredondado de n2: " + Math.round(n2))

    console.log("Valor arredondado para baixo de n1: " + Math.floor(n1))
    console.log("Valor arredondado para baixo de n2: " + Math.floor(n2))

    console.log("Valor arredondado para cima de n1: " + Math.ceil(n1))
    console.log("Valor arredondado para cima de n2: " + Math.ceil(n2))
}

function ex11(){
    // Crie um script com uma variável numérica e atribua-lhe um valor. Se esse valor for superior a 37,5 deve surgir a mensagem “Tem febre”, caso contrário deve apresentar a mensagem “Saudável”. Altere o valor da variável de forma a perceber se a mensagem é alterada consoante o valor inserido.
    let temperatura = 36.5

    if(temperatura > 37.5){
        console.log("Tem febre")
    } else {
        console.log("Saudável")
    }
}

function ex12(){
    // Baseado no script anterior acrescente uma outra condição, caso a temperatura seja inferior a 35 deve apresentar a mensagem “Temperatura muito baixa”.
    let temperatura = 36

    if(temperatura > 37.5){
        console.log("Tem febre")
    } else if(temperatura < 35){
        console.log("Temperatura muito baixa")
    } else {
        console.log("Saudável")
    }
}

function ex13(){
    // Crie um script com duas variáveis: idade e género. Consoante o género da pessoa deve apresentar “O jovem”, “A jovem” (estes dois com menos de 25 anos), “O Homem” ou “A Mulher” e consoante a idade deve apresentar “é maior de idade” ou “é menor de idade”.
    let idade = 30
    let genero = "Masculino"

    if(genero === "Masculino"){
        if(idade < 25){
            console.log("O jovem é menor de idade")
        } else {
            console.log("O homem é maior de idade")
        }
    } else if(genero === "Feminino"){
        if(idade < 25){
            console.log("A jovem é menor de idade")
        } else {
            console.log("A mulher é maior de idade")
        }
    } else {
        console.log("Género não identificado")
    }
}
function ex14(){
    // Crie um script com uma variável numérica. Utilizando a estrutura IF-ELSEIF apresente por extenso o número inserido (coloque apenas de 1 a 5). Caso o valor esteja for do intervalo deve apresentar a mensagem “Outro valor”.
    let numero = 3

    if(numero === 1){
        console.log("Um")
    } else if(numero === 2){
        console.log("Dois")
    } else if(numero === 3){
        console.log("Três")
    } else if(numero === 4){
        console.log("Quatro")
    } else if(numero === 5){
        console.log("Cinco")
    } else {
        console.log("Outro valor")
    }
}
function ex15(){
    // Repita o exercício anterior utilizando uma estrutura SWITCH-CASE.
    let numero = 3

    switch(numero){
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        default:
            console.log("Outro valor")
    }
}
function ex16(){
    // Crie um script que apresente uma lista de valores entre 1 e 1000.
    for(let i = 1; i <= 1000; i++){
        console.log(i)
    }
}
function ex17(){
    // Caso tenha utilizado um ciclo FOR no último exercício repita-o agora com um WHILE ou vice-versa.
    let i = 1
    while(i <= 1000){
        console.log(i)
        i++
    }
}
function ex18(){
    // Crie um script que dados dois números indicar se um é múltiplo do outro.
    let n1 = 10
    let n2 = 5

    if(n1 % n2 === 0){
        console.log(n1 + " é múltiplo de " + n2)
    } else if(n2 % n1 === 0){
        console.log(n2 + " é múltiplo de " + n1)
    } else {
        console.log("Nenhum dos números é múltiplo do outro")
    }
}
function ex19(){
    // Ler um número e apresentar uma mensagem indicando se o número é par ou ímpar.
    let numero = 7

    if(numero % 2 === 0){
        console.log(numero + " é par")
    } else {
        console.log(numero + " é ímpar")
    }
}
function ex20(){
    // Ler um número positivo, verificar se tem 3 dígitos e em caso afirmativo imprimir os dígitos separados por dois espaços.
    let numero = 123
    
    if(numero >= 100 && numero <= 999){
        let centenas = Math.floor(numero / 100)
        let dezenas = Math.floor((numero % 100) / 10)
        let unidades = numero % 10

        console.log(centenas + "  " + dezenas + "  " + unidades)
    } else {
        console.log("O número não tem 3 dígitos")
    }
}
function ex21(){
    // Determinar o menor de 3 valores.
    let a = 10
    let b = 5
    let c = 8

    if(a <= b && a <= c){
        console.log("O menor valor é: " + a)
    } else if(b <= a && b <= c){
        console.log("O menor valor é: " + b)
    } else {
        console.log("O menor valor é: " + c)
    }
    //outra opção
    console.log("O menor valor é: " + Math.min(a, b, c))

}
function ex22(){
    // Crie um script que peça ao utilizador um valor de temperatura em graus Celsius e converta o valor para graus Fahrenheit. Considere que Fahrenheit = Celsius * 1.8 + 32
    let celsius = 25
    let fahrenheit = celsius * 1.8 + 32
    console.log(celsius + "°C é igual a " + fahrenheit + "°F")
}
function ex23(){
    // Crie um script que peça ao utilizador um valor em Euros e calcule e apresente o valor convertido para dólares, libras, reais e pesos. Considere: 1€ = 1,2$ (dólar) 1€ = 0,90£ (libra) 1€ = 4 R$ (reais) 1€ = 28,5$ (pesos)
    let euros = 100
    let dolares = euros * 1.2
    let libras = euros * 0.90
    let reais = euros * 4
    let pesos = euros * 28.5

    console.log(euros + "€ é igual a " + dolares + "$ (dólares)")
    console.log(euros + "€ é igual a " + libras + "£ (libras)")
    console.log(euros + "€ é igual a " + reais + "R$ (reais)")
    console.log(euros + "€ é igual a " + pesos + "$ (pesos)")
}
function ex24(){
    // Dado um número inteiro positivo, verifique se este é ou não capicua. (Capicua é um número que se lê de forma igual da esquerda para a direita ou da direita para a esquerda. Exemplos: 212; 123454321; 123321)
    let numero = "1234321"
    let capicua = true

    while(numero.length>0){
        //console.log("Comparar " + numero[0] + " com " + numero[numero.length-1])
        if(numero[0] != numero[numero.length-1]){
            console.log("O número não é capicua")
            capicua = false
            break
        }
        numero = numero.substr(1,numero.length-2)
    }

    if(capicua){
        console.log("O número é capicua")
    }
}

function ex25(){
    // Ler um valor inteiro e apresentar todos os valores inteiros entre 0 e esse valor. A listagem só deve ser apresentada se o valor introduzido for superior a 10.
    let valor = 15

    if(valor > 10){
        for(let i = 0; i <= valor; i++){
            console.log(i)
        }
    } else {
        console.log("O valor deve ser superior a 10 para apresentar a listagem.")
    }

}
function ex26(){
    // Pretende-se apresentar numa lista todos os números pares de um intervalo definido pelo utilizador.
    let inicio = 10
    let fim = 20

    for(let i = inicio; i <= fim; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}
function ex27(){
    // Descreva um algoritmo que pede ao utilizador um valor par, inferior a 100 e apresenta numa lista todos os inteiros múltiplos de 5, entre 0 e esse valor.
    let valor = 50

    if(valor < 100 && valor % 2 === 0){
        for(let i = 0; i <= valor; i++){
            if(i % 5 === 0){
                console.log(i)
            }
        }
    } else {
        console.log("O valor deve ser par e inferior a 100.")
    }
}

function SM01() {
    // Mostrar os primeiros N termos da sucessão de Fibonacci, onde N é definido pelo utilizador. Nesta sucessão o primeiro termo é zero, o segundo termo é um e qualquer um dos outros termos é igual à soma dos dois anteriores.
    let n = 10
    let n1 = 0
    let n2 = 1

    if(n >= 1){
        console.log(n1)
    }
    
    if(n >= 2){
        console.log(n2)
    }
    if(n >= 3){
        for(let i = 0; i < n-2; i++){
            let n3 = n1 + n2
            console.log(n3)
            n1 = n2
            n2 = n3
        }
    }
}

function SM02() {
    // Dada uma data, dia, mês e ano, determinar quantos dias faltam para o fim do mês. Diz-se que um ano é bissexto se for divisível por 400 ou for divisível por 4 e não por 100.
    let dia = 27
    let mes = 4
    let ano = 2026

    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        console.log("Faltam " + (31-dia) + " dias para o final do mês")
    } else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        console.log("Faltam " + (30-dia) + " dias para o final do mês")
    } else {
        if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
            console.log(ano + ' é bissexto'); 
            console.log("Faltam " + (29-dia) + " dias para o final do mês")
        } else {
            console.log(ano + ' não é bissexto');
            console.log("Faltam " + (28-dia) + " dias para o final do mês")
        }
    }
}