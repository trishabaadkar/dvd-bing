const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dvdLogo = {
  x: 100,
  y: 100,
  width: 100,
  height: 50,
  dx: 3, 
  dy: 3, 
  image: new Image(),
};

dvdLogo.image.src = 'https://www.pngfind.com/pngs/m/47-476875_white-dvd-logo-png-sketch-transparent-png.png';

let hitCount = 0;

function updateHitCounter() {
  const hitCounterElement = document.getElementById('hitCounter');
  hitCounterElement.textContent = `Hits: ${hitCount}`;
}

function checkCollisions() {
  if (dvdLogo.x <= 0 || dvdLogo.x + dvdLogo.width >= canvas.width) {
    dvdLogo.dx *= -1; 
    hitCount++;
    updateHitCounter();
  }

  if (dvdLogo.y <= 0 || dvdLogo.y + dvdLogo.height >= canvas.height) {
    dvdLogo.dy *= -1; 
    hitCount++;
    updateHitCounter();
  }
}

function drawDVDLogo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(dvdLogo.image, dvdLogo.x, dvdLogo.y, dvdLogo.width, dvdLogo.height);
}


function update() {
  dvdLogo.x += dvdLogo.dx;
  dvdLogo.y += dvdLogo.dy;
  checkCollisions();
  drawDVDLogo();
  requestAnimationFrame(update);
}
dvdLogo.image.onload = () => {
  update();
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
