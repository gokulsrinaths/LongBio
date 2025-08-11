'use client';

import { useEffect, useRef } from 'react';

interface Node {
  id: string;
  type: 'company' | 'researcher' | 'technology';
  name: string;
}

interface Edge {
  source: string;
  target: string;
}

interface NetworkGraphProps {
  nodes: Node[];
  edges: Edge[];
}

export default function NetworkGraph({ nodes, edges }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple force-directed graph layout
    const nodePositions = new Map<string, { x: number; y: number }>();
    
    // Initialize random positions
    nodes.forEach(node => {
      nodePositions.set(node.id, {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      });
    });

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw edges
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;
      edges.forEach(edge => {
        const source = nodePositions.get(edge.source);
        const target = nodePositions.get(edge.target);
        if (source && target) {
          ctx.beginPath();
          ctx.moveTo(source.x, source.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const pos = nodePositions.get(node.id);
        if (!pos) return;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = getNodeColor(node.type);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, edges]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="absolute bottom-4 left-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm text-blue-200">Companies</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm text-blue-200">Researchers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-sm text-blue-200">Technologies</span>
        </div>
      </div>
    </div>
  );
}

function getNodeColor(type: string): string {
  switch (type) {
    case 'company':
      return '#3B82F6'; // blue-500
    case 'researcher':
      return '#22C55E'; // green-500
    case 'technology':
      return '#A855F7'; // purple-500
    default:
      return '#94A3B8'; // gray-400
  }
} 