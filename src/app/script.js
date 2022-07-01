const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.getElementById('pontos')

let ponto = 0

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

        clearInterval(loop)
        clearInterval(pontuacao)
        setTimeout(() => {
            location.reload();
        },1000)
    }
},10)

const pontuacao = setInterval(() => {
    ponto++
    atualizaValor()
}, 50);

function atualizaValor(){
    score.innerHTML = ponto
}