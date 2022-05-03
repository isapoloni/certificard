function Converter() {
  
  var valorDigitado = document.getElementById ("valor");   
  var valorEmNumero = valorDigitado.value;                                 
  var valorReal = parseFloat (valorEmNumero);   
  
  var valorAnosLuz = valorReal * (1.057 * 10 ** -13); 
  console.log (valorAnosLuz);
  
  var elementoDeExibicao = document.getElementById("valorConvertido")
  var valorConvertido = "Seu valor de Km em anos luz é: " + valorAnosLuz
  elementoDeExibicao.innerHTML = valorConvertido
}


// getElementById ("id") funciona de forma que ele pega o valor do input

// Como o getElementById() pega a linha inteira do código input e não somente o valor digitado                                                           pelo usuário,é necessário usar a string .value para pegar somente o valor do id. 

// Após usar o .value o valor estará em formato de texto "10" por exemplo e não em forma decimal, por isso                                                  usado a string parseFloat (números decimais) ou parseInt(números inteiros)

// .innerHTML é como se vc fosse adc alinha do js dentro da tag do HTML