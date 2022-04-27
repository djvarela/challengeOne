
function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');  

}
 
 botonCopiar.onclick = copiarPortapapeles;