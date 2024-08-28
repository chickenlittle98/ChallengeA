var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){

var texto = textInput.value;
var resultCripto = texto.replace(/a/g, "tos").replace(/e/g, "hy").replace(/i/g, "ar").replace(/o/g, "fan").replace(/u/g, "alc");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto =  textInput.value

    var resultDescripto = texto.replace(/tos/g, "a").replace(/hy/g, "e").replace(/ar/g, "i").replace(/fan/g, "o").replace(/alc/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {
    var textoCop =  document.getElementById('#input-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("Text copied.");
}
