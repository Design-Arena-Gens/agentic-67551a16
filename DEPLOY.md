# تعليمات النشر

## النشر على Vercel

هذا التطبيق جاهز للنشر على Vercel. اتبع الخطوات التالية:

### الطريقة الأولى: من خلال واجهة Vercel (الأسهل)

1. قم بزيارة [vercel.com](https://vercel.com)
2. سجل الدخول أو أنشئ حساب جديد
3. اضغط على "Add New Project"
4. اربط حساب GitHub/GitLab/Bitbucket
5. اختر هذا المشروع
6. اضغط "Deploy"

سيتم نشر التطبيق تلقائياً!

### الطريقة الثانية: من خلال CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

### الطريقة الثالثة: باستخدام Token

إذا كان لديك Vercel token:

```bash
vercel deploy --prod --yes --token YOUR_TOKEN_HERE --name agentic-67551a16
```

## بعد النشر

سيكون التطبيق متاحاً على رابط مثل:
```
https://agentic-67551a16.vercel.app
```

## ملاحظات

- التطبيق مبني باستخدام Next.js 14
- جميع الصفحات static ويتم pre-rendering
- لا يتطلب متغيرات بيئة للتشغيل الأساسي
- لدمج OpenAI API في المستقبل، ستحتاج إلى إضافة OPENAI_API_KEY

## الدعم

للمساعدة، راجع [وثائق Vercel](https://vercel.com/docs)
