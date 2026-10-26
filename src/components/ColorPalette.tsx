import React from 'react';
import { COLOR_PALETTE } from '../data/colors';
import { ColorOption } from '../types';
import { sound } from '../utils/sound';
import { Sparkles, Palette } from 'lucide-react';

interface ColorPaletteProps {
  selectedColor: string;
  onSelectColor: (hex: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  selectedColor,
  onSelectColor
}) => {
  const handleColorClick = (color: ColorOption, index: number) => {
    sound.playColorChime(index);
    onSelectColor(color.hex);
    if (color.nameAr) {
      sound.speakArabic(color.nameAr);
    }
  };

  const handleCustomColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    sound.playPop();
    onSelectColor(e.target.value);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-3 border-2 border-amber-200/80 shadow-md">
      <div className="flex items-center justify-between px-2 mb-2 text-xs font-bold text-amber-900/80">
        <div className="flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-orange-500" />
          <span>علبة الألوان المبهجة</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Active color swatch with name */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 rounded-full border border-amber-200">
            <span
              className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-inner inline-block"
              style={{ backgroundColor: selectedColor }}
            />
            <span className="text-[11px] text-slate-700 truncate max-w-[120px]">
              {COLOR_PALETTE.find((c) => c.hex.toLowerCase() === selectedColor.toLowerCase())?.nameAr || 'لونك المميز'}
            </span>
          </div>
        </div>
      </div>

      {/* Color grid */}
      <div className="flex flex-wrap items-center gap-2 max-h-32 overflow-y-auto p-1 scrollbar-thin">
        {COLOR_PALETTE.map((c, idx) => {
          const isSelected = selectedColor.toLowerCase() === c.hex.toLowerCase();
          return (
            <button
              key={c.id}
              onClick={() => handleColorClick(c, idx)}
              className={`relative group w-9 h-9 sm:w-10 sm:h-10 rounded-2xl transition-all duration-200 transform hover:scale-115 active:scale-95 flex items-center justify-center ${
                isSelected
                  ? 'ring-4 ring-orange-500 ring-offset-2 ring-offset-amber-50 scale-110 shadow-lg z-10'
                  : 'shadow-sm hover:shadow'
              } ${c.isGlitter ? 'border-2 border-amber-300' : 'border border-black/10'}`}
              style={{ backgroundColor: c.hex }}
              title={c.nameAr}
            >
              {c.isGlitter && (
                <Sparkles className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] animate-pulse" />
              )}
              {isSelected && !c.isGlitter && (
                <span className="w-2.5 h-2.5 bg-white/90 rounded-full shadow-sm" />
              )}
            </button>
          );
        })}

        {/* Custom Color Wheel Picker */}
        <label
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400 border border-black/10 shadow-sm hover:shadow transform hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center transition-all"
          title="اختر أي لون تريده!"
        >
          <input
            type="color"
            value={selectedColor}
            onChange={handleCustomColor}
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <span className="text-white text-xs font-black drop-shadow">+</span>
        </label>
      </div>
    </div>
  );
};
