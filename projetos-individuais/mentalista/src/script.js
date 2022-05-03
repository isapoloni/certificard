let tentativas = 0;
const numeroSecreto = parseInt(Math.random() * 11);
const textoDeTentativas = document.getElementById("attempts");
const numeroDeTentativas = document.getElementById("numero").value;
const elementoResultado = document.getElementById("resultado");

function Chutar() {
  const chute = parseInt(document.getElementById("valor").value);
  tentativas = tentativas + 1;
  if (tentativas <= 3) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou";
      const music = new Audio(
        "https://www.myinstants.com/media/sounds/acertou-mizeravijk.mp3"
      );
      music.play();
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, o número é menor do que você escolheu";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, o número é Maior do que você escolheu";
    }
    textoDeTentativas.innerHTML = "Tentativa " + tentativas + "/3";
  }
  if (tentativas == 3 && chute != numeroSecreto) {
    elementoResultado.innerHTML =
      "Errou, o número secreto era " + numeroSecreto;
    const music = new Audio(
      "https://www.myinstants.com/media/sounds/faustao-errou.mp3"
    );
    music.play();
    textoDeTentativas.innerHTML = "Tentativa " + tentativas + "/3";
  }
}
