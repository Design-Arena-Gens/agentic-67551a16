'use client';

import { useState } from 'react';
import { BookOpen, Lock, CheckCircle, Star, Play } from 'lucide-react';

interface LessonsModuleProps {
  targetLanguage: string;
  isPro: boolean;
}

const lessonCategories = [
  {
    id: 'beginner',
    title: 'المبتدئ',
    level: 'A1-A2',
    color: 'green',
    lessons: [
      { id: 1, title: 'الأبجدية والنطق', duration: '15 دقيقة', completed: false, free: true },
      { id: 2, title: 'التحيات والتعارف', duration: '20 دقيقة', completed: false, free: true },
      { id: 3, title: 'الأرقام والعد', duration: '15 دقيقة', completed: false, free: true },
      { id: 4, title: 'الألوان والأشكال', duration: '15 دقيقة', completed: false, free: false },
      { id: 5, title: 'العائلة والأصدقاء', duration: '20 دقيقة', completed: false, free: false },
    ],
  },
  {
    id: 'elementary',
    title: 'الأساسي',
    level: 'A2-B1',
    color: 'blue',
    lessons: [
      { id: 6, title: 'التسوق والشراء', duration: '25 دقيقة', completed: false, free: false },
      { id: 7, title: 'الطعام والمطاعم', duration: '25 دقيقة', completed: false, free: false },
      { id: 8, title: 'السفر والمواصلات', duration: '30 دقيقة', completed: false, free: false },
      { id: 9, title: 'الأماكن والاتجاهات', duration: '25 دقيقة', completed: false, free: false },
      { id: 10, title: 'الوقت والتاريخ', duration: '20 دقيقة', completed: false, free: false },
    ],
  },
  {
    id: 'intermediate',
    title: 'المتوسط',
    level: 'B1-B2',
    color: 'yellow',
    lessons: [
      { id: 11, title: 'العمل والمهن', duration: '30 دقيقة', completed: false, free: false },
      { id: 12, title: 'الصحة والطب', duration: '30 دقيقة', completed: false, free: false },
      { id: 13, title: 'التكنولوجيا والإنترنت', duration: '30 دقيقة', completed: false, free: false },
      { id: 14, title: 'الثقافة والتقاليد', duration: '35 دقيقة', completed: false, free: false },
      { id: 15, title: 'التعبير عن الآراء', duration: '35 دقيقة', completed: false, free: false },
    ],
  },
  {
    id: 'advanced',
    title: 'المتقدم',
    level: 'B2-C1',
    color: 'purple',
    lessons: [
      { id: 16, title: 'المناقشات المعقدة', duration: '40 دقيقة', completed: false, free: false },
      { id: 17, title: 'الأعمال والتجارة', duration: '40 دقيقة', completed: false, free: false },
      { id: 18, title: 'الأدب والفن', duration: '40 دقيقة', completed: false, free: false },
      { id: 19, title: 'السياسة والاقتصاد', duration: '45 دقيقة', completed: false, free: false },
      { id: 20, title: 'العلوم والبحث', duration: '45 دقيقة', completed: false, free: false },
    ],
  },
  {
    id: 'expert',
    title: 'الخبير',
    level: 'C1-C2',
    color: 'red',
    lessons: [
      { id: 21, title: 'النقد والتحليل', duration: '50 دقيقة', completed: false, free: false },
      { id: 22, title: 'التفاوض والإقناع', duration: '50 دقيقة', completed: false, free: false },
      { id: 23, title: 'الخطابة والعروض', duration: '50 دقيقة', completed: false, free: false },
      { id: 24, title: 'الترجمة والتفسير', duration: '55 دقيقة', completed: false, free: false },
      { id: 25, title: 'التخصص المهني', duration: '60 دقيقة', completed: false, free: false },
    ],
  },
];

export default function LessonsModule({ targetLanguage, isPro }: LessonsModuleProps) {
  const [selectedCategory, setSelectedCategory] = useState(lessonCategories[0].id);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const category = lessonCategories.find(c => c.id === selectedCategory);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700',
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700',
      red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700',
    };
    return colors[color] || colors.blue;
  };

  if (selectedLesson) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedLesson(null)}
          className="mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← العودة للدروس
        </button>

        <div className="card">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              {category?.lessons.find(l => l.id === selectedLesson)?.title}
            </h2>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span>⏱️ {category?.lessons.find(l => l.id === selectedLesson)?.duration}</span>
              <span>📊 {category?.title}</span>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="space-y-6">
            <div className="card bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">محتوى الدرس</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    سيتم تحميل محتوى الدرس التفاعلي المدعوم بالذكاء الاصطناعي...
                  </p>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">مقدمة وشرح المفردات</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                      <span className="text-gray-700 dark:text-gray-300">أمثلة وتدريبات تفاعلية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
                      <span className="text-gray-700 dark:text-gray-300">محادثات واقعية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-white flex items-center justify-center font-bold">4</div>
                      <span className="text-gray-700 dark:text-gray-300">اختبار نهائي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-purple-50 dark:bg-purple-900/30 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">التعلم بالذكاء الاصطناعي</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    يتكيف الدرس مع سرعة تعلمك ويقدم تمارين مخصصة بناءً على نقاط القوة والضعف لديك
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-3 text-lg">
              <Play className="w-6 h-6" />
              ابدأ الدرس الآن
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">الدروس التعليمية</h2>
        <p className="text-gray-600 dark:text-gray-400">
          مسار تعليمي شامل من المبتدئ إلى الخبير
        </p>
      </div>

      {/* Category Selection */}
      <div className="mb-8 flex flex-wrap gap-3">
        {lessonCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedCategory === cat.id
                ? getColorClasses(cat.color) + ' border-2'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {cat.title} ({cat.level})
          </button>
        ))}
      </div>

      {/* Lessons List */}
      <div className="grid gap-4">
        {category?.lessons.map((lesson, index) => {
          const isLocked = !lesson.free && !isPro;
          return (
            <div
              key={lesson.id}
              className={`card flex items-center justify-between ${
                isLocked ? 'opacity-60' : 'hover:scale-[1.01] cursor-pointer'
              } transition-all`}
              onClick={() => !isLocked && setSelectedLesson(lesson.id)}
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full ${getColorClasses(category.color)} flex items-center justify-center font-bold text-xl`}>
                  {lesson.completed ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">{lesson.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>⏱️ {lesson.duration}</span>
                    {lesson.completed && (
                      <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {isLocked ? (
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-gray-400" />
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">PRO فقط</span>
                </div>
              ) : (
                <BookOpen className="w-6 h-6 text-gray-400" />
              )}
            </div>
          );
        })}
      </div>

      {/* Pro Upgrade */}
      {!isPro && (
        <div className="mt-8 card bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">افتح جميع الدروس</h3>
              <p>احصل على وصول غير محدود لجميع المستويات والدروس</p>
            </div>
            <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all">
              ترقية الآن
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
