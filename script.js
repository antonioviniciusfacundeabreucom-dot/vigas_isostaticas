function calculo(){
  var forca1 = Number(document.getElementById("forca1").value);
  var forca2 = Number(document.getElementById("forca2").value);
  var distancia1 = Number(document.getElementById("distancia1").value);
  var altura = Number(document.getElementById("altura").value);
  var largura = Number(document.getElementById("largura").value);
   var comprimento = Number(document.getElementById("comprimento").value);
   console.log(distancia1);

  if (((forca1)&&(forca2)
  &&(distancia1)
  &&(altura)&&(largura)&&(comprimento))){
    console.log("Você digitou todas as senhas");
     return viga_iso(forca1, forca2, distancia1,
 comprimento);
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

 
  var Ra;
  Ra = (forca1*(comprimento-distancia1) + distancia1*forca2 + 
  forca1 - Rb);
  var medida;
  medida = (Ra*(distancia1)/(forca1)*(comprimento-distancia1));

  var peso1;
  var peso2;
  peso1 = (Ra*medida)/2;
  peso2 = ((Rb - ((forca1)*(comprimento-distancia1) - Ra)
  *distancia1)/2) + (Rb - ((forca1)*(comprimento-distancia1) - Ra)
  *distancia1)*distancia1;




  console.log(Rb);
  console.log(Ra);
  console.log(peso1);
  console.log(peso2);


  return {Rb, Ra, peso1, peso2};

}


