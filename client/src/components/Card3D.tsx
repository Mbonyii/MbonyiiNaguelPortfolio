import { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';

type Card3DProps = {
  imageUrl?: string;
  name?: string;
  subtitle?: string;
};

export function Card3D({ imageUrl, name = 'Portfolio', subtitle = 'Interactive Terminal' }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  // Motion values for smooth, springy tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 16, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 16, mass: 0.6 });

  // No idle animation: card rests until user hovers

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // stronger but clamped tilt to make 3D more visible
    const rxRaw = ((y - centerY) / centerY) * -16;
    const ryRaw = ((x - centerX) / centerX) * 16;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    const rx = clamp(rxRaw, -16, 16);
    const ry = clamp(ryRaw, -16, 16);
    rotateX.set(rx);
    rotateY.set(ry);
    // update glare position
    const glare = cardRef.current.querySelector('[data-glare]') as HTMLDivElement | null;
    if (glare) {
      const pctX = x / rect.width;
      const pctY = y / rect.height;
      glare.style.left = `${pctX * 100}%`;
      glare.style.top = `${pctY * 100}%`;
    }
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="perspective-1000 animate-in fade-in slide-in-from-right-4 duration-700" data-testid="card-3d">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.6 }}
        className="group relative overflow-hidden backdrop-blur-xl bg-card/80 border-card-border p-6 transition-[box-shadow,background] duration-300 ease-out hover:shadow-xl hover:shadow-primary/20 rounded-lg will-change-transform"
      >
        <div className="space-y-4" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex items-center gap-3" style={{ transform: 'translateZ(24px)' }}>
            {imageUrl && !imgError ? (
              <img
                src={imageUrl}
                alt={name}
                width={80}
                height={80}
                loading="eager"
                onError={() => setImgError(true)}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/60 shadow-md bg-muted/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/80"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 ring-2 ring-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/20">
                <span className="text-primary text-lg font-bold animate-pulse">
                  {name?.slice(0, 1) || '<>'}
                </span>
              </div>
            )}
            <div style={{ transform: 'translateZ(16px)' }}>
              <h3 className="text-xl font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm" style={{ transform: 'translateZ(12px)' }}>
            <div className="flex justify-between items-center transition-colors duration-200 hover:bg-primary/5 p-1 rounded">
              <span className="text-muted-foreground">Commands</span>
              <span className="text-primary font-mono font-semibold animate-pulse">5+</span>
            </div>
            <div className="flex justify-between items-center transition-colors duration-200 hover:bg-primary/5 p-1 rounded">
              <span className="text-muted-foreground">Type "help" </span>
              <span className="text-accent-foreground font-mono font-semibold transition-transform duration-200 hover:scale-110">View All</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border" style={{ transform: 'translateZ(8px)' }}>
            <p className="text-xs text-muted-foreground italic">
              "Type commands to explore my work and experience"
            </p>
          </div>
        </div>

        {/* Background gradient and interactive glare */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" style={{ transform: 'translateZ(0px)' }} />
        <div
          data-glare
          className="pointer-events-none absolute w-32 h-32 rounded-full opacity-0 group-hover:opacity-40"
          style={{
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle at center, hsl(var(--primary) / 0.35) 0%, hsl(var(--primary) / 0.0) 60%)',
            transition: 'opacity 200ms ease-out',
            // lift the glare slightly above card surface
            willChange: 'left, top, opacity',
            zIndex: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
