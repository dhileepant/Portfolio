const{
    animate,
    Draggable
} = anime;

animate('#intro-title',{
    y: [{ to: '-10rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 200 }],
    
});

animate('#intro-tagline',{
    y: [{ to: '-10rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 200 }]
});

setTimeout(() =>{
    const intro = document.getElementById('intro');
    intro.style.transition = 'opacity 3 ease';
    intro.style.opacity = '0';

    setTimeout(() => {
        intro.style.display = 'none'
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('main-content').style.opacity = '1';
    },100);
},2000);

const colors = [
  '#8be8f5', '#0e2a32', '#2c1b2f', '#262f55', '#1e5366',
  '#58385f', '#050507', '#485e9e', '#45a5c5', '#a57bc2'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createBlob() {
  const blob = document.createElement('div');
  blob.className = 'bg-blob';

  const size = getRandomInt(100, 250);
  blob.style.width = `${size}px`;
  blob.style.height = `${size}px`;

  blob.style.top = `${getRandomInt(0, window.innerHeight - size)}px`;
  blob.style.left = `${getRandomInt(0, window.innerWidth - size)}px`;

  blob.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(blob);
}

for (let i = 0; i < 10; i++) {
  createBlob();
}

function openCertificate(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  img.src = src;
  modal.style.display = "flex";
}

function closeCertificate() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
