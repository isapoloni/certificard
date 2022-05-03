function Converter () {
  
  
  let valorDigitado = document.getElementById ("valor");   
  let valorEmNumero = valorDigitado.value;                 
  let valorReal = parseFloat (valorEmNumero);   
  
  let select = document.getElementById("selecione");
  let selectValor = select.value;

  

  switch (selectValor) {
      
    case 'dolar':
      
      let  valorEmReal = valorReal * 5
       
      let elementoDeExibicaoDolar = document.getElementById("valorConvertido")
      let valorConvertidoDolar = " Seu valor em Reais é: R$" + valorEmReal
      elementoDeExibicaoDolar.innerHTML = valorConvertidoDolar
    break;
    
    case 'euro':
      let valorEmEuro = valorReal * 5.50
      
      let elementoDeExibicaoEuro = document.getElementById("valorConvertido")
      let valorConvertidoEuro = " Seu valor em Reais é: R$" + valorEmEuro
      elementoDeExibicaoEuro.innerHTML = valorConvertidoEuro
    break;
    
    case 'iene':
      let valorEmIene = valorReal * 0.043
      
      let elementoDeExibicaoIene = document.getElementById("valorConvertido")
      let valorConvertidoIene = " Seu valor em Reais é: R$" + valorEmIene
      elementoDeExibicaoIene.innerHTML = valorConvertidoIene 
    break;
    
    case 'libra':
      let valorEmLibra = valorReal * 6.62
      
      let elementoDeExibicaoLibra = document.getElementById("valorConvertido")
      let valorConvertidoLibra = " Seu valor em Reais é: R$" + valorEmLibra
      elementoDeExibicaoLibra.innerHTML = valorConvertidoLibra
    break;
      
    case 'selecione':
      alert("Selecione uma moeda");
    break
      
  }
}