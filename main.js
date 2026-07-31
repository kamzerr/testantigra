/**
 * VILLA KOMO - Ultra-Premium Architectural Scrollytelling Engine
 * 240-Frame Canvas Renderer with 60FPS Lerp Interpolation
 */

const TOTAL_FRAMES = 240;
const frameImages = [];
let loadedFramesCount = 0;

const canvas = document.getElementById('scrolly-canvas');
const ctx = canvas.getContext('2d');

const preloader = document.getElementById('preloader');
const loadBar = document.getElementById('load-bar');
const loadPercent = document.getElementById('load-percent');
const navbar = document.getElementById('navbar');
const storyWrapper = document.getElementById('story-wrapper');

// 5 Story Steps
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');
const step5 = document.getElementById('step-5');

// Floating Badges
const badgeIpn = document.getElementById('badge-ipn');
const badgeFoundation = document.getElementById('badge-foundation');
const badgeThermal = document.getElementById('badge-thermal');

// Animation State
let targetFrameIndex = 0;
let currentFrameIndex = 0;
let isPreloaded = false;

// Format frame index number with 3 digits padding (001, 002, ..., 240)
function getFrameFilename(index) {
  const pad = String(index).padStart(3, '0');
  return `./ezgif-86f42445f77d2c3b-jpg/ezgif-frame-${pad}.jpg`;
}

// Preload all 240 frame images
function preloadFrames() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFrameFilename(i);
    
    img.onload = () => {
      loadedFramesCount++;
      const progress = Math.round((loadedFramesCount / TOTAL_FRAMES) * 100);
      loadBar.style.width = `${progress}%`;
      loadPercent.textContent = `${progress}%`;

      if (loadedFramesCount === TOTAL_FRAMES) {
        onPreloadComplete();
      }
    };

    img.onerror = () => {
      // In case of any load error, fallback count
      loadedFramesCount++;
      if (loadedFramesCount === TOTAL_FRAMES) {
        onPreloadComplete();
      }
    };

    frameImages.push(img);
  }
}

function onPreloadComplete() {
  isPreloaded = true;
  setTimeout(() => {
    preloader.classList.add('hidden');
    navbar.classList.add('visible');
    renderCanvas();
    updateScrollTimeline();
  }, 400);
}

// Canvas Resizing and HDPI Handling
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  renderCanvas();
}

window.addEventListener('resize', resizeCanvas);

// Render current frame with cover aspect ratio logic
function renderCanvas() {
  if (!frameImages.length) return;

  const currentImg = frameImages[Math.round(currentFrameIndex)] || frameImages[0];
  if (!currentImg || !currentImg.complete) return;

  const dpr = window.devicePixelRatio || 1;
  const cw = canvas.width;
  const ch = canvas.height;

  ctx.clearRect(0, 0, cw, ch);

  // Calculate cover aspect ratio
  const imgRatio = currentImg.width / currentImg.height;
  const canvasRatio = cw / ch;

  let drawW, drawH, drawX, drawY;

  if (canvasRatio > imgRatio) {
    drawW = cw;
    drawH = cw / imgRatio;
    drawX = 0;
    drawY = (ch - drawH) / 2;
  } else {
    drawH = ch;
    drawW = ch * imgRatio;
    drawX = (cw - drawW) / 2;
    drawY = 0;
  }

  ctx.drawImage(currentImg, drawX, drawY, drawW, drawH);
}

// 60FPS RequestAnimationFrame Lerp Loop
function animateCanvas() {
  if (isPreloaded) {
    // Lerp smoothing (0.12 factor gives ultra-smooth Apple-style inertial scroll)
    const diff = targetFrameIndex - currentFrameIndex;
    if (Math.abs(diff) > 0.001) {
      currentFrameIndex += diff * 0.12;
      renderCanvas();
    }
  }
  requestAnimationFrame(animateCanvas);
}

// Update Scroll Timeline and active steps based on exact requested percentages
function updateScrollTimeline() {
  const scrollY = window.scrollY;
  const maxScroll = storyWrapper.offsetHeight - window.innerHeight;
  
  // Calculate scroll fraction between 0.0 and 1.0
  let scrollFraction = 0;
  if (maxScroll > 0) {
    scrollFraction = Math.max(0, Math.min(1, scrollY / maxScroll));
  }

  // Map scroll fraction directly to frame 0 -> 239
  targetFrameIndex = Math.min(TOTAL_FRAMES - 1, scrollFraction * (TOTAL_FRAMES - 1));

  // Navbar behavior
  if (scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Step 1: 0% - 15% (Hero)
  if (scrollFraction >= 0 && scrollFraction <= 0.15) {
    step1.classList.add('active');
  } else {
    step1.classList.remove('active');
  }

  // Step 2: 15% - 40% (Skeleton & Steel)
  if (scrollFraction > 0.15 && scrollFraction <= 0.40) {
    step2.classList.add('active');
    badgeIpn.classList.add('visible');
  } else {
    step2.classList.remove('active');
    badgeIpn.classList.remove('visible');
  }

  // Step 3: 40% - 65% (Foundations & Thermal)
  if (scrollFraction > 0.40 && scrollFraction <= 0.65) {
    step3.classList.add('active');
    badgeFoundation.classList.add('visible');
    badgeThermal.classList.add('visible');
  } else {
    step3.classList.remove('active');
    badgeFoundation.classList.remove('visible');
    badgeThermal.classList.remove('visible');
  }

  // Step 4: 65% - 85% (Craftsmanship & Finishes)
  if (scrollFraction > 0.65 && scrollFraction <= 0.85) {
    step4.classList.add('active');
  } else {
    step4.classList.remove('active');
  }

  // Step 5: 85% - 100% (Re-assembly & Final Masterlock)
  if (scrollFraction > 0.85) {
    step5.classList.add('active');
  } else {
    step5.classList.remove('active');
  }
}

window.addEventListener('scroll', updateScrollTimeline, { passive: true });

// Modals Handling
const consultModal = document.getElementById('consult-modal');
const techModal = document.getElementById('tech-modal');

document.querySelectorAll('.open-consult-modal, #nav-cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    consultModal.classList.add('active');
  });
});

document.querySelectorAll('.open-tech-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    techModal.classList.add('active');
  });
});

document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(element => {
  element.addEventListener('click', (e) => {
    if (e.target === element || e.target.classList.contains('modal-close-btn')) {
      consultModal.classList.remove('active');
      techModal.classList.remove('active');
    }
  });
});

// Interactive Surface Range Slider
const surfaceRange = document.getElementById('surface-range');
const surfaceVal = document.getElementById('surface-val');
if (surfaceRange && surfaceVal) {
  surfaceRange.addEventListener('input', (e) => {
    surfaceVal.textContent = e.target.value;
  });
}

// Technical Specs Tab Switcher
const specTabBtns = document.querySelectorAll('.spec-tab-btn');
const specTabContents = document.querySelectorAll('.spec-tab-content');

specTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');

    specTabBtns.forEach(b => b.classList.remove('active'));
    specTabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// Initialize Engine
resizeCanvas();
preloadFrames();
requestAnimationFrame(animateCanvas);
