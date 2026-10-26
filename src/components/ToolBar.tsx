import React from 'react';
import {
  PaintBucket,
  Brush,
  Pencil,
  Sparkles,
  Smile,
  Eraser,
  Undo2,
  Redo2,
  RotateCcw,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { ToolType, BrushSize } from '../types';
import { sound } from '../utils/sound';

interface ToolBarProps {
  currentTool: ToolType;
  onSelectTool: (tool: ToolType) => void;
  brushSize: BrushSize;
  onChangeBrushSize: (size: BrushSize) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onFinish: () => void;
  onToggleStamps: () => void;
  onToggleReference: () => void;
  hasReference: boolean;
  isReferenceVisible: boolean;
}

export const ToolBar: React.FC<ToolBarProps> = ({
  currentTool,
  onSelectTool,
  brushSize,
  onChangeBrushSize,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onFinish,
  onToggleStamps,
  onToggleReference,
  hasReference,
  isReferenceVisible
}) => {
  const tools: { id: ToolType; labelAr: string; icon: React.ReactNode; colorClass: string }[] = [
    {
      id: 'bucket',
      labelAr: 'سطل الألوان',
      icon: <PaintBucket className="w-5 h-5" />,
      colorClass: 'bg-amber-500 hover:bg-amber-600'
    },
    {
      id: 'brush',
      labelAr: 'فرشاة ناعمة',
      icon: <Brush className="w-5 h-5" />,
      colorClass: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      id: 'crayon',
      labelAr: 'قلم تلوين',
      icon: <Pencil className="w-5 h-5" />,
      colorClass: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      id: 'glitter',
      labelAr: 'بريق سحري',
      icon: <Sparkles className="w-5 h-5 animate-pulse" />,
      colorClass: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'stamp',
      labelAr: 'ملصقات',
      icon: <Smile className="w-5 h-5" />,
      colorClass: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      id: 'eraser',
      labelAr: 'ممحاة',
      icon: <Eraser className="w-5 h-5" />,
      colorClass: 'bg-slate-500 hover:bg-slate-600'
    }
  ];

  const sizes: { id: BrushSize; labelAr: string; dotSize: string }[] = [
    { id: 'small', labelAr: 'دقيق', dotSize: 'w-2 h-2' },
    { id: 'medium', labelAr: 'متوسط', dotSize: 'w-3.5 h-3.5' },
    { id: 'large', labelAr: 'عريض', dotSize: 'w-5 h-5' },
    { id: 'xlarge', labelAr: 'ضخم', dotSize: 'w-7 h-7' }
  ];

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-2 p-2 sm:p-3 bg-white/95 backdrop-blur-md rounded-3xl border-2 border-amber-200 shadow-md">
      {/* Primary Coloring Tools */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        {tools.map((t) => {
          const isActive = currentTool === t.id;
          return (
            <button
              key={t.id}
              onClick={() => {
                sound.playPop();
                if (t.id === 'stamp') {
                  onSelectTool('stamp');
                  onToggleStamps();
                } else {
                  onSelectTool(t.id);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all transform active:scale-95 ${
                isActive
                  ? `${t.colorClass} text-white shadow-md scale-105 ring-2 ring-orange-300`
                  : 'bg-amber-50/70 hover:bg-amber-100 text-slate-700 border border-amber-200'
              }`}
              title={t.labelAr}
            >
              {t.icon}
              <span className="hidden md:inline whitespace-nowrap">{t.labelAr}</span>
            </button>
          );
        })}
      </div>

      {/* Brush Size Selector (Only relevant for non-bucket tools) */}
      {currentTool !== 'bucket' && (
        <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1.5 rounded-2xl border border-amber-200">
          <span className="text-[11px] font-bold text-amber-900 ml-1">الحجم:</span>
          {sizes.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                sound.playPop(500);
                onChangeBrushSize(s.id);
              }}
              className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                brushSize === s.id
                  ? 'bg-orange-500 text-white shadow-sm ring-1 ring-orange-300'
                  : 'bg-white hover:bg-amber-100 text-slate-600'
              }`}
              title={s.labelAr}
            >
              <span className={`bg-current rounded-full ${s.dotSize}`} />
            </button>
          ))}
        </div>
      )}

      {/* Actions: Undo, Redo, Reset, Reference, Finish */}
      <div className="flex items-center gap-1.5">
        {hasReference && (
          <button
            onClick={() => {
              sound.playPop();
              onToggleReference();
            }}
            className={`p-2 rounded-2xl border transition-all flex items-center gap-1 text-xs font-bold ${
              isReferenceVisible
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-amber-50 hover:bg-amber-100 text-orange-900 border-amber-200'
            }`}
            title="عرض صورة القصة الأصلية للإلهام"
          >
            <ImageIcon className="w-4 h-4" />
            <span className="hidden lg:inline whitespace-nowrap">الصورة الأصلية</span>
          </button>
        )}

        <button
          onClick={() => {
            sound.playWhoosh();
            onUndo();
          }}
          disabled={!canUndo}
          className="p-2 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 transition-all active:scale-95"
          title="تراجع"
        >
          <Undo2 className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            sound.playWhoosh();
            onRedo();
          }}
          disabled={!canRedo}
          className="p-2 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 transition-all active:scale-95"
          title="إعادة"
        >
          <Redo2 className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            if (window.confirm('هل تريد مسح الألوان والبدء من جديد؟')) {
              sound.playWhoosh();
              onReset();
            }
          }}
          className="p-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all active:scale-95"
          title="مسح اللوحة والبدء من جديد"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Big Finish Button */}
        <button
          onClick={() => {
            sound.playVictoryFanfare();
            onFinish();
          }}
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95"
          title="أنهيت لوحتي!"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span className="whitespace-nowrap">أنهيت لوحتي!</span>
        </button>
      </div>
    </div>
  );
};
