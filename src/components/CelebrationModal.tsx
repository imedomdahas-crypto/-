import React, { useState, useEffect } from 'react';
import { ColoringPage, SavedArtwork } from '../types';
import { sound } from '../utils/sound';
import { ENCOURAGING_PHRASES } from '../data/colors';
import { Sparkles, Download, Heart, RotateCcw, ArrowRight, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: ColoringPage;
  regionFills: Record<string, string>;
  onSaveToGallery: (artwork: SavedArtwork) => void;
  onChooseNewPage: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  onClose,
  page,
  regionFills,
  onSaveToGallery,
  onChooseNewPage
}) => {
  const [artistName, setArtistName] = useState('فنان مبدع');
  const [praiseText, setPraiseText] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Pick random encouraging phrase
      const randomPhrase =
        ENCOURAGING_PHRASES[Math.floor(Math.random() * ENCOURAGING_PHRASES.length)];
      setPraiseText(randomPhrase);
      setIsSaved(false);

      // Huge celebratory confetti cannon
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#A855F7']
      });

      // Voice praise
      setTimeout(() => {
        sound.speakArabic(randomPhrase);
      }, 350);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Composite SVG + fills to high-res PNG for download
  const handleDownload = () => {
    sound.playPop();

    // Create export canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw background
    ctx.fillStyle = '#FFFDF5';
    ctx.fillRect(0, 0, 1200, 1000);

    // Render SVG into canvas via Image
    const svgEl = document.querySelector('svg');
    if (svgEl) {
      const svgClone = svgEl.cloneNode(true) as SVGSVGElement;
      svgClone.setAttribute('width', '1100');
      svgClone.setAttribute('height', '800');

      const xml = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        // Draw SVG coloring page
        ctx.drawImage(img, 50, 50, 1100, 800);

        // Also draw any freehand canvas overlay
        const freehandCanvas = document.querySelector('canvas') as HTMLCanvasElement;
        if (freehandCanvas) {
          ctx.drawImage(freehandCanvas, 50, 50, 1100, 800);
        }

        // Draw Artist signature banner
        ctx.fillStyle = '#FEF3C7';
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(80, 870, 1040, 90, 24);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#92400E';
        ctx.font = 'bold 32px "Tajawal", system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`🎨 لوحة: ${page.titleAr}`, 1080, 928);

        ctx.textAlign = 'left';
        ctx.fillText(`✨ بريشة الفنان الصغير: ${artistName}`, 120, 928);

        // Trigger download
        const a = document.createElement('a');
        a.download = `لوحة-${artistName}-${page.id}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
        URL.revokeObjectURL(blobURL);
      };
      img.src = blobURL;
    }
  };

  const handleSave = () => {
    sound.playStampPlop();
    const svgEl = document.querySelector('svg');
    if (svgEl) {
      const xml = new XMLSerializer().serializeToString(svgEl);
      const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(xml)}`;

      const artwork: SavedArtwork = {
        id: `art-${Date.now()}`,
        pageId: page.id,
        pageTitle: page.titleAr,
        previewDataUrl: dataUrl,
        artistName: artistName || 'فنان مبدع',
        createdAt: Date.now()
      };
      onSaveToGallery(artwork);
      setIsSaved(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-xl bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center">
        {/* Celebration Trophy / Star Icon */}
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-orange-400 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center -mt-14 mb-4 animate-bounce">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-950 mb-2">
          مبارك! لقد أنجزت لوحة مذهلة!
        </h2>
        <p className="text-base text-amber-800 font-bold mb-4 bg-amber-100/80 px-4 py-2 rounded-2xl border border-amber-200">
          "{praiseText}"
        </p>

        {/* Artist Name Input */}
        <div className="w-full max-w-sm mb-6">
          <label className="block text-xs font-bold text-slate-700 mb-1 text-right">
            اسم الفنان الصغير (للتوقيع على اللوحة):
          </label>
          <div className="relative flex items-center">
            <User className="absolute right-3 w-5 h-5 text-amber-500" />
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="اكتب اسمك هنا يا بطل"
              className="w-full pr-10 pl-4 py-2.5 bg-white rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-slate-800 font-bold text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full mb-6">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-md transform hover:scale-102 active:scale-95 transition-all text-sm"
          >
            <Download className="w-5 h-5" />
            <span>تحميل الصورة (PNG)</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`flex items-center justify-center gap-2 py-3 px-4 font-bold rounded-2xl shadow-md transform hover:scale-102 active:scale-95 transition-all text-sm ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-500 hover:bg-rose-600 text-white'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span>{isSaved ? 'تم الحفظ في معرضي ✓' : 'حفظ في معرضي'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between w-full border-t border-amber-200 pt-4 text-xs font-bold">
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 p-2 rounded-xl hover:bg-amber-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>متابعة التلوين والتعديل</span>
          </button>

          <button
            onClick={() => {
              sound.playWhoosh();
              onChooseNewPage();
            }}
            className="text-orange-600 hover:text-orange-800 flex items-center gap-1.5 p-2 rounded-xl hover:bg-orange-100 transition-colors"
          >
            <span>اختيار رسمة جديدة</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
