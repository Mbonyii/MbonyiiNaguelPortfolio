import { useState, useRef, MouseEvent } from 'react';
import { Card } from '@/components/ui/card';

export function Card3D() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="perspective-1000" data-testid="card-3d">
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative overflow-hidden backdrop-blur-xl bg-card/80 border-card-border p-6 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <span className="text-primary text-xl font-bold">{'<>'}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Portfolio</h3>
              <p className="text-xs text-muted-foreground">Interactive Terminal</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Commands</span>
              <span className="text-primary font-mono font-semibold">10+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Projects</span>
              <span className="text-accent-foreground font-mono font-semibold">View All</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground italic">
              "Type commands to explore my work and experience"
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
      </Card>
    </div>
  );
}
