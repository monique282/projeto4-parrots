
let nCartas = 0;
let nPares = 0;
let contarVerida = 0;
let contarJogadas = 0;
let carta1, carta2;
let contarFinalizar = 0;
let seconds = 0;
let reiniciar = '';
let timerElement;
let começar;
let intervalo;





while (nCartas < 4 || nCartas > 14 || (nCartas % 2 !== 0)) {
    nCartas = prompt(' REGRAS DO JOGO\n- Número máximo de cartas, 14\n- Número minimo de cartas, 4 \n- Escolha o numero de cartas');

}

startTimer();

nPares = nCartas / 2;

const imagens = [
    "bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

let listaBase = [];

for (let n = 0; n < nCartas / 2; n++) {
    listaBase[n] = ` <div class="carta" onclick ="virarCarta(this)"  data-test="card">
                            <div class="front-face face">
                            <img src="./imagens/front 1.png" alt="" data-test="face-down-image">
                            </div>
                            <div class="back-face face ">
                            <img src="./imagens/${imagens[n]}" data-test="face-up-image"/>
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

// embaralhar as cartas
listaDisplay.sort(function () { return 0.5 - Math.random() });

// distribuir as cartas na tela
for (let m = 0; m < nCartas; m++) {
    caixaDeCartas.innerHTML += listaDisplay[m];
}

function virarCarta(ver) {

    if (ver.classList.contains('selecionado') !== true && contarVerida === 0) {
        ver.classList.add('selecionado');
        contarVerida++;
        contarJogadas++;
        carta1 = ver;

    } else if (ver.classList.contains('selecionado') !== true && contarVerida === 1) {
        ver.classList.add('selecionado');
        contarVerida++;
        contarJogadas++;
        carta2 = ver;
        setTimeout(compararCarta, 1000, carta1, carta2)
    }

}

function compararCarta(um, dois) {
    if (um.querySelector('.back-face > img').src === dois.querySelector('.back-face > img').src) {
        contarVerida = 0;
        um = '';
        dois = '';
        contarFinalizar++;

    } else if (um.querySelector('.back-face > img').src !== dois.querySelector('.back-face > img').src) {
        um.classList.remove('selecionado');
        dois.classList.remove('selecionado');
        contarVerida = 0;
        um = '';
        dois = '';

    }
    if (contarFinalizar === nPares) {
        alert(`Você ganhou em ${contarJogadas} jogadas! A duração do jogo foi de ${seconds} segundos!`);
        while (começar !== true) {
            reiniciar = prompt('Você gostaria de reiniciar a partida? (sim ou não)');
            if (reiniciar === 'sim') {
                location.reload();
                começar = true;

            } else if (reiniciar === 'não') {
                começar = true;
                pararContador()
            } else {
                começar = false;

            }
        }
    }
}



function parar() {

}
timerElement = document.getElementById('timer');

function startTimer() {
    intervalo = setInterval(() => {
        seconds++;

        timerElement.textContent = seconds;
    }, 1000);
}

function pararContador() {
    clearInterval(intervalo);
}