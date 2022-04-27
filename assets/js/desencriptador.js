var botonDos = document.querySelector("#btn2");
var mensaje = document.querySelector("#introducir-texto").value




function desencriptar(){
    document.getElementById("toy").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("Necesita ingresar texto");
        resultado(no)
        document.getElementById("toy").style.display = "";
    }else if (mensaje.match(mayus)!= mensaje.match(mayus)){
        alert("No se admiten mayusculas")
        resultado(no)
        document.getElementById("toy").style.display = "";
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("No se aceptan acentos y/o caracteres especiales")    
        resultado(no);
        document.getElementById("toy").style.display = "";
    }else{
    msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    document.getElementById("resultado").innerHTML=msjDesencriptado;
    document.getElementById("titulo-resultado").innerHTML=desencriptacionExitosa;
  
    resultado(si)
    document.getElementById("introducir-texto").value = ""
    }
    
    
    
}



  botonDos.onclick = desencriptar;
  
  