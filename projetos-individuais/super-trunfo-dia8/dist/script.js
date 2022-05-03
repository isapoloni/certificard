let carta1 = {
   nome: "Iori Yagami",    
imagem:"https://i.pinimg.com/originals/dc/e5/cc/dce5cc9d848855349a307e5832d75869.gif",
   atributos: {
    ataque: 10,
    defesa: 8,
    magia: 9,
  }
};

let carta2 = {
  nome: "Kyo",
  imagem:"https://i.pinimg.com/originals/7d/7e/dc/7d7edcbaaa9e827891bdfdd8caa0136d.gif",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 10
  }
};

let carta3 = {
  nome: "Terry Bogard", 
  imagem:"https://i.pinimg.com/originals/c5/13/a1/c513a1607904ddb6840ad9750155ed22.gif",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 7,
  }
};

let carta4 = {
  nome: "K' Dash", 
  imagem:"https://www.fightersgeneration.com/characters2/k-power.gif",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 10,
  }
};

let carta5 = {
    nome: "Mukai", 
  imagem:"https://phoneky.co.uk/thumbs/screensavers/down/games/evilofkof2_pop88pof.gif",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 9,
  }
};

let carta6 = {
    nome: "King", 
  imagem:"https://acervothai.com/site/wp-content/uploads/2020/04/king-singestrike.gif",
  atributos: {
    ataque: 10,
    defesa: 7,
    magia: 8,
  }
};

let carta7 = {
  nome:"Mai Shiranui",
  imagem:"https://i.pinimg.com/originals/9f/02/e8/9f02e87ec72efbfe195d949fe5ea91f7.gif",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 7,
  }
};

let carta8 = {
  nome:"Chizuru Kagura",
  imagem:"https://2.bp.blogspot.com/-W1CXAY9TJfg/V-3BGr0DM-I/AAAAAAAAEMo/WK_TBZITFQ8M6M6y-n_XiJ14IANM-FXWQCEw/s1600/chizuru-star.gif",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 9,
  }
};

let carta9 = {
  nome:"Blue Mary",
  imagem:"https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/04/tumblr_mz2ppau22X1sh3xeyo1_400.gif",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 9,
  }
};

let carta10 = {
  nome:"Li Xiangfei",
  imagem:"http://images.uncyc.org/pt/d/d3/LiXiangfei.gif",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 9,
  }
};


 let cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
 let cartaMaquina;
 let cartaJogador;

function obtemAtributoSelecionado () {
  let radioAtributos = document.getElementsByName("atributo");
  
  for (let i=0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true)  {
      return radioAtributos[i].value;
    }
  }  
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado ();  
  let elementoResultado = document.getElementById("resultado")
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if(valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";  
  } else if (valorCartaMaquina > valorCartaJogador){
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHtml = "<div id='opcoes' class='carta-status'>"
  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
   opcoesTexto +=
   opcoesTexto = "<input type='radio' name='atributo' value='" + atributo + "'>"  +   atributo  + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHtml = "<div id='opcoes' class='carta-status'>"
  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
   opcoesTexto +=
   opcoesTexto = "<p type='text' name='atributo' value='" + atributo + "'>"  +   atributo  + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}

function sorteio() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * 10);
  cartaJogador = cartas[numeroCartaJogador];
 
  while (cartaJogador == cartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}