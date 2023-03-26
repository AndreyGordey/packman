const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const pacman = {
  x: 200,
  y: 200,
  radius: 20,
  mouthAngle: 0,
  direction: 'right'
};

const dots = [
  { x: 50, y: 50 },
  { x: 100, y: 50 },
  { x: 150, y: 50 },
  { x: 200, y: 50 },
  { x: 250, y: 50 },
  { x: 300, y: 50 },
  { x: 350, y: 50 },
  { x: 400, y: 50 },
  { x: 450, y: 50 },
  { x: 500, y: 50 },
  { x: 550, y: 50 },
  { x: 600, y: 50 },
  { x: 50, y: 100 },
  { x: 100, y: 100 },
  { x: 150, y: 100 },
  { x: 200, y: 100 },
  { x: 250, y: 100 },
  { x: 300, y: 100 },
  { x: 350, y: 100 },
  { x: 400, y: 100 },
  { x: 450, y: 100 },
  { x: 500, y: 100 },
  { x: 550, y: 100 },
  { x: 600, y: 100 },
  { x: 50, y: 150 },
  { x: 100, y: 150 },
  { x: 150, y: 150 },
  { x: 200, y: 150 },
  { x: 250, y: 150 },
  { x: 300, y: 150 },
  { x: 350, y: 150 },
  { x: 400, y: 150 },
  { x: 450, y: 150 },
  { x: 500, y: 150 },
  { x: 550, y: 150 },
  { x: 600, y: 150 },
  { x: 50, y: 200 },
  { x: 100, y: 200 },
  { x: 150, y: 200 },
  { x: 200, y: 200 },
  { x: 250, y: 200 },
  { x: 300, y: 200 },
  { x: 350, y: 200 },
  { x: 400, y: 200 },
  { x: 450, y: 200 },
  { x: 500, y: 200 },
  { x: 550, y: 200 },
  { x: 600, y: 200 },
  { x: 50, y: 250 },
  { x: 100, y: 250 },
  { x: 150, y: 250 },
  { x: 200, y: 250 },
  { x: 250, y: 250 },
  { x: 300, y: 250 },
  { x: 350, y: 250 },
  { x: 400, y: 250 },
  { x: 450, y: 250 },
  { x: 500, y: 250 },
  { x: 550, y: 250 },
  { x: 600, y: 250 },
  { x: 50, y: 300 },
  { x: 100, y: 300 },
  { x: 150, y: 300 },
  { x: 200, y: 300 },
  { x: 250, y: 300 },
  { x: 300, y: 300 },
  { x: 350, y: 300 },
  { x: 400, y: 300 },
  { x: 450, y: 300 },
  { x: 500, y: 300 },
  { x: 550, y: 300 },
  { x: 600, y: 300 },
  { x: 50, y: 350 },
  { x: 100, y: 350 },
  { x: 150, y: 350 },
  { x: 200, y: 350 },
  { x: 250, y: 350 },
  { x: 300, y: 350 },
  { x: 350, y: 350 },
  { x: 400, y: 350 },
  { x: 450, y: 350 },
  { x: 500, y: 350 },
  { x: 550, y: 350 },
  { x: 600, y: 350 },
  { x: 50, y: 400 },
  { x: 100, y: 400 },
  { x: 150, y: 400 },
  { x: 200, y: 400 },
  { x: 250, y: 400 },
  { x: 300, y: 400 },
  { x: 350, y: 400 },
  { x: 400, y: 400 },
  { x: 450, y: 400 },
  { x: 500, y: 400 },
  { x: 550, y: 400 },
  { x: 600, y: 400 },
  { x: 50, y: 450 },
  { x: 100, y: 450 },
  { x: 150, y: 450 },
  { x: 200, y: 450 },
  { x: 250, y: 450 },
  { x: 300, y: 450 },
  { x: 350, y: 450 },
  { x: 400, y: 450 },
  { x: 450, y: 450 },
  { x: 500, y: 450 },
  { x: 550, y: 450 },
  { x: 600, y: 450 },
  { x: 50, y: 500 },
  { x: 100, y: 500 },
  { x: 150, y: 500 },
  { x: 200, y: 500 },
  { x: 250, y: 500 },
  { x: 300, y: 500 },
  { x: 350, y: 500 },
  { x: 400, y: 500 },
  { x: 450, y: 500 },
  { x: 500, y: 500 },
  { x: 550, y: 500 },
  { x: 600, y: 500 },
  { x: 50, y: 550 },
  { x: 100, y: 550 },
  { x: 150, y: 550 },
  { x: 200, y: 550 },
  { x: 250, y: 550 },
  { x: 300, y: 550 },
  { x: 350, y: 550 },
  { x: 400, y: 550 },
  { x: 450, y: 550 },
  { x: 500, y: 550 },
  { x: 550, y: 550 },
  { x: 600, y: 550 },
  { x: 50, y: 600 },
  { x: 100, y: 600 },
  { x: 150, y: 600 },
  { x: 200, y: 600 },
  { x: 250, y: 600 },
  { x: 300, y: 600 },
  { x: 350, y: 600 },
  { x: 400, y: 600 },
  { x: 450, y: 600 },
  { x: 500, y: 600 },
  { x: 550, y: 600 },
  { x: 600, y: 600 },
  { x: 50, y: 650 },
  { x: 100, y: 650 },
  { x: 150, y: 650 },
  { x: 200, y: 650 },
  { x: 250, y: 650 },
  { x: 300, y: 650 },
  { x: 350, y: 650 },
  { x: 400, y: 650 },
  { x: 450, y: 650 },
  { x: 500, y: 650 },
  { x: 550, y: 650 },
  { x: 600, y: 650 },
  { x: 50, y: 700 },
  { x: 100, y: 700 },
  { x: 150, y: 700 },
  { x: 200, y: 700 },
  { x: 250, y: 700 },
  { x: 300, y: 700 },
  { x: 350, y: 700 },
  { x: 400, y: 700 },
  { x: 450, y: 700 },
  { x: 500, y: 700 },
  { x: 550, y: 700 },
  { x: 600, y: 700 },
  { x: 50, y: 750 },
  { x: 100, y: 750 },
  { x: 150, y: 750 },
  { x: 200, y: 750 },
  { x: 250, y: 750 },
  { x: 300, y: 750 },
  { x: 350, y: 750 },
  { x: 400, y: 750 },
  { x: 450, y: 750 },
  { x: 500, y: 750 },
  { x: 550, y: 750 },
  { x: 600, y: 750 },
  { x: 650, y: 750 },
];
// рисуем пакмана
function drawPacman() {
  context.beginPath();
  context.arc(pacman.x, pacman.y, pacman.radius, pacman.mouthAngle, Math.PI * 2 - pacman.mouthAngle);
  context.lineTo(pacman.x, pacman.y);
  context.fillStyle = 'yellow';
  context.fill();
}
// рисуем доты
function drawDots() {
  dots.forEach(dot => {
    context.beginPath();
    context.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
  });
}
// скорость пакмана
function update() {
  switch (pacman.direction) {
    case 'right':
      pacman.x += 2;
      break;
    case 'left':
      pacman.x -= 2;
      break;
    case 'up':
      pacman.y -= 2;
      break;
    case 'down':
      pacman.y += 2;
      break;
  }
  
  if (pacman.x > canvas.width) {
    pacman.x = 0;
  } else if (pacman.x < 0) {
    pacman.x = canvas.width;
  }
  
  pacman.mouthAngle += 0.1;
  if (pacman.mouthAngle > Math.PI / 4 || pacman.mouthAngle < 0) {
    pacman.mouthAngleDirection *= -1;
  }
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPacman();
  drawDots();
  
  requestAnimationFrame(update);
}

update();
// управление пакманом
document.addEventListener('keydown', e => {
  switch (e.code) {
    case 'ArrowRight':
      pacman.direction = 'right';
      break;
    case 'ArrowLeft':
      pacman.direction = 'left';
      break;
    case 'ArrowUp':
      pacman.direction = 'up';
      break;
    case 'ArrowDown':
      pacman.direction = 'down';
      break;
  }
});