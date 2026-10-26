function calculo(){
  var forca1 = Number(document.getElementById("forca1").value);
  var forca2 = Number(document.getElementById("forca2").value);
  var distancia1 = Number(document.getElementById("distancia1").value);
  var altura = Number(document.getElementById("altura").value);
  var largura = Number(document.getElementById("largura").value);
  var comprimento = Number(document.getElementById("comprimento").value);
   if(comprimento == distancia1){
    alert("Denominador zero");
   }

  if (((forca1)&&(forca2)
    &&(distancia1)
    &&(altura)&&(largura)&&(comprimento))){
    const viga = new viga_iso(forca1, forca2, distancia1, comprimento);
    const {Ra, Rb} = viga.Reacoes();
    console.log(Ra);
    console.log(Rb);
    const {peso1, peso2} = viga.pesos();
    console.log(peso1);
    console.log(peso2);
  }else{
   alert("Você esqueceu um campo vazio");
  }
}
class viga_iso{
  constructor(forca1, forca2, distancia1,
 comprimento){
    this.forca1 = forca1;
    this.forca2 = forca2;
    this.distancia1 = distancia1;
    this.comprimento = comprimento;

 }
 
  Reacoes(){
  const Ma = ((this.forca1)*(this.comprimento - this.distancia1))*(this.comprimento-this.distancia1)/2;
  const Mb =  (this.forca2)*((this.distancia1/2) +
  (this.comprimento - this.distancia1)); 
  const Mc = (this.forca2*this.comprimento);
  const Rb = (Ma + Mb + Mc) 
  /(this.comprimento-this.distancia1);
  const Ra = (this.forca1*(this.comprimento-this.distancia1) + this.distancia1*this.forca2 + 
  this.forca1 - Rb);
  return {Ra, Rb};
 


 }
  pesos(){
  const { Ra, Rb } = this.Reacoes();
  const semelhanca = (this.comprimento - this.distancia1)*Ra/(this.forca1)*(this.comprimento - this.distancia1);
  const peso1 = Ra*semelhanca/2;
  const calculo1 =  this.forca1*(this.comprimento - this.distancia1) - Ra;
  const calculo2 = Rb - calculo1;
  const peso2 = calculo2/this.distancia1 + calculo2*this.distancia1;


  return {peso1, peso2};

 }
}


 






