const szelesseg = window.innerWidth;
const magassag = window.innerHeight;
const kep = document.getElementById('smiley');

function randomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveImage() {
   const x = randomInt(0, szelesseg - 30);
   const y = randomInt(40, magassag - 70);
   kep.style.left = `${x}px`;
   kep.style.top = `${y}px`;
}

moveImage();

kep.addEventListener('mouseenter', moveImage);
