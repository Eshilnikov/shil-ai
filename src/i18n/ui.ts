// UI strings keyed by locale. Default locale is "ru". Add new keys here, not in components.
export const languages = {
  ru: "Русский",
  en: "English",
} as const;

export const defaultLang = "ru";

export const ui = {
  ru: {
    "nav.blog": "блог",
    "nav.work": "опыт",
    "nav.projects": "проекты",
    "footer.copyright": "© 2026",
    "back.top": "Наверх",
    "back.blog": "К блогу",
    "back.projects": "К проектам",
    "back.work": "К опыту",
    "blog.title": "Блог",
    "blog.empty": "Пока пусто. Скоро здесь появятся первые материалы.",
    "work.title": "Опыт",
    "projects.title": "Проекты",
    "home.greeting": "Привет, я Евгений",
    "home.intro1":
      "Group CPO в Дубае. Строю платежные продукты для МСБ в Fortis Group и Life Pay. Пишу о продукте, AI-агентах и личных системах.",
    "home.intro2":
      "Здесь — наблюдения из практики: что работает, что нет, и почему. Без хайпа.",
    "home.intro.cta": "Связаться можно через",
    "home.latest_posts": "Свежие материалы",
    "home.see_all_posts": "Все материалы",
    "home.projects": "Проекты",
    "home.see_all_projects": "Все проекты",
    "home.work": "Опыт",
    "home.see_all_work": "Весь опыт",
    "post.reading_time": "мин чтения",
    "lang.switcher.aria": "Переключить язык",
    "theme.light": "Светлая тема",
    "theme.dark": "Тёмная тема",
    "theme.system": "Системная тема",
  },
  en: {
    "nav.blog": "blog",
    "nav.work": "work",
    "nav.projects": "projects",
    "footer.copyright": "© 2026",
    "back.top": "Back to top",
    "back.blog": "Back to blog",
    "back.projects": "Back to projects",
    "back.work": "Back to work",
    "blog.title": "Blog",
    "blog.empty": "Nothing here yet. First posts coming soon.",
    "work.title": "Work",
    "projects.title": "Projects",
    "home.greeting": "Hi, I'm Eugene",
    "home.intro1":
      "Group CPO based in Dubai. Building payment products for SMB at Fortis Group and Life Pay. Writing about product, AI agents, and personal systems.",
    "home.intro2":
      "Notes from practice: what works, what doesn't, and why. No hype.",
    "home.intro.cta": "Best way to reach me —",
    "home.latest_posts": "Latest posts",
    "home.see_all_posts": "All posts",
    "home.projects": "Projects",
    "home.see_all_projects": "All projects",
    "home.work": "Work",
    "home.see_all_work": "All work",
    "post.reading_time": "min read",
    "lang.switcher.aria": "Switch language",
    "theme.light": "Light theme",
    "theme.dark": "Dark theme",
    "theme.system": "System theme",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
