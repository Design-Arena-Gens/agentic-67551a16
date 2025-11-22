'use client';

import { useState } from 'react';
import { Gamepad2, Lock, Trophy, Star, Play } from 'lucide-react';

interface GamesModuleProps {
  targetLanguage: string;
  isPro: boolean;
}

const games = [
  {
    id: 'word-match',
    title: 'مطابقة الكلمات',
    description: 'اربط الكلمات بمعانيها الصحيحة',
    icon: '🎯',
    difficulty: 'سهل',
    color: 'green',
    free: true,
    rating: 4.8,
  },
  {
    id: 'listen-type',
    title: 'استمع واكتب',
    description: 'استمع للجمل واكتبها بشكل صحيح',
    icon: '🎧',
    difficulty: 'متوسط',
    color: 'blue',
    free: true,
    rating: 4.7,
  },
  {
    id: 'translation-race',
    title: 'سباق الترجمة',
    description: 'ترجم الجمل بأسرع وقت ممكن',
    icon: '⚡',
    difficulty: 'متوسط',
    color: 'yellow',
    free: false,
    rating: 4.9,
  },
  {
    id: 'grammar-quiz',
    title: 'تحدي القواعد',
    description: 'اختبر معرفتك بقواعد اللغة',
    icon: '📝',
    difficulty: 'صعب',
    color: 'purple',
    free: false,
    rating: 4.6,
  },
  {
    id: 'conversation-scenario',
    title: 'سيناريوهات المحادثة',
    description: 'تفاعل في مواقف حياتية واقعية',
    icon: '💬',
    difficulty: 'متوسط',
    color: 'blue',
    free: false,
    rating: 4.9,
  },
  {
    id: 'pronunciation',
    title: 'لعبة النطق',
    description: 'حسّن نطقك من خلال التسجيل والتقييم',
    icon: '🎤',
    difficulty: 'متوسط',
    color: 'green',
    free: false,
    rating: 4.7,
  },
  {
    id: 'memory-cards',
    title: 'بطاقات الذاكرة',
    description: 'اقلب البطاقات واعثر على المطابقات',
    icon: '🃏',
    difficulty: 'سهل',
    color: 'green',
    free: true,
    rating: 4.5,
  },
  {
    id: 'crossword',
    title: 'الكلمات المتقاطعة',
    description: 'حل الألغاز اللغوية الممتعة',
    icon: '🧩',
    difficulty: 'صعب',
    color: 'purple',
    free: false,
    rating: 4.8,
  },
];

export default function GamesModule({ targetLanguage, isPro }: GamesModuleProps) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const renderWordMatchGame = () => {
    const words = [
      { source: 'Hello', target: 'مرحبا' },
      { source: 'Goodbye', target: 'وداعا' },
      { source: 'Thank you', target: 'شكرا' },
      { source: 'Please', target: 'من فضلك' },
    ];

    return (
      <div className="space-y-6">
        <div className="card bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">النقاط: {score}</h3>
            <div className="text-2xl">🎯</div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            اربط الكلمات الإنجليزية بترجمتها العربية الصحيحة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">اللغة المصدر</h4>
            {words.map((word, index) => (
              <button
                key={index}
                className="card w-full text-center py-4 hover:scale-105 transition-all cursor-pointer bg-blue-100 dark:bg-blue-900"
              >
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{word.source}</span>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">الترجمة</h4>
            {words.map((word, index) => (
              <button
                key={index}
                className="card w-full text-center py-4 hover:scale-105 transition-all cursor-pointer bg-green-100 dark:bg-green-900"
              >
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{word.target}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="btn-primary w-full">
          التحقق من الإجابات
        </button>
      </div>
    );
  };

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedGame(null)}
          className="mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← العودة للألعاب
        </button>

        <div className="card mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{game?.icon}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{game?.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{game?.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold">
              {game?.difficulty}
            </span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(game?.rating || 0)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
              <span className="mr-2 text-gray-600 dark:text-gray-400">{game?.rating}</span>
            </div>
          </div>
        </div>

        {selectedGame === 'word-match' && renderWordMatchGame()}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">الألعاب التفاعلية</h2>
        <p className="text-gray-600 dark:text-gray-400">
          تعلم من خلال اللعب والمتعة
        </p>
      </div>

      {/* Daily Challenge */}
      <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-8 h-8" />
              <h3 className="text-2xl font-bold">تحدي اليوم</h3>
            </div>
            <p className="mb-4">أكمل 5 ألعاب مختلفة واحصل على 100 نقطة إضافية!</p>
            <div className="bg-white/20 rounded-full h-3 w-64">
              <div className="bg-white rounded-full h-3 w-1/3"></div>
            </div>
            <p className="text-sm mt-2">2 من 5 ألعاب مكتملة</p>
          </div>
          <div className="text-6xl">🏆</div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const isLocked = !game.free && !isPro;
          return (
            <div
              key={game.id}
              className={`card ${
                isLocked ? 'opacity-60' : 'hover:scale-[1.02] cursor-pointer'
              } transition-all relative overflow-hidden`}
              onClick={() => !isLocked && setSelectedGame(game.id)}
            >
              {isLocked && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>PRO</span>
                </div>
              )}

              <div className="text-center">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{game.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{game.description}</p>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    game.difficulty === 'سهل'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : game.difficulty === 'متوسط'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                      : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                  }`}>
                    {game.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(game.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {!isLocked && (
                  <button className="btn-primary w-full flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    العب الآن
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro Upgrade */}
      {!isPro && (
        <div className="mt-8 card bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">افتح جميع الألعاب</h3>
              <p>استمتع بجميع الألعاب التفاعلية بدون قيود</p>
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
