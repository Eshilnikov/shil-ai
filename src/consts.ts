import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Eugene Shilnikov",
  DESCRIPTION:
    "Group CPO at Fortis Group & Life Pay. Building personal AI agents. Public notes, code, case studies.",
  EMAIL: "eshilnikov@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Eugene Shilnikov",
  DESCRIPTION:
    "Group CPO в Fortis Group и Life Pay. Каждый день строю команду AI-агентов на работе и дома. Здесь — заметки, код и кейсы из реальной практики.",
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
