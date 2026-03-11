import React, { useEffect, useRef } from 'react';

interface CanvasParticlesProps {
  color?: string;
  count?: number;
  speed?: number;
  size?: number;
}

const CanvasParticles: React.FC<CanvasParticlesProps> = ({ 
  color = 'rgba(56, 189, 248, 0.3)', 
  count = 60, 
  speed = 0.5,
  size = 2
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number;
    let height: number;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.offsetWidth;
        height = canvas.height = parent.offsetHeight;
      }
    };

    class Particle {
      x: number;
      y: number;
      particleSize: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.particleSize = Math.random() * size + 0.5;
        this.speedX = (Math.random() * speed - speed / 2);
        this.speedY = (Math.random() * speed - speed / 2);
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        const rgba = color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        ctx.fillStyle = rgba;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count, speed, size]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default CanvasParticles;
