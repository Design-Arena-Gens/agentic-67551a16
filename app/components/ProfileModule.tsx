'use client';

import { User, Crown, Settings, LogOut, Mail, Calendar, Globe, Award } from 'lucide-react';

interface ProfileModuleProps {
  isPro: boolean;
  onUpgradeToPro: () => void;
}

export default function ProfileModule({ isPro, onUpgradeToPro }: ProfileModuleProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">الملف الشخصي</h2>
        <p className="text-gray-600 dark:text-gray-400">
          إدارة حسابك وإعداداتك
        </p>
      </div>

      {/* Profile Header */}
      <div className="card mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-12 h-12" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-bold">متعلم جديد</h3>
                {isPro && (
                  <div className="flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    <Crown className="w-4 h-4" />
                    <span>PRO</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>user@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>انضم في يناير 2024</span>
                </div>
              </div>
            </div>
          </div>
          <button className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="card text-center">
          <div className="text-3xl mb-2">📚</div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">24</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">دروس مكتملة</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">1,250</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">نقاط الخبرة</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">5</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">أيام متتالية</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">شارات</div>
        </div>
      </div>

      {/* Languages Learning */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">اللغات التي تتعلمها</h3>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇬🇧</span>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">الإنجليزية</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">المستوى: متوسط</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">65%</div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <button className="mt-4 w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold transition-all">
          + إضافة لغة جديدة
        </button>
      </div>

      {/* Achievements */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">الإنجازات</h3>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {[
            { icon: '🌟', name: 'البداية', earned: true },
            { icon: '🔥', name: 'المثابر', earned: true },
            { icon: '📚', name: 'متعلم نشط', earned: true },
            { icon: '🎮', name: 'لاعب محترف', earned: false },
            { icon: '🗣️', name: 'متحدث ماهر', earned: false },
            { icon: '🏆', name: 'خبير', earned: false },
          ].map((badge, index) => (
            <div
              key={index}
              className={`text-center p-3 rounded-xl ${
                badge.earned
                  ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30'
                  : 'bg-gray-100 dark:bg-gray-800 opacity-50 grayscale'
              }`}
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">{badge.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Upgrade or Pro Features */}
      {!isPro ? (
        <div className="card bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-10 h-10" />
                <h3 className="text-3xl font-bold">ترقية إلى PRO</h3>
              </div>
              <p className="mb-6 text-lg">
                احصل على وصول غير محدود لجميع المميزات والمحتوى
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>دروس غير محدودة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>جميع الألعاب</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>محادثات AI متقدمة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>شهادات معتمدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>تحميل الدروس</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold">✓</div>
                  <span>بدون إعلانات</span>
                </div>
              </div>
              <button
                onClick={onUpgradeToPro}
                className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all text-lg shadow-lg"
              >
                اشترك الآن - 9.99$ شهرياً
              </button>
            </div>
            <div className="hidden md:block text-9xl opacity-20">
              👑
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-8 h-8" />
                <h3 className="text-2xl font-bold">عضوية PRO نشطة</h3>
              </div>
              <p className="mb-4">أنت تستمتع بجميع المميزات المتقدمة</p>
              <p className="text-sm opacity-90">التجديد التالي: 1 فبراير 2024</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all">
              إدارة الاشتراك
            </button>
          </div>
        </div>
      )}

      {/* Settings */}
      <div className="card mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">الإعدادات</h3>
        <div className="space-y-3">
          <button className="w-full text-right p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200">الإشعارات</span>
            <span className="text-gray-500 dark:text-gray-400">›</span>
          </button>
          <button className="w-full text-right p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200">الخصوصية</span>
            <span className="text-gray-500 dark:text-gray-400">›</span>
          </button>
          <button className="w-full text-right p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200">اللغة والمنطقة</span>
            <span className="text-gray-500 dark:text-gray-400">›</span>
          </button>
          <button className="w-full text-right p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200">المساعدة والدعم</span>
            <span className="text-gray-500 dark:text-gray-400">›</span>
          </button>
          <button className="w-full text-right p-4 bg-red-50 dark:bg-red-900/30 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/50 transition-all flex items-center gap-3 text-red-600 dark:text-red-400">
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </div>
  );
}
