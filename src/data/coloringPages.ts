import { ColoringPage } from '../types';

export const STORY_IMAGE_URL = '/public/assets/aistudio/Duck-ai-image-2026-10-26-20-30_89a4d911.jpeg';

export const COLORING_PAGES: ColoringPage[] = [
  // --- Story Scenes (Based on the Fox and Star Tale) ---
  {
    id: 'fox-star-1',
    titleAr: 'لقاء الصداقة في مرج الزهور',
    category: 'story_fox',
    storyChapter: 1,
    difficulty: 'سهل',
    descriptionAr: 'الثعلب الصغير يلتقي بالنجمة المضيئة الساقطة بلطف بين زهور الربيع.',
    storyText: 'في صباح مشرق، كان الثعلب الصغير يتجول بين الزهور الملونة حين رأى ضوءاً لطيفاً يلمع على الأرض.. إنها نجمة صغيرة سقطت من السماء وتبتسم له!',
    referenceImage: STORY_IMAGE_URL,
    viewBox: '0 0 600 500',
    regions: [
      // Background Sky
      {
        id: 'sky',
        labelAr: 'السماء',
        d: 'M0,0 L600,0 L600,280 Q300,320 0,280 Z',
        defaultFill: '#FFFFFF'
      },
      // Distant Hills
      {
        id: 'hills',
        labelAr: 'التلال البعيدة',
        d: 'M0,280 Q150,220 300,260 T600,250 L600,340 L0,340 Z',
        defaultFill: '#FFFFFF'
      },
      // Grassy Meadow
      {
        id: 'ground',
        labelAr: 'مرج الأعشاب',
        d: 'M0,340 Q300,320 600,340 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      // Sun
      {
        id: 'sun',
        labelAr: 'قرص الشمس',
        d: 'M40,40 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0',
        defaultFill: '#FFFFFF'
      },
      // Cloud 1
      {
        id: 'cloud-1',
        labelAr: 'غيمة بيضاء',
        d: 'M450,70 Q465,45 490,50 Q520,35 545,55 Q570,55 575,80 Q565,100 535,100 L465,100 Q445,95 450,70 Z',
        defaultFill: '#FFFFFF'
      },
      // Little Fox Body
      {
        id: 'fox-body',
        labelAr: 'جسم الثعلب',
        d: 'M140,240 Q180,210 220,260 Q240,310 230,370 Q160,390 120,350 Q105,300 140,240 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Belly
      {
        id: 'fox-belly',
        labelAr: 'بطن الثعلب الأبيض',
        d: 'M150,280 Q180,260 200,290 Q210,340 185,365 Q150,370 140,330 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Head
      {
        id: 'fox-head',
        labelAr: 'رأس الثعلب',
        d: 'M160,140 Q210,120 230,165 Q250,220 200,245 Q150,250 130,200 Q120,160 160,140 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Cheeks / Muzzle
      {
        id: 'fox-muzzle',
        labelAr: 'خدود وأنف الثعلب',
        d: 'M165,185 Q205,175 220,205 Q225,235 185,240 Q155,235 155,205 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Left Ear Outer
      {
        id: 'fox-ear-l-out',
        labelAr: 'أذن الثعلب اليسرى',
        d: 'M145,145 Q130,75 160,65 Q180,100 175,135 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Left Ear Inner
      {
        id: 'fox-ear-l-in',
        labelAr: 'داخل الأذن اليسرى',
        d: 'M150,135 Q140,85 160,78 Q170,105 168,130 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Right Ear Outer
      {
        id: 'fox-ear-r-out',
        labelAr: 'أذن الثعلب اليمنى',
        d: 'M205,135 Q225,75 245,85 Q240,115 225,145 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Right Ear Inner
      {
        id: 'fox-ear-r-in',
        labelAr: 'داخل الأذن اليمنى',
        d: 'M212,135 Q225,90 238,98 Q234,120 224,140 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Fluffy Tail
      {
        id: 'fox-tail',
        labelAr: 'ذيل الثعلب الكثيف',
        d: 'M115,310 Q40,320 40,240 Q40,180 85,200 Q120,220 125,270 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Tail Tip
      {
        id: 'fox-tail-tip',
        labelAr: 'طرف الذيل الأبيض',
        d: 'M40,240 Q40,180 85,200 Q75,225 55,235 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Front Paws
      {
        id: 'fox-front-paws',
        labelAr: 'كفوف الثعلب الأمامية',
        d: 'M195,350 L210,400 Q225,405 235,400 L230,345 Z',
        defaultFill: '#FFFFFF'
      },
      // Fox Back Paws
      {
        id: 'fox-back-paws',
        labelAr: 'أرجل الثعلب الخلفية',
        d: 'M130,360 L135,410 Q145,415 155,410 L155,365 Z',
        defaultFill: '#FFFFFF'
      },
      // The Smiling Little Star
      {
        id: 'star-body',
        labelAr: 'النجمة المضيئة السعيدة',
        d: 'M400,240 L425,300 L490,305 L440,345 L460,405 L405,370 L350,405 L370,345 L320,305 L385,300 Z',
        defaultFill: '#FFFFFF'
      },
      // Star Glow Aura
      {
        id: 'star-glow',
        labelAr: 'هالة نور النجمة',
        d: 'M405,210 Q490,210 520,310 Q520,410 405,430 Q300,410 300,310 Q300,210 405,210 Z',
        defaultFill: '#FFFFFF'
      },
      // Flower 1
      {
        id: 'flower-1',
        labelAr: 'زهرة ربيعية وردية',
        d: 'M270,430 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0',
        defaultFill: '#FFFFFF'
      },
      // Flower 2
      {
        id: 'flower-2',
        labelAr: 'زهرة بنفسجية',
        d: 'M520,420 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0',
        defaultFill: '#FFFFFF'
      },
      // Flower 3
      {
        id: 'flower-3',
        labelAr: 'زهرة بيضاء برية',
        d: 'M80,440 m -18,0 a 18,18 0 1,0 36,0 a 18,18 0 1,0 -36,0',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      // Fox Eyes & Smile
      { type: 'circle', props: { cx: 175, cy: 180, r: 5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 205, cy: 180, r: 5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 190, cy: 195, r: 4, fill: '#1E293B' } }, // nose
      { type: 'path', props: { d: 'M185,202 Q190,210 195,202', stroke: '#1E293B', strokeWidth: 3, fill: 'none' } },
      // Star Eyes & Cheerful Smile
      { type: 'circle', props: { cx: 395, cy: 330, r: 4.5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 418, cy: 330, r: 4.5, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M398,342 Q407,352 416,342', stroke: '#1E293B', strokeWidth: 3, fill: 'none' } },
      // Flower centers
      { type: 'circle', props: { cx: 270, cy: 430, r: 8, fill: '#F59E0B' } },
      { type: 'circle', props: { cx: 520, cy: 420, r: 6, fill: '#F59E0B' } },
      { type: 'circle', props: { cx: 80, cy: 440, r: 5, fill: '#F59E0B' } }
    ]
  },

  {
    id: 'fox-star-2',
    titleAr: 'مغامرة الثعلب والنجمة في درب الغابة',
    category: 'story_fox',
    storyChapter: 2,
    difficulty: 'متوسط',
    descriptionAr: 'النجمة ترشد الثعلب في درب الغابة السحرية بأشجارها العالية وتدرجات ألوانها.',
    storyText: 'انطلقا معاً في درب الأشجار العالية، حيث أخذت النجمة تضيء له الطريق بريقاً ساحراً كأنه شعلة زرقاء متوهجة تملأ الغابة دفئاً وأماناً.',
    referenceImage: STORY_IMAGE_URL,
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'canopy',
        labelAr: 'أوراق الشجر الملونة',
        d: 'M0,0 L600,0 L600,160 Q450,210 300,150 Q150,210 0,160 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'sky-glow',
        labelAr: 'وهج شفق السماء',
        d: 'M0,140 Q300,110 600,140 L600,240 L0,240 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'tree-left',
        labelAr: 'شجرة الغابة الضخمة (يسار)',
        d: 'M40,110 Q70,250 85,460 L15,460 Q30,250 20,110 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'tree-right',
        labelAr: 'شجرة الغابة المائلة (يمين)',
        d: 'M540,110 Q520,250 510,460 L585,460 Q570,250 580,110 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'forest-path',
        labelAr: 'ممر الدرب الرملي',
        d: 'M280,240 L320,240 L450,500 L150,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'grass-left',
        labelAr: 'أعشاب الغابة (يسار)',
        d: 'M0,240 L280,240 L150,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'grass-right',
        labelAr: 'أعشاب الغابة (يمين)',
        d: 'M320,240 L600,240 L600,500 L450,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-running-body',
        labelAr: 'جسم الثعلب المرح',
        d: 'M180,260 Q230,230 270,280 Q290,340 250,390 Q180,400 150,340 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-running-head',
        labelAr: 'رأس الثعلب الفضولي',
        d: 'M230,170 Q280,160 300,200 Q310,250 260,265 Q220,260 215,210 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-running-tail',
        labelAr: 'ذيل الثعلب المرتفع',
        d: 'M160,300 Q100,280 80,210 Q110,180 145,220 Q160,250 160,300 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-running-tail-tip',
        labelAr: 'طرف الذيل الأبيض',
        d: 'M80,210 Q110,180 145,220 Q115,215 80,210 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-floating',
        labelAr: 'النجمة الطائرة في الدرب',
        d: 'M440,160 L458,205 L505,210 L470,240 L482,285 L440,260 L398,285 L412,240 L375,210 L422,205 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-trail',
        labelAr: 'أثر النور السحري للنجمة',
        d: 'M440,260 Q380,310 320,330 Q350,350 430,290 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 260, cy: 200, r: 4.5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 285, cy: 198, r: 4.5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 432, cy: 230, r: 4, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 450, cy: 230, r: 4, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M435,240 Q441,247 447,240', stroke: '#1E293B', strokeWidth: 2.5, fill: 'none' } }
    ]
  },

  {
    id: 'fox-star-3',
    titleAr: 'عناق الصداقة والمحبة الدافئة',
    category: 'story_fox',
    storyChapter: 6,
    difficulty: 'سهل',
    descriptionAr: 'الثعلب يحتضن النجمة بكفيه بحنان وفرح في مشهد يفيض بالمشاعر الجميلة.',
    storyText: 'رفع الثعلب كفيه الصغيرتين واحتضن النجمة اللامعة برفق.. شعر بدفء نورها ولمعانها البهيج كأنها تقول له: شكراً لك يا أعز أصدقائي!',
    referenceImage: STORY_IMAGE_URL,
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'sky-twilight',
        labelAr: 'سماء المساء الهادئة',
        d: 'M0,0 L600,0 L600,380 L0,380 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'hill-top',
        labelAr: 'قمة التل الصغير',
        d: 'M0,380 Q300,340 600,380 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'soft-cloud-1',
        labelAr: 'سحابة وردية ناعمة',
        d: 'M60,110 Q90,80 130,90 Q170,75 200,105 Q220,135 180,150 L80,150 Q50,140 60,110 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'soft-cloud-2',
        labelAr: 'سحابة الشفق',
        d: 'M420,310 Q450,280 490,290 Q530,275 560,305 Q570,335 530,350 L440,350 Q410,340 420,310 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-body',
        labelAr: 'جسم الثعلب الحنون',
        d: 'M250,280 Q300,240 330,310 Q350,380 320,440 Q250,460 210,410 Q190,340 250,280 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-belly',
        labelAr: 'بطن الثعلب الأبيض',
        d: 'M250,310 Q280,290 300,330 Q310,390 280,420 Q240,430 230,370 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-head',
        labelAr: 'رأس الثعلب المبتسم برفق',
        d: 'M230,180 Q290,160 320,210 Q340,270 280,290 Q220,290 200,230 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-cheek',
        labelAr: 'خد الثعلب الأبيض',
        d: 'M230,220 Q280,210 300,245 Q305,275 260,285 Q220,280 220,245 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-ear-left',
        labelAr: 'أذن الثعلب اليسرى',
        d: 'M220,180 Q205,100 240,90 Q260,130 250,175 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-ear-right',
        labelAr: 'أذن الثعلب اليمنى',
        d: 'M290,170 Q315,100 340,115 Q335,150 315,185 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-arms-hug',
        labelAr: 'ذراعا الثعلب الحاضنتان',
        d: 'M290,270 Q380,250 410,240 Q430,260 390,290 Q340,310 280,310 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-tail',
        labelAr: 'ذيل الثعلب الملتف بالراحة',
        d: 'M200,390 Q120,400 90,320 Q100,250 150,270 Q180,300 185,360 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'fox-hug-tail-tip',
        labelAr: 'طرف الذيل الأبيض',
        d: 'M90,320 Q100,250 150,270 Q130,295 105,315 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-hugged',
        labelAr: 'النجمة الباسمة بين يدي الثعلب',
        d: 'M440,140 L460,195 L515,200 L470,235 L488,290 L440,255 L392,290 L410,235 L365,200 L420,195 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-hugged-glow',
        labelAr: 'وهج النجمة اللطيف',
        d: 'M440,110 Q540,110 540,230 Q540,320 440,320 Q340,320 340,230 Q340,110 440,110 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'path', props: { d: 'M250,225 Q260,235 270,225', stroke: '#1E293B', strokeWidth: 3, fill: 'none' } }, // closed happy eye
      { type: 'path', props: { d: 'M280,220 Q290,230 300,220', stroke: '#1E293B', strokeWidth: 3, fill: 'none' } }, // closed happy eye
      { type: 'circle', props: { cx: 285, cy: 238, r: 3.5, fill: '#1E293B' } }, // nose
      { type: 'circle', props: { cx: 430, cy: 215, r: 4.5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 450, cy: 215, r: 4.5, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M433,226 Q440,234 447,226', stroke: '#1E293B', strokeWidth: 2.5, fill: 'none' } }
    ]
  },

  {
    id: 'fox-star-4',
    titleAr: 'احتفال النجوم في سماء الليل',
    category: 'story_fox',
    storyChapter: 8,
    difficulty: 'متوسط',
    descriptionAr: 'النجمة الساطعة تجتمع مع عائلتها من النجوم الذهبية اللامعة في أعالي السماء.',
    storyText: 'وصلت النجمة إلى أصدقائها في السماء الصافية.. واجتمعت كوكبة النجوم الصغيرة ترقص وتلمع معاً فرحاً بعودة النجمة الزرقاء المحبوبة!',
    referenceImage: STORY_IMAGE_URL,
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'deep-night-sky',
        labelAr: 'سماء الليل الكحلي الساحر',
        d: 'M0,0 L600,0 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'big-center-star',
        labelAr: 'النجمة الكبرى البطلة (في الوسط)',
        d: 'M300,160 L320,215 L378,220 L332,258 L350,315 L300,280 L250,315 L268,258 L222,220 L280,215 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-top-left',
        labelAr: 'نجمة ذهبية صغيرة (أعلى اليسار)',
        d: 'M130,80 L142,110 L175,112 L148,135 L158,168 L130,148 L102,168 L112,135 L85,112 L118,110 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-top-right',
        labelAr: 'نجمة ذهبية لطيفة (أعلى اليمين)',
        d: 'M470,80 L482,110 L515,112 L488,135 L498,168 L470,148 L442,168 L452,135 L425,112 L458,110 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-mid-left',
        labelAr: 'نجمة مبتسمة (يسار)',
        d: 'M90,260 L102,290 L135,292 L108,315 L118,348 L90,328 L62,348 L72,315 L45,292 L78,290 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-mid-right',
        labelAr: 'نجمة بنفسجية فضائية (يمين)',
        d: 'M510,260 L522,290 L555,292 L528,315 L538,348 L510,328 L482,348 L492,315 L465,292 L498,290 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'star-bottom-center',
        labelAr: 'نجمة صفراء دافئة (أسفل الوسط)',
        d: 'M300,380 L312,410 L345,412 L318,435 L328,468 L300,448 L272,468 L282,435 L255,412 L288,410 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'crescent-moon',
        labelAr: 'الهلال المضيء الجميل',
        d: 'M40,50 Q100,50 100,120 Q100,190 40,190 Q70,150 70,120 Q70,90 40,50 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 290, cy: 245, r: 4.5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 310, cy: 245, r: 4.5, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M293,256 Q300,264 307,256', stroke: '#1E293B', strokeWidth: 2.5, fill: 'none' } },
      { type: 'circle', props: { cx: 125, cy: 125, r: 3, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 135, cy: 125, r: 3, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 465, cy: 125, r: 3, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 475, cy: 125, r: 3, fill: '#1E293B' } }
    ]
  },

  // --- Animal Friends (Featuring the Cute Duck mentioned in asset filename!) ---
  {
    id: 'cute-duckling',
    titleAr: 'البطة الصفراء اللطيفة في البحيرة',
    category: 'animals',
    difficulty: 'سهل',
    descriptionAr: 'بطة ظريفة تسبح بمرح بين نباتات الماء وقطرات الندى.',
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'water-pond',
        labelAr: 'مياه البحيرة الزرقاء',
        d: 'M0,280 Q300,260 600,280 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'pond-sky',
        labelAr: 'سماء البحيرة',
        d: 'M0,0 L600,0 L600,280 Q300,260 0,280 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'duck-body',
        labelAr: 'جسم البطة المستدير',
        d: 'M220,240 Q180,240 180,310 Q180,370 280,380 Q380,380 430,320 Q440,290 410,270 Q370,250 310,260 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'duck-wing',
        labelAr: 'جناح البطة الصغير',
        d: 'M260,280 Q230,290 240,330 Q270,360 320,340 Q350,320 330,290 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'duck-head',
        labelAr: 'رأس البطة الظريف',
        d: 'M230,120 Q290,110 320,150 Q340,200 300,240 Q250,250 210,210 Q190,160 230,120 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'duck-beak',
        labelAr: 'منقار البطة البرتقالي',
        d: 'M190,160 L120,175 Q150,205 200,200 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'duck-cap',
        labelAr: 'قبعة البطة الصغيرة الأنيقة',
        d: 'M240,125 Q270,75 300,120 L320,125 L220,125 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lily-pad-1',
        labelAr: 'ورقة زنبق الماء الخضراء',
        d: 'M100,380 m -45,0 a 45,25 0 1,0 90,0 a 45,25 0 1,0 -90,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'water-lily-flower',
        labelAr: 'زهرة اللوتس المائية',
        d: 'M100,360 Q85,335 100,320 Q115,335 100,360 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'reed-plants',
        labelAr: 'قصب ونباتات البردي',
        d: 'M500,220 L515,420 L490,420 Z M530,250 L545,430 L525,430 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 250, cy: 165, r: 6, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 248, cy: 163, r: 2, fill: '#FFFFFF' } }, // eye highlight
      { type: 'path', props: { d: 'M190,380 Q300,390 410,380', stroke: '#38BDF8', strokeWidth: 3, fill: 'none' } } // ripple
    ]
  },

  {
    id: 'friendly-lion',
    titleAr: 'الأسد اللطيف ملك الغابة',
    category: 'animals',
    difficulty: 'سهل',
    descriptionAr: 'شبل أسد ظريف بابتسامة دافئة ولبدة جميلة حول رأسه.',
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'savanna-sky',
        labelAr: 'سماء السافانا المشرقة',
        d: 'M0,0 L600,0 L600,350 L0,350 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'savanna-grass',
        labelAr: 'أرض السافانا الذهبية',
        d: 'M0,350 L600,350 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-mane',
        labelAr: 'لبدة الأسد الكثيفة',
        d: 'M300,60 Q390,50 440,110 Q490,180 470,260 Q440,340 370,360 Q300,370 230,360 Q160,340 130,260 Q110,180 160,110 Q210,50 300,60 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-head',
        labelAr: 'وجه الأسد الدائري',
        d: 'M300,120 Q370,110 390,170 Q410,240 370,280 Q300,310 230,280 Q190,240 210,170 Q230,110 300,120 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-muzzle',
        labelAr: 'فم وخدود الأسد',
        d: 'M300,210 Q340,210 350,250 Q340,280 300,280 Q260,280 250,250 Q260,210 300,210 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-body',
        labelAr: 'جسم الأسد الصغير',
        d: 'M230,340 Q300,330 370,340 L390,460 L210,460 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-ear-left',
        labelAr: 'أذن الأسد اليسرى',
        d: 'M210,110 m -22,0 a 22,22 0 1,0 44,0 a 22,22 0 1,0 -44,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-ear-right',
        labelAr: 'أذن الأسد اليمنى',
        d: 'M390,110 m -22,0 a 22,22 0 1,0 44,0 a 22,22 0 1,0 -44,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'lion-crown',
        labelAr: 'تاج الملك الصغير الذهبي',
        d: 'M260,80 L275,50 L300,70 L325,50 L340,80 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 265, cy: 180, r: 5, fill: '#1E293B' } },
      { type: 'circle', props: { cx: 335, cy: 180, r: 5, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M290,225 L310,225 L300,238 Z', fill: '#1E293B' } }, // triangle nose
      { type: 'path', props: { d: 'M300,238 L300,255 M290,255 Q300,265 310,255', stroke: '#1E293B', strokeWidth: 2.5, fill: 'none' } }
    ]
  },

  {
    id: 'playful-dolphin',
    titleAr: 'الدلفين يقفز فوق الأمواج',
    category: 'nature',
    difficulty: 'سهل',
    descriptionAr: 'دلفين رشيق وسعيد يقفز في زرقة المحيط تحت أشعة الشمس.',
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'ocean-sky',
        labelAr: 'سماء المحيط الصافية',
        d: 'M0,0 L600,0 L600,320 L0,320 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'ocean-waves',
        labelAr: 'مياه البحر الزرقاء',
        d: 'M0,320 Q75,290 150,320 T300,320 T450,320 T600,320 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'sun-ocean',
        labelAr: 'الشمس الذهبية المشرقة',
        d: 'M500,80 m -35,0 a 35,35 0 1,0 70,0 a 35,35 0 1,0 -70,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'dolphin-body',
        labelAr: 'جسم الدلفين الرشيق',
        d: 'M130,280 Q210,130 360,150 Q480,180 520,290 Q440,240 330,220 Q200,220 130,280 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'dolphin-belly',
        labelAr: 'بطن الدلفين الأبيض الفاتح',
        d: 'M160,265 Q230,190 340,195 Q420,225 460,280 Q380,240 280,230 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'dolphin-dorsal-fin',
        labelAr: 'زعنفة الظهر العلوية',
        d: 'M340,150 Q350,90 385,110 Q370,140 360,150 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'dolphin-fluke',
        labelAr: 'ذيل الدلفين المروحي',
        d: 'M130,280 Q90,260 70,240 Q95,290 115,295 Q90,320 65,340 Q100,320 130,280 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'water-splash',
        labelAr: 'رذاذ الماء المتطاير',
        d: 'M480,310 Q490,260 520,280 Q500,320 480,310 Z',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 475, cy: 220, r: 4.5, fill: '#1E293B' } },
      { type: 'path', props: { d: 'M485,235 Q500,245 510,238', stroke: '#1E293B', strokeWidth: 2.5, fill: 'none' } }
    ]
  },

  {
    id: 'space-rocket',
    titleAr: 'صاروخ الفضاء وكواكب المجرة',
    category: 'nature',
    difficulty: 'متوسط',
    descriptionAr: 'صاروخ مغامرات ينطلق نحو الكواكب البعيدة والشهب اللامعة.',
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'space-bg',
        labelAr: 'الفضاء الكوني الشاسع',
        d: 'M0,0 L600,0 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-body',
        labelAr: 'هيكل الصاروخ الرئيسي',
        d: 'M250,140 Q300,50 350,140 L360,320 L240,320 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-nose-cone',
        labelAr: 'مقدمة الصاروخ الحمراء',
        d: 'M250,140 Q300,50 350,140 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-window-outer',
        labelAr: 'إطار نافذة الصاروخ',
        d: 'M300,210 m -35,0 a 35,35 0 1,0 70,0 a 35,35 0 1,0 -70,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-window-glass',
        labelAr: 'زجاج النافذة الدائري',
        d: 'M300,210 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-fin-left',
        labelAr: 'جناح الصاروخ الأيسر',
        d: 'M240,260 L180,360 L240,340 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-fin-right',
        labelAr: 'جناح الصاروخ الأيمن',
        d: 'M360,260 L420,360 L360,340 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-flame-outer',
        labelAr: 'لهب المحرك البرتقالي',
        d: 'M260,330 Q300,470 340,330 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'rocket-flame-inner',
        labelAr: 'قلب اللهب الأصفر',
        d: 'M275,330 Q300,420 325,330 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'saturn-planet',
        labelAr: 'كوكب زحل ذو الحلقات',
        d: 'M100,100 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'saturn-ring',
        labelAr: 'حلقة الكوكب الرائعة',
        d: 'M30,100 Q100,60 170,100 Q100,140 30,100 Z',
        defaultFill: '#FFFFFF'
      },
      {
        id: 'moon-crater',
        labelAr: 'القمر الصخري البعيد',
        d: 'M500,120 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0',
        defaultFill: '#FFFFFF'
      }
    ],
    decorations: [
      { type: 'circle', props: { cx: 480, cy: 300, r: 8, fill: '#FACC15' } },
      { type: 'circle', props: { cx: 120, cy: 380, r: 12, fill: '#38BDF8' } }
    ]
  },

  // --- Free Creative Canvas ---
  {
    id: 'free-canvas',
    titleAr: 'لوحة الفنان الصغير (رسم وتلوين حر)',
    category: 'free_draw',
    difficulty: 'إبداعي',
    descriptionAr: 'صفحة بيضاء مفتوحة لترسم ما تحب بكل حرية باستخدام الفرش والملصقات!',
    viewBox: '0 0 600 500',
    regions: [
      {
        id: 'blank-canvas-bg',
        labelAr: 'خلفية اللوحة الحرة',
        d: 'M0,0 L600,0 L600,500 L0,500 Z',
        defaultFill: '#FFFFFF'
      }
    ]
  }
];
