'use client';

import { useState } from 'react';
import { Send, Mic, Volume2, Bot, User as UserIcon, Lock } from 'lucide-react';

interface ConversationModuleProps {
  targetLanguage: string;
  nativeLanguage: string;
  isPro: boolean;
}

const conversationScenarios = [
  {
    id: 'casual',
    title: 'محادثة عادية',
    description: 'تحدث عن الحياة اليومية والهوايات',
    icon: '😊',
    level: 'مبتدئ',
    free: true,
  },
  {
    id: 'restaurant',
    title: 'في المطعم',
    description: 'اطلب الطعام وتحدث مع النادل',
    icon: '🍽️',
    level: 'مبتدئ',
    free: true,
  },
  {
    id: 'shopping',
    title: 'التسوق',
    description: 'اسأل عن الأسعار واشتري منتجات',
    icon: '🛍️',
    level: 'مبتدئ',
    free: false,
  },
  {
    id: 'travel',
    title: 'السفر',
    description: 'احجز فندق واسأل عن الاتجاهات',
    icon: '✈️',
    level: 'متوسط',
    free: false,
  },
  {
    id: 'job-interview',
    title: 'مقابلة عمل',
    description: 'تدرب على مقابلات العمل الاحترافية',
    icon: '💼',
    level: 'متقدم',
    free: false,
  },
  {
    id: 'business',
    title: 'اجتماع عمل',
    description: 'ناقش المشاريع والخطط',
    icon: '📊',
    level: 'متقدم',
    free: false,
  },
];

export default function ConversationModule({ targetLanguage, nativeLanguage, isPro }: ConversationModuleProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    setMessages([...messages, { role: 'user', text: inputText }]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'مرحباً! كيف يمكنني مساعدتك اليوم؟',
        'هذا رائع! أخبرني المزيد عن ذلك.',
        'أفهم ما تقصد. هل يمكنك توضيح أكثر؟',
        'ممتاز! نطقك يتحسن بشكل ملحوظ.',
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [...prev, { role: 'ai', text: randomResponse }]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  if (selectedScenario) {
    const scenario = conversationScenarios.find(s => s.id === selectedScenario);

    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedScenario(null)}
          className="mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← العودة للسيناريوهات
        </button>

        <div className="card mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{scenario?.icon}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{scenario?.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{scenario?.description}</p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="card">
          <div className="h-96 overflow-y-auto mb-6 space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Bot className="w-16 h-16 mx-auto mb-4" />
                  <p>ابدأ المحادثة الآن!</p>
                  <p className="text-sm mt-2">المساعد الذكي جاهز للتحدث معك</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'ai' && (
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Bot className="w-6 h-6" />
                    </div>
                  )}
                  <div
                    className={`max-w-md p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.role === 'ai' && (
                      <button className="mt-2 text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1">
                        <Volume2 className="w-4 h-4" />
                        استمع
                      </button>
                    )}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      <UserIcon className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-3">
            <button
              onClick={handleVoiceInput}
              className={`p-4 rounded-xl transition-all ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <Mic className="w-6 h-6" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="اكتب رسالتك هنا..."
              className="input-field flex-1"
            />
            <button
              onClick={handleSendMessage}
              className="btn-primary px-6"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>

          {/* Tips */}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              💡 <strong>نصيحة:</strong> حاول استخدام جمل كاملة وواضحة. المساعد الذكي سيصحح أخطاءك ويقدم اقتراحات لتحسين لغتك.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">محادثة مع AI</h2>
        <p className="text-gray-600 dark:text-gray-400">
          تدرب على المحادثة في سيناريوهات واقعية
        </p>
      </div>

      {/* AI Features */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="card text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">تصحيح فوري</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">يصحح AI أخطاءك مباشرة</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">🎤</div>
          <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">تقييم النطق</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">تحليل دقيق لنطقك</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">💬</div>
          <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">محادثات طبيعية</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">ردود واقعية ومفيدة</p>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conversationScenarios.map((scenario) => {
          const isLocked = !scenario.free && !isPro;
          return (
            <div
              key={scenario.id}
              className={`card ${
                isLocked ? 'opacity-60' : 'hover:scale-[1.02] cursor-pointer'
              } transition-all relative overflow-hidden`}
              onClick={() => !isLocked && setSelectedScenario(scenario.id)}
            >
              {isLocked && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>PRO</span>
                </div>
              )}

              <div className="text-center">
                <div className="text-6xl mb-4">{scenario.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{scenario.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{scenario.description}</p>

                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  scenario.level === 'مبتدئ'
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : scenario.level === 'متوسط'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                }`}>
                  {scenario.level}
                </span>
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
              <h3 className="text-xl font-bold mb-2">افتح جميع السيناريوهات</h3>
              <p>تدرب على محادثات متقدمة في جميع المجالات</p>
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
