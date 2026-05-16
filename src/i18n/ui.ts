// UI strings keyed by locale. Default locale is "ru". Add new keys here, not in components.
export const languages = {
  ru: "Русский",
  en: "English",
} as const;

export const defaultLang = "ru";

export const ui = {
  ru: {
    "nav.blog": "блог",
    "nav.projects": "проекты",
    "footer.copyright": "© 2026",
    "back.top": "Наверх",
    "back.blog": "К блогу",
    "back.projects": "К проектам",
    "blog.title": "Блог",
    "blog.empty": "Пока пусто. Скоро здесь появятся первые материалы.",
    "projects.title": "Проекты",
    "home.h1":
      "Привет, меня зовут Женя Шильников. Я разбираю на своих кейсах, как AI меняет работу и жизнь.",
    "home.intro1.part1":
      "Строю финтех для малого бизнеса в ОАЭ и России. Начинал со своего стартапа — запустил сервис онлайн-записи для предпринимателей и продал его Яндексу. Внутри Яндекса развивал сервисы для бизнеса в Картах, дальше возглавлял продукт ",
    "home.intro1.link1.label": "Яндекс Пэй",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " и запускал в ОАЭ ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — международную версию Яндекс Карт. Сейчас руковожу продуктами в ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " и ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ".",
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
    "nav.blog": "blog",
    "nav.projects": "projects",
    "footer.copyright": "© 2026",
    "back.top": "Back to top",
    "back.blog": "Back to blog",
    "back.projects": "Back to projects",
    "blog.title": "Blog",
    "blog.empty": "Nothing here yet. First posts coming soon.",
    "projects.title": "Projects",
    "home.h1":
      "Hi, I'm Eugene Shilnikov. I unpack — on my own cases — how AI is changing work and life.",
    "home.intro1.part1":
      "I build fintech for small business in the UAE and Russia. Started with my own startup — launched an online booking service for entrepreneurs and sold it to Yandex. Inside Yandex I grew business services in Maps, then led the product at ",
    "home.intro1.link1.label": "Yandex Pay",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " and launched in the UAE ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — the international version of Yandex Maps. Now I lead products at ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " and ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ".",
    "home.intro2.part1":
      "What I put into practice at work and in life — I describe on my ",
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
