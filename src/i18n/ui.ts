// UI strings keyed by locale. Default locale is "en" (22.08.2026: сайт читает международная аудитория). Add new keys here, not in components.
export const languages = {
  ru: "Русский",
  en: "English",
} as const;

export const defaultLang = "en";

export const ui = {
  ru: {
    "meta.home.title": "Главная",
    "meta.home.description":
      "Евгений Шильников — продуктовый лидер в платежах и финтехе, Дубай. Пишу о продукте, AI-агентах и личных системах.",
    "meta.blog.title": "Блог",
    "meta.blog.description": "Заметки о продукте, AI-агентах и личных системах",
    "meta.projects.title": "Проекты",
    "meta.projects.description": "Личные проекты со ссылками на репозитории и демо",
    "nav.blog": "блог",
    "nav.projects": "проекты",
    "footer.copyright": "© 2026",
    "back.top": "Наверх",
    "back.blog": "К блогу",
    "back.projects": "К проектам",
    "blog.title": "Блог",
    "blog.empty.part1":
      "Пока ничего не опубликовано — заметки в работе. Первые материалы появятся здесь скоро. А ежедневные мысли публикую в ",
    "blog.empty.link.label": "Telegram-канале",
    "blog.empty.link.href": "https://t.me/shilnikov_ai",
    "blog.empty.part2": ".",
    "projects.title": "Проекты",
    "projects.empty":
      "Пока ничего не опубликовано — открытый код и кейсы появятся здесь.",
    "home.h1":
      "Привет, меня зовут Женя Шильников. Я строю продукты в платежах и финтехе — и разбираю на своих кейсах, как AI меняет работу.",
    "home.intro1.part1":
      "Пятнадцать лет в продукте: от идеи до первой устойчивой выручки. Начинал со своего стартапа — сделал сервис онлайн-записи для малого бизнеса и продал его Яндексу вместе с командой. Внутри Яндекса развивал сервисы для бизнеса в Картах, затем отвечал за продукт в ",
    "home.intro1.link1.label": "Яндекс Пэй",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " — запустил платёжный кошелёк и полноценное банковское приложение. Дальше в ОАЭ поднял ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — международные карты и навигацию. Сейчас руковожу продуктами группы ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " и ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ": платежи и POS-платформа для малого бизнеса в ОАЭ и России.",
    "home.intro2.part1": "Что внедряю в работе и в жизни — описываю в ",
    "home.intro2.link.label": "Telegram-канале",
    "home.intro2.link.href": "https://t.me/shilnikov_ai",
    "home.intro2.part2":
      ". Здесь, на сайте, — выводы и готовые решения.",
    "home.latest_posts": "Последние записи",
    "home.see_all_posts": "Весь блог",
    "home.projects": "Проекты",
    "home.see_all_projects": "Все проекты",
    "post.reading_time": "мин чтения",
    "lang.switcher.aria": "Переключить язык",
    "theme.light": "Светлая тема",
    "theme.dark": "Тёмная тема",
    "theme.system": "Системная тема",
  },
  en: {
    "meta.home.title": "Home",
    "meta.home.description":
      "Eugene Shilnikov — product leader in payments and fintech, Dubai. Writing about product, AI agents and personal systems.",
    "meta.blog.title": "Blog",
    "meta.blog.description": "Notes on product, AI agents and personal systems",
    "meta.projects.title": "Projects",
    "meta.projects.description": "Personal projects with links to repositories and demos",
    "nav.blog": "blog",
    "nav.projects": "projects",
    "footer.copyright": "© 2026",
    "back.top": "Back to top",
    "back.blog": "Back to blog",
    "back.projects": "Back to projects",
    "blog.title": "Blog",
    "blog.empty.part1":
      "Nothing published yet — notes are in the works. First posts coming soon. I share daily thoughts on the ",
    "blog.empty.link.label": "Telegram channel",
    "blog.empty.link.href": "https://t.me/shilnikov_ai",
    "blog.empty.part2": ".",
    "projects.title": "Projects",
    "projects.empty":
      "Nothing published yet — open-source code and case studies coming here.",
    "home.h1":
      "Hi, I'm Eugene Shilnikov. I build products in payments and fintech — and unpack, on my own cases, how AI is changing the way we work.",
    "home.intro1.part1":
      "Fifteen years in product: from an idea to the first sustainable revenue. I started with my own startup — an online booking service for small business, sold to Yandex together with the team. Inside Yandex I grew business services in Maps, then owned the product at ",
    "home.intro1.link1.label": "Yandex Pay",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " — launched a payment wallet and a full digital bank. After that, in the UAE, I built ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — international maps and navigation. Today I lead group products at ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " and ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ": payments and a POS platform for small business in the UAE and Russia.",
    "home.intro2.part1":
      "What I put into practice at work and in life — I write about on my ",
    "home.intro2.link.label": "Telegram channel",
    "home.intro2.link.href": "https://t.me/shilnikov_ai",
    "home.intro2.part2": ". Here on the site — conclusions and ready-made solutions.",
    "home.latest_posts": "Latest posts",
    "home.see_all_posts": "All posts",
    "home.projects": "Projects",
    "home.see_all_projects": "All projects",
    "post.reading_time": "min read",
    "lang.switcher.aria": "Switch language",
    "theme.light": "Light theme",
    "theme.dark": "Dark theme",
    "theme.system": "System theme",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
