'use client';

import { Trophy, Target, Flame, Award, TrendingUp, Calendar } from 'lucide-react';

export default function ProgressModule() {
  const badges = [
    { id: 1, name: 'البداية', icon: '🌟', earned: true, date: '2024-01-15' },
    { id: 2, name: 'المثابر', icon: '🔥', earned: true, date: '2024-01-20' },
    { id: 3, name: 'متعلم نشط', icon: '📚', earned: true, date: '2024-01-25' },
    { id: 4, name: 'محترف الألعاب', icon: '🎮', earned: false, date: null },
    { id: 5, name: 'متحدث ماهر', icon: '🗣️', earned: false, date: null },
    { id: 6, name: 'خبير اللغة', icon: '🏆', earned: false, date: null },
  ];

  const weeklyProgress = [
    { day: 'السبت', minutes: 30, completed: true },
    { day: 'الأحد', minutes: 45, completed: true },
    { day: 'الاثنين', minutes: 20, completed: true },
    { day: 'الثلاثاء', minutes: 60, completed: true },
    { day: 'الأربعاء', minutes: 15, completed: true },
    { day: 'الخميس', minutes: 0, completed: false },
    { day: 'الجمعة', minutes: 0, completed: false },
  ];

  const recentAchievements = [
    { id: 1, title: 'أكملت 10 دروس', date: '2024-01-25', xp: 100 },
    { id: 2, title: 'سلسلة 7 أيام متتالية', date: '2024-01-24', xp: 50 },
    { id: 3, title: 'فزت في 5 ألعاب', date: '2024-01-23', xp: 75 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">تقدمك</h2>
        <p className="text-gray-600 dark:text-gray-400">
          تتبع رحلة تعلمك وإنجازاتك
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <Target className="w-8 h-8 mb-3" />
          <div className="text-3xl font-bold mb-1">24</div>
          <div className="text-sm opacity-90">دروس مكتملة</div>
        </div>

        <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <Trophy className="w-8 h-8 mb-3" />
          <div className="text-3xl font-bold mb-1">1,250</div>
          <div className="text-sm opacity-90">نقاط الخبرة</div>
        </div>

        <div className="card bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <Flame className="w-8 h-8 mb-3" />
          <div className="text-3xl font-bold mb-1">5</div>
          <div className="text-sm opacity-90">أيام متتالية</div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
          <Award className="w-8 h-8 mb-3" />
          <div className="text-3xl font-bold mb-1">3</div>
          <div className="text-sm opacity-90">شارات مكتسبة</div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="card mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">النشاط الأسبوعي</h3>
        </div>

        <div className="grid grid-cols-7 gap-3">
          {weeklyProgress.map((day, index) => (
            <div key={index} className="text-center">
              <div
                className={`h-24 rounded-xl mb-2 flex items-end justify-center pb-2 transition-all ${
                  day.completed
                    ? 'bg-gradient-to-t from-blue-500 to-blue-400'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
                style={{ height: `${Math.max(day.minutes, 10)}px` }}
              >
                {day.completed && (
                  <span className="text-white text-xs font-bold">{day.minutes}</span>
                )}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{day.day}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-200">الهدف الأسبوعي</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">170 من 210 دقيقة</p>
            </div>
            <div className="text-2xl">🎯</div>
          </div>
          <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
              style={{ width: '81%' }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Badges */}
        <div className="card">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">الشارات</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`text-center p-4 rounded-xl transition-all ${
                  badge.earned
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 scale-100'
                    : 'bg-gray-100 dark:bg-gray-800 opacity-50 grayscale'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                  {badge.name}
                </div>
                {badge.earned && badge.date && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(badge.date).toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="card">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">الإنجازات الأخيرة</h3>
          </div>

          <div className="space-y-3">
            {recentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(achievement.date).toLocaleDateString('ar-SA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      +{achievement.xp}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">XP</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="card mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold">المستوى 5</h3>
            <p className="text-sm opacity-90">متعلم متوسط</p>
          </div>
          <div className="text-5xl">⭐</div>
        </div>

        <div className="bg-white/20 rounded-full h-4 mb-2">
          <div className="bg-white rounded-full h-4 transition-all" style={{ width: '65%' }}></div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>1,250 / 2,000 XP</span>
          <span>750 XP حتى المستوى 6</span>
        </div>
      </div>
    </div>
  );
}
