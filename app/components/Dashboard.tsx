'use client';

import { useState } from 'react';
import { Home, BookOpen, Gamepad2, MessageCircle, Trophy, User, Crown, ChevronLeft } from 'lucide-react';
import LessonsModule from './LessonsModule';
import GamesModule from './GamesModule';
import ConversationModule from './ConversationModule';
import ProgressModule from './ProgressModule';
import ProfileModule from './ProfileModule';

interface DashboardProps {
  nativeLanguage: string;
  targetLanguage: string;
}

export default function Dashboard({ nativeLanguage, targetLanguage }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'lessons' | 'games' | 'conversation' | 'progress' | 'profile'>('home');
  const [isPro, setIsPro] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'lessons':
        return <LessonsModule targetLanguage={targetLanguage} isPro={isPro} />;
      case 'games':
        return <GamesModule targetLanguage={targetLanguage} isPro={isPro} />;
      case 'conversation':
        return <ConversationModule targetLanguage={targetLanguage} nativeLanguage={nativeLanguage} isPro={isPro} />;
      case 'progress':
        return <ProgressModule />;
      case 'profile':
        return <ProfileModule isPro={isPro} onUpgradeToPro={() => setIsPro(true)} />;
      default:
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                مرحباً بك في رحلة التعلم! 🎉
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                ابدأ تعلم لغتك الجديدة اليوم
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">دروس مكتملة</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">نقاط الخبرة</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">أيام متتالية</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">شارات</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setActiveTab('lessons')}
                className="card text-right hover:scale-[1.02] transition-transform p-8"
              >
                <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">ابدأ درساً جديداً</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  دروس تفاعلية مخصصة لمستواك
                </p>
                <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <span>ابدأ الآن</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('games')}
                className="card text-right hover:scale-[1.02] transition-transform p-8"
              >
                <Gamepad2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">العب وتعلم</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ألعاب تفاعلية لتحسين مهاراتك
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <span>ابدأ اللعب</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('conversation')}
                className="card text-right hover:scale-[1.02] transition-transform p-8"
              >
                <MessageCircle className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">محادثة مع AI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  تدرب على المحادثة مع مدرس ذكي
                </p>
                <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span>ابدأ المحادثة</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('progress')}
                className="card text-right hover:scale-[1.02] transition-transform p-8"
              >
                <Trophy className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">تتبع تقدمك</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  شاهد إنجازاتك ونموك المستمر
                </p>
                <div className="mt-4 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                  <span>عرض التقدم</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </button>
            </div>

            {/* Pro Upgrade Banner */}
            {!isPro && (
              <div className="mt-8 card bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">اشترك في PRO</h3>
                    </div>
                    <p className="mb-4">
                      احصل على وصول غير محدود لجميع الدروس والألعاب والمحادثات المتقدمة
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>✓ دروس غير محدودة</li>
                      <li>✓ جميع الألعاب</li>
                      <li>✓ محادثات AI متقدمة</li>
                      <li>✓ شهادات معتمدة</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setIsPro(true);
                      setActiveTab('profile');
                    }}
                    className="bg-white text-orange-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    ترقية الآن
                  </button>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🌍</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">PolyglotAI</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                تعلم لغة جديدة كل يوم
              </p>
            </div>
          </div>
          {isPro && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
              <Crown className="w-5 h-5" />
              <span>PRO</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mb-8 card">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>الرئيسية</span>
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'lessons'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>الدروس</span>
            </button>
            <button
              onClick={() => setActiveTab('games')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'games'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Gamepad2 className="w-5 h-5" />
              <span>الألعاب</span>
            </button>
            <button
              onClick={() => setActiveTab('conversation')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'conversation'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span>المحادثة</span>
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'progress'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span>التقدم</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <User className="w-5 h-5" />
              <span>الملف الشخصي</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}
