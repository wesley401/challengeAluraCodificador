const inputTexto = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");
const btnCriptografa = document.querySelector(".btnCriptografa");
const btnDescriptografa = document.querySelector(".btnDescriptografa");
const copia = document.querySelector(".btnCopiar");

btnCriptografa.addEventListener('click', function(event){
    event.preventDefault();
    resultado.value = obeterTexto();
    console.log( resultado.textContent );
    console.log(inputTexto.value);
});
btnDescriptografa.addEventListener('click',function Desencriptar(event){
    event.preventDefault();
    resultado.value = obeterTextoDescriptografado();
})

function obeterTexto(){
        const recebe = encriptar(inputTexto.value);
        resultado.value = recebe;
        return resultado.value;
   
}
function obeterTextoDescriptografado(){
    const recebe = desencriptar(inputTexto.value);
    resultado.value = recebe;
    return resultado.value;
}
function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    var matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];                   
    
    for(i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}
function desencriptar(stringNormal) {
    stringNormal = stringNormal.toLowerCase();
    var matrizCodigo = [["enter","e"], ["ai", "a"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    

    for(i=0; i < matrizCodigo.length; i++){
        if(stringNormal.includes(matrizCodigo[i][0])){
            stringNormal=stringNormal.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringNormal
        
}
copia.addEventListener('click',function copiar(){
    resultado.select();
        resultado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto copiado foi :  "  + resultado.value);
})