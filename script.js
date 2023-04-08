
let nCartas = 0;


while (nCartas < 4 || nCartas > 14 || (nCartas % 2 !== 0)) {
    nCartas = prompt(' REGRA DO JOGO\n- Número máximo de cartas, 14\n - Número minimo de cartas ,4 \n-Escolha o numero de cartas');

}


let nPares = nCartas / 2;

const imagens = [
    "bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

let listaBase = [];

for (let n = 0; n < nCartas; n++) {
    listaBase[n] = ` <div class="carta" onclick ="virarCarta(this)">
                            <div class="front-face face-1">
                              <img src="./imagens/${imagens[n]}"/>
                            </div>
                            <div class="back-face face ">
                            <img src="./imagens/front 1.png" alt="">
                            </div>
                        </div>
                        `;

}

let listaDisplay = [];
for (let i = 0; i < nPares; i++) {
    listaDisplay.push(listaBase[i]);
    listaDisplay.push(listaBase[i]);
}

let caixaDeCartas = document.querySelector('.caixa-de-cartas');
const cartaInicial = document.querySelector('.carta');
caixaDeCartas.innerHTML = '&nbsp;';


// embaralhar as cartas
listaDisplay.sort(function() { return 0.5 - Math.random() });

// distribuir as cartas na tela
for(let m = 0 ; m < nCartas; m++) {
    caixaDeCartas.innerHTML += listaDisplay[m];
   
}
function virarCarta (){

}
