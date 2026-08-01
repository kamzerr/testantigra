import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';

const TOTAL_FRAMES = 240;

export default function ScrollyCanvas({ onScrollProgress }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameIdRef = useRef(null);

  // Pad frame numbers with leading zeros (001 to 240)
  const getFrameUrl = (index) => {
    const frameNum = String(index + 1).padStart(3, '0');
    return `/imagesvideo/ezgif-frame-${frameNum}.jpg`;
  };

  // Preload all 240 images
  useEffect(() => {
    let isMounted = true;
    const loadedImages = new Array(TOTAL_FRAMES);
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (!isMounted) return;
        loadedImages[i] = img;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        // In case of error, set fallback image
        loadedImages[i] = img;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw image on canvas preserving aspect ratio & optimized mobile layout
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[frameIndex]) return;

    const ctx = canvas.getContext('2d');
    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    // Clear background to exact match #040404
    ctx.fillStyle = '#040404';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Mobile vs Desktop responsive scaling math
    const isMobile = rect.width < 640;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawHeight = rect.height * (isMobile ? 0.82 : 0.85);
      drawWidth = drawHeight * imgAspect;
    } else {
      drawWidth = rect.width * (isMobile ? 0.95 : 0.85);
      drawHeight = drawWidth / imgAspect;
    }

    offsetX = (rect.width - drawWidth) / 2;
    // On mobile, enlarge the image and position it centered/top so it fills the background beautifully
    offsetY = isMobile ? rect.height * 0.04 : (rect.height - drawHeight) / 2;

    // Draw image smooth
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  // Smooth lerp frame loop
  useEffect(() => {
    if (!isLoaded) return;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.15; // Smooth spring interpolation
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameToDraw = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      drawFrame(frameToDraw);
      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isLoaded, drawFrame]);

  // Handle scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !isLoaded) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      
      if (totalScrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollableHeight));

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      if (onScrollProgress) {
        onScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isLoaded, onScrollProgress]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div id="canvas-hero" ref={containerRef} className="relative w-full h-[450vh] bg-[#040404]">
      
      {/* Preloader Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-40 bg-[#040404] flex flex-col items-center justify-center p-6">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-white/10 border-t-[#0050FF] animate-spin flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#e57c35] animate-pulse" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white tracking-wide font-sans">
              SANTOS THERMIQUE <span className="text-[#0050FF]">HAYANGE</span>
            </h3>
            <p className="text-sm text-white/50 font-medium">
              Chargement de la modélisation 3D thermique ({loadPercent}%)
            </p>
          </div>
          <div className="w-64 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#0050FF] via-[#00D6FF] to-[#e57c35] transition-all duration-200"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Fullscreen Canvas */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#040404] flex items-center justify-center">
        
        {/* Soft Background Radial Aura */}
        <div className="absolute inset-0 pointer-events-none bg-ambient-hero opacity-80" />
        
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain relative z-10"
        />

        {/* Subtle Bottom Scroll Cue Indicator */}
        {isLoaded && (
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Défiler pour explorer
            </span>
            <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-[#0050FF] rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
