'use client';

import { useState } from 'react';
import { Globe, Sparkles, BookOpen, Gamepad2, Trophy, Crown } from 'lucide-react';
import Dashboard from './components/Dashboard';
import LanguageSelector from './components/LanguageSelector';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [selectedNativeLanguage, setSelectedNativeLanguage] = useState('');
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState('');

  if (started && selectedNativeLanguage && selectedTargetLanguage) {
    return <Dashboard nativeLanguage={selectedNativeLanguage} targetLanguage={selectedTargetLanguage} />;
  }

  if (selectedNativeLanguage) {
    return (
      <LanguageSelector
        nativeLanguage={selectedNativeLanguage}
        onSelectTarget={(lang) => {
          setSelectedTargetLanguage(lang);
          setStarted(true);
        }}
        onBack={() => setSelectedNativeLanguage('')}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-16 h-16 text-blue-600 dark:text-blue-400" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PolyglotAI
            </h1>
            <Sparkles className="w-16 h-16 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
            تعلم أي لغة في العالم بطريقة ممتعة وذكية
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            منصة تعليم اللغات المدعومة بالذكاء الاصطناعي مع دروس تفاعلية، ألعاب، وتمارين مخصصة لجميع المستويات من المبتدئ إلى المحترف
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">دروس تفاعلية</h3>
            <p className="text-gray-600 dark:text-gray-400">
              دروس مخصصة بالذكاء الاصطناعي تناسب مستواك وأسلوب تعلمك
            </p>
          </div>

          <div className="card">
            <Gamepad2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">ألعاب ممتعة</h3>
            <p className="text-gray-600 dark:text-gray-400">
              تعلم من خلال ألعاب تفاعلية ومسابقات تحفز التعلم السريع
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">تقدم مستمر</h3>
            <p className="text-gray-600 dark:text-gray-400">
              تتبع تقدمك واكسب نقاط وشارات مع كل إنجاز جديد
            </p>
          </div>

          <div className="card">
            <Sparkles className="w-12 h-12 text-pink-600 dark:text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">ذكاء اصطناعي</h3>
            <p className="text-gray-600 dark:text-gray-400">
              محادثات واقعية مع AI لتحسين مهارات التحدث والاستماع
            </p>
          </div>

          <div className="card">
            <Globe className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">جميع اللغات</h3>
            <p className="text-gray-600 dark:text-gray-400">
              تعلم من بين أكثر من 50 لغة من جميع أنحاء العالم
            </p>
          </div>

          <div className="card relative overflow-hidden">
            <Crown className="w-12 h-12 text-orange-600 dark:text-orange-400 mb-4" />
            <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              PRO
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">مميزات مدفوعة</h3>
            <p className="text-gray-600 dark:text-gray-400">
              وصول غير محدود لجميع الدروس والألعاب والمحادثات المتقدمة
            </p>
          </div>
        </div>

        {/* Language Selection */}
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              ابدأ رحلة التعلم الآن
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              اختر لغتك الأم للبدء
            </p>

            <LanguageSelector
              onSelectTarget={(lang) => setSelectedNativeLanguage(lang)}
              isNativeSelection={true}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            مدعوم بتقنية الذكاء الاصطناعي المتقدمة | تعلم في أي وقت ومن أي مكان
          </p>
        </div>
      </div>
    </main>
  );
}
