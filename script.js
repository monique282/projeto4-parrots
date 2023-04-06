
let nCartas = 0;


while (nCartas < 4 || nCartas > 14 || (nCartas%2 !== 0) )  {
  nCartas = prompt(' REGRA DO JOGO\n- Número máximo de cartas, 14\n - Número minimo de cartas ,4 \n-Escolha o numero de cartas');

}

const cartas =[nCartas];
console.log(cartas);

const caixaDeCartas = document.querySelector('.caixa-de-cartas');
const cartaInicial = document.querySelector('.carta');
cartaInicial.remove();


for(let n = 0; n < nCartas ; n++){
const qtdCartas = document.createElement('div');
qtdCartas.className = 'carta';
qtdCartas.innerHTML = '<img src="./imagens/front 1.png" alt="">';
caixaDeCartas.appendChild(qtdCartas);
}



