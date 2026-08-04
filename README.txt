assets/fonts/
=============

ضع هنا الخطوط المحلية (Offline) إن أردت عدم الاعتماد على Google Fonts:

- Cairo (بولد / عادي) — للعربية
  https://fonts.google.com/specimen/Cairo
- Space Grotesk — للإنجليزية
  https://fonts.google.com/specimen/Space+Grotesk

بعد التحميل عدّل في style.css:

@font-face {
  font-family: 'Cairo';
  src: url('assets/fonts/Cairo-VariableFont_wght.ttf') format('truetype');
}

ثم أزل سطر استيراد Google Fonts من index.html.
