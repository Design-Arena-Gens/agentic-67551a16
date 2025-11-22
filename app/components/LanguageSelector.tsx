'use client';

import { useState } from 'react';
import { Search, ChevronRight, ArrowRight } from 'lucide-react';

const languages = [
  { code: 'ar', name: 'العربية', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'الإنجليزية', nativeName: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'الإسبانية', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'الفرنسية', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'الألمانية', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'الإيطالية', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'البرتغالية', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'الروسية', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: 'الصينية', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'اليابانية', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'الكورية', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'الهندية', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'التركية', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'الهولندية', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'البولندية', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'sv', name: 'السويدية', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'النرويجية', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'الدنماركية', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'الفنلندية', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'el', name: 'اليونانية', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'cs', name: 'التشيكية', nativeName: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'المجرية', nativeName: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'الرومانية', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'th', name: 'التايلاندية', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'الفيتنامية', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'الإندونيسية', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'الماليزية', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'he', name: 'العبرية', nativeName: 'עברית', flag: '🇮🇱' },
  { code: 'fa', name: 'الفارسية', nativeName: 'فارسی', flag: '🇮🇷' },
  { code: 'ur', name: 'الأوردية', nativeName: 'اردو', flag: '🇵🇰' },
];

interface LanguageSelectorProps {
  nativeLanguage?: string;
  onSelectTarget: (languageCode: string) => void;
  onBack?: () => void;
  isNativeSelection?: boolean;
}

export default function LanguageSelector({ nativeLanguage, onSelectTarget, onBack, isNativeSelection }: LanguageSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = languages.filter(lang =>
    (!isNativeSelection && lang.code !== nativeLanguage) &&
    (lang.name.includes(searchTerm) || lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full">
      {!isNativeSelection && onBack && (
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          العودة
        </button>
      )}

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={isNativeSelection ? "ابحث عن لغتك الأم..." : "ابحث عن اللغة التي تريد تعلمها..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pr-12"
          />
        </div>
      </div>

      <div className="grid gap-3 max-h-96 overflow-y-auto">
        {filteredLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onSelectTarget(lang.code)}
            className="card flex items-center justify-between p-4 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{lang.flag}</span>
              <div className="text-right">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{lang.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{lang.nativeName}</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </button>
        ))}
      </div>

      {filteredLanguages.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p>لم يتم العثور على لغات مطابقة</p>
        </div>
      )}
    </div>
  );
}
