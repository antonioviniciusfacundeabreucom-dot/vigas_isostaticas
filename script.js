function calculo(){
  var forca1 = document.getElementById("forca1").value;
  var forca2 = document.getElementById("forca2").value;
  var distancia1 = document.getElementById("distancia1").value;
  var altura = document.getElementById("altura").value;
  var largura = document.getElementById("largura").value;
   var comprimento = document.getElementById("comprimento").value;
   console.log(distancia1);

  if (((forca1)&&(forca2)
  &&(distancia1)
  &&(altura)&&(largura)&&(comprimento))){
    console.log("Você digitou todas as senhas");
    return viga_iso(forca1, forca2, distancia1, comprimento);
  }else{
   alert("Você esqueceu um campo vazio");
  }
}
function viga_iso(forca1, forca2, distancia1,
 comprimento){
  var Rb;
  Rb  = ((forca1)*(comprimento-distancia1)*(comprimento - distancia1)/2 + 
  (forca2)*((distancia1/2) +
  (comprimento - distancia1))
  + (forca2*comprimento))/(comprimento-distancia1);
  console.log(Rb);
  return Rb;

}


