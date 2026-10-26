import React from 'react';
import { STAMP_LIST } from '../data/stamps';
import { StampOption } from '../types';
import { sound } from '../utils/sound';
import { Sparkles, X } from 'lucide-react';

interface StampsPickerProps {
  selectedStamp: StampOption | null;
  onSelectStamp: (stamp: StampOption) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const StampsPicker: React.FC<StampsPickerProps> = ({
  selectedStamp,
  onSelectStamp,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-20 right-4 z-40 bg-white/95 backdrop-blur-md rounded-3xl p-4 border-2 border-amber-300 shadow-xl max-w-xs animate-pop">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-100">
        <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>اختر ملصقاً مرحاً</span>
        </div>
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {STAMP_LIST.map((stamp) => {
          const isSelected = selectedStamp?.id === stamp.id;
          return (
            <button
              key={stamp.id}
              onClick={() => {
                sound.playStampPlop();
                sound.speakArabic(stamp.nameAr);
                onSelectStamp(stamp);
                onClose();
              }}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all transform hover:scale-115 active:scale-90 ${
                isSelected
                  ? 'bg-amber-100 ring-2 ring-orange-500 scale-105'
                  : 'bg-amber-50/60 hover:bg-amber-100/80 border border-amber-200'
              }`}
              title={stamp.nameAr}
            >
              <span>{stamp.emoji}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-[11px] text-center text-slate-500">
        اضغط على اللوحة بعد اختيار الملصق لتثبيته في أي مكان!
      </p>
    </div>
  );
};
