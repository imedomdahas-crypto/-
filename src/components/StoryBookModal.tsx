import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Paintbrush, ChevronRight, ChevronLeft } from 'lucide-react';
import { sound } from '../utils/sound';
import { ColoringPage } from '../types';

interface StoryBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStoryScene: (pageId: string) => void;
  storyPages: ColoringPage[];
}

export const StoryBookModal: React.FC<StoryBookModalProps> = ({
  isOpen,
  onClose,
  onSelectStoryScene,
  storyPages
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const currentScene = storyPages[activeStep] || storyPages[0];

  const handleNext = () => {
    sound.playWhoosh();
    setActiveStep((prev) => (prev + 1) % storyPages.length);
  };

  const handlePrev = () => {
    sound.playWhoosh();
    setActiveStep((prev) => (prev - 1 + storyPages.length) % storyPages.length);
  };

  const handleColorScene = () => {
    sound.playPop(520);
    onSelectStoryScene(currentScene.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-3xl bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 px-6 py-4 flex items-center justify-between text-white shadow-sm">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/20 rounded-2xl">
              <BookOpen className="w-6 h-6 text-white" />
            </span>
            <div>
              <h2 className="text-xl font-bold">قصة الثعلب الصغير والنجمة المضيئة</h2>
              <p className="text-xs text-amber-100 font-medium">
                المشهد {activeStep + 1} من {storyPages.length}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white transition-all transform active:scale-90"
            title="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center">
          {/* Main Visual: Reference Art cropped or shown */}
          <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-2xl overflow-hidden border-4 border-orange-200 shadow-md mb-4 flex items-center justify-center group">
            <img
              src="/public/assets/aistudio/Duck-ai-image-2026-10-26-20-30_89a4d911.jpeg"
              alt="قصة الثعلب والنجمة"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 bg-amber-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مشهد مصور أصلي</span>
            </div>
          </div>

          {/* Scene Title & Narration */}
          <div className="text-center max-w-xl mb-6">
            <h3 className="text-xl font-bold text-orange-950 mb-2">
              {currentScene.titleAr}
            </h3>
            <p className="text-base text-slate-700 leading-relaxed bg-white/70 p-4 rounded-2xl border border-amber-200">
              {currentScene.storyText || currentScene.descriptionAr}
            </p>
          </div>

          {/* Action CTA */}
          <button
            onClick={handleColorScene}
            className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center gap-3 transform hover:scale-105 active:scale-95 transition-all"
          >
            <Paintbrush className="w-6 h-6 animate-wiggle" />
            <span>لوّن هذا المشهد السحري الآن!</span>
          </button>
        </div>

        {/* Modal Footer with scene navigation */}
        <div className="bg-amber-100/80 px-6 py-3 border-t border-amber-200 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white hover:bg-amber-50 text-orange-900 font-bold rounded-xl border border-amber-300 flex items-center gap-2 transition-transform active:scale-95 text-sm"
          >
            <ChevronRight className="w-4 h-4" />
            <span>المشهد السابق</span>
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-1.5">
            {storyPages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playPop();
                  setActiveStep(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStep === idx
                    ? 'w-7 bg-orange-500'
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
                title={`مشهد ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white hover:bg-amber-50 text-orange-900 font-bold rounded-xl border border-amber-300 flex items-center gap-2 transition-transform active:scale-95 text-sm"
          >
            <span>المشهد التالي</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
