import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 3/4 * window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star props
    const stars: { x: number; y: number; size: number; opacity: number }[] = [];
    const STAR_COUNT = 3000;
    const MIN_STAR_SIZE = 0.8; 
    const MAX_STAR_SIZE = 1;

    // Function to create stars
    const createStars = () => {
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: MIN_STAR_SIZE + Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE),
          opacity: Math.random(),
        });
      }
    };
    createStars();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(star.opacity * 1.2, 1)})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.opacity = (Math.sin(Date.now() * 0.002 + star.x * star.y * 0.0001) * 0.3 + 0.7) * 0.7;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      setCanvasSize();
      createStars();
    });

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen -z-10 bg-starry-gradient">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default StarryBackground;