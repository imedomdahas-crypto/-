import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ColoringPage, ToolType, BrushSize, StampOption } from '../types';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface ColoringBoardProps {
  page: ColoringPage;
  currentTool: ToolType;
  selectedColor: string;
  brushSize: BrushSize;
  selectedStamp: StampOption | null;
  regionFills: Record<string, string>;
  onFillRegion: (regionId: string, color: string) => void;
  isReferenceVisible: boolean;
  onCloseReference: () => void;
  onCanvasChange: () => void;
}

export const ColoringBoard: React.FC<ColoringBoardProps> = ({
  page,
  currentTool,
  selectedColor,
  brushSize,
  selectedStamp,
  regionFills,
  onFillRegion,
  isReferenceVisible,
  onCloseReference,
  onCanvasChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef<boolean>(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  // Brush radius mapping
  const getBrushRadius = useCallback(() => {
    switch (brushSize) {
      case 'small':
        return 4;
      case 'medium':
        return 10;
      case 'large':
        return 20;
      case 'xlarge':
        return 34;
      default:
        return 10;
    }
  }, [brushSize]);

  // Sync canvas dimensions to container
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      // Save existing contents before resize
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx && canvas.width > 0 && canvas.height > 0) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
          ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
        }
      }
    }
  }, []);

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [updateCanvasSize]);

  // Pointer position helpers
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Sparkle burst at specific screen coordinates
  const triggerSparkleBurst = (clientX: number, clientY: number) => {
    sound.playSparkle();
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    confetti({
      particleCount: 18,
      spread: 60,
      startVelocity: 15,
      origin: { x, y },
      colors: [selectedColor, '#FACC15', '#38BDF8', '#FF69B4', '#FFFFFF'],
      disableForReducedMotion: true,
      shapes: ['star', 'circle'],
      scalar: 0.9
    });
  };

  // Tap-to-Fill SVG region handler
  const handleRegionClick = (e: React.MouseEvent, regionId: string, regionLabel: string) => {
    if (currentTool === 'bucket') {
      sound.playColorChime(regionId.length);
      sound.speakArabic(regionLabel);
      triggerSparkleBurst(e.clientX, e.clientY);
      onFillRegion(regionId, selectedColor);
    }
  };

  // Canvas drawing handlers (Brush, Crayon, Glitter, Stamp, Eraser)
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (currentTool === 'bucket') return;

    const { x, y } = getCoordinates(e);
    isDrawingRef.current = true;
    lastPointRef.current = { x, y };

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    if (currentTool === 'stamp' && selectedStamp) {
      sound.playStampPlop();
      ctx.save();
      ctx.font = `${getBrushRadius() * 2.8}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(selectedStamp.emoji, x, y);
      ctx.restore();
      triggerSparkleBurst(e.clientX, e.clientY);
      onCanvasChange();
      isDrawingRef.current = false;
      return;
    }

    // Start single dab for brush
    drawStroke(x, y, x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || currentTool === 'bucket') return;

    const { x, y } = getCoordinates(e);
    if (lastPointRef.current) {
      drawStroke(lastPointRef.current.x, lastPointRef.current.y, x, y);
    }
    lastPointRef.current = { x, y };
  };

  const handlePointerUp = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      lastPointRef.current = null;
      onCanvasChange();
    }
  };

  const drawStroke = (x1: number, y1: number, x2: number, y2: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const radius = getBrushRadius();

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = radius * 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else if (currentTool === 'brush') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.fillStyle = selectedColor;
      ctx.lineWidth = radius * 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else if (currentTool === 'crayon') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = radius * 1.8;
      ctx.globalAlpha = 0.85;

      // Add crayon texture via slight offset lines
      ctx.beginPath();
      ctx.moveTo(x1 + (Math.random() - 0.5) * 2, y1 + (Math.random() - 0.5) * 2);
      ctx.lineTo(x2 + (Math.random() - 0.5) * 2, y2 + (Math.random() - 0.5) * 2);
      ctx.stroke();
    } else if (currentTool === 'glitter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = radius;
      ctx.shadowColor = selectedColor;
      ctx.shadowBlur = 12;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Sprinkle glitter stars
      if (Math.random() > 0.4) {
        ctx.font = `${radius * 1.2}px serif`;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('✨', x2 + (Math.random() - 0.5) * radius * 3, y2 + (Math.random() - 0.5) * radius * 3);
      }
    }

    ctx.restore();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center bg-dots-pattern rounded-3xl overflow-hidden border-4 border-amber-200/90 shadow-inner"
    >
      {/* SVG Outline and Tap-to-Fill Layer */}
      <div className="relative w-full max-w-3xl aspect-[6/5] p-2 flex items-center justify-center">
        <svg
          viewBox={page.viewBox}
          className="w-full h-full drop-shadow-sm select-none"
          style={{
            cursor:
              currentTool === 'bucket'
                ? 'cell'
                : currentTool === 'eraser'
                ? 'pointer'
                : 'crosshair'
          }}
        >
          <defs>
            <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Fillable interactive regions */}
          {page.regions.map((region) => {
            const fillColor = regionFills[region.id] || region.defaultFill || '#FFFFFF';
            const isHovered = hoveredRegionId === region.id && currentTool === 'bucket';

            return (
              <path
                key={region.id}
                d={region.d}
                fill={fillColor}
                stroke={region.stroke || '#1E293B'}
                strokeWidth={region.strokeWidth || 4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-150 ${
                  isHovered ? 'brightness-110 filter drop-shadow-md cursor-cell opacity-95' : ''
                }`}
                onMouseEnter={() => currentTool === 'bucket' && setHoveredRegionId(region.id)}
                onMouseLeave={() => currentTool === 'bucket' && setHoveredRegionId(null)}
                onClick={(e) => handleRegionClick(e, region.id, region.labelAr)}
              >
                <title>{region.labelAr}</title>
              </path>
            );
          })}

          {/* Static details/decorations (eyes, ripples, highlights) */}
          {page.decorations?.map((item, idx) => {
            if (item.type === 'circle') {
              return (
                <circle
                  key={`deco-${idx}`}
                  {...(item.props as React.SVGProps<SVGCircleElement>)}
                  pointerEvents="none"
                />
              );
            }
            if (item.type === 'path') {
              return (
                <path
                  key={`deco-${idx}`}
                  {...(item.props as React.SVGProps<SVGPathElement>)}
                  pointerEvents="none"
                />
              );
            }
            return null;
          })}
        </svg>

        {/* Freehand HTML5 Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute inset-0 w-full h-full z-10 touch-none ${
            currentTool === 'bucket' ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
        />
      </div>

      {/* Floating Original Reference Image (if toggled) */}
      {isReferenceVisible && page.referenceImage && (
        <div className="absolute top-4 left-4 z-30 w-44 sm:w-56 bg-white/95 rounded-2xl p-2 border-2 border-amber-400 shadow-2xl animate-pop">
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-amber-100">
            <span className="text-[11px] font-bold text-amber-900">القصة المصورة الأصلية</span>
            <button
              onClick={() => {
                sound.playPop();
                onCloseReference();
              }}
              className="text-xs text-slate-400 hover:text-slate-800 p-0.5"
            >
              ✕
            </button>
          </div>
          <img
            src={page.referenceImage}
            alt="القصة الأصلية"
            className="w-full aspect-square object-cover rounded-xl border border-amber-200"
          />
          <p className="mt-1 text-[10px] text-center text-slate-500 font-medium">
            انظر لألوان المشهد واستلهم إبداعك!
          </p>
        </div>
      )}

      {/* Quick tooltip of active hover region in bucket mode */}
      {currentTool === 'bucket' && hoveredRegionId && (
        <div className="absolute top-3 bg-amber-500/90 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md pointer-events-none transition-all">
          انقر لتلوين {page.regions.find((r) => r.id === hoveredRegionId)?.labelAr || 'هذا الجزء'}
        </div>
      )}
    </div>
  );
};
