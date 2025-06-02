// public/scripts/funmode.js
function spawnFunImage(playSound) {
  const container = document.getElementById('funmode-container');
  if (!container) return;

  // List of images and sounds
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

  // Create image element
  const img = document.createElement('img');
  const src = images[Math.floor(Math.random() * images.length)];
  img.src = src;
  img.style.position = 'absolute';
  img.style.width = '100px';
  img.style.height = '100px';
  img.style.pointerEvents = 'none';

  // Random starting position (within viewport)
  const startX = Math.random() * (window.innerWidth - 100);
  const startY = Math.random() * (window.innerHeight - 100);
  img.style.left = `${startX}px`;
  img.style.top = `${startY}px`;

  // Random trajectory and animation
  const endX = startX + (Math.random() * 400 - 200); // ±200px
  const endY = startY + (Math.random() * 400 - 200); // ±200px
  const duration = Math.random() * 5 + 5; // 5–10s
  const scale = Math.random() * 1.5 + 0.5; // 0.5x–2x
  const rotate = Math.random() * 720 - 360; // ±360deg
  const filter = `hue-rotate(${Math.random() * 360}deg) brightness(${Math.random() * 0.5 + 0.75})`;

  // Apply styles and animations
  img.style.transform = `scale(${scale})`;
  img.style.filter = filter;
  img.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'; // Glow effect
  img.style.animation = `
    fly-${Date.now()} ${duration}s linear forwards,
    spin-${Date.now()} ${duration / 2}s linear infinite
  `;

  // Define keyframes dynamically
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fly-${Date.now()} {
      0% { transform: translate(0, 0) scale(${scale}); opacity: 1; }
      100% { transform: translate(${endX - startX}px, ${endY - startY}px) scale(${scale}); opacity: 0; }
    }
    @keyframes spin-${Date.now()} {
      100% { transform: rotate(${rotate}deg); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Play sound if permitted
  if (playSound && sounds.length > 0) {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = 0.3; // Low volume to avoid annoyance
    audio.play().catch(() => {}); // Ignore errors (e.g., user hasn’t interacted)
  }

  // Append image and remove after animation
  container.appendChild(img);
  setTimeout(() => {
    img.remove();
    styleSheet.remove();
  }, duration * 1000);
}

// Expose function globally
window.spawnFunImage = spawnFunImage;