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
      "Привет, я Женя Шильников. Делаю продукты в платежах и финтехе — и пишу о том, как ИИ помогает успевать то, на что раньше не хватало сил.",
    "home.intro1.part1":
      "Пятнадцать лет в продукте, последние два — в Дубае. Свой первый стартап, сервис онлайн-записи для малого бизнеса, продал Яндексу вместе с командой. В ",
    "home.intro1.link1.label": "Яндекс Пэй",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " запустил платёжный кошелёк и банковское приложение, в ОАЭ поднял ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — карты и навигацию. Сейчас отвечаю за продукты ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " и ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ": платежи и касса для малого бизнеса.",
    "home.intro2.part1": "Этот сайт — рабочий дневник. ИИ наконец дал взяться за то, на что раньше не хватало ни времени, ни рук: разборы, которые тянулись неделями, рутину, съедавшую вечера, идеи, умиравшие в черновиках. Пробую на своей работе и жизни и записываю, что действительно сработало — с деталями, а не с восторгами. Ежедневные заметки — в ",
    "home.intro2.link.label": "Telegram-канале",
    "home.intro2.link.href": "https://t.me/shilnikov_ai",
    "home.intro2.part2":
      ", здесь — выводы и готовые решения.",
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
      "Hi, I'm Eugene Shilnikov. I build products in payments and fintech — and write about doing the things there was never enough time or energy for.",
    "home.intro1.part1":
      "Fifteen years in product, the last two in Dubai. I sold my first startup — an online booking service for small business — to Yandex together with the team. At ",
    "home.intro1.link1.label": "Yandex Pay",
    "home.intro1.link1.href": "https://pay.yandex.ru/",
    "home.intro1.part2": " I launched a payment wallet and a digital banking app; in the UAE I built ",
    "home.intro1.link2.label": "Yango Maps",
    "home.intro1.link2.href": "https://maps.yango.com/en-ae/",
    "home.intro1.part3":
      " — maps and navigation. Today I own the products of ",
    "home.intro1.link3.label": "Fortis",
    "home.intro1.link3.href": "https://www.wefortis.com/",
    "home.intro1.part4": " and ",
    "home.intro1.link4.label": "LifePay",
    "home.intro1.link4.href": "https://life-pay.ru/",
    "home.intro1.part5": ": payments and point of sale for small business.",
    "home.intro2.part1":
      "This site is a working journal. AI finally let me take on what I never had the time or hands for: research that used to drag on for weeks, routine that ate up evenings, ideas that died in drafts. I try things on my own work and life and write down what actually worked — with the details, not the hype. Daily notes go to my ",
    "home.intro2.link.label": "Telegram channel",
    "home.intro2.link.href": "https://t.me/shilnikov_ai",
    "home.intro2.part2": "; here — the conclusions and ready-made solutions.",
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
