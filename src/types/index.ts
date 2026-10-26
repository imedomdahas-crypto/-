export type ToolType = 'bucket' | 'brush' | 'crayon' | 'glitter' | 'eraser' | 'stamp';

export type BrushSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface ColorOption {
  id: string;
  nameAr: string;
  hex: string;
  isGlitter?: boolean;
}

export interface StampOption {
  id: string;
  nameAr: string;
  emoji: string;
}

export type Category = 'story_fox' | 'animals' | 'nature' | 'free_draw';

export interface ColoringPage {
  id: string;
  titleAr: string;
  category: Category;
  descriptionAr: string;
  difficulty: 'سهل' | 'متوسط' | 'إبداعي';
  referenceImage?: string; // Optional reference photo (e.g. uploaded Fox & Star)
  storyText?: string;
  storyChapter?: number;
  initialFills?: Record<string, string>;
  viewBox: string;
  regions: {
    id: string;
    labelAr: string;
    d: string;
    defaultFill?: string;
    stroke?: string;
    strokeWidth?: number;
  }[];
  decorations?: {
    type: 'circle' | 'path' | 'line';
    props: Record<string, string | number>;
  }[];
}

export interface CanvasAction {
  type: 'fill' | 'canvas_state';
  pathId?: string;
  color?: string;
  prevColor?: string;
  canvasData?: string;
}

export interface SavedArtwork {
  id: string;
  pageId: string;
  pageTitle: string;
  previewDataUrl: string;
  artistName: string;
  createdAt: number;
}

export type GameScreen = 'title' | 'select' | 'coloring' | 'gallery';
