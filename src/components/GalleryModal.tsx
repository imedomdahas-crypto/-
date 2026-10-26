import React from 'react';
import { SavedArtwork } from '../types';
import { sound } from '../utils/sound';
import { X, Trash2, Download, Image as ImageIcon, Sparkles } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworks: SavedArtwork[];
  onDeleteArtwork: (id: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  artworks,
  onDeleteArtwork
}) => {
  if (!isOpen) return null;

  const handleDownloadSingle = (art: SavedArtwork) => {
    sound.playPop();
    const a = document.createElement('a');
    a.href = art.previewDataUrl;
    a.download = `لوحتي-${art.pageTitle}.svg`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-4xl bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/20 rounded-2xl">
              <Sparkles className="w-6 h-6 text-white" />
            </span>
            <div>
              <h2 className="text-xl font-bold">معرض إبداعاتي ورسوماتي</h2>
              <p className="text-xs text-amber-100">
                {artworks.length > 0
                  ? `لديك ${artworks.length} لوحة فنية رائعة محفوظة!`
                  : 'ابدأ بتلوين لوحتك الأولى واحفظها هنا!'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white transition-all transform active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Artworks Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          {artworks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-slate-500">
              <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mb-4">
                <ImageIcon className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-1">
                المعرض فارغ حالياً!
              </h3>
              <p className="text-sm max-w-sm">
                اختر رسمة جميلة من القائمة ولوّنها بألوانك المفضلة ثم اضغط "أنهيت لوحتي" لتجدها هنا.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {artworks.map((art) => (
                <div
                  key={art.id}
                  className="bg-white rounded-2xl p-3 border-2 border-amber-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="aspect-[6/5] bg-amber-50/50 rounded-xl overflow-hidden border border-amber-100 mb-3 flex items-center justify-center p-2">
                    <img
                      src={art.previewDataUrl}
                      alt={art.pageTitle}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-800 line-clamp-1">
                      {art.pageTitle}
                    </h4>
                    <p className="text-xs text-amber-800 font-medium">
                      بريشة: {art.artistName}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-2">
                    <button
                      onClick={() => handleDownloadSingle(art)}
                      className="p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded-xl transition-colors"
                      title="تحميل اللوحة"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        sound.playWhoosh();
                        onDeleteArtwork(art.id);
                      }}
                      className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
                      title="حذف من المعرض"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
