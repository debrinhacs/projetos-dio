const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;
let count = 0;

function handleKeyUp(event) {
  if (event.keyCode === 13) {
    if (!isJumping) {
      jump();      
    }
  }
}

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      // Subindo      
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

function createCactus() {
  count += 1;
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      count = count -1;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo! Sua pontuação foi de: ' + count+'</h1>';
    } else {     
      cactusPosition -= 30;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);
