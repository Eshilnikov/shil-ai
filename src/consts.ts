import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Евгений Шильников",
  DESCRIPTION:
    "Финтех и AI-продукты для малого бизнеса в ОАЭ и России. Разбираю на своих кейсах, как AI меняет разработку продуктов и работу команд.",
  EMAIL: "eshilnikov@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Финтех и AI на практике",
  DESCRIPTION:
    "Евгений Шильников — продакт-лидер. Строю финтех для малого бизнеса в ОАЭ и России. Разбираю на своих кейсах, как AI меняет разработку продуктов и работу команд.",
};

export const BLOG: Metadata = {
  TITLE: "Заметки",
  DESCRIPTION:
    "Кейсы и наблюдения о том, как работают (и где ломаются) персональные AI-агенты в реальной жизни и работе.",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION:
    "Открытый код, конфиги и патчи из моего личного AI-стека.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/Eshilnikov",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/eugene-shilnikov/",
  },
];
