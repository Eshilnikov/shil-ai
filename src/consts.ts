import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Eugene Shilnikov",
  EMAIL: "hi@shilnikov.ai",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Главная",
  DESCRIPTION: "Group CPO в Дубае. Пишу о продукте, AI-агентах и личных системах.",
};

export const BLOG: Metadata = {
  TITLE: "Блог",
  DESCRIPTION: "Заметки о продукте, AI-агентах и личных системах.",
};

export const WORK: Metadata = {
  TITLE: "Опыт",
  DESCRIPTION: "Где работал и чем занимался.",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION: "Личные проекты со ссылками на репозитории и демо.",
};

export const SOCIALS: Socials = [
  {
    NAME: "telegram",
    HREF: "https://t.me/shil_ai",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/eugene-shilnikov/",
  },
];
