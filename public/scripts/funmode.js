// public/scripts/funmode.js
function spawnFunImage(playSound) {
  const container = document.getElementById('funmode-container');
  if (!container) return;

  const images = [
    '/funmode/assets/fun1.png',
    '/funmode/assets/fun2.png',
    '/funmode/assets/fun3.png',
    '/funmode/assets/fun4.png',
    '/funmode/assets/fun5.png',
  ];
  const sounds = playSound ? [
    '/funmode/sounds/boop1.mp3',
    '/funmode/sounds/boop2.mp3',
    '/funmode/sounds/boop3.mp3',
  ] : [];

  const img = document.createElement('img');
  const src = images[Math.floor(Math.random() * images.length)];
  img.src = src;
  img.style.position = 'absolute';
  img.style.width = '100px';
  img.style.height = '100px';
  img.style.pointerEvents = 'none';

  const startX = Math.random() * (window.innerWidth - 100);
  const startY = Math.random() * (window.innerHeight - 100);
  img.style.left = `${startX}px`;
  img.style.top = `${startY}px`;

  // Determine if this image should "zoom across the screen"
  const isZoomMode = Math.random() < 0.25;

  const endX = isZoomMode
    ? Math.random() * window.innerWidth
    : startX + (Math.random() * 400 - 200);

  const endY = isZoomMode
    ? Math.random() * window.innerHeight
    : startY + (Math.random() * 400 - 200);

  const duration = isZoomMode
    ? Math.random() * 2 + 1 // 1–3s for zoomers
    : Math.random() * 5 + 5; // 5–10s normal

  const scale = isZoomMode
    ? Math.random() * 3 + 2 // 2x–5x
    : Math.random() * 1.5 + 0.5; // 0.5x–2x

  const rotate = Math.random() * 720 - 360;
  const filter = `hue-rotate(${Math.random() * 360}deg) brightness(${Math.random() * 0.5 + 0.75})`;

  const animId = Date.now();
  img.style.transform = `scale(${scale})`;
  img.style.filter = filter;
  img.style.boxShadow = isZoomMode
    ? '0 0 30px rgba(255, 255, 0, 0.8)' // brighter glow for zoomers
    : '0 0 10px rgba(255, 255, 255, 0.5)';

  img.style.animation = `
    fly-${animId} ${duration}s linear forwards,
    spin-${animId} ${duration / 2}s linear infinite
  `;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fly-${animId} {
      0% {
        transform: translate(0, 0) scale(${scale});
        opacity: 1;
      }
      100% {
        transform: translate(${endX - startX}px, ${endY - startY}px) scale(${scale});
        opacity: 0;
      }
    }
    @keyframes spin-${animId} {
      100% { transform: rotate(${rotate}deg); }
    }
  `;
  document.head.appendChild(styleSheet);

  if (playSound && sounds.length > 0) {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = isZoomMode ? 0.5 : 0.3;
    audio.play().catch(() => {});
  }

  container.appendChild(img);
  setTimeout(() => {
    img.remove();
    styleSheet.remove();
  }, duration * 1000);
}

window.spawnFunImage = spawnFunImage;
