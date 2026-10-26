/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { GameScreen, ColoringPage, ToolType, BrushSize, StampOption, SavedArtwork } from './types';
import { COLORING_PAGES } from './data/coloringPages';
import { TitleScreen } from './components/TitleScreen';
import { PageSelectScreen } from './components/PageSelectScreen';
import { ColoringBoard } from './components/ColoringBoard';
import { ToolBar } from './components/ToolBar';
import { ColorPalette } from './components/ColorPalette';
import { StampsPicker } from './components/StampsPicker';
import { StoryBookModal } from './components/StoryBookModal';
import { GalleryModal } from './components/GalleryModal';
import { CelebrationModal } from './components/CelebrationModal';
import { sound } from './utils/sound';
import { ArrowRight, Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<GameScreen>('title');
  const [currentPage, setCurrentPage] = useState<ColoringPage>(COLORING_PAGES[0]);
  const [currentTool, setCurrentTool] = useState<ToolType>('bucket');
  const [selectedColor, setSelectedColor] = useState<string>('#F97316'); // cheerful orange
  const [brushSize, setBrushSize] = useState<BrushSize>('medium');
  const [selectedStamp, setSelectedStamp] = useState<StampOption | null>(null);

  // Region fills mapping: regionId -> hexColor
  const [regionFills, setRegionFills] = useState<Record<string, string>>({});

  // Undo/Redo stack for region fills
  const [history, setHistory] = useState<Record<string, string>[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Modals state
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);
  const [isStampsOpen, setIsStampsOpen] = useState(false);
  const [isReferenceVisible, setIsReferenceVisible] = useState(false);

  // Mute state
  const [isMuted, setIsMuted] = useState(sound.getIsMuted());

  // Saved Artworks in Gallery
  const [savedArtworks, setSavedArtworks] = useState<SavedArtwork[]>([]);

  // Load saved artworks on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kids_artworks_gallery');
      if (stored) {
        setSavedArtworks(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const saveToGallery = (artwork: SavedArtwork) => {
    const updated = [artwork, ...savedArtworks];
    setSavedArtworks(updated);
    try {
      localStorage.setItem('kids_artworks_gallery', JSON.stringify(updated));
    } catch {}
  };

  const deleteFromGallery = (id: string) => {
    const updated = savedArtworks.filter((item) => item.id !== id);
    setSavedArtworks(updated);
    try {
      localStorage.setItem('kids_artworks_gallery', JSON.stringify(updated));
    } catch {}
  };

  const handleToggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  // Start coloring a page
  const handleSelectPage = (page: ColoringPage) => {
    setCurrentPage(page);
    setRegionFills({});
    setHistory([{}]);
    setHistoryIndex(0);
    setIsReferenceVisible(false);
    setScreen('coloring');
  };

  // Select scene from story modal
  const handleSelectStoryScene = (pageId: string) => {
    const found = COLORING_PAGES.find((p) => p.id === pageId);
    if (found) {
      handleSelectPage(found);
    }
  };

  // Fill SVG region (bucket mode)
  const handleFillRegion = useCallback(
    (regionId: string, color: string) => {
      setRegionFills((prev) => {
        const next = { ...prev, [regionId]: color };
        // Slice forward history on new action
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(next);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        return next;
      });
    },
    [history, historyIndex]
  );

  // Handle freehand canvas change
  const handleCanvasChange = () => {
    // Record canvas stroke if needed
  };

  // Undo / Redo
  const handleUndo = () => {
    if (historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setRegionFills(history[nextIndex]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setRegionFills(history[nextIndex]);
    }
  };

  // Reset current coloring page
  const handleReset = () => {
    setRegionFills({});
    setHistory([{}]);
    setHistoryIndex(0);

    // Clear overlay canvas
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  // Filter story pages for the StoryBookModal
  const storyPages = COLORING_PAGES.filter((p) => p.category === 'story_fox');

  return (
    <div className="w-full min-h-screen flex flex-col bg-amber-50/50 font-sans select-none antialiased text-slate-800">
      {/* 1. Title Screen */}
      {screen === 'title' && (
        <TitleScreen
          onStartGame={() => setScreen('select')}
          onOpenStory={() => setIsStoryModalOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          savedCount={savedArtworks.length}
        />
      )}

      {/* 2. Page Selection Screen */}
      {screen === 'select' && (
        <PageSelectScreen
          onSelectPage={handleSelectPage}
          onBackToTitle={() => setScreen('title')}
          onOpenStory={() => setIsStoryModalOpen(true)}
        />
      )}

      {/* 3. Main Coloring Game Workspace */}
      {screen === 'coloring' && (
        <div className="relative w-full h-screen flex flex-col p-2 sm:p-4 gap-2 overflow-hidden">
          {/* Top Header of Coloring Workspace */}
          <header className="flex items-center justify-between px-2 py-1 bg-white/80 backdrop-blur-md rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playWhoosh();
                  setScreen('select');
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-orange-950 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
                <span>اختر صفحة أخرى</span>
              </button>

              <div className="hidden sm:flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <h2 className="font-black text-sm text-slate-800">
                  {currentPage.titleAr}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentPage.storyText && (
                <button
                  onClick={() => {
                    sound.playPop();
                    sound.speakArabic(currentPage.storyText || '');
                  }}
                  className="p-1.5 bg-amber-50 hover:bg-amber-100 text-orange-900 border border-amber-200 rounded-xl text-xs font-bold flex items-center gap-1"
                  title="استمع لحكاية المشهد"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden md:inline">اقرأ الحكاية</span>
                </button>
              )}

              {/* Story Modal shortcut */}
              <button
                onClick={() => {
                  sound.playPop();
                  setIsStoryModalOpen(true);
                }}
                className="p-1.5 bg-amber-50 hover:bg-amber-100 text-orange-900 border border-amber-200 rounded-xl"
                title="استعراض القصة المصورة كاملة"
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
              </button>

              {/* Sound Toggle */}
              <button
                onClick={handleToggleMute}
                className="p-1.5 bg-amber-50 hover:bg-amber-100 text-slate-700 border border-amber-200 rounded-xl"
                title={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-rose-500" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                )}
              </button>
            </div>
          </header>

          {/* Central Workspace: Canvas + SVG */}
          <main className="flex-1 relative min-h-0 w-full flex items-center justify-center">
            <ColoringBoard
              page={currentPage}
              currentTool={currentTool}
              selectedColor={selectedColor}
              brushSize={brushSize}
              selectedStamp={selectedStamp}
              regionFills={regionFills}
              onFillRegion={handleFillRegion}
              isReferenceVisible={isReferenceVisible}
              onCloseReference={() => setIsReferenceVisible(false)}
              onCanvasChange={handleCanvasChange}
            />

            {/* Stamps Floating Picker */}
            <StampsPicker
              isOpen={isStampsOpen}
              onClose={() => setIsStampsOpen(false)}
              selectedStamp={selectedStamp}
              onSelectStamp={(stamp) => setSelectedStamp(stamp)}
            />
          </main>

          {/* Bottom Controls Area: Tools + Color Palette */}
          <footer className="w-full max-w-5xl mx-auto flex flex-col gap-2 z-20">
            {/* Drawing Tools Bar */}
            <ToolBar
              currentTool={currentTool}
              onSelectTool={(tool) => setCurrentTool(tool)}
              brushSize={brushSize}
              onChangeBrushSize={(size) => setBrushSize(size)}
              canUndo={historyIndex > 0}
              canRedo={historyIndex < history.length - 1}
              onUndo={handleUndo}
              onRedo={handleRedo}
              onReset={handleReset}
              onFinish={() => setIsCelebrationOpen(true)}
              onToggleStamps={() => setIsStampsOpen(!isStampsOpen)}
              onToggleReference={() => setIsReferenceVisible(!isReferenceVisible)}
              hasReference={Boolean(currentPage.referenceImage)}
              isReferenceVisible={isReferenceVisible}
            />

            {/* Color Palette */}
            <ColorPalette
              selectedColor={selectedColor}
              onSelectColor={(hex) => setSelectedColor(hex)}
            />
          </footer>
        </div>
      )}

      {/* Global Modals */}
      <StoryBookModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onSelectStoryScene={handleSelectStoryScene}
        storyPages={storyPages}
      />

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        artworks={savedArtworks}
        onDeleteArtwork={deleteFromGallery}
      />

      <CelebrationModal
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        page={currentPage}
        regionFills={regionFills}
        onSaveToGallery={saveToGallery}
        onChooseNewPage={() => {
          setIsCelebrationOpen(false);
          setScreen('select');
        }}
      />
    </div>
  );
}
