import { ColorOption } from '../types';

export const COLOR_PALETTE: ColorOption[] = [
  // Warm Reds & Oranges
  { id: 'red', nameAr: 'أحمر فراولة', hex: '#EF4444' },
  { id: 'crimson', nameAr: 'أحمر قرمزي', hex: '#DC2626' },
  { id: 'orange', nameAr: 'برتقالي مشرق', hex: '#F97316' },
  { id: 'coral', nameAr: 'مرجاني دافئ', hex: '#FB7185' },
  { id: 'amber', nameAr: 'عنبري ذهبي', hex: '#F59E0B' },
  
  // Sunny Yellows & Creams
  { id: 'yellow', nameAr: 'أصفر شمسي', hex: '#FACC15' },
  { id: 'cream', nameAr: 'أصفر ليموني رقيق', hex: '#FEF08A' },
  { id: 'peach', nameAr: 'خوخي ناعم', hex: '#FED7AA' },
  
  // Greens
  { id: 'lime', nameAr: 'أخضر ليموني', hex: '#84CC16' },
  { id: 'green', nameAr: 'أخضر ربيعي', hex: '#22C55E' },
  { id: 'emerald', nameAr: 'أخضر زمردي', hex: '#10B981' },
  { id: 'teal', nameAr: 'فيروزي بحري', hex: '#14B8A6' },
  
  // Blues
  { id: 'cyan', nameAr: 'سماوي صافٍ', hex: '#06B6D4' },
  { id: 'sky', nameAr: 'أزرق سماوي', hex: '#38BDF8' },
  { id: 'blue', nameAr: 'أزرق ملكي', hex: '#3B82F6' },
  { id: 'indigo', nameAr: 'نيلي ليلي', hex: '#6366F1' },

  // Purples & Pinks
  { id: 'violet', nameAr: 'بنفسجي زاهٍ', hex: '#8B5CF6' },
  { id: 'purple', nameAr: 'أرجواني ملكي', hex: '#A855F7' },
  { id: 'pink', nameAr: 'وردي حلوى', hex: '#EC4899' },
  { id: 'blush', nameAr: 'وردي ناعم', hex: '#F472B6' },

  // Earthy & Neutrals
  { id: 'brown', nameAr: 'بني شوكولاتة', hex: '#78350F' },
  { id: 'tan', nameAr: 'بني رملي', hex: '#D97706' },
  { id: 'wood', nameAr: 'خشبي دافئ', hex: '#A16207' },
  { id: 'white', nameAr: 'أبيض ناصع', hex: '#FFFFFF' },
  { id: 'lightgray', nameAr: 'رمادي غيمي', hex: '#E2E8F0' },
  { id: 'darkgray', nameAr: 'رمادي صخري', hex: '#475569' },
  { id: 'black', nameAr: 'أسود كحلي', hex: '#1E293B' },

  // Special Sparkles / Glitters
  { id: 'glitter-gold', nameAr: 'ذهبي برّاق ✨', hex: '#FFD700', isGlitter: true },
  { id: 'glitter-cyan', nameAr: 'نجمة سحرية مضيئة 🌟', hex: '#38EEFF', isGlitter: true },
  { id: 'glitter-pink', nameAr: 'وردي لامع 💖', hex: '#FF69B4', isGlitter: true }
];

export const ENCOURAGING_PHRASES: string[] = [
  'ما شاء الله! لوحة مبدعة جداً!',
  'أنت فنان صغير رائع!',
  'ألوانك مليئة بالحياة والبهجة!',
  'يا للروعة! اختيار ألوان مذهل!',
  'إبداع لا مثيل له، استمر يا بطل!',
  'لوحتك تشع بالجمال والنور!'
];
