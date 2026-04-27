/*function mudaCorVermelho() {
    document.body.style.backgroundColor = "red";
}
function mudaCorVerde() {
    document.body.style.backgroundColor = "green";
}
function mudaCorAzul() {
    document.body.style.backgroundColor = "blue";
}*/
function mudaCor(cor){
    document.body.style.backgroundColor = cor;
}

function mostrarTexto(){
    // document.getElementById("texto_ex2").style.visibility = "visible";
    document.getElementById("texto_ex2").style.display = "block";
    document.getElementById("btnFrase").style.display = "inline";
}
function mostrarTexto2(){
    document.getElementById("texto_ex2_2").innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa voluptates magnam praesentium. Doloribus aut inventore, minus ipsam eveniet laborum praesentium, eligendi dicta non sed blanditiis cum culpa modi ab!"
}
function mostrarFrase(){
    let frase = document.getElementById("frase");
    let btnFrase = document.getElementById("btnFrase");
    if(frase.style.visibility == "hidden"){
        frase.style.visibility = "visible";
        btnFrase.innerText = "Esconder Frase"; 
    } else {
        frase.style.visibility = "hidden"; 
        btnFrase.innerText = "Mostrar Frase";
    }
    
    /*if(frase.style.display == "none"){
        frase.style.display = "inline"; 
        btnFrase.innerText = "Esconder Frase"; 
    } else {
        frase.style.display = "none"; 
        btnFrase.innerText = "Mostrar Frase";
    }*/
}
let tamanho = 16;
function aumentarTexto(){
    let texto = document.getElementById("texto_ex4_5");
    tamanho += 2;
    texto.style.fontSize = tamanho + "px";
}

function diminuirTexto(){
    let texto = document.getElementById("texto_ex4_5");
    tamanho += -2;
    texto.style.fontSize = tamanho + "px";
}

function redimensionarTexto(valor, alinhamento){
    let texto = document.getElementById("texto_ex4_5");
    tamanho += valor;
    texto.style.fontSize = tamanho + "px";
    texto.style.textAlign = alinhamento
    /*if(valor < 0) {
        texto.style.textAlign = "right"
    }else{
        texto.style.textAlign = "center"
    }*/
}