import React, { useState } from 'react';
import { ColoringPage, Category } from '../types';
import { COLORING_PAGES } from '../data/coloringPages';
import { sound } from '../utils/sound';
import { ArrowRight, Sparkles, BookOpen, Heart, Palette } from 'lucide-react';

interface PageSelectScreenProps {
  onSelectPage: (page: ColoringPage) => void;
  onBackToTitle: () => void;
  onOpenStory: () => void;
}

export const PageSelectScreen: React.FC<PageSelectScreenProps> = ({
  onSelectPage,
  onBackToTitle,
  onOpenStory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('story_fox');

  const categories: { id: Category; labelAr: string; icon: string }[] = [
    { id: 'story_fox', labelAr: 'قصة الثعلب والنجمة', icon: '🦊' },
    { id: 'animals', labelAr: 'أصدقاء الحيوانات والبطة', icon: '🦆' },
    { id: 'nature', labelAr: 'الفضاء والمحيط', icon: '🚀' },
    { id: 'free_draw', labelAr: 'لوحة الفنان الصغير (رسم حر)', icon: '🎨' }
  ];

  const filteredPages = COLORING_PAGES.filter(
    (page) => page.category === selectedCategory
  );

  return (
    <div className="w-full min-h-screen bg-dots-pattern flex flex-col p-4 sm:p-6">
      {/* Top Header */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between mb-6">
        <button
          onClick={() => {
            sound.playWhoosh();
            onBackToTitle();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border-2 border-amber-300 text-orange-950 font-bold text-sm shadow-sm hover:bg-amber-50 active:scale-95 transition-all"
        >
          <ArrowRight className="w-4 h-4" />
          <span>الرئيسية</span>
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-orange-950">
            اختر رسمتك الجميلة
          </h2>
          <p className="text-xs text-amber-800 font-bold">
            انقر على أي صورة لتبدأ تلوينها فوراً!
          </p>
        </div>

        {/* Story shortcut */}
        <button
          onClick={() => {
            sound.playPop();
            onOpenStory();
          }}
          className="flex items-center gap-1.5 px-3 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-2xl shadow-sm font-bold text-xs sm:text-sm active:scale-95 transition-all"
          title="قصة الثعلب المصورة"
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">قصة الثعلب</span>
        </button>
      </header>

      {/* Category Tabs */}
      <div className="w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2 mb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sound.playPop();
                setSelectedCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all transform active:scale-95 ${
                isActive
                  ? 'bg-orange-500 text-white shadow-md scale-105 ring-2 ring-orange-300'
                  : 'bg-white/90 hover:bg-white text-slate-700 border-2 border-amber-200'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.labelAr}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Coloring Pages */}
      <main className="w-full max-w-5xl mx-auto flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              onClick={() => {
                sound.playColorChime(0);
                onSelectPage(page);
              }}
              className="bg-white/95 rounded-3xl p-4 border-2 border-amber-300 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col group"
            >
              {/* Preview Thumbnail Container */}
              <div className="relative aspect-[6/5] bg-amber-50/70 rounded-2xl overflow-hidden border-2 border-amber-100 mb-3 flex items-center justify-center p-2 group-hover:bg-amber-100/50 transition-colors">
                {page.category === 'free_draw' ? (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <Palette className="w-16 h-16 text-orange-400 mb-2 animate-bounce" />
                    <span className="text-xs font-bold text-amber-900">
                      لوحة بيضاء حرة لجميع أفكارك
                    </span>
                  </div>
                ) : (
                  <svg
                    viewBox={page.viewBox}
                    className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  >
                    {page.regions.map((region) => (
                      <path
                        key={region.id}
                        d={region.d}
                        fill="#FFFFFF"
                        stroke="#1E293B"
                        strokeWidth={region.strokeWidth || 4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}
                    {page.decorations?.map((item, idx) => {
                      if (item.type === 'circle') {
                        return (
                          <circle
                            key={`d-${idx}`}
                            {...(item.props as React.SVGProps<SVGCircleElement>)}
                          />
                        );
                      }
                      if (item.type === 'path') {
                        return (
                          <path
                            key={`d-${idx}`}
                            {...(item.props as React.SVGProps<SVGPathElement>)}
                          />
                        );
                      }
                      return null;
                    })}
                  </svg>
                )}

                {/* Reference Pill indicator */}
                {page.referenceImage && (
                  <div className="absolute top-2 right-2 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>مقتبس من القصة</span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-black text-base text-slate-800 group-hover:text-orange-600 transition-colors">
                    {page.titleAr}
                  </h3>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    {page.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {page.descriptionAr}
                </p>
              </div>

              {/* Start coloring button */}
              <button
                className="mt-4 w-full py-2.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:from-amber-500 group-hover:to-orange-500 text-white font-bold text-sm rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>ابدأ تلوين هذه اللوحة</span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
