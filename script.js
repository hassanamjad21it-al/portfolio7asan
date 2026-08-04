/* ============================================================
   script.js — البورتفوليو الشخصي (حسن أمجد حميد)
   JavaScript خالص — بدون أي مكتبات خارجية
   ============================================================ */

'use strict';

/* ============================================================
   1) قاموس الترجمة العربي / الإنجليزي
   ============================================================ */
const LANG_STORAGE_KEY = 'portfolio-lang';

const dict = {
  lang_switch: { ar: 'عربي', en: 'English' },
  loading: { ar: 'جارٍ التحميل...', en: 'Loading...' },
  title: { ar: 'حسن أمجد حميد — مطور برمجيات', en: 'Hassan Amjad Hamid — Software Developer' },

  /* شريط التنقل */
  logo_text: { ar: 'حسن أمجد', en: 'Hassan' },
  nav_home: { ar: 'الرئيسية', en: 'Home' },
  nav_about: { ar: 'من أنا', en: 'About' },
  nav_skills: { ar: 'المهارات', en: 'Skills' },
  nav_projects: { ar: 'المشاريع', en: 'Projects' },
  nav_journey: { ar: 'المسار', en: 'Journey' },
  nav_services: { ar: 'الخدمات', en: 'Services' },
  nav_contact: { ar: 'تواصل', en: 'Contact' },

  /* قسم البطل */
  hero_greeting: { ar: 'مرحباً 👋', en: 'Hello 👋' },
  hero_name_1: { ar: 'أنا', en: 'I\'m' },
  hero_name_2: { ar: 'حسن أمجد حميد', en: 'Hassan Amjad Hamid' },
  hero_roles: {
    ar: ['مطور برمجيات', 'مهندس ذكاء اصطناعي', 'مطور فلاتر', 'مطور ويب', 'شغوف بتعلم الآلة'],
    en: ['Software Developer', 'AI Engineer', 'Flutter Developer', 'Web Developer', 'Machine Learning Enthusiast']
  },
  hero_sub: {
    ar: 'طالب في قسم البرمجيات بجامعة بابل — شغوف بتحويل الأفكار إلى تطبيقات حقيقية.',
    en: 'A Software Engineering student at the University of Babylon — passionate about turning ideas into real apps.'
  },
  hero_cv: { ar: 'تحميل السيرة الذاتية', en: 'Download CV' },
  hero_contact: { ar: 'تواصل معي', en: 'Contact Me' },
  hero_chip1: { ar: '🎓 جامعة بابل', en: '🎓 University of Babylon' },
  hero_chip2: { ar: '💻 3+ سنوات', en: '💻 3+ Years' },
  hero_chip3: { ar: '🚀 شغوف بالتكنولوجيا', en: '🚀 Tech Enthusiast' },
  sticker_ai: { ar: 'ذكاء اصطناعي', en: 'AI' },
  sticker_code: { ar: 'برمجة', en: 'Coding' },
  sticker_design: { ar: 'تصميم UI', en: 'UI Design' },
  scroll_text: { ar: 'مرر للأسفل', en: 'Scroll down' },

  /* من أنا */
  about_badge: { ar: 'تعرف علي 👋', en: 'Get to know me 👋' },
  about_title: { ar: 'من أنا', en: 'About Me' },
  about_sub: {
    ar: 'قصة قصيرة عن رحلتي مع البرمجة والتكنولوجيا',
    en: 'A short story about my journey with coding and technology'
  },
  about_heading: { ar: 'مطور برمجيات وشغوف بالذكاء الاصطناعي 🤖', en: 'Software Developer & AI Enthusiast 🤖' },
  about_p1: {
    ar: 'أنا طالب في قسم البرمجيات بجامعة بابل، شغوف بتطوير البرمجيات والذكاء الاصطناعي وتعلم التقنيات الحديثة.',
    en: 'I am a Software Engineering student at the University of Babylon passionate about software development, artificial intelligence and modern technologies.'
  },
  about_p2: {
    ar: 'لدي خبرة في تطوير مواقع الويب، تطبيقات سطح المكتب، تطبيقات الهاتف، بالإضافة إلى مشاريع الذكاء الاصطناعي والتعلم الآلي والتعلم العميق. أحب بناء واجهات احترافية وتحويل الأفكار إلى تطبيقات حقيقية.',
    en: 'I have experience building web applications, desktop software, mobile apps, AI, Machine Learning and Deep Learning projects. I enjoy creating beautiful user interfaces and transforming ideas into real products.'
  },
  about_edu: { ar: 'التعليم:', en: 'Education:' },
  about_edu_v: { ar: 'جامعة بابل — تكنولوجيا المعلومات — البرمجيات', en: 'University of Babylon — IT College — Software Dept.' },
  about_loc: { ar: 'الموقع:', en: 'Location:' },
  about_loc_v: { ar: 'العراق — بابل', en: 'Iraq — Babylon' },
  about_age_lbl: { ar: 'العمر:', en: 'Age:' },
  about_age_v: { ar: '23 سنة', en: '23 years' },
  about_work: { ar: 'الحالة:', en: 'Status:' },
  about_work_v: { ar: 'مستقل (Freelancer)', en: 'Freelancer' },

  /* الإحصائيات */
  stat_age: { ar: 'العمر', en: 'Age' },
  stat_projects: { ar: 'المشاريع', en: 'Projects' },
  stat_skills: { ar: 'المهارات', en: 'Skills' },
  stat_passion: { ar: 'الشغف', en: 'Passion' },

  /* المهارات */
  skills_badge: { ar: 'ماذا أجيد؟ 💪', en: 'What I\'m good at 💪' },
  skills_title: { ar: 'مهاراتي', en: 'My Skills' },
  skills_sub: {
    ar: 'لغات برمجة وتقنيات أتعامل معها باحتراف',
    en: 'Programming languages & technologies I work with'
  },
  sk_cpp: { ar: 'سي بلس بلس', en: 'C++' },
  sk_java: { ar: 'جافا', en: 'Java' },
  sk_python: { ar: 'بايثون', en: 'Python' },
  sk_html: { ar: 'HTML5', en: 'HTML5' },
  sk_css: { ar: 'CSS3', en: 'CSS3' },
  sk_js: { ar: 'جافاسكريبت', en: 'JavaScript' },
  sk_flutter: { ar: 'فلتر', en: 'Flutter' },
  sk_dart: { ar: 'دارت', en: 'Dart' },
  sk_ai: { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' },
  sk_ml: { ar: 'التعلم الآلي', en: 'Machine Learning' },
  sk_dl: { ar: 'التعلم العميق', en: 'Deep Learning' },
  sk_desktop: { ar: 'تطبيقات سطح المكتب', en: 'Desktop Applications' },
  sk_web: { ar: 'تطوير الويب', en: 'Web Development' },
  sk_mobile: { ar: 'تطبيقات الهاتف', en: 'Mobile Applications' },
  sk_git: { ar: 'جيت', en: 'Git' },
  sk_github: { ar: 'جيت هاب', en: 'GitHub' },
  sk_solve: { ar: 'حل المشكلات', en: 'Problem Solving' },
  sk_ui: { ar: 'تصميم الواجهات', en: 'UI Design' },

  /* المشاريع */
  projects_badge: { ar: 'أعمالي المميزة 🏆', en: 'Featured Work 🏆' },
  projects_title: { ar: 'مشاريعي', en: 'My Projects' },
  projects_sub: { ar: 'أحدث المشاريع التي عملت عليها بكل شغف', en: 'Latest projects I built with passion' },
  p1_title: { ar: 'نظام إدارة سطح المكتب', en: 'Desktop Management System' },
  p1_desc: {
    ar: 'نظام احترافي لإدارة قاعات الرياضية والموظفين والعملاء.',
    en: 'A professional system for managing sports halls, employees and customers.'
  },
  p1_tech3: { ar: 'قواعد البيانات', en: 'Databases' },
  p2_title: { ar: 'تطبيق فلاتر للهاتف', en: 'Flutter Mobile App' },
  p2_desc: {
    ar: 'تطبيق هاتف حديث  لادارة المولدات الاهلية والمشتركين والادارة المالية يعمل على Android و iPhone.',
    en: 'A modern mobile app that runs on Android and iPhone.'
  },
  p3_title: { ar: 'مشروع ذكاء اصطناعي', en: 'AI Project' },
  p3_desc: {
    ar: 'مشروع ذكاء اصطناعي لتحليل اصوات الفراخ وتنبوء بالامراض واوقات تفقيس والتواريخ (مشروع علمي بحث رسالة ماجستير) يعتمد على Machine Learning و Deep Learning.',
    en: 'An AI project powered by Machine Learning and Deep Learning.'
  },
  p4_title: { ar: 'موقع ويب احترافي', en: 'Professional Website' },
  p4_desc: {
    ar: 'موقع ويب احترافي لمتجر الكتروني لبيع اكسسوارات الحاسوب  سريع ومتجاوب.',
    en: 'A fast, professional and responsive website.'
  },
  btn_github: { ar: 'جيت هاب', en: 'GitHub' },
  btn_demo: { ar: 'معاينة مباشرة', en: 'Live Demo' },

  /* المسار الزمني */
  journey_badge: { ar: 'رحلة التعلم 🗺️', en: 'Learning Journey 🗺️' },
  journey_title: { ar: 'مسار رحلتي', en: 'My Journey' },
  journey_sub: {
    ar: 'محطات مهمة في رحلة التعليم والتطوير',
    en: 'Key milestones in my learning and development journey'
  },
  tl1_title: { ar: 'جامعة بابل', en: 'University of Babylon' },
  tl1_desc: { ar: 'كلية تكنولوجيا المعلومات — قسم البرمجيات.', en: 'College of Information Technology — Software Department.' },
  tl2_title: { ar: 'مشاريع البرمجة', en: 'Programming Projects' },
  tl2_desc: { ar: 'تطوير مواقع وتطبيقات سطح المكتب وتطبيقات الهاتف.', en: 'Building websites, desktop and mobile applications.' },
  tl3_title: { ar: 'الذكاء الاصطناعي والتعلم الآلي', en: 'AI & Machine Learning' },
  tl3_desc: {
    ar: 'دراسة Machine Learning و Deep Learning وتطبيقها في مشاريع حقيقية.',
    en: 'Studying Machine Learning and Deep Learning and applying them to real projects.'
  },
  tl4_title: { ar: 'تطوير تطبيقات فلاتر', en: 'Flutter Development' },
  tl4_desc: { ar: 'بناء تطبيقات هاتف حديثة تعمل على Android و iPhone.', en: 'Building modern mobile apps for Android and iPhone.' },

  /* الخدمات */
  services_badge: { ar: 'ماذا أقدم؟ 🛠️', en: 'What I offer 🛠️' },
  services_title: { ar: 'خدماتي', en: 'My Services' },
  services_sub: { ar: 'حلول برمجية احترافية تناسب فكرتك', en: 'Professional software solutions for your idea' },
  svc_web: { ar: 'تطوير المواقع', en: 'Website Development' },
  svc_web_d: {
    ar: 'مواقع ويب سريعة، متجاوبة، ومصممة بعناية لجميع الأجهزة.',
    en: 'Fast, responsive and carefully designed websites for all devices.'
  },
  svc_desktop: { ar: 'تطبيقات سطح المكتب', en: 'Desktop Applications' },
  svc_desktop_d: {
    ar: 'أنظمة إدارة وتطبيقات سطح مكتب احترافية بواجهات سهلة.',
    en: 'Professional desktop management systems with easy interfaces.'
  },
  svc_flutter: { ar: 'تطبيقات فلاتر', en: 'Flutter Applications' },
  svc_flutter_d: {
    ar: 'تطبيقات هاتف جميلة تعمل على Android و iPhone من كود واحد.',
    en: 'Beautiful mobile apps for Android and iPhone from a single codebase.'
  },
  svc_ai: { ar: 'حلول الذكاء الاصطناعي', en: 'AI Solutions' },
  svc_ai_d: {
    ar: 'مشاريع ذكاء اصطناعي وتعلم آلي وتحليل بيانات ذكية.',
    en: 'AI, Machine Learning and smart data analysis projects.'
  },
  svc_ui: { ar: 'تصميم واجهات المستخدم', en: 'UI/UX Design' },
  svc_ui_d: {
    ar: 'تصميم واجهات حديثة وسهلة الاستخدام بأسلوب مميز.',
    en: 'Designing modern, user-friendly interfaces with a unique style.'
  },

  /* التواصل */
  contact_badge: { ar: 'لنتحدث! 💬', en: 'Let\'s talk! 💬' },
  contact_title: { ar: 'تواصل معي', en: 'Contact Me' },
  contact_sub: { ar: 'سأكون سعيداً بالرد عليك في أي وقت', en: 'I\'d be happy to reply to you anytime' },
  contact_heading: { ar: 'هيا نعمل معاً 🚀', en: 'Let\'s work together 🚀' },
  contact_text: {
    ar: 'عندك فكرة مشروع؟ حاب تتعاون معي؟ أرسل لي رسالة وسأعود إليك في أقرب وقت.',
    en: 'Got a project idea? Want to collaborate? Send me a message and I\'ll get back to you soon.'
  },
  contact_email_lbl: { ar: 'البريد الإلكتروني', en: 'Email' },
  contact_email_v: { ar: 'hassan2004it@gmail.com', en: 'hassan2004it@gmail.com' },
  contact_phone_lbl: { ar: 'الهاتف', en: 'Phone' },
  contact_phone_v: { ar: '07702281209', en: '07702281209' },
  contact_loc_lbl: { ar: 'الموقع', en: 'Location' },
  contact_loc_v: { ar: 'العراق — بابل', en: 'Iraq — Babylon' },
  contact_social_title: { ar: 'تابعني على', en: 'Follow me on' },
  soc_github: { ar: 'جيت هاب', en: 'GitHub' },
  soc_linkedin: { ar: 'لينكد إن', en: 'LinkedIn' },
  soc_telegram: { ar: 'تيليغرام', en: 'Telegram' },
  soc_instagram: { ar: 'إنستغرام', en: 'Instagram' },
  contact_cta: { ar: 'جاهز للبدء؟ أرسل لي رسالة الآن', en: 'Ready to start? Send me a message now' },
  contact_btn: { ar: 'أرسل رسالة', en: 'Send Message' },

  /* الفوتر */
  footer_text: { ar: 'صنع بواسطة حسن أمجد حميد', en: 'Made with ❤️ by Hassan Amjad Hamid' },
  footer_rights: { ar: '© 2026 — جميع الحقوق محفوظة', en: '© 2026 — All rights reserved' },
  top_aria: { ar: 'العودة إلى الأعلى', en: 'Back to top' }
};

/* ============================================================
   2) إدارة اللغة (RTL العربية افتراضياً / LTR الإنجليزية)
   ============================================================ */
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'ar';

function applyTranslations(lang) {
  const t = (key) => (dict[key] && dict[key][lang]) || '';

  // تحديث كل النصوص
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });

  // تحديث النصوص الثانوية (مثل تفاصيل التواصل)
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value) el.textContent = value;
  });

  // عنوان الصفحة + اتجاه المستند
  document.title = t('title');
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // نص زر التبديل: يعرض اللغة المقابلة
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = dict.lang_switch[lang === 'ar' ? 'en' : 'ar'];
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // انتقال سلس بين اللغتين: تلاشٍ ثم تبديل ثم عودة
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    applyTranslations(lang);
    startTyping(lang);
    document.body.classList.remove('lang-switching');
  }, 280);
}

/* ============================================================
   3) تأثير الكتابة المتحركة (Typing Effect)
   ============================================================ */
let typingTimeout = null;

function typeWord(el, roles, wordIdx, charIdx, deleting) {
  const word = roles[wordIdx];
  if (!word) return;

  if (!deleting) {
    el.textContent = word.slice(0, charIdx + 1);
    if (charIdx + 1 === word.length) {
      // توقف قصير قبل الحذف
      typingTimeout = setTimeout(() => typeWord(el, roles, wordIdx, word.length, true), 1700);
    } else {
      typingTimeout = setTimeout(() => typeWord(el, roles, wordIdx, charIdx + 1, false), 95);
    }
  } else {
    el.textContent = word.slice(0, charIdx - 1);
    if (charIdx - 1 === 0) {
      const next = (wordIdx + 1) % roles.length;
      typingTimeout = setTimeout(() => typeWord(el, roles, next, 0, false), 450);
    } else {
      typingTimeout = setTimeout(() => typeWord(el, roles, wordIdx, charIdx - 1, true), 55);
    }
  }
}

function startTyping(lang) {
  const el = document.getElementById('typing');
  if (!el) return;
  clearTimeout(typingTimeout);
  typeWord(el, dict.hero_roles[lang], 0, 0, false);
}

/* ============================================================
   4) شاشة التحميل (Loader)
   ============================================================ */
const loader = document.getElementById('loader');

function hideLoader() {
  if (!loader || loader.classList.contains('hidden')) return;
  loader.classList.add('hidden');
  document.body.classList.add('custom-cursor');
  initHeroAnim();
  startTyping(currentLang);
}

window.addEventListener('load', hideLoader);
setTimeout(hideLoader, 3000); // احتياطي إن تعطل حدث load

/* ظهور عناصر البطل بعد التحميل */
function initHeroAnim() {
  const targets = document.querySelectorAll('.hero-greeting, .hero-name, .hero-role, .hero-sub, .hero-buttons, .hero-chips, .hero-image');
  targets.forEach((el, i) => {
    el.classList.add('anim-in', 'anim-in-' + Math.min(i + 1, 5));
  });
}

/* ============================================================
   5) الكشف عن التمرير (Scroll Reveal + أشرطة المهارات + العدادات)
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (isNaN(target)) return;
  const duration = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function animatePercentLabel(el) {
  const target = parseInt(el.dataset.percentLabel, 10);
  if (isNaN(target)) return;
  const duration = 1200;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + '%';
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('reveal-visible');

    // عند ظهور بطاقة مهارة: حرّك شريط التقدم والنسبة
    if (entry.target.classList.contains('skill-card')) {
      const bar = entry.target.querySelector('.skill-bar span');
      const percent = entry.target.querySelector('.skill-percent');
      if (bar) bar.style.width = (bar.dataset.percent || 0) + '%';
      if (percent) animatePercentLabel(percent);
    }

    // عند ظهور أي عداد رقمي: حرّكه
    entry.target.querySelectorAll('[data-count]').forEach(animateCounter);

    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ============================================================
   6) تظليل رابط القسم النشط في شريط التنقل
   ============================================================ */
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

/* ============================================================
   7) شريط التنقل: التصغير عند التمرير + قائمة الهاتف
   ============================================================ */
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');

function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  backToTop.classList.toggle('show', y > 420);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// فتح/إغلاق قائمة الهاتف
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// إغلاق القائمة عند الضغط على أي رابط
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// العودة إلى الأعلى
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   8) المؤشر المخصص (Custom Cursor) + توهج الماوس
   ============================================================ */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const mouseGlow = document.getElementById('mouseGlow');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

const INTERACTIVE_SELECTOR = 'a, button, .skill-card, .project-card, .service-card, .stat-card, .timeline-card, .contact-row, .social-btn, .chip';

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // نقطة صغيرة تتبع الماوس مباشرة
  if (cursorDot) {
    cursorDot.style.transform = 'translate(' + (mouseX - cursorDot.offsetWidth / 2) + 'px, ' + (mouseY - cursorDot.offsetHeight / 2) + 'px)';
  }

  // توهج الخلفية يتبع الماوس
  if (mouseGlow) {
    mouseGlow.style.opacity = '1';
    mouseGlow.style.left = mouseX + 'px';
    mouseGlow.style.top = mouseY + 'px';
  }
});

// حلقة المؤشر تتبع بتأخير ناعم
function cursorLoop() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;
  if (cursorRing) {
    cursorRing.style.transform = 'translate(' + (ringX - cursorRing.offsetWidth / 2) + 'px, ' + (ringY - cursorRing.offsetHeight / 2) + 'px)';
  }
  requestAnimationFrame(cursorLoop);
}
requestAnimationFrame(cursorLoop);

// تكبير المؤشر عند المرور فوق العناصر التفاعلية
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(INTERACTIVE_SELECTOR)) cursorRing.classList.add('cursor-hover');
});
document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(INTERACTIVE_SELECTOR)) {
    cursorRing.classList.remove('cursor-hover');
  }
});

// تصغير المؤشر عند النقر
document.addEventListener('mousedown', () => cursorRing.classList.add('cursor-down'));
document.addEventListener('mouseup', () => cursorRing.classList.remove('cursor-down'));

// إخفاء توهج الماوس على شاشات اللمس
if (window.matchMedia('(pointer: coarse)').matches) {
  if (mouseGlow) mouseGlow.style.display = 'none';
}

/* ============================================================
   9) الأشكال العائمة (Floating Shapes)
   ============================================================ */
(function createFloatingShapes() {
  const container = document.getElementById('floatingShapes');
  if (!container) return;

  const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--green)', 'var(--yellow)'];
  const shapes = 16;

  for (let i = 0; i < shapes; i++) {
    const shape = document.createElement('span');
    shape.className = 'float-shape';

    const size = 16 + Math.random() * 46;
    const radius = ['8px', '50%', '14px', '6px'][i % 4];

    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    shape.style.background = colors[i % colors.length];
    shape.style.borderRadius = radius;
    shape.style.animationDuration = (7 + Math.random() * 9) + 's';
    shape.style.animationDelay = (-Math.random() * 9) + 's';

    container.appendChild(shape);
  }
})();

/* ============================================================
   10) تأثير التموج عند النقر (Ripple Effect)
   ============================================================ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-ripple');
  if (!btn) return;

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});

/* ============================================================
   11) تأثير بارالاكس (Mouse Parallax) على صورة البطل
   ============================================================ */
(function initParallax() {
  const container = document.querySelector('[data-parallax-container]');
  if (!container || !window.matchMedia('(pointer: fine)').matches) return;

  const items = container.querySelectorAll('[data-parallax-speed]');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    items.forEach((item) => {
      const speed = parseFloat(item.dataset.parallaxSpeed) || 0;
      item.style.transform = 'translate(' + x * speed * 60 + 'px, ' + y * speed * 60 + 'px)';
    });
  });

  container.addEventListener('mouseleave', () => {
    items.forEach((item) => (item.style.transform = ''));
  });
})();

/* ============================================================
   12) زر تبديل اللغة + التشغيل الأولي
   ============================================================ */
document.getElementById('langToggle').addEventListener('click', () => {
  setLang(currentLang === 'ar' ? 'en' : 'ar');
});

// التشغيل الأولي باللغة العربية (أو المحفوظة)
applyTranslations(currentLang);
