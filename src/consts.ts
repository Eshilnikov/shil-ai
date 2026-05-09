import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Евгений Шильников",
  DESCRIPTION:
    "Финтех и AI-продукты для малого бизнеса в ОАЭ и России. Разбираю на своих кейсах, как AI меняет работу и повседневную жизнь.",
  EMAIL: "eshilnikov@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Финтех и AI на практике",
  DESCRIPTION:
    "Евгений Шильников — продакт-лидер. Строю финтех для малого бизнеса в ОАЭ и России. Разбираю на своих кейсах, как AI меняет работу — продуктовую, командную, повседневную.",
};

export const BLOG: Metadata = {
  TITLE: "Заметки",
  DESCRIPTION:
    "Полевые заметки о работе с продуктами и AI: что внедрил, что выбросил, что сработало, а что нет.",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION:
    "Открытый код, конфиги и кейсы из моей AI-native продуктовой практики.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Telegram",
    HREF: "https://t.me/shilnikov",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/eugene-shilnikov/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Eshilnikov",
  },
];
