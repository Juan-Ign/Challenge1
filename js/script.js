function encriptar(){
                                    
    let texto = document.getElementById("input-encriptar").value;
    
    var letras = {
        e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat",

    };
    texto = texto.replace(/e|i|a|o|u/g, function(encriptado){
    return letras[encriptado];
    });

    console.log(texto)
    document.getElementById("input-desencriptar").value=texto
    document.getElementById("input-encriptar").value = "";
    document.getElementById("muneco").style.display ="none";
    document.getElementById("ningun-mensaje").style.display ="none";
    document.getElementById("ingresar-texto").style.display ="none";
    document.getElementById("input-desencriptar").style.display ="flex";
    document.getElementById("copiar").style.display ="initial";


}


function desencriptar(){
    let texto = document.getElementById("input-encriptar").value;
    var letras = {
        enter:"e",imes:"i",ai:"a",ober:"o",ufat:"u",
    };
    texto = texto.replace(/enter|imes|ai|ober|ufat/g, function(desencriptado){
    return letras[desencriptado];
    });

    console.log(texto)
    document.getElementById("input-desencriptar").value=texto
    document.getElementById("input-encriptar").value = "";
    document.getElementById("muneco").style.display ="none";
    document.getElementById("ningun-mensaje").style.display ="none";
    document.getElementById("ingresar-texto").style.display ="none";
    document.getElementById("input-desencriptar").style.display ="flex";
    document.getElementById("copiar").style.display ="initial";
    document.getElementById("copiar").value = "Copiar";

}

function copiar(){
        navigator.clipboard.writeText(document.getElementById("input-desencriptar").value);
        document.getElementById("copiar").value = "Copiado";
}