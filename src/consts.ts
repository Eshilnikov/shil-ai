import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Eugene Shilnikov",
  EMAIL: "hi@shilnikov.ai",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Главная",
  DESCRIPTION: "Group CPO в Дубае пишет о продукте, AI-агентах и личных системах",
};

export const BLOG: Metadata = {
  TITLE: "Блог",
  DESCRIPTION: "Заметки о продукте, AI-агентах и личных системах",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION: "Личные проекты со ссылками на репозитории и демо",
};

export const SOCIALS: Socials = [
  {
    NAME: "telegram",
    HREF: "https://t.me/shilnikov_ai",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/eugene-shilnikov/",
  },
];
