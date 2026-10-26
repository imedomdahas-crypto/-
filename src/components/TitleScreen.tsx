import React from 'react';
import { Sparkles, BookOpen, Volume2, VolumeX, Image as GalleryIcon, Play } from 'lucide-react';
import { sound } from '../utils/sound';

interface TitleScreenProps {
  onStartGame: () => void;
  onOpenStory: () => void;
  onOpenGallery: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  savedCount: number;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStartGame,
  onOpenStory,
  onOpenGallery,
  isMuted,
  onToggleMute,
  savedCount
}) => {
  return (
    <div className="relative w-full min-h-screen bg-dots-pattern flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden">
      {/* Top Bar with Audio Control & Gallery Link */}
      <header className="w-full max-w-5xl flex items-center justify-between z-10 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-xl">🦊</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-orange-950">
              عالم الألوان الساحر
            </h1>
            <p className="text-xs text-amber-800 font-bold hidden sm:block">
              لعبة التلوين والإبداع للأطفال
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Gallery Button */}
          <button
            onClick={() => {
              sound.playPop();
              onOpenGallery();
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-orange-900 rounded-2xl border-2 border-amber-300 shadow-sm transition-all transform hover:scale-105 active:scale-95 text-xs sm:text-sm font-bold"
          >
            <GalleryIcon className="w-4 h-4 text-orange-500" />
            <span>معرضي</span>
            {savedCount > 0 && (
              <span className="bg-orange-500 text-white rounded-full px-1.5 py-0.2 text-[10px] font-black">
                {savedCount}
              </span>
            )}
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={() => {
              sound.playPop();
              onToggleMute();
            }}
            className="p-2.5 bg-white/90 hover:bg-white text-slate-700 rounded-2xl border-2 border-amber-300 shadow-sm transition-all active:scale-90"
            title={isMuted ? 'تشغيل الأصوات' : 'كتم الصوت'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-rose-500" />
            ) : (
              <Volume2 className="w-5 h-5 text-emerald-600" />
            )}
          </button>
        </div>
      </header>

      {/* Main Hero Centerpiece */}
      <main className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center text-center my-6 z-10">
        {/* Floating Animated Characters Banner */}
        <div className="relative mb-6">
          <div className="w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-tr from-amber-300 via-orange-300 to-yellow-200 rounded-full border-4 border-white shadow-2xl flex items-center justify-center p-3 animate-float relative overflow-hidden group">
            <img
              src="/public/assets/aistudio/Duck-ai-image-2026-10-26-20-30_89a4d911.jpeg"
              alt="الثعلب والنجمة المضيئة"
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Accents */}
          <span className="absolute -top-2 -right-3 text-4xl animate-bounce">
            ⭐
          </span>
          <span className="absolute bottom-2 -left-3 text-3xl animate-wiggle">
            🎨
          </span>
          <span className="absolute -bottom-2 right-4 text-3xl">
            🦆
          </span>
        </div>

        {/* Title Lockup */}
        <div className="mb-6 max-w-xl">
          <h2 className="text-3xl sm:text-5xl font-black text-orange-950 mb-3 tracking-tight">
            لوّن، ابتكر، وتعلّم بمرح!
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            مغامرات تلوين سحرية مع الثعلب الصغير والنجمة اللطيفة وأصدقاء الغابة، بأصوات مبهجة وأدوات تلوين ذكية.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <button
            onClick={() => {
              sound.playVictoryFanfare();
              onStartGame();
            }}
            className="w-full sm:flex-1 py-4 px-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg sm:text-xl rounded-3xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 transition-all"
          >
            <Play className="w-6 h-6 fill-current animate-wiggle" />
            <span>ابدأ التلوين الآن!</span>
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onOpenStory();
            }}
            className="w-full sm:w-auto py-4 px-5 bg-white/95 hover:bg-amber-100 text-orange-900 font-bold text-base rounded-3xl border-2 border-amber-300 shadow-md flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 transition-all"
          >
            <BookOpen className="w-5 h-5 text-orange-500" />
            <span className="whitespace-nowrap">قصة الثعلب والنجمة</span>
          </button>
        </div>

        {/* Feature badges (Kid friendly) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-amber-900">
          <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>تلوين باللمس والفرشاة</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-amber-200">
            <span>🎵 أصوات ماريمبا موسيقية</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-amber-200">
            <span>✨ ملصقات وبريق سحري</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-xs text-slate-500 font-medium pb-2 z-10">
        صُممت بحب لتنمية مهارات التنسيق البصري والإبداع الفني لدى الأطفال
      </footer>
    </div>
  );
};
