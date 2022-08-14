const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('#score');
const modalRestart = document.querySelector('.modal');
const btnRestart = document.querySelector('.btnRestart');
const scoreGamerOver = document.querySelector('.scoreGameOver');
const modalScore = document.querySelector('.modalScore')


let count = 0

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

document.addEventListener('keydown', jump)

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 60) {
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        clouds.style.animation = "none"
        clouds.style.left = `${cloudsPosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = './src/imgs/game-over.png'
        mario.style.width = '8vmax'
        mario.style.marginLeft = '2%'

        modalRestart.classList.remove("invisible");
        modalScore.classList.add("invisible");
        scoreGamerOver.innerText = `Voce fez ${count} pontos`;

        clearInterval(loop)
        clearInterval(pontuacao)
    }
},10)

const pontuacao = setInterval(() => {
    count++
    atualizaValor()
}, 50);

function atualizaValor(){
    score.innerHTML = count
}

function modal(){
    gameOverModal.classList.remove('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

function restart(){
    modalRestart.classList.add("invisible");
    document.location.reload();
}

btnRestart.addEventListener('click', restart)

// 