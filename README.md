# Portfolio - موقع شخصي عصري ومتكامل

موقع شخصي احترافي مبني باستخدام Next.js مع تصميم عصري وتفاعلي، يعرض الأعمال والمشاريع والخدمات بشكل جذاب ومتجاوب.

## ✨ المميزات

- 🎨 **تصميم عصري**: واجهة مستخدم حديثة مع أنيميشن جذاب باستخدام Framer Motion
- 🌙 **الوضع الليلي**: تبديل تلقائي أو يدوي بين الوضع الليلي والنهاري
- 📱 **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة والشاشات
- ⚡ **أداء عالي**: محسن للسرعة مع تقنيات Next.js المتقدمة
- 🔍 **محسن لمحركات البحث**: SEO متقدم مع metadata وstructured data
- 📝 **مدونة متكاملة**: نظام مدونة مع إدارة المحتوى
- 💼 **معرض أعمال ديناميكي**: عرض المشاريع مع فلترة وتصنيف
- 📧 **نموذج تواصل تفاعلي**: إرسال الرسائل مع إشعارات البريد الإلكتروني
- 🛠️ **لوحة تحكم**: إدارة المحتوى والمشاريع والرسائل
- 🗄️ **قاعدة بيانات**: MongoDB لتخزين البيانات

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4
- **Animation**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **Email**: Nodemailer
- **Deployment**: Vercel Ready

## 📁 هيكل المشروع

```
my-portfolio/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── api/               # API routes
│   │   ├── blog/              # صفحة المدونة
│   │   ├── admin/             # لوحة التحكم
│   │   ├── globals.css        # الأنماط العامة
│   │   ├── layout.tsx         # التخطيط الرئيسي
│   │   ├── page.tsx           # الصفحة الرئيسية
│   │   ├── loading.tsx        # صفحة التحميل
│   │   ├── not-found.tsx      # صفحة 404
│   │   ├── sitemap.ts         # خريطة الموقع
│   │   └── robots.ts          # ملف robots.txt
│   ├── components/            # المكونات القابلة لإعادة الاستخدام
│   │   ├── Header.tsx         # رأس الصفحة والتنقل
│   │   ├── Footer.tsx         # تذييل الصفحة
│   │   ├── HeroSection.tsx    # قسم البداية
│   │   ├── AboutSection.tsx   # قسم نبذة عني
│   │   ├── SkillsSection.tsx  # قسم المهارات
│   │   ├── ProjectsSection.tsx # قسم المشاريع
│   │   ├── ServicesSection.tsx # قسم الخدمات
│   │   ├── ContactSection.tsx  # قسم التواصل
│   │   ├── OptimizedImage.tsx  # مكون الصور المحسن
│   │   └── SEOHead.tsx        # مكون SEO
│   ├── contexts/              # React Contexts
│   │   └── ThemeContext.tsx   # سياق الثيم
│   ├── lib/                   # المكتبات والأدوات
│   │   └── mongodb.ts         # اتصال قاعدة البيانات
│   └── models/                # نماذج قاعدة البيانات
│       ├── Project.ts         # نموذج المشاريع
│       ├── BlogPost.ts        # نموذج المقالات
│       └── Contact.ts         # نموذج الرسائل
├── public/                    # الملفات العامة
├── .env.local                 # متغيرات البيئة
├── next.config.ts             # إعدادات Next.js
├── tailwind.config.ts         # إعدادات TailwindCSS
└── package.json               # التبعيات والسكريبتات
```

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js 18+
- npm أو yarn أو pnpm
- MongoDB (محلي أو سحابي)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd my-portfolio
```

2. **تثبيت التبعيات**
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.local.example .env.local
```

قم بتحديث الملف `.env.local` بالقيم الصحيحة:
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com

# Next.js Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. **تشغيل MongoDB**
```bash
# إذا كان MongoDB مثبت محلياً
mongod

# أو استخدم MongoDB Atlas (سحابي)
# وقم بتحديث MONGODB_URI في .env.local
```

5. **تشغيل الخادم التطويري**
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

6. **فتح المتصفح**
افتح [http://localhost:3000](http://localhost:3000) لرؤية الموقع.

## 📧 إعداد البريد الإلكتروني

لتفعيل نموذج التواصل:

1. **Gmail**:
   - فعل المصادقة الثنائية
   - أنشئ App Password
   - استخدم App Password في `EMAIL_PASS`

2. **خدمات أخرى**:
   - قم بتحديث إعدادات `nodemailer` في `/api/contact/route.ts`

## 🗄️ قاعدة البيانات

المشروع يستخدم MongoDB مع Mongoose. النماذج المتاحة:

- **Project**: المشاريع والأعمال
- **BlogPost**: مقالات المدونة
- **Contact**: رسائل التواصل

### إضافة بيانات تجريبية

يمكنك إضافة بيانات تجريبية من خلال:
1. لوحة التحكم `/admin`
2. MongoDB Compass
3. API endpoints مباشرة

## 🎨 التخصيص

### الألوان والثيم
- عدل الألوان في `tailwind.config.ts`
- الثيم الافتراضي: أزرق وأخضر نيون
- يدعم الوضع الليلي تلقائياً

### المحتوى
- عدل النصوص في ملفات المكونات
- أضف صورك في مجلد `public/`
- حدث معلومات التواصل في `ContactSection.tsx`

### الأنيميشن
- جميع الأنيميشن باستخدام Framer Motion
- يمكن تخصيص التأثيرات في كل مكون

## 📱 الصفحات المتاحة

- `/` - الصفحة الرئيسية
- `/blog` - المدونة
- `/admin` - لوحة التحكم
- `/api/*` - API endpoints

## 🔧 API Endpoints

- `GET /api/projects` - جلب المشاريع
- `POST /api/projects` - إضافة مشروع جديد
- `GET /api/blog` - جلب مقالات المدونة
- `POST /api/blog` - إضافة مقال جديد
- `POST /api/contact` - إرسال رسالة تواصل
- `GET /api/contact` - جلب الرسائل

## 🚀 النشر

### Vercel (موصى به)
```bash
npm run build
vercel --prod
```

### خدمات أخرى
```bash
npm run build
npm start
```

تأكد من:
- إعداد متغيرات البيئة في منصة النشر
- اتصال قاعدة البيانات (MongoDB Atlas للإنتاج)
- إعداد النطاق في `next.config.ts`

## 🔍 SEO والأداء

- ✅ Sitemap تلقائي
- ✅ Robots.txt
- ✅ Meta tags محسنة
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ JSON-LD Structured Data
- ✅ تحسين الصور
- ✅ تحسين الخطوط
- ✅ Code splitting
- ✅ Lazy loading

## 🛡️ الأمان

- Headers أمنية في `next.config.ts`
- تنظيف البيانات في API routes
- حماية من XSS و CSRF
- تشفير كلمات المرور (إذا أضيفت مصادقة)

## 🤝 المساهمة

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للـ branch (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع**: [your-website.com](https://your-website.com)
- **البريد الإلكتروني**: your-email@example.com
- **LinkedIn**: [your-linkedin](https://linkedin.com/in/your-profile)
- **GitHub**: [your-github](https://github.com/your-username)

## 🙏 شكر وتقدير

- [Next.js](https://nextjs.org/) - React Framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Heroicons](https://heroicons.com/) - Icon Library
- [MongoDB](https://www.mongodb.com/) - Database

---

**صُنع بـ ❤️ في السعودية**
