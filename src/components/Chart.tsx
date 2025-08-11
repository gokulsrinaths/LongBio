'use client';

import { useEffect, useRef } from 'react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ChartProps {
  data: ChartData[];
  type: 'pie' | 'bar';
  title: string;
}

export default function Chart({ data, type, title }: ChartProps) {
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

    // Draw chart based on type
    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (type === 'pie') {
        drawPieChart(ctx, data, canvas.width, canvas.height);
      } else {
        drawBarChart(ctx, data, canvas.width, canvas.height);
      }
    };

    drawChart();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [data, type]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-blue-200">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function drawPieChart(
  ctx: CanvasRenderingContext2D,
  data: ChartData[],
  width: number,
  height: number
) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = Math.min(width, height) * 0.4;
  const centerX = width / 2;
  const centerY = height / 2;

  let startAngle = 0;
  data.forEach(item => {
    const sliceAngle = (2 * Math.PI * item.value) / total;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();

    ctx.fillStyle = item.color;
    ctx.fill();

    startAngle += sliceAngle;
  });
}

function drawBarChart(
  ctx: CanvasRenderingContext2D,
  data: ChartData[],
  width: number,
  height: number
) {
  const padding = 40;
  const barWidth = (width - padding * 2) / data.length * 0.8;
  const spacing = (width - padding * 2) / data.length * 0.2;
  const maxValue = Math.max(...data.map(item => item.value));

  data.forEach((item, index) => {
    const barHeight = ((height - padding * 2) * item.value) / maxValue;
    const x = padding + index * (barWidth + spacing);
    const y = height - padding - barHeight;

    ctx.fillStyle = item.color;
    ctx.fillRect(x, y, barWidth, barHeight);

    // Draw label
    ctx.fillStyle = '#94A3B8'; // text-blue-200
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, x + barWidth / 2, height - padding + 20);
  });
} 