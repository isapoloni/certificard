function adicionarFilme() {
  let filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    let nome = adicionarNome();
    let filme = { filme: filmeFavorito, nome: nome };
    listarFilmesNaTela(filme);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  let elementoFilmeFavorito = " <div> <img src=" + filme.filme + ">";
  elementoFilmeFavorito += "<h1> " + filme.nome + "</h1> <div>";
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}

function adicionarNome() {
  let nomeDoFilmeFavorito = document.getElementById("nome").value;
  return nomeDoFilmeFavorito;
}